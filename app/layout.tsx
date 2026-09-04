import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Al Attaf Advanced Contracting Company",
  description: "Al Attaf Advanced Contracting Company - Construction, Logistics, and Contracting Solutions in Saudi Arabia",
  icons: {
    icon: "/alattaf-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} min-h-screen flex flex-col bg-white text-slate-900 antialiased`}>
        <Navbar />
        <main className="flex-1 flex flex-col pt-[72px] lg:pt-[116px] bg-white">
          {children}
        </main>
        <WhatsAppButton />
      </body>
    </html>
  );
}
