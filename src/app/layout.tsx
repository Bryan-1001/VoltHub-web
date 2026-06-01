import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import Navigation from "@/components/Navigation";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "VoltHUB — EV Charging in One App",
    template: "%s | VoltHUB",
  },
  description:
    "Download VoltHUB for iOS and Android. Find chargers, start sessions, and pay across networks from one premium EV charging app.",
  keywords: [
    "EV charging",
    "electric vehicle",
    "charging stations",
    "VoltHUB",
    "mobile app",
  ],
  authors: [{ name: "VoltHUB" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "VoltHUB",
    title: "VoltHUB — EV Charging in One App",
    description:
      "Find stations, control sessions, and pay across networks. Download VoltHUB for iOS and Android.",
  },
  twitter: {
    card: "summary_large_image",
    title: "VoltHUB — EV Charging in One App",
    description:
      "Find stations, control sessions, and pay across networks. Download VoltHUB today.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f8fafc",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-slate-50 antialiased">
        <Navigation />
        <div className="flex flex-1 flex-col">{children}</div>
      </body>
    </html>
  );
}
