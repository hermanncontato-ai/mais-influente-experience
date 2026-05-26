import HeroSection from "@/components/HeroSection";
import ConceptSection from "@/components/ConceptSection";
import CoverStorySection from "@/components/CoverStorySection";
import InteractiveIndex from "@/components/InteractiveIndex";
import FeaturedStories from "@/components/FeaturedStories";
import EditorialGallery from "@/components/EditorialGallery";
import AdvertisersSection from "@/components/AdvertisersSection";
import MonetizationBlock from "@/components/MonetizationBlock";
import NewsletterSection from "@/components/NewsletterSection";
import AdvertiserCTA from "@/components/AdvertiserCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      {/* 1. Hero — fullscreen cinematic entry */}
      <HeroSection />

      {/* 2. Concept — editorial digital experience pitch */}
      <ConceptSection />

      {/* 3. Cover Story — Karla Felmanas parallax section */}
      <CoverStorySection />

      {/* 4. Interactive Index — all magazine sections */}
      <InteractiveIndex />

      {/* 5. Featured Stories — 4 editorial blocks */}
      <FeaturedStories />

      {/* 6. Editorial Gallery — masonry image grid */}
      <EditorialGallery />

      {/* 7. Advertisers — premium partner cards */}
      <AdvertisersSection />

      {/* 8. Monetization — 3-column commercial block */}
      <MonetizationBlock />

      {/* 9. Newsletter — email capture */}
      <NewsletterSection />

      {/* 10. Advertiser CTA — strong call to action */}
      <AdvertiserCTA />

      {/* 11. Footer — premium closing */}
      <Footer />
    </main>
  );
}
