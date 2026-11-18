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
    <html lang={siteConfig.language} className={`h-full`}>
      <head />
      <body className=" flex flex-col">
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