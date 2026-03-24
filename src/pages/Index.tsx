import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import IntroSection from "@/components/IntroSection";
import AtraccionesSection from "@/components/AtraccionesSection";
import GallerySlider from "@/components/GallerySlider";
import StoriesSection from "@/components/StoriesSection";
import HayalBanner from "@/components/HayalBanner";
import PlanesSection from "@/components/PlanesSection";
import ContactSection from "@/components/ContactSection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";

const Index = () => (
  <main className="overflow-x-hidden">
    <Navbar />
    <HeroSection />
    <VideoSection />
    <IntroSection />
    <AtraccionesSection />
    <GallerySlider />
    <StoriesSection />
    <HayalBanner />
    <PlanesSection />
    <ContactSection />
    <MapSection />
    <Footer />
  </main>
);

export default Index;
