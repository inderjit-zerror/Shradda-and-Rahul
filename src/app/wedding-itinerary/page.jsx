"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ── TIMELINE DATA ──────────────────────────────────────────────────────────────
const itineraryData = [
  {
    day: "Day 1",
    title: "Welcome Party",
    time: "PM",
    venue: "The Oberoi, Marrakech",
    description:
      "The festivities begin. Join us for sunset cocktails, great food, familiar faces, and the first of many dance-floor appearances.",
    icon: "",
    tag: "DAY 01",
  },
  {
    day: "Day 2",
    title: "Mehndi",
    time: "Early PM",
    venue: "The Oberoi, Marrakech",
    description:
      "Henna, sunshine, music, and plenty of colour. A relaxed afternoon filled with laughter, celebration, and beautiful traditions.",
    icon: "",
    tag: "DAY 02",
  },
  {
    day: "Day 2",
    title: "Sangeet",
    time: "Late PM",
    venue: "The Oberoi, Marrakech",
    description:
      "The battle of performances begins. Expect dancing, surprises, family rivalries, and enough energy to power Marrakech for a week.",
    icon: "",
    tag: "DAY 02",
  },
  {
    day: "Day 3",
    title: "Rahul Ki Shraadi",
    time: "Early PM",
    venue: "The Oberoi, Marrakech",
    description:
      "A final send-off to Rahul's bachelor days. Come prepared for traditions, laughter, and a few stories best left unpublished.",
    icon: "",
    tag: "DAY 03",
  },
  {
    day: "Day 3",
    title: "Reception Dinner",
    time: "PM",
    venue: "The Oberoi, Marrakech",
    description:
      "An evening of celebration, heartfelt toasts, exceptional food, and the official beginning of the next chapter.",
    icon: "",
    tag: "DAY 03",
  },
  {
    day: "Day 3",
    title: "After Party",
    time: "Late PM – Early AM",
    venue: "Location Revealed Later",
    description:
      "For those still standing. The music gets louder, the shoes come off, and the celebrations continue long after midnight.",
    icon: "",
    tag: "DAY 03",
  },
  {
    day: "Day 4",
    title: "Farewell",
    time: "Morning",
    venue: "The Oberoi, Marrakech",
    description:
      "One final breakfast, a few last hugs, and countless memories packed alongside your luggage for the journey home.",
    icon: "",
    tag: "DAY 04",
  },
];

// ── WARDROBE DATA ─────────────────────────────────────────────────────────────
const wardrobeData = [
  {
    guide: "The Devil Wears Shradda",
    subtitle: "Ladies' Guide",
    icon: "",
    items: [
      { event: "Welcome Party", dress: "Cocktail / Indo-western chic" },
      { event: "Mehndi", dress: "Bright kurta set or lehenga" },
      { event: "Sangeet", dress: "Embellished co-ord or sharara" },
      { event: "Wedding Ceremony", dress: "Full bridal lehenga / saree" },
      { event: "Reception Dinner", dress: "Gown or draped saree" },
      { event: "After Party", dress: "Sequin / party-ready outfit" },
      { event: "Farewell Breakfast", dress: "Relaxed chic — comfort first" },
    ],
    note: "When in doubt, overdo it. Shradda certainly will.",
  },
  {
    guide: "House of Modi",
    subtitle: "Men's Guide",
    icon: "",
    items: [
      { event: "Welcome Party", dress: "Linen kurta or smart casual" },
      { event: "Mehndi", dress: "Colourful kurta-pyjama" },
      { event: "Sangeet", dress: "Embroidered kurta or bandhgala" },
      { event: "Wedding Ceremony", dress: "Sherwani or traditional achkan" },
      { event: "Reception Dinner", dress: "Suit or Indo-western bandhgala" },
      { event: "After Party", dress: "Party shirt — all bets are off" },
      { event: "Farewell Breakfast", dress: "Your most comfortable outfit" },
    ],
    note: "Smart, sharp, and always one step behind the groom.",
  },
];

