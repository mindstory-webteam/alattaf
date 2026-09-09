import Breadcrumb from "@/components/Breadcrumb";
import ScrollRevealText from "@/components/ScrollRevealText";
import CareerRolesSection from "@/components/CareerRolesSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Careers | Al Attaf Advanced Contracting Company",
  description:
    "Explore career opportunities with Al Attaf Advanced Contracting Company. Join our team driving major infrastructure and contracting projects across Saudi Arabia.",
};

export default function CareerPage() {
  return (
    <div className="flex flex-col flex-1 w-full bg-[#fafafa]">
      {/* Top Breadcrumb Banner */}
      <Breadcrumb
        title="Careers"
        description="Build your future with Al Attaf Advanced Contracting Company. Explore rewarding opportunities to grow with one of Saudi Arabia's premier contracting and logistics teams."
        image="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920"
        items={[{ label: "Careers" }]}
        showVisionLogo
      />

      {/* Career Page Content */}
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:py-16 sm:px-8 lg:px-12">
        <div className="max-w-4xl space-y-4">
          <h2 className="text-xl sm:text-2xl lg:text-[25px] font-bold text-slate-900 tracking-tight leading-snug">
            Build Your Career With Al Attaf
          </h2>
          <ScrollRevealText
            text="High-resolution snapshots from our civil contracting sites, heavy machinery fleet, process fabrication facilities, and nationwide logistics convoys."
            as="p"
            className="text-base sm:text-xl font-semibold leading-relaxed"
          />
        </div>

        {/* Tab Bar Filter (Department Counts + All Locations Dropdown), Roles List & Application Form */}
        <CareerRolesSection />
      </div>

      <Footer />
    </div>
  );
}
