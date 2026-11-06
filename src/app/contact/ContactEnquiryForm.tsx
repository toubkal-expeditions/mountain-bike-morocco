"use client";

import { FormEvent, useState } from "react";

export default function ContactEnquiryForm() {
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
  result = responseText
    ? JSON.parse(responseText)
    : {};
} catch {
  throw new Error(
    "The server returned an invalid response. Please check the API route and server terminal."
  );
}

if (!response.ok) {
  throw new Error(
    result.error || `Server error (${response.status}). Please try again.`
  );
}

if (!result.success) {
  throw new Error("The server did not confirm that your enquiry was sent.");
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
    background: "#fffefa",
    padding: "12px 13px",
    borderRadius: "2px",
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
    <form className="contact-enquiry-form" onSubmit={handleSubmit}>
      <div className="contact-enquiry-form__heading">
        <p className="cl-eyebrow cl-eyebrow--dark">PLAN YOUR TRIP</p>
        <h3>Tell us about your ride.</h3>
        <p>Fields marked * are required.</p>
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
            defaultValue=""
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
          />
        </label>

        <label
          className="contact-enquiry-form__full"
          style={labelStyle}
        >
          Tour name (if known)
          <input
            style={fieldStyle}
            type="text"
            name="tour"
            placeholder="Paste a tour name or leave blank"
            maxLength={200}
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
        {isSubmitting ? "Sending your enquiry..." : "Send booking enquiry"}
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
    </form>
  );
}