import "./globals.css";

import type { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import WhatsApp from "@/components/whatsapp/Whatsapp";

export const metadata: Metadata = {
  title: "Shopilum",
  description: "Sophilum, Iluminación Creativa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
