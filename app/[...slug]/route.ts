import { SITE } from "@/data/site";

export async function GET(request: Request) {
  const accept = request.headers.get("accept") ?? "";
  const wantsMarkdown = accept.toLowerCase().includes("text/markdown");
  const baseUrl = SITE.site_url.replace(/\/$/, "");

  if (wantsMarkdown) {
    const body =
      "# 404 Not Found\n\n" +
      "The requested page does not exist on this site. " +
      "Please check the URL or visit our documentation.\n\n" +
      `- Docs: ${baseUrl}/docs\n` +
      `- Sitemap: ${baseUrl}/sitemap.xml\n` +
      `- LLMs: ${baseUrl}/llms.txt\n`;

    return new Response(body, {
      status: 404,
      headers: { "Content-Type": "text/markdown", Vary: "Accept" },
    });
  }

  const html =
    '<!DOCTYPE html><html lang="en"><head><title>404 - Page Not Found</title></head><body>' +
    "<h1>404 - Page Not Found</h1>" +
    "<p>The page you are looking for does not exist on Ali Raza's portfolio.</p>" +
    "<p>Visit the homepage to view projects, tech stack, and contact information.</p>" +
    "</body></html>";

  return new Response(html, {
    status: 404,
    headers: { "Content-Type": "text/html", Vary: "Accept" },
  });
}
