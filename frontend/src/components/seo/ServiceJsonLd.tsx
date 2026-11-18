import JsonLd from "./JsonLd";
import { serviceGraph } from "../../lib/seo/schema";

type Block = Record<string, unknown>;

/**
 * Prints the page's own JSON-LD exactly as saved in
 * src/lib/seo/schemas/<slug>.json (one <script> per item in the file).
 * If that file doesn't exist yet, it falls back to the schema built from services.ts.
 */
async function loadBlocks(slug: string): Promise<Block[]> {
  try {
    const mod = await import(`../../lib/seo/schemas/${slug}.json`);
    const data = mod.default ?? mod;
    return Array.isArray(data) ? data : [data];
  } catch {
    return [serviceGraph(slug)];
  }
}

export default async function ServiceJsonLd({ slug }: { slug: string }) {
  const blocks = await loadBlocks(slug);
  return (
    <>
      {blocks.map((data, i) => (
        <JsonLd key={i} id={`schema-service-${i + 1}`} data={data} />
      ))}
    </>
  );
}