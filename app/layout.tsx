import type { Metadata } from "next";
import { Montserrat, Montserrat_Alternates } from "next/font/google";
import "./globals.css";

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
    "Premium websites, paid advertising, social media, branding and lead generation systems built to move businesses forward.",
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
