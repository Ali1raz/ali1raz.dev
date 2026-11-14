"use client";

import { SoundProvider } from "@litlab/audx/react";
import { useSyncExternalStore } from "react";
import { Volume2, VolumeOff } from "lucide-react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "sounds";

function subscribe(callback: () => void) {
  const handler = () => callback();
  window.addEventListener("storage", handler);
  window.addEventListener("sounds-change", handler);
  return () => {
    window.removeEventListener("storage", handler);
    window.removeEventListener("sounds-change", handler);
  };
}

function getSnapshot() {
  return localStorage.getItem(STORAGE_KEY) === "on";
}

function getServerSnapshot() {
  return false;
}

export function Providers({ children }: { children: React.ReactNode }) {
  const enabled = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  return (
    <SoundProvider
      enabled={enabled}
      volume={0.8}
      onEnabledChange={(value) => {
        localStorage.setItem(STORAGE_KEY, value ? "on" : "off");
        window.dispatchEvent(new Event("sounds-change"));
      }}
    >
      {children}
      <Button
        variant="outline"
        size="icon"
        aria-label={enabled ? "Disable sounds" : "Enable sounds"}
        onClick={() => {
          const next = !enabled;
          localStorage.setItem(STORAGE_KEY, next ? "on" : "off");
          window.dispatchEvent(new Event("sounds-change"));
        }}
        className="fixed bottom-4 right-4 z-50 rounded-full"
      >
        <Volume2
          className={`h-[1.2rem] w-[1.2rem] transition-all duration-200 ${
            enabled ? "rotate-0 scale-100" : "rotate-90 scale-0"
          }`}
        />
        <VolumeOff
          className={`absolute h-[1.2rem] w-[1.2rem] text-destructive transition-all duration-200 ${
            enabled ? "-rotate-90 scale-0" : "rotate-0 scale-100"
          }`}
        />
        <span className="sr-only">
          {enabled ? "Mute sound" : "Unmute sound"}
        </span>
      </Button>
    </SoundProvider>
  );
}
