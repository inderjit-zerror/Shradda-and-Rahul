import Countdown from "@/components/pages/home/Countdown";
import FAQ from "@/components/pages/home/FAQ";
import HeroSection from "@/components/pages/home/HeroSection";
import ItinerarySection from "@/components/pages/home/ItinerarySection";
import LastSection from "@/components/pages/home/LastSection";
import Message from "@/components/pages/home/Message";
import ProgramReception from "@/components/pages/home/ProgramReception";
import Semple from "@/components/pages/home/Semple";
import Venue from "@/components/pages/home/Venue";


export default function Home() {
  return (
   <>
   <HeroSection />
   <Message />
   <Countdown/>
   <Semple />
   <ProgramReception />
   <Venue />
   <ItinerarySection/>
   <FAQ />
   <LastSection />
   </>
  );
}
