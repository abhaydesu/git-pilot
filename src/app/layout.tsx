import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import InteractiveBackground from "./components/Background";
import Container from "./components/container";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export const metadata: Metadata = {
  title: "Git-Pilot",
  description: "An AI git assistant, right in your CLI.",
};

// Add this viewport export
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1, // Optional: prevents users from zooming in
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.className} relative min-h-screen w-screen overflow-x-hidden text-white `}
      >
        <InteractiveBackground
          shape="square"
          pixelSize={3}
          inkColor="#a3a3a3"
        />
        <main >
          <Container className="pt-20 max-w-5xl bg-neutral-950/95 border border-neutral-700">{children}</Container>
        </main>
        
      </body>
    </html>
  );
}