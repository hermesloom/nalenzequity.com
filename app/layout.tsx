import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nalenz Equity | Investing in Visionary Management",
  description:
    "Nalenz Equity partners with forward-thinking leaders to build transformative companies in Europe and beyond. Based in Germany, focusing on high-potential investments and sustainable value creation.",
  keywords: [
    "investment",
    "venture capital",
    "visionary management",
    "Germany",
    "sustainable investing",
    "portfolio management",
  ],
  authors: [{ name: "Julian Nalenz" }],
  creator: "Nalenz Equity UG (haftungsbeschränkt)",
  publisher: "Nalenz Equity",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nalenzequity.com",
    title: "Nalenz Equity | Investing in Visionary Management",
    description:
      "Partnering with forward-thinking leaders to build transformative companies in Europe and beyond.",
    siteName: "Nalenz Equity",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nalenz Equity | Investing in Visionary Management",
    description:
      "Partnering with forward-thinking leaders to build transformative companies in Europe and beyond.",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
