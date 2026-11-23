type JsonLdProps = {
  data: Record<string, unknown>;
  id?: string;
};

/**
 * Renders a JSON-LD <script>. Server component, no client JS.
 * "<" is escaped so content can never close the script tag early.
 */
export default function JsonLd({ data, id }: JsonLdProps) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
                __html: JSON.stringify(data, null, process.env.NODE_ENV === "development" ? 2 : undefined).replace(
          /</g,
          "\\u003c",
        ),
      }}
    />
  );
}