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
  const GANESHJI = useRef();
  const MenuRef = useRef();

  const menuItems = [
    { img: "/elements/ICON 1_15_11zon.png", title: "Our Story" },
    { img: "/elements/ICON 2_16_11zon.png", title: "The Venue" },
    { img: "/elements/ICON 3_17_11zon.png", title: "Wedding Itinerary" },
    { img: "/elements/4_14_11zon.png", title: "Travel and FAQs" },
  ];

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

    TL.to(
      FrontBuilding.current,
      {
        scale: 7,
        ease: "none",
      },
      "a2",
    );
    TL.to(
      '.BuildingElementL',
      {
        // scale:2,
        left:'0%',
        bottom:'-80%',
        ease: "none",
      },
      "a2",
    );
    TL.to(
      '.BuildingElementR',
      {
        // scale:2,
        right:'0%',
        bottom:'-80%',
        ease: "none",
      },
      "a2",
    );
    TL.from(
      GANESHJI.current,
      {
        bottom: "-100%",
        ease: "none",
      },
      "a2",
    );
    TL.from(
      ".menu-item",
      {
        y: 80,
        opacity: 0,
        scale: 0.7,
        duration: 1,
        stagger: 0.15,
        ease: "back.out(1.7)",
      },
      "a2+=0.2",
    );

    // =============================================
    const menuItemsEl = gsap.utils.toArray(".menu-item");

    menuItemsEl.forEach((item) => {
      const icon = item.querySelector(".menu-icon");
      const text = item.querySelector(".menu-text");

      item.addEventListener("mouseenter", () => {
        gsap.to(icon, {
          scale: 1.15,
          rotation: 8,
          duration: 0.4,
          ease: "power2.out",
        });

        gsap.to(text, {
          // y: -5,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      item.addEventListener("mouseleave", () => {
        gsap.to(icon, {
          scale: 1,
          rotation: 0,
          duration: 0.4,
          ease: "power2.out",
        });

        gsap.to(text, {
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });
  }, []);

  return (
    <div ref={MainContRef} className="w-full h-[300vh] relative">
      <div className="w-full h-screen sticky top-0 left-0 overflow-hidden bg-[#F5F5F5] will-change-transform">
        <img
          ref={FrontBuilding}
          src={`/elements/FRAME_11zon.png`}
          className="w-full h-full object-cover  relative object-top z-50 will-change-transform pointer-events-none"
        />

        {/* Top VIsible */}

        <div className="w-1/6 aspect-square BuildingElementL absolute bottom-[0%] left-[25%] z-60  flex justify-center items-center">
          <img
            src={`/elements/PLANT TALL_10_11zon.png`}
            className=" h-full object-cover object-center"
          />
        </div>
        <div className="w-1/6 aspect-square BuildingElementR absolute bottom-[0%] right-[25%] z-60 flex justify-center items-center">
          <img
            src={`/elements/PLANT TALL_10_11zon.png`}
            className=" h-full object-cover object-center"
          />
        </div>

        {/* ✅ perspective must be on the PARENT of the rotating elements */}
        <div
          ref={DoorCont}
          className="w-1/5 h-[70vh]  opacity-100 absolute z-40 bottom-0 left-1/2 -translate-x-1/2 will-change-transform pointer-events-none"
          style={{ perspective: "1200px" }}
        >
          <div className="w-full h-full relative overflow-visible flex will-change-transform">
            {/* Left Door — hinge on LEFT edge */}
            <div
              ref={LeftDoorRef}
              className="w-1/2 h-full will-change-transform bg-[#F5F5F5]"
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
              className="w-1/2 h-full will-change-transform bg-[#F5F5F5]"
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

        {/* Inner Part */}
        <div className="w-full h-svh  absolute top-0 left-0 ">
          <div className="w-1/4 aspect-square absolute bottom-[-5%] right-[-5%] z-20">
            <img
              src={`/elements/PLANT SHORT_9_11zon.png`}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="w-1/4 aspect-square absolute bottom-[-5%] left-[-10%] z-20">
            <img
              src={`/elements/ROSES_24_11zon.png`}
              className="w-full h-full object-cover object-center"
            />
          </div>

          <img
            src={`/elements/TREES BACK_13_11zon.png`}
            className="w-full  object-cover object-center"
          />

          {/* GANESH JI */}
          <div
            ref={GANESHJI}
            className="h-[45vh] w-fit absolute bottom-0 left-1/2 -translate-x-1/2 "
          >
            <img
              src={`/elements/GANESH_4_11zon.png`}
              className=" h-full object-cover object-center"
            />
          </div>

          {/* Menu-Bar */}
          <div
            ref={MenuRef}
            className="absolute top-[10%] left-[49%] -translate-x-1/2 grid grid-cols-2 gap-[2vw]"
          >
            {menuItems.map((item) => (
              <div
                key={item.title}
                className="menu-item flex flex-col items-center gap-2 cursor-pointer"
              >
                <div className="menu-icon w-[100px] h-[100px]">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <p className="menu-text">{item.title}</p>
              </div>
            ))}
          </div>

          {/* Hanger-Left */}
          <div className=" absolute top-0 left-[25%] h-[20%]">
            <img
              src={`/elements/LANTERN L_19_11zon.png`}
              className="h-full object-cover object-center"
            />
          </div>
          {/* Hanger-Right */}
          <div className=" absolute top-0 right-[25%] h-[20%]">
            <img
              src={`/elements/LANTERN L_19_11zon.png`}
              className="h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
