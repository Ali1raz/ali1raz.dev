import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SITE } from "@/data/site";

export function proxy(request: NextRequest) {
  const accept = request.headers.get("accept") ?? "";
  const wantsMarkdown = accept.toLowerCase().includes("text/markdown");
  const pathname = request.nextUrl.pathname;

  if (wantsMarkdown && pathname === "/") {
    const baseUrl = SITE.site_url.replace(/\/$/, "");
    const body = `# Ali Raza

${SITE.description}

## About

Ali Raza is a software engineer. This portfolio showcases their projects, tech stack.

## Links

- GitHub: https://github.com/Ali1raz/
- X: https://x.com/ali1razdev
- LinkedIn: https://linkedin.com/in/ali1raz
- Sitemap: ${baseUrl}/sitemap.xml
- LLMs: ${baseUrl}/llms.txt
`;
    return new Response(body, {
      status: 200,
      headers: { "Content-Type": "text/markdown", Vary: "Accept" },
    });
  }

  const response = NextResponse.next();
  response.headers.set("Vary", "Accept");
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
