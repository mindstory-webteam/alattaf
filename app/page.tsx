import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HomeVisionMission from "@/components/HomeVisionMission";
import WorkProcessSection from "@/components/WorkProcessSection";
import ServicesSection from "@/components/ServicesSection";
import CoverageSection from "@/components/CoverageSection";
import ProjectsSection from "@/components/ProjectsSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 w-full bg-white">
      <HeroSection />
      <AboutSection />
      <WorkProcessSection />
      <ServicesSection />
      <CoverageSection />
      <ProjectsSection />
      <HomeVisionMission />
      <FaqSection />
      <Footer />
    </div>
  );
}

