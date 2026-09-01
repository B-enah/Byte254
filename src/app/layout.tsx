import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/features/landingPage/components/NavBar";
import Footer from "@/features/landingPage/components/Footer";

export const metadata: Metadata = {
  title: "Byte254 — Premium Tech, Kenyan Prices",
  description: "Shop genuine laptops, phones and electronics. M-Pesa accepted. Delivery to all 47 counties.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased dark scroll-smooth font-sans"
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-black text-slate-900 dark:text-white selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-300">
        <Navbar />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}