"use client";

import { FormEvent, useState } from "react";

type ContactEnquiryFormProps = {
  tourName?: string;
  eventName?: string;
  destination?: string;
  cyclingType?: string;
  fullWidth?: boolean;
};

export default function ContactEnquiryForm({
  tourName = "",
  eventName = "",
  destination = "",
  cyclingType = "",
  fullWidth = false,
}: ContactEnquiryFormProps) {
  const [formMessage, setFormMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setFormMessage("");
    setIsSuccess(false);

    const form = event.currentTarget;
    const data = new FormData(form);

    const enquiry = {
      name: data.get("name"),
      email: data.get("email"),
      departureDate: data.get("departureDate"),
      cyclingType: data.get("cyclingType"),
      groupSize: data.get("groupSize"),
      destination: data.get("destination"),
      tour: data.get("tour"),
      message: data.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(enquiry),
      });

      const responseText = await response.text();

      let result: { error?: string; success?: boolean };

      try {
        result = responseText ? JSON.parse(responseText) : {};
      } catch {
        throw new Error(
          "The server returned an invalid response. Please check the API route and server terminal."
        );
      }

      if (!response.ok) {
        throw new Error(
          result.error ||
            `Server error (${response.status}). Please try again.`
        );
      }

      if (!result.success) {
        throw new Error(
          "The server did not confirm that your enquiry was sent."
        );
      }

      setIsSuccess(true);
      setFormMessage(
        "Thank you! Your enquiry has been sent successfully. Our team will get back to you soon."
      );

      form.reset();
    } catch (error) {
      setIsSuccess(false);
      setFormMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  const fieldStyle = {
    width: "100%",
    minHeight: "48px",
    border: "1px solid #d5d1c8",
    background: "#ffffff",
    padding: "12px 13px",
    borderRadius: "3px",
    font: "inherit",
    fontSize: "15px",
    color: "#20221d",
    boxSizing: "border-box" as const,
  };

  const labelStyle = {
    display: "grid",
    gap: "8px",
    fontSize: "13px",
    fontWeight: 650,
    color: "#34362f",
  };

  return (
    <form
      className={`contact-enquiry-form${
        fullWidth ? " contact-enquiry-form--wide" : ""
      }`}
      onSubmit={handleSubmit}
    >
      <div className="contact-enquiry-form__heading">
        <p className="cl-eyebrow cl-eyebrow--dark">
          PLAN YOUR MOROCCO ADVENTURE
        </p>

        <h3>Let’s create a ride worth remembering.</h3>

        <p>
          Please complete the required fields below so we can start
          planning your experience.
        </p>
      </div>

      <div className="contact-enquiry-form__grid">
        <label style={labelStyle}>
          Full name *
          <input
            style={fieldStyle}
            type="text"
            name="name"
            autoComplete="name"
            placeholder="Your full name"
            maxLength={120}
            required
          />
        </label>

        <label style={labelStyle}>
          Email address *
          <input
            style={fieldStyle}
            type="email"
            name="email"
            autoComplete="email"
            placeholder="you@example.com"
            maxLength={254}
            required
          />
        </label>

        <label style={labelStyle}>
          Departure date
          <input
            style={fieldStyle}
            type="date"
            name="departureDate"
          />
        </label>

        <label style={labelStyle}>
          Cycling style *
          <select
            style={fieldStyle}
            name="cyclingType"
            defaultValue={cyclingType}
            required
          >
            <option value="" disabled>
              Select a cycling style
            </option>
            <option>Mountain Bike</option>
            <option>E-MTB Tour</option>
            <option>Gravel Cycling</option>
            <option>Road Cycling</option>
            <option>Mixed Cycling Tour</option>
            <option>Not sure yet</option>
          </select>
        </label>

        <label style={labelStyle}>
          Group size
          <select
            style={fieldStyle}
            name="groupSize"
            defaultValue=""
          >
            <option value="">Select group size</option>
            <option>1 rider</option>
            <option>2 riders</option>
            <option>3–4 riders</option>
            <option>5–8 riders</option>
            <option>9+ riders</option>
          </select>
        </label>

        <label style={labelStyle}>
          Preferred destination
          <input
            style={fieldStyle}
            type="text"
            name="destination"
            placeholder="e.g. Atlas Mountains, Agafay, Sahara"
            maxLength={150}
            defaultValue={destination}
          />
        </label>

        <label
          className="contact-enquiry-form__full"
          style={labelStyle}
        >
          Tour or event name (if known)
          <input
            style={fieldStyle}
            type="text"
            name="tour"
            placeholder="Your selected tour or event"
            maxLength={200}
            defaultValue={tourName || eventName}
          />
        </label>

        <label
          className="contact-enquiry-form__full"
          style={labelStyle}
        >
          Your message *
          <textarea
            style={{
              ...fieldStyle,
              minHeight: "140px",
              resize: "vertical",
            }}
            name="message"
            rows={5}
            maxLength={5000}
            required
            placeholder="Tell us about your riding experience, preferred dates, trip length, budget range or any questions."
          />
        </label>
      </div>

      <button
        className="contact-enquiry-form__submit"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting
          ? "Sending your enquiry..."
          : "Send booking enquiry"}
        <span aria-hidden="true"> ↗</span>
      </button>

      {formMessage ? (
        <p
          className="contact-enquiry-form__status"
          role="status"
          aria-live="polite"
          style={{
            color: isSuccess ? "#287343" : "#b42318",
          }}
        >
          {formMessage}
        </p>
      ) : null}

      <p className="contact-enquiry-form__privacy">
        Your enquiry will be sent securely to our team. We will use
        your contact details only to respond to your trip enquiry.
      </p>

      <style>{`
        .contact-enquiry-form {
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
          padding: 48px;
          background: #ffffff;
          border: 2px solid #d8d3c9;
          border-radius: 10px;
          box-shadow: 0 14px 38px rgba(0, 0, 0, 0.10);
          box-sizing: border-box;
        }

        .contact-enquiry-form--wide {
          max-width: none;
        }

        .contact-enquiry-form__heading .cl-eyebrow {
          color: #b99a62 !important;
          letter-spacing: 0.18em;
          font-size: 11px;
          font-weight: 750;
          margin-bottom: 14px;
        }

        .contact-enquiry-form__heading h3 {
  color: #C58A4A;
  font-size: clamp(27px, 3vw, 38px);
  line-height: 1.2;
  font-weight: 600;
  letter-spacing: -0.035em;
  margin: 0 0 13px;
}

.contact-enquiry-form__heading > p:last-child {
  color: #D49A61;
  font-size: 13px;
  line-height: 1.8;
  margin: 0;
}

        .contact-enquiry-form__grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
          margin-top: 30px;
        }

        .contact-enquiry-form__full {
          grid-column: 1 / -1;
        }

        .contact-enquiry-form__submit {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          min-height: 54px;
          margin-top: 30px;
          padding: 0 28px;
          border: 1px solid #20221d;
          border-radius: 3px;
          background: #20221d;
          color: #ffffff;
          font: inherit;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.04em;
          cursor: pointer;
          transition:
            background 0.2s ease,
            border-color 0.2s ease;
        }

        .contact-enquiry-form__submit:hover:not(:disabled) {
          background: #a8874d;
          border-color: #a8874d;
        }

        .contact-enquiry-form__submit:disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }

        .contact-enquiry-form__status {
          margin-top: 20px;
          font-size: 14px;
          line-height: 1.7;
        }

        .contact-enquiry-form__privacy {
          margin-top: 22px;
          color: #77766e;
          font-size: 12px;
          line-height: 1.8;
        }

        @media (max-width: 640px) {
          .contact-enquiry-form {
            padding: 28px 20px;
            border-radius: 8px;
          }

          .contact-enquiry-form__grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .contact-enquiry-form__full {
            grid-column: auto;
          }

          .contact-enquiry-form__submit {
            width: 100%;
          }
        }
      `}</style>
    </form>
  );
}