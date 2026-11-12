
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[character];
  });
}

function cleanValue(value: unknown): string {
  return String(value ?? "").trim();
}

function formatValue(value: string, fallback = "Not provided") {
  return value || fallback;
}

function getBookingDetails(message: string) {
  const marker = "ADDITIONAL BOOKING DETAILS";
  const markerIndex = message.indexOf(marker);

  if (markerIndex === -1) {
    return {
      customerMessage: message,
      details: {} as Record<string, string>,
    };
  }

  const customerMessage = message.slice(0, markerIndex).trim();
  const additionalText = message.slice(markerIndex + marker.length).trim();

  const details: Record<string, string> = {};

  additionalText.split(/\r?\n/).forEach((line) => {
    const separatorIndex = line.indexOf(":");

    if (separatorIndex === -1) return;

    const label = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim();

    if (label) {
      details[label] = value;
    }
  });

  return { customerMessage, details };
}

function emailRow(label: string, value: string) {
  return `
    <tr>
      <td width="38%" style="
        padding: 13px 16px;
        border-bottom: 1px solid #e9e6de;
        color: #77776e;
        font-size: 12px;
        line-height: 1.6;
        vertical-align: top;
      ">
        ${escapeHtml(label)}
      </td>
      <td style="
        padding: 13px 16px;
        border-bottom: 1px solid #e9e6de;
        color: #282a24;
        font-size: 13px;
        line-height: 1.6;
        font-weight: 600;
        vertical-align: top;
        word-break: break-word;
      ">
        ${escapeHtml(formatValue(value))}
      </td>
    </tr>
  `;
}

