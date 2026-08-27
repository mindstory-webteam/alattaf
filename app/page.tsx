import HeroSection from "@/components/HeroSection";
import CoverageSection from "@/components/CoverageSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 w-full bg-white">
      <HeroSection />
      <CoverageSection />
      <Footer />
    </div>
  );
}
