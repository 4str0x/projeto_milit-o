import Header from "@/components/Header";
import SportsHeroSection from "@/components/SportsHeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import SportsSection from "@/components/SportsSection";
import VideoCarousel from "@/components/VideoCarousel";
import MarketplaceSection from "@/components/MarketplaceSection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <SportsHeroSection />
        <HowItWorksSection />
        <SportsSection />
        <VideoCarousel />
        <MarketplaceSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
}
