// "use client";

// import { useLayoutEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function Introduction() {
//   const sectionRef = useRef();

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from(".heading-line", {
//         yPercent: 120,
//         stagger: 0.08,
//         duration: 1.4,
//         ease: "power4.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 70%",
//         },
//       });

//       gsap.from(".main-image", {
//         clipPath: "inset(100% 0% 0% 0%)",
//         duration: 1.8,
//         ease: "power4.inOut",
//         scrollTrigger: {
//           trigger: ".main-image",
//           start: "top 80%",
//         },
//       });

//       gsap.from(".floating-image", {
//         y: 120,
//         opacity: 0,
//         rotate: gsap.utils.random(-8, 8),
//         stagger: 0.2,
//         duration: 1.2,
//         ease: "power4.out",
//         scrollTrigger: {
//           trigger: ".image-grid",
//           start: "top 85%",
//         },
//       });

//       gsap.to(".parallax", {
//         yPercent: -15,
//         ease: "none",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top bottom",
//           end: "bottom top",
//           scrub: true,
//         },
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);
//   return (
//     <section
//       ref={sectionRef}
//       className={`
//   relative
//   py-[12rem]
//   bg-[#faf8f5]
//   overflow-hidden
//   `}
//     >
//       <div className="max-w-[110rem] mx-auto px-[6vw]">
//         {/* Heading */}

//         <div className="overflow-hidden">
//           <h2
//             className={`
//         heading-line
//         font-serif
//         text-[20vw]
//         md:text-[5vw]
//         leading-[0.85]
//         tracking-[-0.06em]
//         `}
//           >
//             OUR <br /> STORY
//           </h2>
//         </div>

//         {/* Main Hero Image */}

//         <div
//           className={`
//       main-image
//       relative
//       mt-[5rem]
//       h-[85vh]
//       overflow-hidden
//       rounded-[3rem]
//       `}
//         >
//           <img
//             src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc"
//             className={`
//         parallax
//         h-full
//         w-full
//         object-cover
//         scale-110
//         `}
//           />
//         </div>

//         {/* Story Text */}

//         <div
//           className={`
//       max-w-[50rem]
//       mx-auto
//       text-center
//       py-[8rem]
//       `}
//         >
//           <p
//             className={`
//         text-[1.2rem]
//         md:text-[1.2rem]
//         leading-[1.3rem]
//         text-neutral-600
//         `}
//           >
//             Envision a timeline of all the destinations we visited as long-distance lovers. Starts with Covid lockdown- park walk chats to country-hopping to meet. Different countries/ cities are 3D interactive icons on a timeline with single core memory of each location with a photo popping out when toggled i.e. Mumbai 10/2020 is symbolized by a Mumbai taxi tile (kaali peeli), and when toggle mouse over other symbols from our visit pops out (Bademiya, khala ghoda- 2 elements max to keep it focused and clean)
//           </p>
//         </div>

//         {/* Floating Gallery */}

//         <div
//           className={`
//       image-grid
//       grid
//       md:grid-cols-3
//       gap-[2rem]
//       items-start
//       `}
//         >
//           <div
//             className={`
//         floating-image
//         overflow-hidden
//         rounded-[2rem]
//         rotate-[-4deg]
//         `}
//           >
//             <img
//               src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486"
//               className={`
//           parallax
//           h-[30rem]
//           w-full
//           object-cover
//           `}
//             />
//           </div>

//           <div
//             className={`
//         floating-image
//         overflow-hidden
//         rounded-[2rem]
//         mt-[6rem]
//         `}
//           >
//             <img
//               src="https://images.unsplash.com/photo-1519741497674-611481863552"
//               className={`
//           parallax
//           h-[24rem]
//           w-full
//           object-cover
//           `}
//             />
//           </div>

//           <div
//             className={`
//         floating-image
//         overflow-hidden
//         rounded-[2rem]
//         rotate-[4deg]
//         `}
//           >
//             <img
//               src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc"
//               className={`
//           parallax
//           h-[32rem]
//           w-full
//           object-cover
//           `}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useState } from "react";
import {
  MapPin,
  Plane,
  Car,
  Camera,
  Coffee,
  Building,
} from "lucide-react";

const memories = [
  {
    city: "Mumbai",
    date: "10/2020",
    icon: <Car size={28} />,
    image:
      "https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=1200",
    memories: [
      {
        title: "Kaali Peeli Taxi",
        icon: <Car size={18} />,
      },
      {
        title: "Bademiya",
        icon: <Coffee size={18} />,
      },
    ],
  },
  {
    city: "Delhi",
    date: "02/2021",
    icon: <Building size={28} />,
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1200",
    memories: [
      {
        title: "India Gate Walk",
        icon: <MapPin size={18} />,
      },
      {
        title: "Late Night Chai",
        icon: <Coffee size={18} />,
      },
    ],
  },
  {
    city: "Dubai",
    date: "11/2022",
    icon: <Plane size={28} />,
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200",
    memories: [
      {
        title: "Burj View",
        icon: <Building size={18} />,
      },
      {
        title: "Desert Sunset",
        icon: <Camera size={18} />,
      },
    ],
  },
];

// export default function Introduction() {
//   const [active, setActive] = useState(memories[0]);

//   return (
//     <main className="min-h-screen bg-[#f7f4ef]">
//       <div className="grid lg:grid-cols-2 min-h-screen">
//         {/* LEFT CONTENT */}

//         <section className="flex flex-col justify-center px-8 md:px-16 py-20">
//           <div className="max-w-xl">
//             <div className="mb-14">
//               <div className="w-28 h-36 overflow-hidden rounded-sm mb-10 shadow-md">
//                 <img
//                   src={active.image}
//                   alt={active.city}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               <h1 className="text-5xl md:text-6xl font-serif text-zinc-800 mb-6">
//                 Pyaar Everywhere
//               </h1>


//               <p className="text-zinc-600 leading-8 text-lg">
//                 Envision a timeline of all the destinations we visited as
//                 long-distance lovers. From Covid lockdown park walks and endless
//                 chats to hopping countries just to steal a few days together.
//                 Every stop holds one unforgettable memory.
//               </p>
//             </div>

//             <div className="border-l border-zinc-300 pl-8 space-y-10">
//               {memories.map((item) => (
//                 <button
//                   key={item.city}
//                   onMouseEnter={() => setActive(item)}
//                   onClick={() => setActive(item)}
//                   className={`group text-left block transition-all duration-300 ${
//                     active.city === item.city
//                       ? "translate-x-2"
//                       : "opacity-70 hover:opacity-100"
//                   }`}
//                 >
//                   <div className="flex items-center gap-4">
//                     <div
//                       className={`p-3 rounded-2xl shadow-md backdrop-blur-md
//                       ${
//                         active.city === item.city
//                           ? "bg-black text-white"
//                           : "bg-white"
//                       }`}
//                     >
//                       {item.icon}
//                     </div>

//                     <div>
//                       <h3 className="text-xl font-medium">
//                         {item.city}
//                       </h3>

//                       <p className="text-sm text-zinc-500">
//                         {item.date}
//                       </p>
//                     </div>
//                   </div>
//                 </button>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* RIGHT VISUAL */}

//         <section className="relative overflow-hidden bg-black">
//           <img
//             src={active.image}
//             alt={active.city}
//             className="absolute inset-0 w-full h-full object-cover opacity-90"
//           />

//           <div className="absolute inset-0 bg-black/35" />

//           <div className="relative h-full flex items-center justify-center px-8">
//             <div className="max-w-lg">
//               <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 text-white shadow-2xl">
//                 <p className="uppercase tracking-[0.25em] text-sm opacity-70 mb-3">
//                   Destination
//                 </p>

//                 <h2 className="text-5xl font-serif mb-2">
//                   {active.city}
//                 </h2>

//                 <p className="text-white/70 mb-8">
//                   {active.date}
//                 </p>

//                 <div className="grid gap-4">
//                   {active.memories.map((memory) => (
//                     <div
//                       key={memory.title}
//                       className="group bg-white/10 hover:bg-white/20
//                       border border-white/10 rounded-2xl
//                       px-5 py-4 transition-all duration-300
//                       hover:-translate-y-1 hover:scale-[1.02]"
//                     >
//                       <div className="flex items-center gap-3">
//                         {memory.icon}

//                         <span className="text-lg">
//                           {memory.title}
//                         </span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* <div className="mt-10 flex items-center gap-2 text-white/70">
//                   <Plane size={16} />
//                   <span>
//                     Every destination tells a piece of our story.
//                   </span>
//                 </div> */}
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }


