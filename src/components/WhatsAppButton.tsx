"use client";

import { usePathname } from "next/navigation";

const WHATSAPP_NUMBER = "212707222426";

function getTourName(pathname: string): string | null {
  const parts = pathname.split("/").filter(Boolean);
  const tripIndex = parts.indexOf("trip");

  if (tripIndex === -1 || !parts[tripIndex + 1]) {
    return null;
  }

  return parts[tripIndex + 1]
    .replace(/-\d+-day$/i, "")
    .replace(/-\d+-days?$/i, "")
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function WhatsAppButton() {
  const pathname = usePathname();
  const tourName = getTourName(pathname || "/");

  const message = tourName
    ? `Hello Mountain Bike Morocco! I'm interested in the ${tourName}. Could you please send me more information?`
    : "Hello Mountain Bike Morocco! I'd like more information about your cycling tours.";

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={
        tourName
          ? `Ask about ${tourName} on WhatsApp`
          : "Contact Mountain Bike Morocco on WhatsApp"
      }
      title="Chat with us on WhatsApp"
      style={{
        position: "fixed",
        right: "24px",
        bottom: "24px",
        zIndex: 1000,
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        backgroundColor: "#25D366",
        color: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.22)",
        textDecoration: "none",
        transition: "transform 180ms ease",
      }}
      onMouseEnter={(event) => {
        event.currentTarget.style.transform = "scale(1.06)";
      }}
      onMouseLeave={(event) => {
        event.currentTarget.style.transform = "scale(1)";
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M20.52 3.48A11.87 11.87 0 0 0 12.07 0C5.5 0 .15 5.34.15 11.91c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.9 11.9 0 0 0 5.76 1.47h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.18-1.24-6.17-3.47-8.42ZM12.07 21.8a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.88 9.88 0 0 1-1.52-5.26c0-5.47 4.45-9.92 9.91-9.92 2.65 0 5.14 1.03 7.01 2.91a9.86 9.86 0 0 1 2.9 7.02c0 5.47-4.45 9.92-9.92 9.92Zm5.44-7.43c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.46-.89-.8-1.49-1.78-1.66-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.08-.8.37-.28.3-1.05 1.03-1.05 2.5 0 1.48 1.08 2.9 1.23 3.1.15.2 2.12 3.24 5.14 4.55.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35Z" />
      </svg>
    </a>
  );
}