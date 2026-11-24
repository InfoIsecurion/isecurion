import "./globals.css";
import Navbar from "../components/layout/Navbar";

import type { ReactNode } from "react";
import Footer from "../components/layout/Footer";
import type { Metadata, Viewport } from "next";
import { ToastContainer } from "react-toastify";
import "lenis/dist/lenis.css";
import SmoothScroll from "../components/ui/SmoothScroll";


import { siteConfig } from "../lib/seo/site.config";
import Analytics from "../components/seo/Analytics";
import CookieConsent from "../components/cookie/CookieConsent";

import { Fragment_Mono } from "next/font/google";
import { Average } from "next/font/google";
import { IBM_Plex_Mono } from "next/font/google";
import { Cantata_One } from "next/font/google";
import { Manrope } from "next/font/google";
import { Roboto_Serif } from "next/font/google";
import ScrollToTop from "../components/ui/ScrollToTop";

const fragmentMono = Fragment_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-fragment-mono",
});

const average = Average({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-average",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-mono",
});

const cantataOne = Cantata_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-cantata-one",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-roboto-serif",
});



export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  // Pages pass a short title; this template adds the brand.
  // The home page uses an absolute title (see homeSeo).
  title: {
    default: "ISECURION | CREST Member & CERT-In Empanelled VAPT Company in India",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.metaDescription,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  // NOTE: no canonical here on purpose. A layout-level canonical would be
  // inherited by every page. Each page sets its own through buildMetadata().
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    images: [siteConfig.defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    site: siteConfig.twitterHandle,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: siteConfig.themeColor,
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang={siteConfig.language} className={`${fragmentMono.variable} ${average.variable} ${ibmPlexMono.variable} ${cantataOne.variable}  ${manrope.variable} ${robotoSerif.variable} h-full`}>
      <head />
      <body className="h-screen flex flex-col">
        <ScrollToTop />
        <Navbar />
        {/* {children} */}
        <SmoothScroll>{children}</SmoothScroll>
        <Footer />
        <ToastContainer position="top-right" autoClose={1000} />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}