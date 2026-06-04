"use client";

const destinations = [
  { place: "Atlanta", date: "08 / 2022" },
  { place: "Bangkok", date: "12 / 2022" },
  { place: "Singapore", date: "12 / 2022" },
  { place: "New York", date: "08 / 2023" },
  { place: "Ithaca", date: "07 / 2024" },
  { place: "New Orleans", date: "07 / 2024" },
  { place: "Sri Lanka", date: "01 / 2025" },
  { place: "Kampala", date: "04 / 2025" },
  { place: "Savannah (Civil Ceremony)", date: "09 / 2025" },
  { place: "Key West / Miami", date: "10 / 2025" },
  { place: "Egypt", date: "12 / 2025" },
];

export default function TravelTimeline() {
  return (
    <section className="min-h-screen bg-[#f6f3ef] px-[6vw] py-[8vw]">
      <div className=" max-w-[95vw] ">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-[6rem]">
          
          {/* Left Side */}
          <div className="sticky top-20 self-start max-sm:bg-[#f6f3ef]">

            <h1 className="text-[clamp(3rem,7vw,5rem)] leading-[0.9] font-serif font-light text-neutral-900">
            Destinations
            </h1>

          </div>

          {/* Right Side */}
          <div className="flex flex-col">
            {destinations.map((item, index) => (
              <div
                key={index}
                className="group border-b border-[#d7c7b8] py-8 cursor-pointer"
              >
                <div className="grid grid-cols-[4rem_1fr_auto] items-center gap-6">
                  
                  {/* Number */}
                  <span className="text-neutral-400 text-sm">
                    ({String(index + 1).padStart(2, "0")})
                  </span>

                  {/* Line + Place */}
                  <div className="relative">
                    <div className="absolute left-0 top-1/2 h-[1px] w-full bg-[#d7c7b8]" />

                    <h3 className="relative inline-block bg-[#f6f3ef] pr-4 text-[clamp(1.25rem,2vw,2rem)] font-light text-neutral-900 transition-transform duration-500 group-hover:translate-x-4">
                      {item.place}
                    </h3>
                  </div>

                  {/* Date */}
                  <span className="text-neutral-500 tracking-wide text-sm md:text-base">
                    {item.date}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}