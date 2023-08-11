import "./globals.css";

import type { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import WhatsApp from "@/components/whatsapp/Whatsapp";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

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
      <body>
        <Navbar />
        {children}
        <WhatsApp />
        <Footer />
      </body>
    </html>
  );
}
