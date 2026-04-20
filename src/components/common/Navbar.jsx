"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const navLinks = [
  { name: "Home", href: "#Home" },
  { name: "Our Story", href: "#OurStory" },
  { name: "Wedding Date", href: "#Date" },
  { name: "Details", href: "#Details" },
  { name: "Itinerary", href: "#Itinerary" },
  { name: "Venue", href: "#Venue" },
  { name: "FAQ", href: "#FAQ" },
];

export default function Navbar() {
  const navRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // GSAP animation on load
    gsap.from(navRef.current, {
      y: -80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // Scroll background effect
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all  duration-300 `}
    >
      <div className="flex items-center justify-between px-6 md:px-16  py-10">
        
        {/* Logo */}
        <h1 className="text-xl md:text-2xl Font_Header text-[#C1BBAE] tracking-wide">
          S&R
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="relative text-[16px] text-outline group text-[#C1BBAE] Font_Secondary  transition"
            >
              {link.name}
              
              <div className=" absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-200  group-hover:w-full bg-[#C1BBAE]"></div>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1"
        >
          <span
            className={`block h-[2px] w-6 bg-white transition ${
              isOpen ? "rotate-45 translate-y-[5px]" : ""
            }`}
          ></span>
          <span
            className={`block h-[2px] w-6 bg-white transition ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-[2px] w-6 bg-white transition ${
              isOpen ? "-rotate-45 -translate-y-[5px]" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 py-6 bg-black/90 backdrop-blur-xl">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-neutral-300 hover:text-white text-lg transition"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}