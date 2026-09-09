import Breadcrumb from "@/components/Breadcrumb";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Project Gallery | Al Attaf Advanced Contracting Company",
  description:
    "Explore high-resolution visual highlights from our turnkey industrial, civil construction, heavy equipment mobilization, and logistics projects across Saudi Arabia.",
};

export default function GalleryPage() {
  return (
    <div className="flex flex-col flex-1 w-full bg-white">
      {/* Top Breadcrumb Banner */}
      <Breadcrumb
        title="Project Gallery"
        description="A visual showcase of our contracting proficiency, advanced equipment fleet, and infrastructure execution across the Kingdom of Saudi Arabia."
        image="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920"
        items={[{ label: "Gallery" }]}
        showVisionLogo
      />

      {/* Main Gallery Section with 3 in a row, 4 rows (12 per page) and pagination */}
      <GallerySection />

      {/* Page Footer */}
      <Footer />
    </div>
  );
}
