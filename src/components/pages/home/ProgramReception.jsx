"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProgramReception() {
  const sectionRef = useRef(null);

  const programItems = [
    { time: "5:00 PM", event: "Welcome Photos & Cocktails" },
    { time: "6:00 PM", event: "Dinner Program" },
    { time: "7:00 PM", event: "Toasts & Speeches" },
    { time: "8:00 PM", event: "Official Picture Taking" },
    { time: "9:00 PM", event: "Open Bar & Dancing" },
  ];

  const receptionInfo = [
    {
      title: "Reception Venue",
      body: "Our reception will take place in The Sunroom at Rizal Gardens — an open-air garden space...",
    },
    {
      title: "Dress Code",
      body: "Garden party chic! Flowy, breathable fabrics and comfortable shoes are encouraged...",
    },
    {
      title: "Parking & Directions",
      body: "Free parking is available on-site...",
    },
  ];

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

    // Left title
    tl.from(".pr-left-title", {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // Program items stagger
    tl.from(".pr-item", {
      y: 40,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out",
    }, "-=0.5");

    // Divider grow
    tl.from(".pr-divider", {
      scaleY: 0,
      transformOrigin: "top",
      duration: 1,
      ease: "power2.out",
    }, "-=1");

    // Right title
    tl.from(".pr-right-title", {
      x: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    }, "-=0.8");

    // Reception content
    tl.from(".pr-reception-item", {
      y: 40,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out",
    }, "-=0.6");

  }, []);

  return (
    <div
      ref={sectionRef}
      id="Details"
      className="grid  grid-cols-[1fr_1px_1fr] gap-x-12 p-12 font-serif BG_Secondary min-h-screen"
    >
      {/* ── Program ── */}
      <div className="flex flex-col justify-center items-start">
        <h2 className="pr-left-title Font_Header text-[5vw] Text_Color mb-8 leading-tight">
          Program
        </h2>

        <div className="w-full">
          {programItems.map(({ time, event }, i) => (
            <div key={i} className="pr-item">
              <div className="grid grid-cols-[90px_1fr] gap-x-6 py-4 items-center">
                <span className="text-xs Text_Color">{time}</span>
                <span className="text-[2vw] Font_Secondary Text_Color">
                  {event}
                </span>
              </div>
              {i < programItems.length - 1 && (
                <div className="h-px bg-[#c5b99a] opacity-50" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="pr-divider bg-[#c5b99a] opacity-40" />

      {/* ── Reception ── */}
      <div className="flex flex-col justify-center items-start">
        <h2 className="pr-right-title Font_Header text-[5vw] Text_Color mb-8">
          Reception
        </h2>

        <div className="flex flex-col gap-6">
          {receptionInfo.map(({ title, body }, i) => (
            <div key={i} className="pr-reception-item">
              <h3 className="text-[2vw] Font_Secondary Text_Color mb-1">
                {title}
              </h3>
              <p className="text-[16px] Font_Secondary Text_Color leading-relaxed">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}