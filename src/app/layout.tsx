import type { Metadata } from "next";
import { Montserrat, Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const zenKaku = Zen_Kaku_Gothic_New({
  variable: "--font-zen-kaku",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Indalo Digital | Technology & Operations Consultancy for Removals Companies",
  description: "Specializing in technology, operations, and business planning for removals companies looking to improve efficiency, increase margins, and plan for retirement.",
  keywords: ["removals consultancy", "operations efficiency", "technology solutions", "business planning", "retirement planning", "removals industry"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${montserrat.variable} ${zenKaku.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
