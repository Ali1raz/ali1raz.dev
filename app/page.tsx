import { Me } from "@/components/portfolio/me";
import { SITE } from "@/data/site";
import { Separator } from "@/components/general/separator";
import { Stack } from "@/components/portfolio/stack";
import { Footer } from "@/components/portfolio/footer";
import { GitHubContributions } from "@/components/portfolio/gh-contributions";
import { Projects } from "@/components/portfolio/projects";
import { Socials } from "@/components/portfolio/socials";
import { About } from "@/components/portfolio/about";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ali Raza",
    description: SITE.description,
    url: SITE.site_url.replace(/\/$/, ""),
    sameAs: [
      "https://github.com/Ali1raz/",
      "https://x.com/ali1razdev",
      "https://linkedin.com/in/ali1raz",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="mx-auto md:max-w-4xl *:[[id]]:scroll-mt-22">
        <Me />
        <Separator />

        <About />
        <Socials />
        <Separator />

        <Stack />
        <GitHubContributions />
        <Separator />

        <Projects />

        <Footer />
      </main>
    </>
  );
}
