// docs/layout.tsx
import { Navbar } from "../components/navbar";
import { DocsSidebar } from "../components/docsSidebar";
import { Footer } from "../components/footer";
import AsciiArtBackground from "../components/ui/AsciiiBackground"; // Make sure to import your Ascii component

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-neutral-950 text-neutral-200 min-h-screen">
      <Navbar />

      {/* ASCII Art Header Frame */}
      <div className="relative w-full h-40  overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <AsciiArtBackground
            rowHeight={10}
            ramp=" .:-=+*#%@"
            speed={0.15}
            contrast={0.9}
          />
        </div>
        {/* Gradient fade to protect content below */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent z-10" />
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex">
          <div className="hidden lg:block w-64 flex-shrink-0">
            <DocsSidebar />
          </div>
          <main className="flex-1 min-w-0 pb-20 md:pb-28 lg:pl-12">
            {children}
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}