function emailSection(title: string, rows: string) {
  return `
    <div style="margin-top: 30px;">
      <h3 style="
        margin: 0 0 12px;
        color: #927448;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 1.5px;
        text-transform: uppercase;
      ">
        ${escapeHtml(title)}
      </h3>

      <table
        role="presentation"
        width="100%"
        cellspacing="0"
        cellpadding="0"
        border="0"
        style="
          width: 100%;
          border-collapse: collapse;
          background: #ffffff;
          border: 1px solid #e9e6de;
        "
      >
        ${rows}
      </table>
    </div>
  `;
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.BOOKING_EMAIL_TO;
    const sender = process.env.BOOKING_EMAIL_FROM;

    if (!apiKey || !recipient || !sender) {
      return Response.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const data = await request.json();

    const name = cleanValue(data.name);
    const email = cleanValue(data.email);
    const departureDate = cleanValue(data.departureDate);
    const cyclingType = cleanValue(data.cyclingType);
    const groupSize = cleanValue(data.groupSize);
    const destination = cleanValue(data.destination);
    const tour = cleanValue(data.tour);
    const rawMessage = cleanValue(data.message);

    if (
      !name ||
      !email ||
      !cyclingType ||
      !rawMessage ||
      name.length > 120 ||
      email.length > 254 ||
      departureDate.length > 30 ||
      cyclingType.length > 80 ||
      groupSize.length > 50 ||
      destination.length > 150 ||
      tour.length > 200 ||
      rawMessage.length > 7000
    ) {
      return Response.json(
        { error: "Please check your details and try again." },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return Response.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const { customerMessage, details } = getBookingDetails(rawMessage);

    if (!customerMessage || customerMessage.length > 5000) {
      return Response.json(
        { error: "Please enter a message of up to 5,000 characters." },
        { status: 400 }
      );
    }

    const phone = cleanValue(details["Phone / WhatsApp"]);
    const experience = cleanValue(details["Riding experience"]);
    const tripDuration = cleanValue(details["Preferred trip duration"]);
    const budget = cleanValue(details["Budget per person"]);
    const dateFlexibility = cleanValue(details["Date flexibility"]);
    const contactMethod = cleanValue(details["Preferred contact method"]);

    const contactRows = [
      emailRow("Full name", name),
      emailRow("Email address", email),
      emailRow("Phone / WhatsApp", phone),
      emailRow("Preferred contact method", contactMethod),
    ].join("");

    const cyclingRows = [
      emailRow("Cycling style", cyclingType),
      emailRow("Riding experience", experience),
      emailRow("Number of riders", groupSize),
      emailRow("Trip duration", tripDuration),
    ].join("");

    const journeyRows = [
      emailRow("Tour of interest", tour || "Not decided yet"),
      emailRow(
        "Preferred destination",
        destination || "Open to suggestions"
      ),
      emailRow("Departure date", departureDate || "Flexible"),
      emailRow("Date flexibility", dateFlexibility),
      emailRow("Budget per person", budget),
    ].join("");

    const plainText = `
NEW MOUNTAIN BIKE MOROCCO ENQUIRY

CUSTOMER DETAILS
----------------
Full name: ${name}
Email address: ${email}
Phone / WhatsApp: ${formatValue(phone)}
Preferred contact method: ${formatValue(contactMethod)}

CYCLING EXPERIENCE
------------------
Cycling style: ${cyclingType}
Riding experience: ${formatValue(experience)}
Number of riders: ${formatValue(groupSize)}
Trip duration: ${formatValue(tripDuration)}

JOURNEY PREFERENCES
-------------------
Tour of interest: ${formatValue(tour, "Not decided yet")}
Preferred destination: ${formatValue(destination, "Open to suggestions")}
Departure date: ${formatValue(departureDate, "Flexible")}
Date flexibility: ${formatValue(dateFlexibility)}
Budget per person: ${formatValue(budget)}

CUSTOMER MESSAGE
----------------
${customerMessage}

--------------------------------
Mountain Bike Morocco
New website booking enquiry
    `.trim();

    const html = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>New Cycling Trip Enquiry</title>
        </head>

        <body style="
          margin: 0;
          padding: 30px 12px;
          background: #f0eee8;
          font-family: Arial, Helvetica, sans-serif;
          color: #282a24;
        ">
          <div style="
            width: 100%;
            max-width: 680px;
            margin: 0 auto;
            background: #faf9f5;
            border: 1px solid #e7e4dc;
          ">

            <div style="
              padding: 30px 32px;
              background: #252720;
              color: #ffffff;
            ">
              <p style="
                margin: 0 0 15px;
                color: #c6a66f;
                font-size: 10px;
                font-weight: 700;
                letter-spacing: 2px;
                text-transform: uppercase;
              ">
                Mountain Bike Morocco
              </p>

              <h1 style="
                margin: 0;
                color: #ffffff;
                font-size: 25px;
                font-weight: 600;
                letter-spacing: -0.7px;
                line-height: 1.3;
              ">
                New cycling trip enquiry
              </h1>

              <p style="
                margin: 10px 0 0;
                color: #c9c9bf;
                font-size: 13px;
                line-height: 1.7;
              ">
                A new customer has submitted a trip enquiry through your website.
              </p>
            </div>

            <div style="padding: 30px 32px;">

              <div style="
                padding: 17px 19px;
                border-left: 3px solid #b59460;
                background: #f0eee7;
              ">
                <p style="
                  margin: 0 0 5px;
                  color: #858176;
                  font-size: 10px;
                  font-weight: 700;
                  letter-spacing: 1px;
                  text-transform: uppercase;
                ">
                  New enquiry from
                </p>

                <p style="
                  margin: 0;
                  color: #292b24;
                  font-size: 18px;
                  font-weight: 700;
                ">
                  ${escapeHtml(name)}
                </p>
              </div>

              ${emailSection("Customer details", contactRows)}

              ${emailSection("Cycling experience", cyclingRows)}

              ${emailSection("Journey preferences", journeyRows)}

              <div style="margin-top: 30px;">
                <h3 style="
                  margin: 0 0 12px;
                  color: #927448;
                  font-size: 11px;
                  font-weight: 700;
                  letter-spacing: 1.5px;
                  text-transform: uppercase;
                ">
                  Customer message
                </h3>

                <div style="
                  padding: 16px;
                  border: 1px solid #e9e6de;
                  background: #ffffff;
                  color: #45463f;
                  font-size: 13px;
                  line-height: 1.8;
                  white-space: pre-wrap;
                  overflow-wrap: anywhere;
                ">${escapeHtml(customerMessage)}</div>
              </div>

              <div style="
                margin-top: 30px;
                padding-top: 18px;
                border-top: 1px solid #e5e2d9;
              ">
                <p style="
                  margin: 0;
                  color: #89877e;
                  font-size: 11px;
                  line-height: 1.8;
                ">
                  Mountain Bike Morocco<br />
                  Website booking enquiry
                </p>
              </div>

            </div>
          </div>
        </body>
      </html>
    `;

    const subject = tour
      ? `New trip enquiry – ${tour}`
      : `New ${cyclingType} enquiry – Mountain Bike Morocco`;

    const { error } = await resend.emails.send({
      from: sender,
      to: [recipient],
      replyTo: email,
      subject,
      text: plainText,
      html,
    });

    if (error) {
      console.error("Resend email error:", error);

      return Response.json(
        { error: "Your enquiry could not be sent. Please try again." },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      message: "Your enquiry has been sent successfully.",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}