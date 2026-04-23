import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Disclaimer } from "@/components/disclaimer";
import { AppsSection } from "@/components/apps-section";
import { FirmwareSection } from "@/components/firmware-section";
import { GuidesSection } from "@/components/guides-section";
import { TipsSection } from "@/components/tips-section";
import { DocsSection } from "@/components/docs-section";
import { CommunitySection } from "@/components/community-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Disclaimer />
      <AppsSection />
      <FirmwareSection />
      <GuidesSection />
      <TipsSection />
      <DocsSection />
      <CommunitySection />
      <Footer />
    </main>
  );
}