export default function PyaarEverywhere() {
  return (
    <section className="min-h-screen bg-[#F5F2ED]">
      <div className="grid min-h-screen lg:grid-cols-2">
        
        {/* LEFT SIDE */}
        <div className="flex items-center sm:pl-[10vh] max-sm:mt-[10vh]">
          <div className="max-w-lg px-12 md:px-10">
            
            {/* Small Photo */}
            <div className="mb-16">
              <img
                src={`/img/home/HeroBG.jpg`}
                alt="Memory"
                className="w-40 object-cover object-right aspect-2/3"
              />
            </div>

            {/* Title */}
            <h1 className="font-serif sm:text-[4rem] sm:leading-[4rem] text-[#4A4A4A] mb-6">
              Pyaar Everywhere
            </h1>

           

            {/* Description */}
            <p className="leading-[1.2rem] text-[#666] text-[1.1rem]">
              
Envision a timeline of all the destinations we visited as long-distance lovers. Starts with Covid lockdown- park walk chats to country-hopping to meet. Different countries/ cities are 3D interactive icons on a timeline with single core memory of each location with a photo popping out when toggled i.e. Mumbai 10/2020 is symbolized by a Mumbai taxi tile (kaali peeli), and when toggle mouse over other symbols from our visit pops out (Bademiya, khala ghoda- 2 elements max to keep it focused and clean)

            </p>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative max-sm:w-full max-sm:aspect-square max-sm:mt-10">
          <img
            src={`/img/home/image3.png`}
            alt="Pyaar Everywhere"
            className="absolute inset-0 h-full w-full  object-cover"
          />
        </div>

      </div>
    </section>
  );
}