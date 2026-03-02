"use client";

import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ThemeToggle } from "../general/theme-toggle";
import { MobileNav } from "./mobile-nav";
import Image from "next/image";

export const navLinks = [
  { href: "#contact", label: "Contact" },
  { href: "#tech", label: "Tech Stack" },
  { href: "#projects", label: "Projects" },
];

export function Header() {
  const scrolled = useScroll(10);

  return (
    <header
      className={cn("sticky top-0 z-50 w-full border-transparent border-b", {
        "border-border bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/50":
          scrolled,
      })}
    >
      <nav className="max-w-3xl mx-auto py-4 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/r.png" alt="Ali Raza" width={30} height={30} />

          <h1 className="text-3xl font-bold">Ali Raza</h1>
        </div>
        <div className="ml-auto hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <Button asChild key={link.label} size="sm" variant="ghost">
              <a href={link.href}>{link.label}</a>
            </Button>
          ))}
          <div className="h-5 w-px bg-muted-foreground " />
          <ThemeToggle />
        </div>
        <div className="ml-auto flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}
