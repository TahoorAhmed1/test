"use client"

import { Pawpal } from "@/assets"
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image"
import React from "react";

const portfolioItems = [
  {
    id: "skillnet",
    name: "Skillnet",
    description:
      "is a modern learning management system crafted to empower educational institutions, training providers, and corporate teams with an intuitive, customizable, and data-driven learning experience.",
    image: Pawpal,
    icon: "/ic-skillnet.png",
    gradient: "from-[#237B8A]/80 to-[#237B8A]/80",
    marginTop: "",
  },
  {
    id: "pawpal",
    name: "Pawpal",
    description:
      "PawPal is an on-demand pet care platform that connects pet parents with certified walkers, groomers, trainers, and veterinarians through mind.",
    image: Pawpal,
    icon: "/ic-pawpal.png",
    gradient: "from-[#926DF9]/80 to-[#926DF9]/80",
    marginTop: "mt-[140px]",
  },
  {
    id: "parkvolt",
    name: "Parkvolt",
    description:
      "ParkVolt makes parking effortless — reserve your spot in advance and avoid the hassle.Find and access EV charging stations near you, all in one easy-to-use app.",
    image: Pawpal,
    icon: "/ic-parkvolt.png",
    gradient: "from-[#A4FF07]/80 to-[#A4FF07]/80",
    marginTop: "mt-[70px]",
  },
  {
    id: "parkvolt",
    name: "Parkvolt",
    description:
      "ParkVolt makes parking effortless — reserve your spot in advance and avoid the hassle.Find and access EV charging stations near you, all in one easy-to-use app.",
    image: Pawpal,
    icon: "/ic-parkvolt.png",
    gradient: "from-[#A4FF07]/80 to-[#A4FF07]/80",
    marginTop: "",
  },
  {
    id: "budget-mate",
    name: "Budget Mate",
    description:
      "Financial Clarity in Your Pocket BudgetMate is a personal finance app thathelps individuals track expenses, build better spending habits, and reach their financial goals without complexity.",
    image: Pawpal,
    icon: "/ic-budget-mate.png",
    gradient: "from-[#7A3CFF]/80 to-[#7A3CFF]/80",
    marginTop: "mt-[140px]",

  },
  {
    id: "budget-mate",
    name: "Budget Mate",
    description:
      "Financial Clarity in Your Pocket BudgetMate is a personal finance app thathelps individuals track expenses, build better spending habits, and reach their financial goals without complexity.",
    image: Pawpal,
    icon: "/ic-budget-mate.png",
    gradient: "from-[#7A3CFF]/80 to-[#7A3CFF]/80",
    marginTop: "mt-[70px]",

  },
 
]

export default function PortfolioCarousel() {
  const autoplay = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: false })
  );

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      dragFree: false,

    },
    [autoplay.current]
  );

  return (
    <div className="embla w-full mx-auto py-12 mt-[-80px] bg-[#101010] overflow-hidden px-4">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex gap-[20px]">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className={`embla__slide relative flex-shrink-0 w-[327px] h-[703px] rounded-full shadow-xl flex flex-col items-center overflow-hidden group hover:rounded-none transition-all duration-300 hover:scale-105 hover:shadow-2xl backdrop-blur-md ${item.marginTop}`}
            >
              <div className="card-bg absolute inset-0 z-[-1]">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={327}
                  height={703}
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className={`card-content relative z-10 w-[327px] h-[703px] flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br group-hover:from-[#7A3CFF]/10 group-hover:to-[#7A3CFF]/10 ",
 ${item.gradient}`}
              >
                <div className="w-[90px] h-[90px] flex items-center justify-center rounded-full shadow-md mb-8.5">
                  <Image src={item.icon || "/placeholder.svg"} alt={item.name} width={90} height={90} />
                </div>
                <h3 className="text-lg md:text-lg lg:text-xl xl:text-2xl font-extrabold leading-tight text-[#FFFFFF]">
                  {item.name}
                </h3>
                <p className="text-white text-base leading-none mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
