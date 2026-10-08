import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/NavBar";

export const metadata: Metadata = {
  title: "Byte254 — Premium Tech, Kenyan Prices",
  description:
    "Shop genuine laptops, phones and electronics. M-Pesa accepted. Delivery to all 47 counties.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased dark scroll-smooth font-sans">
      <body className="min-h-full flex flex-col bg-white dark:bg-black text-slate-900 dark:text-white selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-300">
        <Suspense fallback={<div className="h-16 bg-white dark:bg-black" />}>
          <NavBar />
        </Suspense>
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
