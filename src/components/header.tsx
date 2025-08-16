"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Logo } from "@/assets"
import { Menu } from "lucide-react"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-[90%] mx-auto bg-[#d4d4d413] backdrop-blur-3xl text-xl rounded-2xl flex justify-between items-center px-8 py-4 border border-white/10">
          <div className="flex-1">
            <Link href="/" className="text-white font-extrabold hover:text-gray-300 transition-colors">
              <Image
                src={Logo}
                alt="Inceptives Digital"
                width={500}
                height={500}
                className="w-[120px] h-auto"
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8 mr-8">
            <Link href="/about-us" className="text-white font-extrabold hover:text-gray-300 transition-colors">
              About Us
            </Link>
            <Link href="/services" className="text-white font-extrabold hover:text-gray-300 transition-colors">
              Services
            </Link>
            <Link href="/blog" className="text-white font-extrabold hover:text-gray-300 transition-colors">
              Blog
            </Link>
            <Link href="/" className="text-white font-extrabold hover:text-gray-300 transition-colors">
              Portfolio
            </Link>
            <Link href="/contact-us" className="text-white font-extrabold hover:text-gray-300 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="h-12 w-px bg-white/20 mx-4 hidden md:block"></div>
          <div className="bg-white/20 h-12 w-px mx-4 hidden md:block"></div>

          <button
            className="text-white p-2 rounded-md hover:bg-white/10 transition-colors md:hidden"
            // onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Menu"
          >
            <Menu/>
          </button>

          <button
            className="hidden md:block text-white p-2 rounded-md hover:bg-white/10 transition-colors"
            // onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Menu"
          >
<Menu/>          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-[#1a1a1a] backdrop-blur-3xl z-50 transform transition-transform duration-300 ease-in-out border-l border-white/10 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-6 border-b border-white/10">
          <Image
            src="/assets/image/logo.png"
            alt="Inceptives Digital"
            width={80}
            height={80}
            className="w-auto h-auto"
          />
          <button
            className="text-white p-2 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col p-6 space-y-6">
          <Link
            href="/services-page"
            className="text-white text-xl font-extrabold hover:text-[#00CE44] transition-colors py-3 border-b border-white/10"
          >
            Services
          </Link>
          <Link
            href="/"
            className="text-white text-xl font-extrabold hover:text-[#00CE44] transition-colors py-3 border-b border-white/10"
          >
            Portfolio
          </Link>
          <Link
            href="/"
            className="text-white text-xl font-extrabold hover:text-[#00CE44] transition-colors py-3 border-b border-white/10"
          >
            Contact
          </Link>
        </nav>
      </div>
    </>
  )
}
