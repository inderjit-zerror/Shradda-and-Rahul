"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BostonStory() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Header

      gsap.from(".story-header", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".story-header",
          start: "top 80%",
        },
      });

      // Hero Image Reveal

      gsap.from(".hero-image", {
        clipPath: "inset(100% 0% 0% 0%)",
        duration: 1.6,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: ".hero-image",
          start: "top 85%",
        },
      });

      gsap.from(".hero-img", {
        scale: 1.25,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".hero-image",
          start: "top 85%",
        },
      });

      // Story Copy

      gsap.from(".story-copy", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".story-copy",
          start: "top 85%",
        },
      });

      // Gallery Images

      gsap.from(".gallery-item", {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".gallery-section",
          start: "top 75%",
        },
      });

      // Quote

      gsap.from(".quote", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".quote",
          start: "top 85%",
        },
      });

      // Smooth Parallax

      gsap.to(".parallax", {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
    ref={sectionRef}
    className="bg-[#1f2b34] text-white overflow-hidden"
  >
    <div className="mx-auto w-[90vw] px-8">
      {/* Hero */}

      <div className="story-header h-fit py-[15vh] flex flex-col justify-center">
        <p className="uppercase tracking-[0.4em] text-white/50 mb-8">
          Dosti In Boston
        </p>

        <h1 className="text-6xl font-serif md:text-7xl font-light leading-none">
          BU
        </h1>

        <p className="mt-10 max-w-2xl text-xl md:text-2xl text-white/70 font-light leading-relaxed">
          The state of knowing yet not knowing each other.
        </p>
      </div>

      {/* Divider */}

      <div className="h-px bg-white/10 mb-2" />

      {/* Beyond BU */}

      <div className="story-copy min-h-screen flex flex-col justify-center">
        <p className="uppercase tracking-[0.4em] text-white/50 mb-8">
          Beyond BU
        </p>

        <h2 className="text-5xl font-serif md:text-7xl font-light leading-tight mb-16">
          Officially met
          <br />
          post-BU.
        </h2>

        <div className="max-w-3xl space-y-8 text-lg md:text-2xl mb-[10vh] text-white/75 leading-relaxed">
          <p>At a work party.</p>

          <p>Nights out.</p>

          <p>Mario Kart.</p>

          <p>Fondness.</p>

          <p>Fun.</p>

          <p>Traffic light.</p>

          <p>Filmi farewell.</p>
        </div>
      </div>
    </div>
  </section>
  );
}