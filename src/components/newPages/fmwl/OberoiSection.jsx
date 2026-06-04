"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function OberoiSection() {
  const sectionRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.3,
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#EFE7DA] py-32 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <img
              src={`/img/home/image2.png`}
              alt="Oberoi Marrakech"
              className="rounded-3xl object-cover object-center aspect-square shadow-2xl"
            />
          </div>

          <div>
            <p className="uppercase tracking-[0.3em] text-[#B28C57] text-sm mb-4">
              The Wedding Venue
            </p>

            <h2 className="text-5xl font-serif mb-8">
              The Oberoi,
              <br />
              Marrakech
            </h2>

            <h3 className="text-xl italic mb-6">
              A Home Away From Home
            </h3>

            <p className="leading-relaxed text-neutral-700 mb-6">
              Set among lush citrus orchards and olive
              groves, The Oberoi Marrakech blends
              Moroccan artistry with timeless Indian
              heritage.
            </p>

            <p className="leading-relaxed text-neutral-700 mb-6">
              From intricately carved cedar ceilings
              handcrafted by over 250 artisans to
              marble courtyards inspired by Moorish
              palaces, every detail reflects a level
              of craftsmanship and elegance that felt
              unmistakably us.
            </p>

            <p className="leading-relaxed text-neutral-700 mb-10">
              While many guests will stay across
              Marrakech, The Oberoi serves as the
              heart of our wedding celebrations —
              bringing everyone together within one
              extraordinary setting overlooking the
              Atlas Mountains.
            </p>

            {/* <div className="grid grid-cols-2 gap-5">
              <div className="bg-white p-5 rounded-2xl">
                <h4 className="font-semibold mb-2">
                  Location
                </h4>
                <p className="text-sm">
                  20 min from Medina
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl">
                <h4 className="font-semibold mb-2">
                  Setting
                </h4>
                <p className="text-sm">
                  Gardens & Atlas Views
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl">
                <h4 className="font-semibold mb-2">
                  Amenities
                </h4>
                <p className="text-sm">
                  Spa, Dining, Concierge
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl">
                <h4 className="font-semibold mb-2">
                  Guest Services
                </h4>
                <p className="text-sm">
                  Transfers & Assistance
                </p>
              </div>
            </div> */}
          </div>
        </div>

        {/* <div className="mt-24 max-w-5xl mx-auto">
          <blockquote className="text-center text-2xl md:text-3xl font-serif leading-relaxed text-[#3C3229]">
            “The Oberoi Marrakech is a monument to
            artisanal refinement and patience...
            a grand noble home in which you feel
            like the family’s personal guest.”
          </blockquote>
        </div> */}
      </div>
    </section>
  );
}