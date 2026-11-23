import JsonLd from "../components/seo/JsonLd";
import { buildMetadata, homeSeo } from "../lib/seo/buildMetadata";
import { globalGraph, homeGraph } from "../lib/seo/schema";
import Home from "./Home";

export const metadata = buildMetadata(homeSeo);

export default function Page() {
  return (
    <>
      <JsonLd id="schema-global" data={globalGraph()} />
      <JsonLd id="schema-home" data={homeGraph({ dateModified: "2026-11-17" })} />
      <Home />
    </>
  );
}