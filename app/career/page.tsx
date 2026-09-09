import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Careers | Al Attaf Advanced Contracting Company",
  description:
    "Explore career opportunities with Al Attaf Advanced Contracting Company. Join our team driving major infrastructure and contracting projects across Saudi Arabia.",
};

export default function CareerPage() {
  return (
    <div className="flex flex-col flex-1 w-full bg-white">
      {/* Top Breadcrumb Banner */}
      <Breadcrumb
        title="Careers"
        description="Build your future with Al Attaf Advanced Contracting Company. Explore rewarding opportunities to grow with one of Saudi Arabia's premier contracting and logistics teams."
        image="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920"
        items={[{ label: "Careers" }]}
        showVisionLogo
      />

      {/* Career Page Content will go here */}
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-8 lg:px-12">
        {/* Placeholder for career listings/sections */}
      </div>

      <Footer />
    </div>
  );
}
