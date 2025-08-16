import { FormLogo } from "@/assets"
import Image from "next/image"

const processSteps = [
  {
    number: "01.",
    title: "Design",
    description:
      "From Wireframes To High-Fidelity Mockups, We Design Intuitive User Journeys And Stunning Interfaces That Feel As Good As They Look.",
  },
  {
    number: "02.",
    title: "Develop",
    description:
      "Our Development Team Turns Designs Into Robust, Scalable Apps — Whether It's Mobile, Web, Or Cross-Platform. Fast, Clean, And Built To Perform.",
  },
  {
    number: "03.",
    title: "A/B Testing",
    description:
      "We Run Your App Through Rigorous QA To Squash Bugs, Smooth Edges, And Ensure Everything Works Perfectly — On Every Device, Every Time.",
  },
  {
    number: "04.",
    title: "Launch",
    description:
      "Once You're Ready, We Help Launch Your App To The World — And Stick Around To Support Updates, Improvements, And New Features As You Scale.",
  },
]

export default function ProcessSection() {
  return (
    <section
      className="relative pt-12 md:pt-16 lg:pt-24 pb-24 md:pb-14 lg:pb-12 overflow-hidden"
      style={{
        background: "radial-gradient(61.25% 61.25% at 50.91% 61.25%, rgb(16, 16, 16) 0%, rgb(16, 16, 16) 100%)",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="relative flex flex-col items-center mb-10 md:mb-16 lg:mb-20">
          <span className="relative">
            <Image
              src={FormLogo }
              alt="Process Badge"
              width={157}
              height={157}
              className="absolute bottom-[0px] right-[40%] md:bottom-[-15px] md:right-[-100px] lg:bottom-[-20px] lg:right-[-140px] w-[80px] h-[80px] md:w-[120px] md:h-[120px] lg:w-[157px] lg:h-[157px]"
            />
            <h3 className="text-xl md:text-3xl lg:text-4xl text-center md:text-start md:mb-2 mb-20 font-medium text-gray-300 pr-8 md:pr-0">
              Every Great App Starts With A Great Plan
            </h3>
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-gray-200 text-center px-4 md:px-0">
            Our Process: Designed To Deliver!
          </h2>
        </div>

        <div className="relative">
          <div className="flex flex-col lg:flex-row items-center lg:justify-center justify-center">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`relative w-[90%] max-w-xs lg:max-w-none transition-all duration-300 ease-in-out
                  ${
                    index % 2 === 0
                      ? "lg:translate-y-0 lg:-rotate-[9.2deg] translate-x-0 -rotate-[5deg]"
                      : "lg:translate-y-10 lg:rotate-[9.2deg] translate-x-4 rotate-[5deg] -mt-4 lg:mt-0"
                  }
                  lg:-mx-2.5
                `}
                style={{ zIndex: 4 - index }}
              >
                <div className="relative w-full max-w-[280px] md:max-w-[350px] lg:max-w-[400px] transform transition-all duration-300 lg:hover:rotate-10 cursor-pointer lg:cursor-default">
                  <div
                    className="absolute inset-[-20px] w-[calc(100%+30px)] h-[calc(100%+32px)] z-50 lg:rotate-5 lg:hover:rotate-5"
                    style={{
                      backgroundImage: 'url("/process-halftone.png")',
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                  <div
                    className="absolute inset-[-2px] rounded-2xl md:rounded-3xl transition-all duration-300"
                    style={{ background: "linear-gradient(146.95deg, rgb(0, 206, 68) 4.15%, rgb(0, 104, 34) 98.66%)" }}
                  />
                  <div
                    className="relative h-full w-full py-6 px-4 md:py-8 md:px-5 lg:py-10 lg:px-6 rounded-2xl md:rounded-3xl z-10 transition-all duration-300"
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.3) -17px 15px 30px 0px",
                      background: "linear-gradient(144.15deg, rgb(43, 43, 43) 1.22%, rgb(23, 23, 23) 100%)",
                    }}
                  >
                    <div
                      className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2 transition-colors duration-300 text-transparent"
                      style={{ WebkitTextStroke: "1px rgb(0, 206, 68)" }}
                    >
                      {step.number}
                    </div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3 md:mb-4 transition-colors duration-300 text-white">
                      {step.title}
                    </h3>
                    <p className="text-sm md:text-base lg:text-lg leading-relaxed font-medium transition-colors duration-300 text-white">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-12 md:mt-24 lg:mt-36">
          <div className="w-full md:w-2/3 lg:w-1/4">
            <button className="relative overflow-hidden group w-full h-[60px] md:h-[80px] text-base md:text-lg font-medium">
              <div className="absolute inset-0 bg-white">
                <div className="absolute top-0 right-0 bottom-0 bg-green-500 rounded-full transition-all duration-500 ease-in-out w-[60px] h-[60px] md:w-[80px] md:h-[80px]" />
                <div className="absolute inset-0 bg-[#00CE44] origin-left transition-transform duration-500 ease-in-out translate-x-0" />
              </div>
              <span className="relative z-10 text-black group-hover:text-white cursor-pointer font-bold transition-colors duration-300">
                Get A Call Now!
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
