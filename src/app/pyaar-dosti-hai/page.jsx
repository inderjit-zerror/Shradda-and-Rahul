"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const destinations = [
  {
    city: "Atlanta",
    date: "08/2022",
    memory: "The beginning of our travel era.",
  },
  {
    city: "Bangkok",
    date: "12/2022",
    memory: "Street food adventures together.",
  },
  {
    city: "Singapore",
    date: "12/2022",
    memory: "Late night skyline walks.",
  },
  {
    city: "New York",
    date: "08/2023",
    memory: "Big city, bigger memories.",
  },
  {
    city: "Ithaca",
    date: "07/2024",
    memory: "Quiet moments, beautiful views.",
  },
  {
    city: "New Orleans",
    date: "07/2024",
    memory: "Music, laughter and endless conversations.",
  },
  {
    city: "Sri Lanka",
    date: "01/2025",
    memory: "Ocean breeze and sunsets.",
  },
  {
    city: "Kampala",
    date: "04/2025",
    memory: "New adventures together.",
  },
  {
    city: "Savannah",
    date: "09/2025",
    memory: "Our civil ceremony.",
  },
  {
    city: "Miami / Key West",
    date: "10/2025",
    memory: "Sunshine and celebration.",
  },
  {
    city: "Egypt",
    date: "12/2025",
    memory: "Ancient wonders together.",
  },
];

