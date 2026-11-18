import type { ReactNode } from "react";
import { serviceMetadata } from "../../../lib/seo/buildMetadata";

const SLUG = "crypto-currency-exchange";

export const metadata = serviceMetadata(SLUG);

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}