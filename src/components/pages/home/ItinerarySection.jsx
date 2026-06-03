"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const itineraryData = [
  {
    day: "Day 1",
    title: "Welcome Party",
    time: "Evening",
    description:
      "An elegant evening to welcome family and friends. Cocktails, conversations, and the beginning of four unforgettable days.",
    icon: "◈",
    tag: "DAY 01",
  },
  {
    day: "Day 2",
    title: "Mehndi",
    time: "Early Afternoon",
    description:
      "A celebration of colour, artistry, and tradition as intricate mehndi designs mark the start of the wedding festivities.",
    icon: "◈",
    tag: "DAY 02",
  },
  {
    day: "Day 2",
    title: "Sangeet",
    time: "Late Evening",
    description:
      "An evening of music, performances, and dancing as both families come together in celebration.",
    icon: "◈",
    tag: "DAY 02",
  },
  {
    day: "Day 3",
    title: "Rahul Ki Shraadi",
    time: "Early Afternoon",
    description:
      "A cherished family gathering filled with rituals, blessings, and traditions leading into the wedding celebrations.",
    icon: "◆",
    tag: "DAY 03",
  },
  {
    day: "Day 3",
    title: "Reception Dinner",
    time: "Evening",
    description:
      "A refined dinner reception celebrating the newlyweds with exceptional cuisine, heartfelt toasts, and timeless memories.",
    icon: "◈",
    tag: "DAY 03",
  },
  {
    day: "Day 3",
    title: "After Party",
    time: "Late Night – Early Morning",
    description:
      "The celebration continues with music, cocktails, and dancing long into the night.",
    icon: "✦",
    tag: "DAY 03",
  },
  {
    day: "Day 4",
    title: "Farewell",
    time: "Morning",
    description:
      "A heartfelt farewell as family and friends gather one final time before departing with cherished memories.",
    icon: "◈",
    tag: "DAY 04",
  },
];

