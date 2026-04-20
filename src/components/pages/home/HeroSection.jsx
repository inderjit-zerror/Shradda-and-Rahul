"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Background zoom effect
    tl.from(".hero-img", {
      scale: 1.3,
      duration: 2,
      ease: "power3.out",
    });

    // Sub text animation
    tl.from(".hero-sub", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    }, "-=1.2");

    // Heading stagger animation
    tl.from(".hero-title span", {
      y: 80,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
    }, "-=0.8");

  }, []);

  return (
    <div ref={containerRef} id="Home" className="w-full h-svh p-5 BG_Primary">
      <div className="w-full h-full overflow-hidden relative">

        {/* Background Image */}
        <img
          src="/img/home/HeroBG.jpg"
          alt="IMG"
          className="hero-img w-full h-full object-cover object-center"
        />

        {/* Overlay Content */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">

          <p className="hero-sub uppercase text-[2vw] leading-[2vw] text-white/80 text-center Font_Secondary">
            Welcome You TO <br /> The Wedding OF
          </p>

          <h1 className="hero-title Font_Header Text_Primary_Color_White text-[8vw] leading-[8vw] text-center">
            <span className="block">Shradda &</span>
            <span className="block">Rahul</span>
          </h1>

        </div>

      </div>
    </div>
  );
};

export default HeroSection;