export default function PyaarDostiHai() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", {
        y: 80,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
      });

      gsap.from(".hero-sub", {
        y: 40,
        opacity: 0,
        duration: 1.3,
        delay: 0.3,
      });

      gsap.utils.toArray(".fade-up").forEach((item) => {
        gsap.from(item, {
          y: 50,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className=" overflow-hidden">
      {/* HERO */}

      <section
        ref={heroRef}
        className="min-h-screen flex flex-col justify-center items-center px-6 relative"
      >
        <span className="uppercase tracking-[0.4em] text-white text-xs z-10">
          Our Story
        </span>

        <h1 className="hero-title Font_Header text-white text-center text-[16vw] md:text-[10vw] leading-none mt-6 z-10">
          Pyaar
          <br />
          Dosti Hai
        </h1>

        <p className="hero-sub Font_Secondary max-w-xl text-center mt-10 text-[white] leading-relaxed z-10">
          A story that began with friendship, grew through distance, and
          flourished across continents.
        </p>

        {/* <div className="absolute bottom-10 animate-bounce">
          <div className="w-[1px] h-16 bg-[#686e46]" />
        </div> */}

        {/* Background Image */}
        <img
          src="/img/home/HeroBG.jpg"
          alt="IMG"
          className="hero-img w-full h-full absolute top-0 left-0 object-cover object-center z-[-1]"
        />
      </section>

      {/* INTRODUCTION */}

      <section className="py-32 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div className="fade-up">
            <h2 className="Font_Header text-6xl Text_Color mb-8">
              The Meaning
            </h2>

            <p className="Font_Secondary text-neutral-700 leading-loose">
              “Pyaar Dosti Hai” became more than a quote. It became
              a reflection of our journey. Friendship first, love
              naturally following behind.
            </p>
          </div>

          <div className="fade-up BG_Secondary p-12 rounded-[40px]">
            <div className="text-5xl Text_Color mb-4">❝</div>

            <p className="Font_Secondary text-lg leading-loose text-neutral-700">
              Envision a timeline of all the destinations we visited as long-distance lovers. Starts with Covid lockdown- park walk chats to country-hopping to meet. Different countries/ cities are 3D interactive icons on a timeline with single core memory of each location with a photo popping out when toggled i.e. Mumbai 10/2020 is symbolized by a Mumbai taxi tile (kaali peeli), and when toggle mouse over other symbols from our visit pops out (Bademiya, khala ghoda- 2 elements max to keep it focused and clean)
            </p>
          </div>
        </div>
      </section>

      {/* DOSTI IN BOSTON */}

      <section className="BG_Secondary py-32 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="fade-up Font_Header text-center text-6xl Text_Color mb-24">
            Dosti in Boston
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="fade-up bg-white p-10 rounded-[30px]">
              <span className="Text_Color text-sm uppercase">BU</span>

              <h3 className="mt-4 text-3xl Font_Header Text_Color">
                The Beginning
              </h3>

              <p className="mt-6 text-neutral-600">
                The first chapter of a friendship that would shape everything
                that followed.
              </p>
            </div>

            <div className="fade-up bg-white p-10 rounded-[30px]">
              <span className="Text_Color text-sm uppercase">Beyond BU</span>

              <h3 className="mt-4 text-3xl Font_Header Text_Color">
                Knowing Yet Not Knowing
              </h3>

              <p className="mt-6 text-neutral-600">
                Existing in each other's world without fully realizing what the
                future held.
              </p>
            </div>

            <div className="fade-up bg-white p-10 rounded-[30px]">
              <span className="Text_Color text-sm uppercase">
                Officially Met
              </span>

              <h3 className="mt-4 text-3xl Font_Header Text_Color">
                Work Party
              </h3>

              <p className="mt-6 text-neutral-600">
                Nights out, Mario Kart, fondness, laughter and a traffic-light
                filmi farewell.
              </p>
            </div>
          </div>
        </div>
      </section>

      

      {/* JOURNEY */}



      

      <section className="py-32 BG_Primary">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          {/* Heading */}

          <div className="text-center mb-24">
            <span className="Font_Secondary uppercase tracking-[0.3em] text-sm Text_Color">
              Across Continents
            </span>

            <h2 className="Font_Header text-5xl md:text-7xl Text_Color mt-6">
              Pyaar Everywhere
            </h2>

            <p className="max-w-2xl mx-auto mt-8 text-neutral-600">
              From long-distance calls during lockdowns to crossing oceans just
              to spend a few days together.
            </p>
          </div>

          {/* Bento Grid */}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {destinations.map((item, index) => (
              <div
                key={index}
                className={`
            group
            relative
            overflow-hidden
            rounded-[36px]
            border border-[#E5E1D0]
            bg-white
            p-8
            transition-all
            duration-700
            hover:-translate-y-2
            hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)]
            
            ${item.large ? "xl:col-span-2 min-h-[420px]" : "min-h-[280px]"}
          `}
              >
                {/* Number */}

                <span
                  className="
              absolute
              top-6
              right-8
              text-[80px]
              Font_Header
              opacity-[0.1]
              select-none
            "
                >
                  {(index + 1).toString().padStart(2, "0")}
                </span>

                {/* Top */}

                <div className="flex items-center gap-3">
                  <div
                    className="
                w-12
                h-12
                rounded-full
                BG_Se
                flex
                items-center
                justify-center
                text-white
              "
                  >
                    ✈
                  </div>

                  <span className="text-sm Text_Color Font_Secondary">
                    {item.date}
                  </span>
                </div>

                {/* Content */}

                <div className="mt-10">
                  <h3
                    className="
                Font_Header
                text-4xl
                md:text-5xl
                Text_Color
                leading-none
              "
                  >
                    {item.city}
                  </h3>

                  <p
                    className="
                mt-6
                text-neutral-600
                leading-relaxed
                max-w-md
              "
                  >
                    {item.memory}
                  </p>
                </div>

                {/* Hover Accent */}

                <div
                  className="
              absolute
              bottom-0
              left-0
              h-[3px]
              w-0
              BG_Se
              transition-all
              duration-700
              group-hover:w-full
            "
                />

                {/* Background Glow */}

                <div
                  className="
              absolute
              -right-20
              -top-20
              w-52
              h-52
              rounded-full
              bg-[#686e46]
              opacity-0
              blur-[100px]
              transition-all
              duration-700
              group-hover:opacity-10
            "
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENDING */}

      <section className="BG_Se py-40 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="Font_Header text-white text-6xl md:text-8xl leading-tight">
            From Friendship
            <br />
            To Forever
          </h2>

          {/* <p className="mt-12 text-white/80 max-w-2xl mx-auto">
            Across cities, countries, oceans and years, our story remained
            beautifully simple — Pyaar Dosti Hai.
          </p> */}
        </div>
      </section>
    </main>
  );
}
