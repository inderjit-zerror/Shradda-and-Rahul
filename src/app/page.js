"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const MainContRef = useRef();
  const LeftDoorRef = useRef();
  const RightDoorRef = useRef();
  const FrontBuilding = useRef();
  const DoorCont = useRef();

  useEffect(() => {
    const TL = gsap.timeline({
      scrollTrigger: {
        trigger: MainContRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        // markers: true,
      },
    });

    // Left door swings open to the left (hinge on the left edge)
    TL.to(
      LeftDoorRef.current,
      {
        rotateY: -110,
        ease: "none",
      },
      "a1",
    );

    // Right door swings open to the right (hinge on the right edge)
    TL.to(
      RightDoorRef.current,
      {
        rotateY: 110,
        ease: "none",
      },
      "a1",
    );
    TL.to(DoorCont.current, {
      autoAlpha: 0, // opacity:0 + visibility:hidden
      duration: 0.01,
    });

    TL.to(FrontBuilding.current, {
      scale: 6,
      ease: "none",
    });
  }, []);

  return (
    <div ref={MainContRef} className="w-full h-[300vh] relative">
      <div className="w-full h-screen sticky top-0 left-0 overflow-hidden bg-[#F5F5F5] will-change-transform">
        <img
          ref={FrontBuilding}
          src={`/elements/FRAME_11zon.png`}
          className="w-full h-full object-cover relative object-center z-50 will-change-transform"
        />

        {/* ✅ perspective must be on the PARENT of the rotating elements */}
        <div
          ref={DoorCont}
          className="w-1/5 h-[73vh] opacity-100 absolute z-40 bottom-0 left-1/2 -translate-x-1/2 will-change-transform"
          style={{ perspective: "1200px" }}
        >
          <div className="w-full h-full relative overflow-visible flex will-change-transform">
            {/* Left Door — hinge on LEFT edge */}
            <div
              ref={LeftDoorRef}
              className="w-1/2 h-full will-change-transform"
              style={{
                transformOrigin: "left center",
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
              }}
            >
              <img
                src={`/elements/DOOR LEFT_1_11zon.png`}
                className="w-full object-cover relative object-top will-change-transform"
              />
            </div>

            {/* Right Door — hinge on RIGHT edge */}
            <div
              ref={RightDoorRef}
              className="w-1/2 h-full will-change-transform"
              style={{
                transformOrigin: "right center",
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
              }}
            >
              <img
                src={`/elements/DOOR RIGHT_2_11zon.png`}
                className="w-full object-cover relative object-top will-change-transform"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
