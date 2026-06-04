import BostonStory from "@/components/newPages/BostonStory";
import Footer from "@/components/newPages/pdh/Footer";
import Hero from "@/components/newPages/pdh/Hero";
import Introduction from "@/components/newPages/pdh/Introduction";
import TravelTimeline from "@/components/newPages/pdh/TravelTimeline";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />
      <Introduction />
      <BostonStory />
      <TravelTimeline />
    </>
  );
};

export default page;
