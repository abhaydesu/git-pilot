import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({
  subsets: ["latin"],
  weight: ['100', '300', '500', '600', '700', '900']
})

export const metadata: Metadata = {
  title: "Git-Pilot",
  description: "An AI git assistant, right in your CLI.",
};

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
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap"
          rel="stylesheet"
        />
        <link href="https://api.fontshare.com/v2/css?f[]=array@400,600&display=swap" rel="stylesheet"></link>
      </head>
      <body
        className={`${inter.className} font-satoshi `}
      >
          
                <main >
                  {children}
        </main>
      </body>
    </html>
  );
}