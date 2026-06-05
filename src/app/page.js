"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const menuItems = [
  { img: "/newImg/ICON 1.png", title: "Pyaar Dosti Hai", link :`/pyaar-dosti-hai` },
  { img: "/newImg/ICON 2.png", title: "From Marrakech, with Love", link :`/from-marrakech-with-love` },
  { img: "/newImg/ICON 3.png", title: "Wedding Itinerary", link :`/wedding-itinerary` },
  { img: "/newImg/ICON 4.png", title: "Travel and FAQs", link :`/faq` },
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
          scale: 9,
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
      <div className="sticky top-0 left-0 h-screen w-full overflow-hidden "> 
        
        <img
          src="/newImg/bg.png"
          alt="iomg"
          className=" w-full h-full object-cover object-center absolute top-0 left-0 z-[-1]"
        />

        {/* Building */}
        <img
          ref={frontBuildingRef}
          src="/newImg/FRAME1.png"
          alt=""
          className="relative z-50  h-full w-full object-cover object-top pointer-events-none will-change-transform"
        />

        {/* Side Plants */}
        {/* <div className="BuildingElementL absolute bottom-0 max-sm:hidden left-[25%] z-[60] flex aspect-square w-1/6 items-center justify-center">
          <img
            src="/elements/PLANT TALL_10_11zon.png"
            alt=""
            className="h-full object-cover"
          />
        </div>

        <div className="BuildingElementR absolute bottom-0 max-sm:hidden right-[25%] z-[60] flex aspect-square w-1/6 items-center justify-center">
          <img
            src="/elements/PLANT TALL_10_11zon.png"
            alt=""
            className="h-full object-cover"
          />
        </div> */}

        {/* Doors */}
        <div
          ref={doorContainerRef}
          className="absolute max-sm:bottom-0  sm:bottom-27 left-1/2 z-40 h-[57vh]   max-sm:h-[70vh] max-sm:w-[70vw] w-1/6 -translate-x-1/2"
          style={{ perspective: "1200px" }}
        >
          <div className="relative flex h-full w-full ">
            <div
              ref={leftDoorRef}
              className="h-full w-1/2 "
              style={{
                transformOrigin: "left center",
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
              }}
            >
              <img
                src="/newImg/DOOR L_1_11zon.png"
                alt=""
                className="w-full object-cover object-top flex translate-x-[2px]"
              />
            </div>

            <div
              ref={rightDoorRef}
              className="h-full w-1/2 "
              style={{
                transformOrigin: "right center",
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
              }}
            >
              <img
                src="/newImg/DOOR R_2_11zon.png"
                alt=""
                className="w-full object-cover object-top flex translate-x-[-2px]"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">

          {/* logo */}
          <div className="w-[60px] aspect-square absolute top-[2%] left-1/2 -translate-x-1/2">
          <img src={`/newImg/logo.png`} className="w-full object-cover object-center" />
          </div>


          <div className="wedding-container text-center pb-[8vh]">
            <p className="wedding-subtitle  F2 font-semibold cursor-pointer">
              The Wedding Of
            </p>

           

            <div className="wedding-title w-[60vw] flex mx-auto">
              <img src={`/img/home/Nam.png`} className="w-full object-cover object-center" />
             </div>
          </div>

          {/* Menu */}
          <div className="grid w-fit grid-cols-4 gap-[3vw] max-sm:grid-cols-2">
            {menuItems.map((item,index) => (
              <Link href={item.link} key={index}>
             
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

                <p className="menu-text F1 font-semibold text-[14px] uppercase max-w-[150px] text-center">{item.title}</p>
              </div>
               </Link>
            ))}
          </div>

          {/* Side Frames */}
          <div className="absolute left-0 flex h-screen  max-sm:hidden w-1/4 justify-start">
            <img
              src="/newImg/L_IMG.png"
              alt=""
              className="h-full object-cover object-center"
            />
          </div>

          <div className="absolute right-0 flex h-svh max-sm:hidden  w-1/4 justify-end">
            <img
              src="/newImg/R_IMG.png"
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
