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

    const name = String(data.name || "").trim();
    const email = String(data.email || "").trim();
    const departureDate = String(data.departureDate || "").trim();
    const cyclingType = String(data.cyclingType || "").trim();
    const groupSize = String(data.groupSize || "").trim();
    const destination = String(data.destination || "").trim();
    const tour = String(data.tour || "").trim();
    const message = String(data.message || "").trim();

    if (
      !name ||
      !email ||
      !cyclingType ||
      !message ||
      name.length > 120 ||
      email.length > 254 ||
      departureDate.length > 30 ||
      cyclingType.length > 80 ||
      groupSize.length > 50 ||
      destination.length > 150 ||
      tour.length > 200 ||
      message.length > 5000
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

    const fields = [
      ["Full name", name],
      ["Email address", email],
      ["Departure date", departureDate || "Flexible"],
      ["Cycling style", cyclingType],
      ["Group size", groupSize || "Not provided"],
      ["Preferred destination", destination || "Open to suggestions"],
      ["Tour of interest", tour || "Not decided yet"],
      ["Message", message],
    ];

    const plainText = fields
      .map(([label, value]) => `${label}: ${value}`)
      .join("\n\n");

    const html = `
      <h2>New Mountain Bike Morocco trip enquiry</h2>
      ${fields
        .map(
          ([label, value]) => `
            <p>
              <strong>${escapeHtml(label)}:</strong><br />
              ${escapeHtml(value).replace(/\n/g, "<br />")}
            </p>
          `
        )
        .join("")}
    `;

    const { error } = await resend.emails.send({
      from: sender,
      to: [recipient],
      replyTo: email,
      subject: "New Mountain Bike Morocco trip enquiry",
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