import type { ReactNode } from "react";
import ServiceJsonLd from "../../../components/seo/ServiceJsonLd";
import { serviceMetadata } from "../../../lib/seo/buildMetadata";

const SLUG = "iso27001";

export const metadata = serviceMetadata(SLUG);

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <ServiceJsonLd slug={SLUG} />
      {children}
    </>
  );
}
