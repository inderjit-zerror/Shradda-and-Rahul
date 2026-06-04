"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const attractions = [
  {
    name: "The Oberoi",
    top: "55%",
    left: "68%",
  },
  {
    name: "Jemaa el-Fnaa",
    top: "45%",
    left: "42%",
  },
  {
    name: "Bahia Palace",
    top: "48%",
    left: "48%",
  },
  {
    name: "Majorelle Garden",
    top: "30%",
    left: "38%",
  },
  {
    name: "Koutoubia Mosque",
    top: "40%",
    left: "45%",
  },
  {
    name: "Atlas Mountains",
    top: "72%",
    left: "25%",
  },
];

export default function MarrakechMap() {
  const mapRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      mapRef.current,
      {
        scale: 1.2,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1.8,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <p className="uppercase tracking-[0.3em] text-sm text-[#B28C57] mb-4">
            Marrakech, Morocco
          </p>

          <h2 className="text-5xl font-serif mb-8">
            The Land of God
          </h2>

          <p className="text-lg leading-relaxed text-neutral-700">
            Rooted in the Berber phrase
            <em> "murr akush"</em>,
            Marrakech translates to
            <strong> "The Land of God."</strong>

            A city where ancient traditions,
            vibrant souks, palatial gardens,
            and breathtaking landscapes
            come together in unforgettable harmony.
          </p>
        </div>

        <div
          ref={mapRef}
          className="relative rounded-3xl overflow-hidden shadow-2xl"
        >
          <img
            src={`/img/home/image.png`}
            alt="Marrakech Map"
            className="w-full h-full object-cover object-center aspect-square"
          />

          {/* {attractions.map((item) => (
            <div
              key={item.name}
              className="absolute group"
              style={{
                top: item.top,
                left: item.left,
              }}
            >
              <div className="w-4 h-4 rounded-full bg-[#D4A45B] animate-pulse" />

              <div className="absolute left-6 top-0 whitespace-nowrap bg-white px-3 py-1 rounded-full text-xs shadow opacity-0 group-hover:opacity-100 transition">
                {item.name}
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
}