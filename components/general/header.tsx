"use client";

import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ThemeToggle } from "./theme-toggle";
import { MobileNav } from "./mobile-nav";

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
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
        <h1 className="text-3xl font-bold">Ali Raza</h1>
        <div className="ml-auto hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <Button asChild key={link.name} size="sm" variant="ghost">
              <a href={link.href}>{link.name}</a>
            </Button>
          ))}

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
