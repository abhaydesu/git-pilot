export type Theme = "light" | "dark";

const KEY = "theme";

/**
 * Runs inline in <head> before first paint, so the page never flashes the wrong
 * theme. Saved choice wins; otherwise follow the OS. Keep it in sync with the
 * helpers below, and tiny: it is inlined into every page.
 */
export const themeInitScript = `(function(){var t;try{t=localStorage.getItem("${KEY}")}catch(e){}if(t!=="light"&&t!=="dark")t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.dataset.theme=t})()`;

/** Storage can throw (private mode, blocked cookies); the theme still works without it. */
export function getStoredTheme(): Theme | null {
  try {
    const value = localStorage.getItem(KEY);
    return value === "light" || value === "dark" ? value : null;
  } catch {
    return null;
  }
}

export const getTheme = (): Theme =>
  document.documentElement.dataset.theme === "dark" ? "dark" : "light";

export function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
}

/** An explicit choice by the user: apply it and remember it. */
export function saveTheme(theme: Theme) {
  applyTheme(theme);
  try {
    localStorage.setItem(KEY, theme);
  } catch {
    /* not persisted; still applied for this visit */
  }
}

/** Calls `onChange` whenever data-theme changes (from any toggle or tab logic). */
export function subscribeTheme(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}
