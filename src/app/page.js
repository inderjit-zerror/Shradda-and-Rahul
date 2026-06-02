"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const menuItems = [
  { img: "/elements/ICON 1_15_11zon.png", title: "Pyaar Dosti Hai" },
  { img: "/elements/ICON 2_16_11zon.png", title: "From Marrakech, with Love" },
  { img: "/elements/ICON 3_17_11zon.png", title: "Wedding Itinerary" },
  { img: "/elements/4_14_11zon.png", title: "Travel and FAQs" },
];

const Home = () => {
  const mainRef = useRef(null);
  const leftDoorRef = useRef(null);
  const rightDoorRef = useRef(null);
  const frontBuildingRef = useRef(null);
  const doorContainerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      // Doors Open
      tl.to(
        leftDoorRef.current,
        {
          rotateY: -110,
          ease: "none",
        },
        "scene",
      )
        .to(
          rightDoorRef.current,
          {
            rotateY: 110,
            ease: "none",
          },
          "scene",
        )
        .to(doorContainerRef.current, {
          autoAlpha: 0,
          duration: 0.01,
        });

      // Building Zoom
      tl.to(
        frontBuildingRef.current,
        {
          scale: 7,
          ease: "none",
        },
        "zoom",
      );

      // Side Decorations
      tl.to(
        ".BuildingElementL",
        {
          left: "0%",
          bottom: "-80%",
          ease: "none",
        },
        "zoom",
      );

      tl.to(
        ".BuildingElementR",
        {
          right: "0%",
          bottom: "-80%",
          ease: "none",
        },
        "zoom",
      );

      // Wedding Text Animation
      tl.from(
        ".wedding-subtitle",
        {
          y: 80,
          opacity: 0,
          scale: 0.8,
          ease: "back.out(1.7)",
        },
        "zoom+=0.05",
      );

      tl.from(
        ".wedding-title",
        {
          y: 100,
          opacity: 0,
          scale: 0.7,
          ease: "back.out(1.7)",
        },
        "zoom+=0.15",
      );

      // Menu Animation
      tl.from(
        ".menu-item",
        {
          y: 80,
          opacity: 0,
          scale: 0.7,
          stagger: 0.15,
          ease: "back.out(1.7)",
        },
        "zoom+=0.3",
      );

      const weddingTitle = document.querySelector(".wedding-title");
      const weddingSubtitle = document.querySelector(".wedding-subtitle");

      if (weddingTitle) {
        weddingTitle.addEventListener("mouseenter", () => {
          gsap.to(weddingTitle, {
            scale: 1.05,
            duration: 0.4,
            ease: "power2.out",
          });
        });

        weddingTitle.addEventListener("mouseleave", () => {
          gsap.to(weddingTitle, {
            scale: 1,
            duration: 0.4,
            ease: "power2.out",
          });
        });
      }

      if (weddingSubtitle) {
        weddingSubtitle.addEventListener("mouseenter", () => {
          gsap.to(weddingSubtitle, {
            y: -4,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        weddingSubtitle.addEventListener("mouseleave", () => {
          gsap.to(weddingSubtitle, {
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      }

      // Hover Animation
      const menuItemsEl = gsap.utils.toArray(".menu-item");

      menuItemsEl.forEach((item) => {
        const icon = item.querySelector(".menu-icon");

        const enter = () => {
          gsap.to(icon, {
            scale: 1.15,
            rotation: 8,
            duration: 0.4,
            ease: "power2.out",
          });
        };

        const leave = () => {
          gsap.to(icon, {
            scale: 1,
            rotation: 0,
            duration: 0.4,
            ease: "power2.out",
          });
        };

        item.addEventListener("mouseenter", enter);
        item.addEventListener("mouseleave", leave);

        item._enter = enter;
        item._leave = leave;
      });

      return () => {
        menuItemsEl.forEach((item) => {
          item.removeEventListener("mouseenter", item._enter);
          item.removeEventListener("mouseleave", item._leave);
        });
      };
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="relative h-[300vh] w-full">
      <div className="sticky top-0 left-0 h-screen w-full overflow-hidden bg-[#F5F5F5]">
        {/* Building */}
        <img
          ref={frontBuildingRef}
          src="/elements/FRAME_11zon.png"
          alt=""
          className="relative z-50 h-full w-full object-cover object-top pointer-events-none will-change-transform"
        />

        {/* Side Plants */}
        <div className="BuildingElementL absolute bottom-0 left-[25%] z-[60] flex aspect-square w-1/6 items-center justify-center">
          <img
            src="/elements/PLANT TALL_10_11zon.png"
            alt=""
            className="h-full object-cover"
          />
        </div>

        <div className="BuildingElementR absolute bottom-0 right-[25%] z-[60] flex aspect-square w-1/6 items-center justify-center">
          <img
            src="/elements/PLANT TALL_10_11zon.png"
            alt=""
            className="h-full object-cover"
          />
        </div>

        {/* Doors */}
        <div
          ref={doorContainerRef}
          className="absolute bottom-27 left-1/2 z-40 h-[58vh] w-1/5 -translate-x-1/2"
          style={{ perspective: "1200px" }}
        >
          <div className="relative flex h-full w-full">
            <div
              ref={leftDoorRef}
              className="h-full w-1/2 bg-[#F5F5F5]"
              style={{
                transformOrigin: "left center",
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
              }}
            >
              <img
                src="/elements/DOOR LEFT_1_11zon.png"
                alt=""
                className="w-full object-cover object-top"
              />
            </div>

            <div
              ref={rightDoorRef}
              className="h-full w-1/2 bg-[#F5F5F5]"
              style={{
                transformOrigin: "right center",
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
              }}
            >
              <img
                src="/elements/DOOR RIGHT_2_11zon.png"
                alt=""
                className="w-full object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">

          {/* logo */}
          <div className="w-[80px] aspect-square absolute top-[2%] left-1/2 -translate-x-1/2">
          <img src={`/elements/logo.png`} className="w-full object-cover object-center" />
          </div>


          <div className="wedding-container text-center pb-[8vh]">
            <p className="wedding-subtitle Font_Secondary cursor-pointer">
              The Wedding Of
            </p>

            <h1 className="wedding-title Font_Secondary cursor-pointer">
              Shradda & Rahul
            </h1>
          </div>

          {/* Menu */}
          <div className="grid w-fit grid-cols-4 gap-[3vw]">
            {menuItems.map((item) => (
              <div
                key={item.title}
                className="menu-item flex cursor-pointer flex-col items-center gap-3"
              >
                <div className="menu-icon h-[100px] w-[100px]">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <p className="menu-text Font_Secondary text-[14px] uppercase max-w-[150px] text-center">{item.title}</p>
              </div>
            ))}
          </div>

          {/* Side Frames */}
          <div className="absolute left-0 flex h-screen w-1/4 justify-start">
            <img
              src="/elements/FULLL.png"
              alt=""
              className="h-full object-cover"
            />
          </div>

          <div className="absolute right-0 flex h-screen w-1/4 justify-end">
            <img
              src="/elements/FULLR.png"
              alt=""
              className="h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
