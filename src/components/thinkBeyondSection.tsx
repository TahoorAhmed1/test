import { Ts2 } from "@/assets"
import Image from "next/image"

const features = [
  {
    title: "Clean, Thoughtful Design",
    description:
      "We craft clean, modern UI designs that aren't just beautiful—they're intuitive. Every screen is purpose-built to guide users naturally through the app",
    image: Ts2,
  },
  {
    title: "Flows That Just Work",
    description:
      "We prioritize logical, seamless navigation. Your users won't get lost—they'll get where they need to go with zero friction",
    image: Ts2,
  },
  {
    title: "Features That Matter",
    description:
      "We focus on functionality with purpose. Every feature is tied to a user goal or business outcome—no bloat, just value.",
    image: Ts2,
  },
  {
    title: "Solid, Scalable Build",
    description:
      "From the backend to frontend, we build your app with clean code and scalable architecture—so it runs fast, adapts easily, and grows with your business",
    image: Ts2,
  },
]

export default function ThinkBeyondSection() {
  return (
    <section className="think-section text-white pb-8 px-4 lg:px-8 xl:px-12">
      <div className="flex flex-col gap-4 justify-center items-center">
        <p className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-[60px] font-extrabold">
          We Think Beyond the Screen!
        </p>
        <p className="text-white text-base md:text-lg lg:text-lg xl:text-xl max-w-3xl mx-auto">
          We solve problems with a custom, strategic approach that blends beautiful design, robust development, and
          long-term partnership.
        </p>
      </div>

      <div className="mt-8 lg:mt-12 xl:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 xl:gap-12">
        {features.map((feature, index) => (
          <div key={index} className="hover:relative">
            <div className="bg-[#101010] hover:absolute hover:top-0 hover:left-0 hover:bg-[#00CE44] group transition-all duration-300 pt-6 rounded-2xl">
              <div className="h-[330px] group-hover:h-[401px] overflow-hidden">
                <Image
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  width={500}
                  height={500}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="box-shadow-card p-6 group rounded-b-2xl bg-[#202020]">
                <h3 className="text-lg font-bold mb-2.5">{feature.title}</h3>
                <p className="text-sm">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#1B1B1B] rounded-xl px-3 py-4 pl-5 mt-16 flex flex-col md:flex-row gap-2 justify-between items-center">
        <h2 className="text-2xl leading-none font-bold">
          Ready to Build? <br />
          <p className="mt-[5px]">
          We're Ready to Deliver!

          </p>
        </h2>
        <button className="bg-[#00CE44] text-[#1E1E1E] text-lg font-semibold py-2 px-4 rounded-md hover:bg-white hover:text-[#00CE44]">
          Schedule a Call Now
        </button>
      </div>
    </section>
  )
}
