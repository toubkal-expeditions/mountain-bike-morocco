"use client";

import { FormEvent, useState } from "react";

export default function ContactEnquiryForm() {
  const [formMessage, setFormMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const recipient = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "mountainbikemorocco@gmail.com";
    const data = new FormData(event.currentTarget);

    if (!recipient) {
      setFormMessage(
        "The form is ready, but the receiving email address has not been configured. Add NEXT_PUBLIC_CONTACT_EMAIL to your .env.local file, then restart the development server."
      );
      return;
    }

    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Departure date: ${data.get("departureDate") || "Flexible"}`,
      `Cycling style: ${data.get("cyclingType")}`,
      `Group size: ${data.get("groupSize") || "Not provided"}`,
      `Destination: ${data.get("destination") || "Open to suggestions"}`,
      `Tour of interest: ${data.get("tour") || "Not decided yet"}`,
      `Message: ${data.get("message") || "Not provided"}`,
    ].join("\n");

    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(
      "Mountain Bike Morocco trip enquiry"
    )}&body=${encodeURIComponent(body)}`;
    setFormMessage(
      "Your email application should open with the enquiry prepared. Send the email there to complete your request."
    );
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
          <input style={fieldStyle} type="text" name="name" autoComplete="name" placeholder="Your full name" required />
        </label>
        <label style={labelStyle}>
          Email address *
          <input style={fieldStyle} type="email" name="email" autoComplete="email" placeholder="you@example.com" required />
        </label>
        <label style={labelStyle}>
          Departure date
          <input style={fieldStyle} type="date" name="departureDate" />
        </label>
        <label style={labelStyle}>
          Cycling style *
          <select style={fieldStyle} name="cyclingType" defaultValue="" required>
            <option value="" disabled>Select a cycling style</option>
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
          <select style={fieldStyle} name="groupSize" defaultValue="">
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
          <input style={fieldStyle} type="text" name="destination" placeholder="e.g. Atlas Mountains, Agafay, Sahara" />
        </label>
        <label className="contact-enquiry-form__full" style={labelStyle}>
          Tour name (if known)
          <input style={fieldStyle} type="text" name="tour" placeholder="Paste a tour name or leave blank" />
        </label>
        <label className="contact-enquiry-form__full" style={labelStyle}>
          Your message *
          <textarea
            style={{ ...fieldStyle, minHeight: "140px", resize: "vertical" }}
            name="message"
            rows={5}
            required
            placeholder="Tell us about your riding experience, preferred dates, trip length, budget range or any questions."
          />
        </label>
      </div>

      <button className="contact-enquiry-form__submit" type="submit">
        Prepare your enquiry <span aria-hidden="true">↗</span>
      </button>
      {formMessage ? <p className="contact-enquiry-form__status" role="status">{formMessage}</p> : null}
      <p className="contact-enquiry-form__privacy">
        This form prepares an email in your email application. Direct online submission requires a connected form or mail service.
      </p>
    </form>
  );
}
