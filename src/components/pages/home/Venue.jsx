"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Venue() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".venue-section",
        start: "top 70%",
        end: "top 30%",
        scrub: true,
      },
    });

    tl.from(".venue-title", {
      y: 80,
      opacity: 0,
      duration: 1,
    });

    tl.from(".venue-img", {
      scale: 1.2,
      opacity: 0,
      duration: 1,
    });

    tl.from(".venue-content", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
    });
  }, []);

  return (
    <section id="Venue" className="venue-section w-full min-h-screen BG_Secondary flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="venue-title text-4xl Font_Header md:text-5xl font-serif Text_Color">
          Our Wedding Venue
        </h2>
        <p className="venue-content mt-4 Text_Color Font_Secondary text-[1.2vw] leading-[1.2vw] max-w-xl mx-auto">
          We are delighted to celebrate our special day at a beautiful location
          surrounded by nature and elegance.
        </p>
      </div>

      {/* Content */}
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-20 items-center">
        
        {/* Image */}
        <div className="venue-img w-full h-[400px] overflow-hidden rounded-2xl shadow-lg">
          <img
            src="/img/home/venu.jpg" // replace with your image
            alt="Wedding Venue"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col gap-6">
          
          <div className="venue-content">
            <h3 className="text-[2.5vw] Font_Header Text_Color">
              The Royal Palace Gardens
            </h3>
            <p className="Text_Color mt-2 text-[1.2vw] leading-[1.2vw] Font_Secondary">
              A breathtaking outdoor venue with lush greenery, romantic lighting,
              and a peaceful ambiance perfect for our big day.
            </p>
          </div>

          <div className="venue-content">
            <p className="Text_Color text-[1.2vw] Font_Secondary">
              <span className="font-semibold">📍 Location :</span> Jaipur, Rajasthan, India
            </p>
            <p className="Text_Color text-[1.2vw] Font_Secondary">
              <span className="font-semibold">🗓 Date :</span> 25 December 2026
            </p>
            <p className="Text_Color text-[1.2vw] Font_Secondary">
              <span className="font-semibold">⏰ Time :</span> 4:00 PM onwards
            </p>
          </div>

          <div className="venue-content">
            <p className="Text_Color text-[1.2vw] leading-[1.2vw] Font_Secondary">
              Join us as we exchange vows under the open sky, followed by dinner,
              music, and celebrations with our loved ones.
            </p>
          </div>

          {/* Button */}
          <div className="venue-content">
            <a
              href=""
              target="_blank"
              className="inline-block mt-4 px-6 py-3 BG_Se text-white rounded-full hover:bg-gray-800 transition"
            >
              View on Map
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}