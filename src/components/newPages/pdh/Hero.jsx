"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".left-panel", {
        clipPath: "inset(0 100% 0 0)",
        duration: 1.6,
        ease: "power4.inOut",
      })
        .from(
          ".hero-title span",
          {
            yPercent: 120,
            opacity: 0,
            stagger: 0.04,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.8"
        )
        .from(
          ".hero-subtitle",
          {
            y: 40,
            opacity: 0,
            duration: 1,
          },
          "-=0.5"
        );
    }, heroRef);

    const hero = heroRef.current;

    const moveImages = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;

      gsap.to(".hero-img", {
        x,
        y,
        duration: 1.5,
        ease: "power3.out",
        overwrite: "auto",
      });
    };

    hero?.addEventListener("mousemove", moveImages);

    return () => {
      hero?.removeEventListener("mousemove", moveImages);
      ctx.revert();
    };
  }, []);

  const title = "Pyaar Dosti Hai".split("");

  return (
    <section
      ref={heroRef}
      className="relative h-screen overflow-hidden bg-white"
    >
      <div className="absolute inset-0 w-full">
        <div
          className="left-panel w-full h-full overflow-hidden"
          style={{
            clipPath: "inset(0 0 0 0)",
          }}
        >
          <img
            src="/img/home/HeroBG.jpg"
            alt=""
            className="hero-img h-full w-full object-cover object-center scale-110 brightness-[0.7]"
          />
        </div>
      </div>

      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/70" /> */}

      <div className="relative z-20 flex h-full flex-col items-center justify-center text-center px-[5vw]">
        <p className="hero-subtitle uppercase tracking-[0.4rem] text-white/70 text-[0.8rem] mb-[1.5rem]">
          (Our Story)
        </p>

        <h1 className="hero-title flex flex-wrap justify-center overflow-hidden font-serif font-light text-white leading-[0.9] text-[14vw] md:text-[7vw]">
          {title.map((char, i) => (
            <span key={i} className="inline-block">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
      </div>
    </section>
  );
}