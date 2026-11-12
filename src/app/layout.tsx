
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mountain-bike-morocco.com"),

  verification: {
    google: "gyNnjLGnRLBJnwM14bzQphnb49H8Cn2AZMDuVX3Hlo0",
  },

  title: {
    default: "Mountain Bike Morocco | MTB, E-MTB & Cycling Tours",
    template: "%s | Mountain Bike Morocco",
  },

  description:
    "Discover Morocco by bike with local guides. Explore Atlas Mountains MTB, full-suspension E-MTB, gravel cycling and private cycling holidays from Marrakech.",

  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Mountain Bike Morocco",
    title: "Mountain Bike Morocco | MTB & E-MTB Adventures",
    description:
      "Guided mountain biking, E-MTB and gravel adventures across Morocco.",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mountain biking in Morocco's Atlas Mountains",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mountain Bike Morocco",
    description:
      "Discover Morocco by bike with expert local guides.",
    images: ["/opengraph-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
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
