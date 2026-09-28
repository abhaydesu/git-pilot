"use client";

import React, { useEffect, useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  applyTheme,
  getStoredTheme,
  getTheme,
  saveTheme,
  subscribeTheme,
  type Theme,
} from "@/lib/theme";

// Both icons stay mounted and cross-fade (same idea as CopyButton). Visibility is
// driven by the `dark:` variant, i.e. by <html data-theme>, so the right icon shows
// from the first paint, before React has hydrated.
const iconBase =
  "col-start-1 row-start-1 size-[18px] transition-[opacity,transform] duration-200 ease-out-strong";

export const ThemeToggle = ({ className = "" }: { className?: string }) => {
  // The server can't know the theme, so it renders "light"; the client corrects it after hydration.
  const theme = useSyncExternalStore<Theme>(subscribeTheme, getTheme, () => "light");

  // With no saved choice, keep following the OS setting as it changes.
  useEffect(() => {
    const query = matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e: MediaQueryListEvent) => {
      if (!getStoredTheme()) applyTheme(e.matches ? "dark" : "light");
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const next: Theme = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={() => saveTheme(next)}
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
      className={cn(
        "press focus-ring grid size-10 place-items-center rounded-full text-ink/70 hover:bg-ink/5 hover:text-ink",
        className,
      )}
    >
      <Moon
        aria-hidden
        className={`${iconBase} opacity-100 dark:-rotate-90 dark:scale-50 dark:opacity-0`}
      />
      <Sun
        aria-hidden
        className={`${iconBase} rotate-90 scale-50 opacity-0 dark:rotate-0 dark:scale-100 dark:opacity-100`}
      />
    </button>
  );
};

export default ThemeToggle;
