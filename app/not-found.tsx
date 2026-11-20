// Root-level 404 for URLs outside the [locale] segment.
// The root layout returns children directly (no html/body), so this file
// must provide its own html/body wrapper.
export default function RootNotFound() {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif", background: "#f8fafc", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center", padding: "24px" }}>
          <h1 style={{ fontSize: "28px", fontWeight: 800, color: "#0f172a", marginBottom: "8px" }}>Page Not Found</h1>
          <p style={{ color: "#64748b", fontSize: "14px" }}>This URL does not exist on bdjunyang.com.</p>
          <a href="/en" style={{ display: "inline-block", marginTop: "16px", background: "#0f172a", color: "#fff", padding: "10px 20px", borderRadius: "12px", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>
            Back to Catalog
          </a>
        </div>
      </body>
    </html>
  );
}