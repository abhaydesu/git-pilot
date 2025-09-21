// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import InteractiveBackground from "./components/Background";
import Container from "./components/container";
import { Footer } from "./components/footer";

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
    <html lang="en">
      <body
        className={`${poppins.className} relative min-h-screen w-screen overflow-x-hidden bg-black text-white select-none`}
      >
        <InteractiveBackground
          shape="square"
          pixelSize={3}
          inkColor="#737373"
        />
        <main>
          <Container className="pt-20 pb-12 max-w-3xl">{children}</Container>
        </main>
        <Footer />
      </body>
    </html>
  );
}