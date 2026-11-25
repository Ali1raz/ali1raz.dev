import { SITE } from "@/data/site";

export async function GET() {
  const baseUrl = SITE.site_url.replace(/\/$/, "");
  const body = `# Ali Raza - Portfolio

> ${SITE.description}

Personal portfolio site. Indexable pages: ${baseUrl}/

## Links
- Sitemap: ${baseUrl}/sitemap.xml
- GitHub: https://github.com/Ali1raz/
`;
  return new Response(body, {
    status: 200,
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
