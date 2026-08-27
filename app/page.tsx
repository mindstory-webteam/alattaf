import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import CoverageSection from "@/components/CoverageSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 w-full bg-white">
      <HeroSection />
      <AboutSection />
      <CoverageSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}
