import type { ReactNode } from "react";
import ServiceJsonLd from "../../../components/seo/ServiceJsonLd";
import { serviceMetadata } from "../../../lib/seo/buildMetadata";

const SLUG = "cloud-security-assessment";

export const metadata = serviceMetadata(SLUG);

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <ServiceJsonLd slug={SLUG} />
      {children}
    </>
  );
}
