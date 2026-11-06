import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mountain-bike-morocco.com"),

  title: {
    default:
      "Mountain Bike Morocco | MTB & E-MTB Tours in the Atlas Mountains",
    template: "%s | Mountain Bike Morocco",
  },

  description:
    "Explore Morocco by bike with expert local guides. Discover mountain bike and E-MTB tours in the Atlas Mountains, gravel and road cycling adventures, desert trails and private cycling holidays.",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}