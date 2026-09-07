import Breadcrumb from "@/components/Breadcrumb";
import ContactPageSection from "@/components/ContactPageSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact Us | Al Attaf Advanced Contracting Company",
  description:
    "Connect with our contracts, procurement, and operations teams for prompt quotations, site consultations, and turnkey project support across Saudi Arabia.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col flex-1 w-full bg-white">
      <Breadcrumb
        title="Contact Us"
        description="Connect with our contracts, procurement, and operations teams for prompt quotations, site consultations, and turnkey project support across the Kingdom."
        image="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1920"
        items={[{ label: "Contact Us" }]}
        showVisionLogo
      />

      <ContactPageSection />

      <Footer />
    </div>
  );
}
