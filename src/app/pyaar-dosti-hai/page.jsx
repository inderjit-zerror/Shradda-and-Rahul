import Destiny from "@/components/newPages/pdh/Destiny";
import Hearts from "@/components/newPages/pdh/Hearts";
import HomeHeroSection from "@/components/newPages/pdh/HomeHeroSection";
import Line from "@/components/newPages/pdh/Line";
import WeddingHero from "@/components/newPages/pdh/WeddingHero";
import Countdown from "@/components/pages/home/Countdown";

const page = () => {
  return (
    <>
    <HomeHeroSection/>
    <WeddingHero />
    
    <Countdown/>
    <Hearts/>
    <Destiny />
      
    </>
  );
};

export default page;
