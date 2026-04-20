"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Message = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "top 30%",
        toggleActions: "play none none none",
        // markers: true,
      },
    });

    // Left text
    tl.from(".msg-left", {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // Center image
    tl.from(
      ".msg-img",
      {
        scale: 0.8,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      },
      "-=0.7",
    );

    // Right text
    tl.from(
      ".msg-right",
      {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=1",
    );

    // Bottom paragraph
    tl.from(
      ".msg-para",
      {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.5",
    );
  }, []);

  return (
    <div ref={sectionRef} id="OurStory" className="BG_Secondary w-full h-svh flex flex-col">
      <div className="w-full h-[80vh] flex">
        {/* Left */}
        <div className="w-1/3 h-full flex justify-center items-center">
          <h2 className="msg-left uppercase text-[2vw] leading-[2vw] Font_Secondary Text_Color">
            Over Love <br /> Afirytale
          </h2>
        </div>

        {/* Center Image */}
        <div className="w-1/3 h-full flex justify-center items-center">
          <img
            src="/img/home/Message.png"
            alt="IMG"
            className="msg-img w-[90%] object-cover object-center"
          />
        </div>

        {/* Right */}
        <div className="w-1/3 h-full flex justify-center items-center">
          <h2 className="msg-right uppercase text-[2vw] leading-[2vw] Font_Secondary Text_Color">
            A memory <br /> A story
          </h2>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="w-full h-[20vh] flex justify-center items-start">
        <p className="msg-para w-1/2  text-center text-[1.2vw] leading-[1.2vw] Font_Secondary Text_Color">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit esse
          adipisci unde facere incidunt, accusantium maiores quos magnam
          voluptatibus, perferendis temporibus tempore, cum veniam praesentium
          eos veritatis aperiam corrupti minus tempora saepe illo sequi ad.
          Deleniti accusamus necessitatibus voluptas qui!
        </p>
      </div>
    </div>
  );
};

export default Message;
