import { AlertTriangle } from "lucide-react";
import { Card, CardDescription, CardHeader } from "../ui/card";
import { Button } from "@/components/ui/button";
import { GitHub, XformerlyTwitter } from "../companies";
import { ThemeToggle } from "../general/theme-toggle";
import { SITE } from "@/data/site";
import { Panel } from "../general/panel";

const navLinks = [
  { href: "#contact", label: "Contact" },
  { href: "#tech", label: "Tech Stack" },
  { href: "#projects", label: "Projects" },
  // { href: "#", label: "Privacy" },
];

const socialLinks = [
  {
    href: "https://x.com/ali1razdev",
    label: "X",
    icon: <XformerlyTwitter className="invert dark:invert-0" />,
  },
  {
    href: SITE.repo_link,
    label: "Github",
    icon: <GitHub className="invert dark:invert-0" />,
  },
];

export function Footer() {
  return (
    <>
      <div className="border-x border-edge py-4 text-sm">
        <Card className="bg-muted-foreground/15 mx-auto max-w-sm p-1">
          <CardHeader className="text-center p-1">
            <CardDescription className=" flex items-center gap-1">
              <AlertTriangle className="inline" />
              This portfolio was inspired by many open source projects,
              especially{" "}
              <a
                href="https://chanhdai.com/"
                target="_blank"
                className="underline underline-offset-4"
              >
                Chanh Dai&apos;s portfolio
              </a>
              .
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
      <Panel>
        <footer className="mx-auto max-w-5xl *:px-4 *:md:px-6">
          <div className="flex flex-col gap-6 py-6">
            <div className="flex items-center justify-between">
              <h2>Ali Raza</h2>
              <div className="flex items-center gap-2">
                {socialLinks.map(({ href, label, icon }) => (
                  <Button asChild key={label} size="sm" variant="ghost">
                    <a aria-label={label} href={href}>
                      {icon}
                    </a>
                  </Button>
                ))}
                <ThemeToggle />
              </div>
            </div>

            <nav>
              <ul className="flex flex-wrap gap-4 font-medium text-muted-foreground text-sm md:gap-6">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      className="hover:text-foreground transition-colors"
                      href={link.href}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </footer>
      </Panel>
    </>
  );
}
