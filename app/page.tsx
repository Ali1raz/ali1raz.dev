import { Me } from "@/components/portfolio/me";
import { Separator } from "@/components/general/separator";
import { Stack } from "@/components/portfolio/stack";
import { Footer } from "@/components/portfolio/footer";
import { GitHubContributions } from "@/components/portfolio/gh-contributions";
import { Projects } from "@/components/portfolio/projects";
import { Socials } from "@/components/portfolio/socials";
import { About } from "@/components/portfolio/about";

export default function Home() {
  return (
    <main className="mx-auto md:max-w-3xl *:[[id]]:scroll-mt-22">
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
  );
}
