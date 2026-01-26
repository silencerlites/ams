"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`w-full bg-white transition-all duration-300 z-50 sticky top-0 ${
        scrolled ? "shadow-md border-b border-gray-200" : ""
      }`}
    >
      <div className="w-[90%] md:w-[80%] mx-auto py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/srjj-logo.svg"
            alt="SRJJ Accounting Services"
            className="h-10 w-auto"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-gray-600 font-medium">
          <Link href="/" className="hover:text-green-700 transition">
            Home
          </Link>
          <Link href="/services" className="hover:text-green-700 transition">
            Services
          </Link>
          <Link href="/about" className="hover:text-green-700 transition">
            About Us
          </Link>
          <Link href="/tax-updates" className="hover:text-green-700 transition">
            Tax Updates
          </Link>
        </nav>

        {/* CTA */}
        <Link
          href="/login"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded-md transition"
        >
          Login
        </Link>
      </div>
    </header>
  )
}

export default Header
