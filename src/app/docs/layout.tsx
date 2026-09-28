import { Navbar } from "../components/navbar";
import { DocsSidebar } from "../components/docsSidebar";
import { Footer } from "../components/footer";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Navbar />
      <div className="mx-auto max-w-[1120px] px-5 pt-36 md:pt-44">
        <div className="flex">
          <div className="hidden w-52 shrink-0 lg:block">
            <DocsSidebar />
          </div>
          <div className="min-w-0 flex-1 pb-28 md:pb-36 lg:pl-16">{children}</div>
        </div>
      </div>
      <Footer cta={false} />
    </div>
  );
}
