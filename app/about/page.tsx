import HeroSection from "@/components/HeroSection";
import Breadcrumb from "@/components/Breadcrumb";

import Footer from "@/components/Footer";
import AboutPageSection from "@/components/AboutPageSection";
import TeamSection from "@/components/TeamMember";
import ResourcesSection from "@/components/ResourcesSection";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 w-full bg-white">
      

<Breadcrumb
  title="About Us"
  description="Two decades of moving cargo, crews, and heavy equipment for infrastructure projects across Saudi Arabia."
  image="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1920"
  items={[{ label: "About Us" }]}
  showVisionLogo
/>

<AboutPageSection/>
<ResourcesSection/>
<TeamSection/>
      
      
      <Footer />
    </div>
  );
}

