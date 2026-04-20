"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Semple = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "top 20%",
        toggleActions: "play none none none",
        // markers: true,
      },
    });

    // Background zoom
    tl.from(".semple-bg", {
      scale: 1.4,
      duration: 2,
      ease: "power3.out",
    });

    // Overlay fade
    tl.from(".semple-overlay", {
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
    }, "-=1.5");

    // Bird image reveal
    tl.from(".semple-bird", {
      scale: 0.6,
      opacity: 0,
      y: 80,
      duration: 1.5,
      ease: "power3.out",
    }, "-=1");

    // Floating animation (continuous)
    gsap.to(".semple-bird", {
      y: 25,
      repeat: -1,
      yoyo: true,
      duration: 3,
      ease: "sine.inOut",
    });

  }, []);

  return (
    <div ref={sectionRef} className="w-full h-svh overflow-hidden relative">
      
      {/* Background */}
      <img
        src="/img/home/Speed.jpg"
        alt="IMG"
        className="semple-bg w-full h-full object-cover object-center"
      />

      {/* Black overlay */}
      <div className="semple-overlay absolute inset-0 bg-black/30"></div>

      {/* Center Content */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
        <img
          src="/img/home/bird.png"
          alt="IMG"
          className="semple-bird w-1/3 object-cover object-center"
        />
      </div>

    </div>
  );
};

export default Semple;