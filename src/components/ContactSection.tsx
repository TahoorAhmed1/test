    "use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { FormLogo, UK, US } from "@/assets"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="bg-black text-white py-12 md:py-24 px-4">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-44 items-center">
          <div className="w-full relative order-2 lg:order-1">
            <div className="mb-8 lg:mb-12 flex justify-center lg:justify-end relative">
              <div className="relative w-full lg:w-[95%]">
                <Image src={US} alt="map" width={500} height={500} className="w-full rounded-3xl" />
                <div className="absolute left-8 lg:left-20 bottom-4 lg:bottom-0">
                  <p className="text-lg sm:text-2xl lg:text-3xl">
                    Based in
                    <br />
                    <span className="font-extrabold text-3xl sm:text-5xl lg:text-8xl">USA</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-10 -translate-y-1/2">
              <Image
                src={FormLogo}
                alt="map"
                width={150}
                height={150}
                className="w-[120px] h-[120px] xl:w-[150px] xl:h-[150px] lg:w-[100px] lg:h-[100px]"
              />
            </div>

            <div className="relative">
              <Image src={UK} alt="map" width={650} height={400} className="w-full rounded-3xl lg:rounded-none" />
              <div className="absolute left-4 lg:left-8 bottom-4 lg:bottom-0">
                <p className="text-lg sm:text-2xl lg:text-3xl">
                  Also in
                  <br />
                  <span className="font-extrabold text-3xl sm:text-5xl lg:text-8xl">UK</span>
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
            <div>
              <h1 className="text-4xl sm:text-6xl lg:text-8xl font-extrabold text-[#00CE44] mb-2 lg:mb-4">
                Get In Touch!
              </h1>
              <p className="text-[#ADADAD] text-lg sm:text-xl lg:text-3xl">Scalable Solutions From Teams Worldwide!</p>
            </div>

            <form className="space-y-4 lg:space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name:
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-600 focus:border-green-400 outline-none transition-colors"
                    placeholder=""
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email:
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-600 focus:border-green-400 outline-none transition-colors"
                    placeholder=""
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone:
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-600 focus:border-green-400 outline-colors"
                    placeholder=""
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject:
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-600 focus:border-green-400 outline-none transition-colors"
                    placeholder=""
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-transparent border-b-2 border-gray-600 focus:border-green-400 outline-none transition-colors resize-none"
                  placeholder=""
                />
              </div>

              <button
                type="submit"
                className="relative overflow-hidden group w-full h-[60px] md:h-[80px] cursor-pointer text-base md:text-lg font-medium"
              >
                <div className="absolute inset-0 bg-white">
                  <div className="absolute top-0 right-0 bottom-0 bg-green-500 rounded-full transition-all duration-500 ease-in-out w-[60px] h-[60px] md:w-[80px] md:h-[80px]" />
                  <div className="absolute inset-0 bg-[#00CE44] origin-left transition-transform duration-500 ease-in-out translate-x-0" />
                </div>
                <span className="relative z-10 text-black group-hover:text-white cursor-pointer  font-bold transition-colors duration-300">
                  Submit!
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
