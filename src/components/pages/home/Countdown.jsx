"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Countdown = () => {
  const targetDate = new Date("2026-11-14T00:00:00");

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: "00", hours: "00", minutes: "00", seconds: "00" };
    }

    return {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
        2,
        "0",
      ),
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(
        2,
        "0",
      ),
      minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(
        2,
        "0",
      ),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
    };
  };

  // 👇 IMPORTANT: stable initial state
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    // run only on client
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(()=>{
    gsap.to('.LINEDIV',{
      height:'100%',
      ease:'none',
      scrollTrigger:{
        trigger:'.LINEDIVCONTAINER',
        start:'top 70%',
        end:'top 20%',
        scrub:true,
        // markers:true
      }
    })
  },[])

  return (
    <>
      <div id="Date" className="bg-[#EFC7A9]">
        <div className="LINEDIVCONTAINER w-full h-[20vh] flex bg-[#EFC7A9] justify-center items-top pt-[8vh]">
          <div className="LINEDIV w-[2px] h-[0%] bg-[#202020] "></div>
        </div>
        {/* ================================================================ */}
        <section className="pb-[10vh]  max-md:pb-[0vh] max-sm:pb-0 pt-20 max-sm:pt-0 w-full   h-fit select-none   max-md:mt-0 flex flex-col justify-center items-center text-center">
          <div className="w-full h-fit flex justify-center gap-10 max-sm:gap-1 text-[#202020] CDD1 F1">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="text-center">
                  <div className="text-[6vw]  leading-[6vw] max-sm:text-[2.5rem] max-sm:leading-[2.5rem] F1  tracking-wide">
                    {item.value}
                  </div>
                  <div className="mt-2 text-[1rem] F1 max-sm:text-[0.7rem] max-sm:leading-[0.7rem]   tracking-widest uppercase">
                    {item.label}
                  </div>
                </div>

                {index !== 3 && (
                  <div className="text-[5vw] max-sm:text-[2rem] font-serif ml-8 max-sm:mx-3">
                    :
                  </div>
                )}
              </div>
            ))}
          </div>

          <h2 className="F1 tracking-widest text-[2vw]  uppercase text-[#202020] mt-10 max-sm:mt-10 CDD1">
            Until the wedding
          </h2>
        </section>
      </div>
    </>
  );
};

export default Countdown;
