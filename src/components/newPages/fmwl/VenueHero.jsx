"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function VenueHero() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Background zoom animation
      tl.fromTo(
        bgRef.current,
        {
          scale: 1.2,
        },
        {
          scale: 1,
          duration: 2.5,
          ease: "power3.out",
        }
      );

      // Content reveal animation
      tl.fromTo(
        contentRef.current,
        {
          opacity: 0,
          y: 80,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: "power3.out",
        },
        "-=2"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: "url('/img/home/Speed.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 text-center text-white max-w-4xl px-6"
      >
        <p className="uppercase tracking-[0.35em] text-sm mb-5">
          Wedding Destination
        </p>

        <h1 className="text-5xl md:text-8xl font-serif leading-none">
          From Marrakech,
          <br />
          with Love
        </h1>
      </div>
    </section>
  );
}