import type { Metadata } from "next";
import { Montserrat, Montserrat_Alternates } from "next/font/google";
import "./globals.css";
import "./final.css";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-body" });
const display = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: {
    default: "Jaeger Media — Where Vision Meets Results",
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
    <html lang="en" className={`${montserrat.variable} ${display.variable}`}>
      <body>{children}</body>
    </html>
  );
}