export default function ItinerarySection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const lineRef = useRef(null);
  const cardsRef = useRef([]);
  const timelineLineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 60, skewY: 3 },
        {
          opacity: 1,
          y: 0,
          skewY: 0,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        subheadingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: subheadingRef.current,
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          delay: 0.4,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: lineRef.current,
            start: "top 85%",
          },
        }
      );

      // Timeline line draw
      gsap.fromTo(
        timelineLineRef.current,
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1,
          duration: 2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: timelineLineRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
          },
        }
      );

      // Cards stagger
      cardsRef.current.forEach((card, i) => {
        const isLeft = i % 2 === 0;

        gsap.fromTo(
          card,
          {
            opacity: 0,
            x: isLeft ? -80 : 80,
            y: 30,
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 82%",
            },
          }
        );

        // Hover effect
        card.addEventListener("mouseenter", () => {
          gsap.to(card, { y: -6, duration: 0.4, ease: "power2.out" });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(card, { y: 0, duration: 0.4, ease: "power2.inOut" });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="Itinerary"
      className="relative min-h-screen BG_Secondary overflow-hidden py-24 px-4"
      style={{ fontFamily: "'Cormorant Garamond', serif" }}
    >
      {/* Background texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A84C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, #C9A84C 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p
            ref={subheadingRef}
            className="Text_Color tracking-[0.4em] text-xs uppercase mb-10"
            style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
          >
            The Celebration Schedule
          </p>

          <div className="">
            <h2
              ref={headingRef}
              className="Text_Color text-[4vw]  Font_Header leading-[4vw]"
              style={{
                // fontSize: "clamp(3rem, 7vw, 6rem)",
                // fontWeight: 300,
                // letterSpacing: "-0.02em",
                // fontStyle: "italic",
              }}
            >
              Our Itinerary
            </h2>
          </div>

          <div
            ref={lineRef}
            className="mx-auto mt-6 h-px origin-left"
            style={{
              width: "120px",
              background:
                "linear-gradient(90deg, transparent, #C9A84C, transparent)",
            }}
          />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central vertical line */}
          <div
            ref={timelineLineRef}
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block"
            style={{
              background:
                "linear-gradient(180deg, transparent, #C9A84C 15%, #C9A84C 85%, transparent)",
              opacity: 0.3,
            }}
          />

          <div className="space-y-12 md:space-y-16">
            {itineraryData.map((event, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`relative flex items-center gap-0 md:gap-8 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col`}
                >
                  {/* Card */}
                  <div
                    ref={(el) => (cardsRef.current[index] = el)}
                    className="w-full md:w-[calc(50%-2.5rem)] group cursor-default"
                  >
                    <div
                      className="relative p-8 BG_Se rounded-sm  overflow-hidden"
                    //   style={{
                    //     background:
                    //       "linear-gradient(135deg, #1A1508 0%, #110E05 100%)",
                    //     borderColor: "rgba(201, 168, 76, 0.15)",
                    //   }}
                    >
                      {/* Card inner glow on hover */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background:
                            "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 70%)",
                        }}
                      />

                      {/* Top border accent */}
                      <div
                        className="absolute top-0 left-0 right-0 h-px group-hover:opacity-100 opacity-40 transition-opacity duration-500"
                        style={{
                          background:
                            "linear-gradient(90deg, transparent, #C9A84C, transparent)",
                        }}
                      />

                      <div className="relative z-10">
                        {/* Tag + Icon row */}
                        <div className="flex items-center justify-between mb-5">
                          <span
                            className="text-[10px] Text_Primary_Color_White tracking-[0.35em] uppercase px-3 py-1 rounded-full"
                            style={{
                              fontFamily: "'Montserrat', sans-serif",
                              
                              border: "1px solid #f5f5f5",
                              background: "rgba(201,168,76,0.05)",
                            }}
                          >
                            {event.tag}
                          </span>
                          <span
                            className="text-2xl Text_Primary_Color_White"
                            
                          >
                            {event.icon}
                          </span>
                        </div>

                        {/* Title */}
                        <h3
                          className="Text_Primary_Color_White mb-2"
                          style={{
                            fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                            fontWeight: 300,
                            letterSpacing: "0.02em",
                            fontStyle: "italic",
                          }}
                        >
                          {event.title}
                        </h3>

                        {/* Divider */}
                        <div
                          className="w-10 h-px mb-4"
                          style={{ background: "#C9A84C" }}
                        />

                        {/* Meta info */}
                        <div
                          className="space-y-1.5 mb-4"
                          style={{
                            fontFamily: "'Montserrat', sans-serif",
                          }}
                        >
                          <p
                            className="text-xs tracking-widest Text_Primary_Color_White"
                          >
                            <span style={{ color: "#C9A84C" }}>◈</span>&nbsp;{" "}
                            {event.date}
                          </p>
                          <p
                            className="text-xs tracking-widest Text_Primary_Color_White"
                           
                          >
                            <span style={{ color: "#C9A84C" }}>◈</span>&nbsp;{" "}
                            {event.time}
                          </p>
                          <p
                            className="text-xs Text_Primary_Color_White tracking-widest"
                            
                          >
                            <span style={{ color: "#C9A84C" }}>◈</span>&nbsp;{" "}
                            {event.venue}
                          </p>
                        </div>

                        {/* Description */}
                        <p
                          className="text-sm Text_Primary_Color_White leading-relaxed"
                          style={{
                            
                            fontFamily: "'Cormorant Garamond', serif",
                            fontSize: "1rem",
                            fontStyle: "italic",
                          }}
                        >
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center z-10">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{
                        background: "#C9A84C",
                        boxShadow: "0 0 12px rgba(201,168,76,0.6)",
                      }}
                    />
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block w-[calc(50%-2.5rem)]" />
                </div>
              );
            })}
          </div>
        </div>

        
      </div>
    </section>
  );
}