import type { Metadata, Viewport } from "next";
import { DM_Sans, IBM_Plex_Mono, Newsreader } from "next/font/google";
import "./globals.css";

// DM Sans and Newsreader both have an optical-size axis: large headlines get
// the tighter display cut automatically, body text gets the sturdier text cut.
const sans = DM_Sans({ subsets: ["latin"], axes: ["opsz"], variable: "--font-dm" });
const serif = Newsreader({
  subsets: ["latin"],
  axes: ["opsz"],
  style: ["normal", "italic"],
  variable: "--font-news",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex",
});

export const metadata: Metadata = {
  title: "Git Pilot",
  description: "An AI git assistant, right in your CLI.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Array: the original Git Pilot wordmark face */}
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=array@400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">
        <main>{children}</main>
      </body>
    </html>
  );
}