// ── COMPONENT ─────────────────────────────────────────────────────────────────
export default function ItinerarySection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const lineRef = useRef(null);
  const cardsRef = useRef([]);
  const timelineLineRef = useRef(null);
  const wardrobeHeadingRef = useRef(null);
  const wardrobeCardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Header animations ──
      gsap.fromTo(
        subheadingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: subheadingRef.current, start: "top 85%" },
        },
      );
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 60, skewY: 3 },
        {
          opacity: 1,
          y: 0,
          skewY: 0,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 85%" },
        },
      );
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          delay: 0.4,
          ease: "power3.inOut",
          scrollTrigger: { trigger: lineRef.current, start: "top 85%" },
        },
      );

      // ── Timeline line ──
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
        },
      );

      // ── Timeline cards ──
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        const isLeft = i % 2 === 0;
        gsap.fromTo(
          card,
          { opacity: 0, x: isLeft ? -80 : 80, y: 30 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 82%" },
          },
        );
        card.addEventListener("mouseenter", () =>
          gsap.to(card, { y: -6, duration: 0.4, ease: "power2.out" }),
        );
        card.addEventListener("mouseleave", () =>
          gsap.to(card, { y: 0, duration: 0.4, ease: "power2.inOut" }),
        );
      });

      // ── Wardrobe heading ──
      gsap.fromTo(
        wardrobeHeadingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: wardrobeHeadingRef.current,
            start: "top 85%",
          },
        },
      );

      // ── Wardrobe cards ──
      wardrobeCardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: i * 0.15,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 85%" },
          },
        );
        card.addEventListener("mouseenter", () =>
          gsap.to(card, { y: -6, duration: 0.4, ease: "power2.out" }),
        );
        card.addEventListener("mouseleave", () =>
          gsap.to(card, { y: 0, duration: 0.4, ease: "power2.inOut" }),
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden py-50 px-4"
      style={{ fontFamily: "'Cormorant Garamond', serif" }}
    >
      {/* Background texture */}

      <div className="fixed -left-[5%] top-0 flex h-screen  max-sm:hidden w-1/4 justify-start z-9">
        <img
          src="/newImg/L_IMG.png"
          alt=""
          className="h-full object-cover object-center"
        />
      </div>

      <div className="fixed -right-[5%] top-0 flex h-svh max-sm:hidden  w-1/4 justify-end z-9">
        <img src="/newImg/R_IMG.png" alt="" className="h-full object-cover" />
      </div>

      <div className="w-full h-screen fixed top-0 left-0 ">
        <img
          src="/newImg/bg.png"
          alt="iomg"
          className=" w-full h-full object-cover scale-[1.2] object-center absolute top-0 left-0 z-[-1]"
        />
      </div>
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

      <div className="relative max-w-6xl mx-auto z-999">
        {/* ═══════════════════════════════════════════════════════
            SECTION 1 — OVERVIEW
        ════════════════════════════════════════════════════════ */}
        <div className="text-center mb-24">
          <p
            ref={subheadingRef}
            className="tracking-[0.4em] text-[1rem] F1 font-semibold uppercase mb-6"
            style={{ color: "#1F2B34" }}
          >
            Eat, Sleep, Bhangra, Repeat
          </p>

          <h2
            ref={headingRef}
            className="F2 font-semibold"
            style={{
              color: "#1F2B34",
              fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
              fontWeight: 300,
              letterSpacing: "-0.01em",
              fontStyle: "italic",
              lineHeight: 1.1,
              // fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Wedding Itinerary
            <br />
            <span style={{ fontStyle: "normal", fontWeight: 500 }}></span>
          </h2>

          <div
            ref={lineRef}
            className="mx-auto mt-6 h-px origin-left"
            style={{
              width: "120px",
              background:
                "linear-gradient(90deg, transparent, #C9A84C, transparent)",
            }}
          />

          {/* Overview tiles */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {[
              { day: "Day 01", title: "Welcome Party", events: "1 Event", icon: "✦" },
              { day: "Day 02", title: "Mehndi & Sangeet", events: "2 Events", icon: "✿" },
              { day: "Day 03", title: "Wedding Day", events: "3 Events", icon: "◆" },
              { day: "Day 04", title: "Farewell", events: "1 Event", icon: "☼" },
            ].map((tile, i) => (
              <div
                key={i}
                className="relative p-6 rounded-sm overflow-hidden group cursor-default"
                style={{ backgroundColor: "#1F2B34", border: "1px solid rgba(201,168,76,0.15)" }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }}
                />
                <p
                  className="text-[10px] tracking-[0.3em] uppercase mb-3"
                  style={{ color: "#C9A84C", fontFamily: "'Montserrat', sans-serif" }}
                >
                  {tile.day}
                </p>
                <p className="text-3xl mb-3" style={{ color: "#C9A84C" }}>{tile.icon}</p>
                <h3
                  className="mb-1"
                  style={{
                    color: "#FFFFFF",
                    fontSize: "1.2rem",
                    fontWeight: 400,
                    fontStyle: "italic",
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  {tile.title}
                </h3>
                <p
                  className="text-xs"
                  style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'Montserrat', sans-serif" }}
                >
                  {tile.events}
                </p>
              </div>
            ))}
          </div> */}
        </div>

        {/* ═══════════════════════════════════════════════════════
            SECTION 2 — TIMELINE
        ════════════════════════════════════════════════════════ */}
        {/* <div className="text-center mb-16">
          <p
            className="tracking-[0.4em] text-xs uppercase mb-4"
            style={{ color: "#C9A84C", fontFamily: "'Montserrat', sans-serif" }}
          >
            The Full Schedule
          </p>
          <h2
            style={{
              color: "#1F2B34",
              fontSize: "clamp(2.2rem, 4.5vw, 4rem)",
              fontWeight: 300,
              letterSpacing: "-0.01em",
              fontStyle: "italic",
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Our Itinerary
          </h2>
          <div
            className="mx-auto mt-4 h-px"
            style={{ width: "80px", background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }}
          />
        </div> */}

        {/* Timeline */}
        <div className="relative mb-32">
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
                      className="relative p-8 rounded-sm overflow-hidden"
                      style={{
                        backgroundColor: "#885B33",
                        border: "1px solid rgba(201,168,76,0.15)",
                      }}
                    >
                      {/* Hover inner glow */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background:
                            "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 70%)",
                        }}
                      />
                      {/* Top border accent */}
                      <div
                        className="absolute top-0 left-0 right-0 h-px opacity-40 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background:
                            "linear-gradient(90deg, transparent, #C9A84C, transparent)",
                        }}
                      />

                      <div className="relative z-10">
                        {/* Tag + Icon */}
                        <div className="flex items-center justify-between mb-5">
                          <span
                            className="text-[10px] tracking-[0.35em] uppercase px-3 py-1 rounded-full"
                            style={{
                              fontFamily: "'Montserrat', sans-serif",
                              color: "#FFFFFF",
                              border: "1px solid rgba(255,255,255,0.2)",
                              background: "rgba(201,168,76,0.05)",
                            }}
                          >
                            {event.tag}
                          </span>
                          <span
                            className="text-2xl"
                            style={{ color: "#C9A84C" }}
                          >
                            {event.icon}
                          </span>
                        </div>

                        {/* Title */}
                        <h3
                          className="mb-2"
                          style={{
                            color: "#FFFFFF",
                            fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                            fontWeight: 300,
                            letterSpacing: "0.02em",
                            fontStyle: "italic",
                            fontFamily: "'Cormorant Garamond', serif",
                          }}
                        >
                          {event.title}
                        </h3>

                        {/* Gold divider */}
                        <div
                          className="w-10 h-px mb-4"
                          style={{ background: "#C9A84C" }}
                        />

                        {/* Meta */}
                        <div
                          className="space-y-1.5 mb-4"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          <p
                            className="text-xs tracking-widest"
                            style={{ color: "rgba(255,255,255,0.7)" }}
                          >
                            <span style={{ color: "#C9A84C" }}>◈</span>&nbsp;{" "}
                            {event.day}
                          </p>
                          <p
                            className="text-xs tracking-widest"
                            style={{ color: "rgba(255,255,255,0.7)" }}
                          >
                            <span style={{ color: "#C9A84C" }}>◈</span>&nbsp;{" "}
                            {event.time}
                          </p>
                          <p
                            className="text-xs tracking-widest"
                            style={{ color: "rgba(255,255,255,0.7)" }}
                          >
                            <span style={{ color: "#C9A84C" }}>◈</span>&nbsp;{" "}
                            {event.venue}
                          </p>
                        </div>

                        {/* Description */}
                        <p
                          style={{
                            color: "rgba(255,255,255,0.65)",
                            fontFamily: "'Cormorant Garamond', serif",
                            fontSize: "1rem",
                            fontStyle: "italic",
                            lineHeight: 1.7,
                          }}
                        >
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Centre dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center z-10">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{
                        background: "#885B33",
                        boxShadow: "0 0 12px rgba(201,168,76,0.6)",
                      }}
                    />
                  </div>

                  {/* Opposite spacer */}
                  <div className="hidden md:block w-[calc(50%-2.5rem)]" />
                </div>
              );
            })}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════
            SECTION 3 — WARDROBE GUIDE
        ════════════════════════════════════════════════════════ */}
        <div ref={wardrobeHeadingRef} className="text-center mb-16">
          {/* <p
            className="tracking-[0.4em] text-xs uppercase mb-4"
            style={{ color: "#C9A84C", fontFamily: "'Montserrat', sans-serif" }}
          >
            Dress to Impress
          </p> */}
          <h2
            style={{
              color: "#1F2B34",
              fontSize: "clamp(2.2rem, 4.5vw, 4rem)",
              fontWeight: 300,
              letterSpacing: "-0.01em",
              fontStyle: "italic",
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Wardrobe Guide
          </h2>
          <div
            className="mx-auto mt-4 h-px"
            style={{
              width: "80px",
              background:
                "linear-gradient(90deg, transparent, #C9A84C, transparent)",
            }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {wardrobeData.map((guide, gi) => (
            <div
              key={gi}
              ref={(el) => (wardrobeCardsRef.current[gi] = el)}
              className="relative rounded-sm overflow-hidden group cursor-default"
              style={{
                backgroundColor: "#885B33",
                border: "1px solid rgba(201,168,76,0.15)",
              }}
            >
              {/* Top border accent */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-40 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, #C9A84C, transparent)",
                }}
              />
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.06) 0%, transparent 70%)",
                }}
              />

              <div className="relative z-10 p-8">
                {/* Icon */}
                <div className="text-3xl mb-4" style={{ color: "#C9A84C" }}>
                  {guide.icon}
                </div>

                {/* Guide title */}
                <h3
                  className="mb-1"
                  style={{
                    color: "#FFFFFF",
                    fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
                    fontWeight: 300,
                    fontStyle: "italic",
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  {guide.guide}
                </h3>
                <p
                  className="text-xs tracking-[0.3em] uppercase mb-6"
                  style={{
                    color: "#C9A84C",
                    fontFamily: "'Montserrat', sans-serif",
                  }}
                >
                  {guide.subtitle}
                </p>

                {/* Divider */}
                <div
                  className="w-10 h-px mb-6"
                  style={{ background: "#C9A84C" }}
                />

                {/* Dress list */}
                <div className="space-y-3 mb-6">
                  {guide.items.map((item, ii) => (
                    <div
                      key={ii}
                      className="flex items-start gap-3 py-2"
                      style={{
                        borderBottom: "1px solid rgba(201,168,76,0.08)",
                      }}
                    >
                      <span
                        className="text-xs mt-0.5"
                        style={{ color: "#C9A84C" }}
                      >
                        ◈
                      </span>
                      <div>
                        <p
                          className="text-xs uppercase tracking-widest mb-0.5"
                          style={{
                            color: "rgba(255,255,255,0.45)",
                            fontFamily: "'Montserrat', sans-serif",
                          }}
                        >
                          {item.event}
                        </p>
                        <p
                          style={{
                            color: "#FFFFFF",
                            fontFamily: "'Cormorant Garamond', serif",
                            fontSize: "1rem",
                            fontStyle: "italic",
                          }}
                        >
                          {item.dress}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Note */}
                <p
                  className="text-sm"
                  style={{
                    color: "rgba(255,255,255,0.45)",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    borderTop: "1px solid rgba(201,168,76,0.12)",
                    paddingTop: "1rem",
                  }}
                >
                  {guide.note}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
