import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./final.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: {
    default: "Jaeger Media | Where Vision Meets Results",
    template: "%s | Jaeger Media",
  },
  description:
    "Jaeger Media is a social media marketing agency in Harare offering social media management, paid advertising, lead generation, content, branding and websites.",
  icons: {
    icon: "/jaeger-logo-transparent.png",
    shortcut: "/jaeger-logo-transparent.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
