"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "@/components/ui/button";
import { XIcon, MenuIcon } from "lucide-react";
import { Portal, PortalBackdrop } from "../ui/portal";
import { SITE } from "@/data/site";
import { useSound } from "@litlab/audx/react";
import { close as closeSound, open as openSound } from "@/lib/sounds";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const oound = useSound(openSound, { volume: 0.5 });
  const cSound = useSound(closeSound, { volume: 0.5 });

  return (
    <div className="md:hidden">
      <Button
        aria-controls="mobile-menu"
        aria-expanded={open}
        aria-label="Toggle menu"
        className="md:hidden"
        onClick={() => {
          if (open) cSound();
          else oound();
          setOpen(!open);
        }}
        size="icon"
        variant="outline"
      >
        {open ? (
          <XIcon className="size-4.5" />
        ) : (
          <MenuIcon className="size-4.5" />
        )}
      </Button>
      {open && (
        <Portal className="top-14" id="mobile-menu">
          <PortalBackdrop />
          <div
            className={cn(
              "data-[slot=open]:zoom-in-97 ease-out data-[slot=open]:animate-in",
              "size-full p-4"
            )}
            data-slot={open ? "open" : "closed"}
          >
            <div className="grid gap-y-2">
              {SITE.navLinks.map((link) => (
                <Button
                  asChild
                  className="justify-start"
                  key={link.label}
                  variant="ghost"
                >
                  <a href={link.href} onClick={() => setOpen(false)}>
                    {link.label}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </Portal>
      )}
    </div>
  );
}
