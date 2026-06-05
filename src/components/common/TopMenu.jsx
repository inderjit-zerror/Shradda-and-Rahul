"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useRef } from "react";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    img: "/newImg/ICON 1.png",
    title: "Pyaar Dosti Hai",
    link: "/pyaar-dosti-hai",
  },
  {
    img: "/newImg/ICON 2.png",
    title: "From Marrakech, with Love",
    link: "/from-marrakech-with-love",
  },
  {
    img: "/newImg/ICON 3.png",
    title: "Wedding Itinerary",
    link: "/wedding-itinerary",
  },
  {
    img: "/newImg/ICON 4.png",
    title: "Travel and FAQs",
    link: "/faq",
  },
];

export default function TopMenu() {
 const menuRef = useRef(null);
const pathname = usePathname();

useGSAP(
  () => {
    if (pathname === "/") return;

    const items = gsap.utils.toArray(".menu-item");

    items.forEach((item) => {
      const icon = item.querySelector(".menu-icon");
      const text = item.querySelector(".menu-text");
      const glow = item.querySelector(".menu-glow");

      const enter = () => {
        gsap.to(icon, {
          y: -8,
          scale: 1.15,
          duration: 0.45,
          ease: "back.out(2)",
        });

        gsap.to(text, {
          y: -3,
          duration: 0.35,
          ease: "power2.out",
        });

        gsap.to(glow, {
          opacity: 1,
          scale: 1.3,
          duration: 0.4,
          ease: "power2.out",
        });
      };

      const leave = () => {
        gsap.to(icon, {
          y: 0,
          scale: 1,
          duration: 0.4,
          ease: "power3.out",
        });

        gsap.to(text, {
          y: 0,
          duration: 0.3,
          ease: "power3.out",
        });

        gsap.to(glow, {
          opacity: 0,
          scale: 0.8,
          duration: 0.3,
          ease: "power3.out",
        });
      };

      item.addEventListener("mouseenter", enter);
      item.addEventListener("mouseleave", leave);

      return () => {
        item.removeEventListener("mouseenter", enter);
        item.removeEventListener("mouseleave", leave);
      };
    });
  },
  {
    scope: menuRef,
    dependencies: [pathname],
  }
);

if (pathname === "/") {
  return null;
}

  return (
    <header className="fixed top-0  w-full  z-999">
      <div className="mx-auto max-w-[1600px] px-4 lg:px-8 py-3">
        <div
          ref={menuRef}
          className={`
            flex
            items-center
            justify-center
            gap-3
            overflow-x-auto
            py-3
            scrollbar-hide
            md:gap-5
            lg:gap-8
          `}
        >
          {menuItems.map((item, index) => (
            <Link href={item.link} key={index} className="flex-shrink-0">
              <div className="menu-item flex flex-col items-center gap-2">
                {/* Icon */}
                <div className="menu-icon relative flex items-center justify-center">
                  {/* Glow */}
                  <div
                    className={`
      menu-glow
      absolute
      h-12
      w-12
      rounded-full
      bg-[#D4AF37]/20
      blur-xl
      opacity-0
      scale-75
      pointer-events-none
    `}
                  />

                  <img
                    src={item.img}
                    alt={item.title}
                    className={`
      relative z-10
      h-8
      w-8
      object-contain
      md:h-10
      md:w-10
    `}
                  />
                </div>

                {/* Text */}
                <p
  className={`
    menu-text
    F1
    max-w-[100px]
    text-center
    text-[10px]
    font-semibold
    uppercase
    leading-tight
    text-[#3A3925]
    md:max-w-[120px]
    md:text-[11px]
    lg:max-w-[140px]
    lg:text-[12px]
  `}
>
                  {item.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
