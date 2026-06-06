"use client";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import gsap from "gsap";

export function usePageTransition() {
  const router = useRouter();

  const navigate = useCallback(
    (href) => {
      // Create overlay element
      const overlay = document.createElement("div");
      overlay.style.cssText = `
        position: fixed;
        inset: 0;
        z-index: 9999;
        background: #885B33;
        clip-path: inset(100% 0 0 0);
        pointer-events: all;
      `;
      document.body.appendChild(overlay);

      gsap.to(overlay, {
        clipPath: "inset(0% 0 0% 0)",
        duration: 0.7,
        ease: "power3.inOut",
        onComplete: () => {
          router.push(href);
          // Fade out overlay after navigation
          setTimeout(() => {
            gsap.to(overlay, {
              clipPath: "inset(0% 0 100% 0)",
              duration: 0.6,
              ease: "power3.inOut",
              onComplete: () => overlay.remove(),
            });
          }, 300);
        },
      });
    },
    [router]
  );

  return { navigate };
}