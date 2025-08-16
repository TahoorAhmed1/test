"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { FormLogo } from "@/assets"
import EmblaLogosCarousel from "./emblaLogosCarousel"

export default function HeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section className="relative banner min-h-[100vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      <video className="absolute inset-0 z-0 w-full h-full object-cover" autoPlay loop muted playsInline>
        <source src="/assets/videos/hero-services.mp4" type="video/mp4" />
      </video>

      <div className="max-w-[90%] px-4 mx-auto w-full relative z-20 flex flex-col gap-4 md:gap-6 pt-20 md:pt-32 pb-8 md:pb-16">
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-between w-full">
          <div className="flex flex-col font-extrabold pt-20 md:pt-32 md:max-w-[50%] lg:max-w-[30%]">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-6 md:mb-8 text-white text-left">
              Personalized Mobile Development That Scales
            </h1>

            <div className="grid grid-cols-2 pt-10">
              <button className="relative overflow-hidden group w-full h-[60px] md:h-[80px] text-base md:text-lg font-medium">
                <div className="absolute inset-0 bg-white">
                  <div className="absolute top-0 right-0 bottom-0 bg-green-500 rounded-full transition-all duration-500 ease-in-out w-[60px] h-[60px] md:w-[80px] md:h-[80px]"></div>
                  <div className="absolute inset-0 bg-[#00CE44] origin-left transition-transform duration-500 ease-in-out translate-x-0"></div>
                </div>
                <span className="relative z-10 text-black group-hover:text-white cursor-pointer font-bold transition-colors duration-300">
                  Get A Call Now!
                </span>
              </button>
            </div>
<EmblaLogosCarousel/>
          </div>

          <div className="relative mt-14 w-full md:w-[55%] lg:w-[33%] msgBox p-10 ">
            <Image
              src={FormLogo}
              alt="Process Badge"
              width={157}
              height={157}
              className="absolute right-[-4rem] top-[-4rem] w-[80px] h-[80px] md:w-[120px] md:h-[120px] lg:w-[157px] lg:h-[157px]"
            />

            <div>
              <h2 className="text-4xl text-left font-extrabold text-[#00CE44] mb-2.5">Get in touch!</h2>
              <p className="text-[#ADADAD] text-left text-sm">
                Let's Talk About Your App Idea, Share a few details. <br />
                and we'll be in touch!
              </p>

              <form className="grid grid-cols-1 gap-4 pt-8" onSubmit={handleSubmit}>
                <div>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#131313] input-shadow rounded-xl placeholder-[#414141] border-1 text-white border-[#262626] focus:border-green-400 outline-colors"
                    placeholder="Name:"
                  />
                </div>
                <div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#131313] input-shadow rounded-xl placeholder-[#414141] border-1 text-white border-[#262626] focus:border-green-400 outline-colors"
                    placeholder="Email:"
                  />
                </div>
                <div>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#131313] input-shadow rounded-xl placeholder-[#414141] border-1 text-white border-[#262626] focus:border-green-400 outline-colors"
                    placeholder="+1 (555) 555-5555"
                  />
                </div>
                <div>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#131313] input-shadow rounded-xl placeholder-[#414141] border-1 text-white border-[#262626] focus:border-green-400 outline-colors"
                  >
                    <option value="" disabled>
                      Project Type:
                    </option>
                    <option value="service1">Project Type 1</option>
                    <option value="service2">Project Type 2</option>
                    <option value="service3">Project Type 3</option>
                  </select>
                </div>
                <div>
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Message:"
                    className="w-full resize-none px-4 py-3 bg-[#131313] input-shadow rounded-xl placeholder-[#414141] border-1 text-white border-[#262626] focus:border-green-400 outline-colors"
                  />
                </div>
                <div className="btn-submit">
                  <button
                    type="submit"
                    className="w-full bg-white hover:bg-green-600 text-[#101010] font-bold py-4 mb-4 px-6 rounded-xl transition-all"
                  >
                    Submit!
                  </button>
                </div>
              </form>

              <div className="flex items-center justify-center">
                <div className="flex items-center gap-2 text-[#BFBFBF] text-xs bg-[#171717] rounded-md px-3 py-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M10.6043 5.26432V3.96092C10.6043 1.97478 8.98167 0.349976 6.99332 0.349976C5.00498 0.349976 3.38014 1.97478 3.38014 3.96092V5.26432C2.4004 5.34856 1.64453 6.15985 1.64453 7.16845V11.7326C1.64453 12.7966 2.49792 13.65 3.56193 13.65H10.438C11.502 13.65 12.3554 12.7966 12.3554 11.7326V7.16845C12.3554 6.15985 11.584 5.34856 10.6043 5.26432ZM7.68051 10.0967V10.709C7.68051 10.8911 7.53289 11.0387 7.3508 11.0387H6.64916C6.46706 11.0387 6.31945 10.8911 6.31945 10.709V10.0967C5.98032 9.87721 5.75643 9.49373 5.75643 9.05704C5.75643 8.37209 6.31282 7.81349 6.99998 7.81349C7.68714 7.81349 8.24353 8.37209 8.24353 9.05704C8.24353 9.49373 8.01964 9.87721 7.68051 10.0967ZM8.77109 5.2355H5.21555V3.96092C5.21555 2.98116 6.01357 2.18315 6.99332 2.18315C7.9731 2.18315 8.77109 2.98116 8.77109 3.96092V5.2355Z"
                      fill="#00CE44"
                    />
                  </svg>
                  <p>100% Confidential. NDA Available.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
