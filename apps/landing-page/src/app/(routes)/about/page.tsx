"use client"

import {
  Target,
  Eye,
  Shield,
  Heart,
  BookOpen,
  Users
} from "lucide-react"
import { useReveal } from "@/hooks/useReveal"

const AboutUsPage = () => {
  useReveal()

  return (
    <>
      {/* HERO / INTRO */}
      <section className="max-w-6xl mx-auto px-6 py-24 overflow-hidden">
        <div className="grid md:grid-cols-2 gap-12 items-center">

           {/* LEFT SIDE */}
        <div>
          <p className="text-orange-500 text-xs font-semibold tracking-widest mb-4">
            ABOUT US
          </p>

          <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
            Beyond Numbers. We Are Your Strategic Partners.
          </h1>

          <p className="text-gray-600 mb-4">
            At SRJJ Accounting Services, we understand that for many business
            owners, accounting is a source of stress. Our mission is to transform
            that stress into clarity.
          </p>

          <p className="text-gray-500">
            We don’t just record history; we help you plan your future. With deep
            expertise in Philippine Tax Code and International Financial Reporting
            Standards (IFRS), we ensure your business remains compliant,
            profitable, and audit-ready.
          </p>
        </div>

        {/* RIGHT SIDE CARD */}
        <div className="flex justify-center md:justify-end">
          <div className="w-[420px] h-[420px] bg-green-700 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center p-10">
            
            <div className="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center mb-6">
              <span className="text-orange-400 text-2xl font-bold">S</span>
            </div>

            <h2 className="text-white text-xl font-semibold">SRJJ</h2>
            <p className="text-green-100 text-sm mb-6">Accounting Services</p>

            <div className="w-32 h-[1px] bg-green-500 mb-6" />

            <p className="text-orange-300 italic text-sm">
              "Your success is our bottom line."
            </p>
          </div>
        </div>

        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 gap-8">

          <div className="reveal-left bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-green-100">
            <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center mb-6">
              <Target className="text-white w-6 h-6" />
            </div>

            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-sm text-gray-600">
              To empower Filipino businesses from startups to established
              enterprises with accurate, timely, and strategic financial
              services that simplify compliance and drive sustainable growth.
            </p>
          </div>

          <div className="reveal-right bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-green-100">
            <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center mb-6">
              <Eye className="text-white w-6 h-6" />
            </div>

            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
            <p className="text-sm text-gray-600">
              To be the most trusted and innovative accounting firm in the
              Philippines transforming financial complexity into clarity and
              confidence for every client we serve.
            </p>
          </div>

        </div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-[#f8f9f7] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <p className="text-orange-500 text-sm font-semibold tracking-wide mb-3">
            WHAT DRIVES US
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              { icon: Shield, title: "Integrity" },
              { icon: BookOpen, title: "Accuracy" },
              { icon: Heart, title: "Client-Centric" },
              { icon: Users, title: "Continuous Learning" },
            ].map((item, i) => (
              <div
                key={i}
                className="reveal bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-green-100"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-green-600 flex items-center justify-center mb-4">
                  <item.icon className="text-white w-5 h-5" />
                </div>

                <h4 className="font-semibold text-gray-900">
                  {item.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-700 py-20 px-6 text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Let's Work Together
        </h3>

        <p className="text-green-100 max-w-xl mx-auto mb-8">
          Partner with SRJJ Accounting Services and experience the difference
          of having a dedicated team of CPAs on your side.
        </p>

        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-xl transition">
          Get in touch
        </button>
      </section>
    </>
  )
}

export default AboutUsPage
