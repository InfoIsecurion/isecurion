import "./globals.css";
import Navbar from "../components/layout/Navbar";

import type { ReactNode } from "react";
import Footer from "../components/layout/Footer";
import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "ISECURION | CERT-IN Empanelled",
  description: "ISECURION Technology & Consulting Pvt Ltd",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html className={`h-full`}>
      <head />
      <body className=" flex flex-col">
        <Navbar />
        {children}
        <Footer />
        <ToastContainer position="top-right" autoClose={1000} />
      </body>
    </html>
  );
}
