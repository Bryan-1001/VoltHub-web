import {
  DownloadSection,
  FeaturesSection,
  HeroSection,
  SiteFooter,
} from "@/components/sections";

export default function HomePage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <HeroSection />
      <FeaturesSection />
      <DownloadSection />
      <SiteFooter />
    </main>
  );
}
