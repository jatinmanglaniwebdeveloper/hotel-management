import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import RoomsSection from "@/components/RoomsSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ width: '100%', overflowX: 'hidden' }}>
      <Navbar />
      <HeroSlider />
      <RoomsSection />
      <AmenitiesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}