
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Review1, Review2, TrustPilot } from "@/assets";

const slides = [
  { src: Review1, alt: "Reviews" },
  { src: TrustPilot, alt: "Trustpilot" },
  { src: Review2, alt: "Reviews" },
  { src: TrustPilot, alt: "Trustpilot" },
  { src: Review1, alt: "Good Firms" },
];

export default function EmblaLogosCarousel() {
  const autoplay = React.useRef(
    Autoplay({ delay: 2500, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: false,
    },
    [autoplay.current]
  );

  return (
    <div className="embla w-full max-w-5xl mx-auto py-8  overflow-hidden px-4">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((item, i) => (
            <div
              key={i}
              className="embla__slide flex-[0_0_calc(33.333%-16px)] min-w-0 mr-2 md:mr-4 transition-opacity duration-300 ease-in-out"
            >
              <div className="embla_slide_content flex justify-center items-center rounded-lg shadow-lg py-4 md:py-6 h-full relative ">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={500}
                  height={500}
                  className="object-contain w-[100px]  h-[50px] select-none pointer-events-none"
                  priority={i < 3}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent rounded-lg z-[-1]" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive slide sizes with no external CSS */}
      <style jsx>{`
        @media (min-width: 768px) {
          .embla__slide { flex-basis: calc(50% - 16px); }
        }
        @media (min-width: 1024px) {
          .embla__slide { flex-basis: calc(33.333% - 16px); }
        }
      `}</style>
    </div>
  );
}

