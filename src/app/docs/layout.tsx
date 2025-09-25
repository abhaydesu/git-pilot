import { Navbar } from "../components/navbar";
import { DocsSidebar } from "../components/docsSidebar"; 
import { Footer } from "../components/footer";
export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="text-neutral-200 min-h-screen">
      <Navbar/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex">
          <div className="hidden lg:block md:mt-30  ">
            <DocsSidebar />
          </div>
          <main className="flex-1 min-w-0 pt-28 pb-16">
            {children}
          </main>
        </div>
      </div>
        <Footer />

    </div>
  );
}