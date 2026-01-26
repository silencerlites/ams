'use client'
import React from 'react'
import {
  FileText, BookOpen, Search, Clock,
  GraduationCap,
  Handshake,
  Star, Award,
  Mail,
  Phone,
  MapPin
} from 'lucide-react'
import { useReveal } from '@/hooks/useReveal'
import { useCounter } from '@/hooks/useCounter'

const Page = () => {
  useReveal()
  useCounter()

  const brands = [
    {
      name: 'Google',
      icon: '/icons/google.svg',
      url: 'https://www.google.com'
    },
    {
      name: 'Microsoft',
      icon: '/icons/microsoft.svg',
      url: 'https://www.microsoft.com'
    },
    {
      name: 'Amazon',
      icon: '/icons/amazon.svg',
      url: 'https://www.amazon.com'
    },
    {
      name: 'Meta',
      icon: '/icons/meta.svg',
      url: 'https://www.meta.com'
    },
    {
      name: 'Netflix',
      icon: '/icons/netflix.svg',
      url: 'https://www.netflix.com'
    },
    {
      name: 'Netflix',
      icon: '/icons/netflix.svg',
      url: 'https://www.netflix.com'
    },
    {
      name: 'Netflix',
      icon: '/icons/netflix.svg',
      url: 'https://www.netflix.com'
    },
    {
      name: 'Netflix',
      icon: '/icons/netflix.svg',
      url: 'https://www.netflix.com'
    },
    {
      name: 'Netflix',
      icon: '/icons/netflix.svg',
      url: 'https://www.netflix.com'
    },
    {
      name: 'Netflix',
      icon: '/icons/netflix.svg',
      url: 'https://www.netflix.com'
    },
    {
      name: 'Netflix',
      icon: '/icons/netflix.svg',
      url: 'https://www.netflix.com'
    },
    {
      name: 'Netflix',
      icon: '/icons/netflix.svg',
      url: 'https://www.netflix.com'
    },
    {
      name: 'Netflix',
      icon: '/icons/netflix.svg',
      url: 'https://www.netflix.com'
    },
    {
      name: 'Netflix',
      icon: '/icons/netflix.svg',
      url: 'https://www.netflix.com'
    },
    {
      name: 'Netflix',
      icon: '/icons/netflix.svg',
      url: 'https://www.netflix.com'
    }

  ]


  return (
    <div className="bg-[#f8f9f7] overflow-hidden">

      {/* HERO */}
      <section className="bg-[#1f7a4a] text-white">
        <div className="max-w-6xl mx-auto px-6 py-28 text-center reveal">
          <span className="inline-block bg-green-900/40 px-4 py-1 rounded-full text-sm mb-4 float">
            Your Partner in Compliance
          </span>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Grow Your Business <br />
            <span className="text-orange-400">with Confidence</span>
          </h1>

          <p className="mt-6 text-gray-200 max-w-2xl mx-auto">
            We handle the complexities of BIR compliance, bookkeeping,
            and auditing so you can focus on growing your business.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <button className="bg-orange-500 px-6 py-3 rounded-lg font-medium btn-hover">
              Book a Free Consultation
            </button>
            <button className="border border-white px-6 py-3 rounded-lg btn-hover">
              See Our Services
            </button>
          </div>

          {/* STATS */}
          <div className="mt-14 grid grid-cols-3 gap-8 text-center">

            <div className="reveal">
              <p
                className="text-3xl font-bold text-white"
                data-count="15"
                data-suffix="+"
              >
                0+
              </p>
              <p className="text-sm text-gray-200">Years of Experience</p>
            </div>

            <div className="reveal">
              <p
                className="text-3xl font-bold text-white"
                data-count="500"
                data-suffix="+"
              >
                0+
              </p>
              <p className="text-sm text-gray-200">Clients Served</p>
            </div>

            <div className="reveal">
              <p
                className="text-3xl font-bold text-white"
                data-count="100"
                data-suffix="%"
              >
                0%
              </p>
              <p className="text-sm text-gray-200">Compliance Rate</p>
            </div>

          </div>
        </div>
      </section>


      {/* SERVICES */}
      <section className="max-w-6xl mx-auto px-6 py-24 overflow-hidden">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-orange-500 text-sm font-semibold tracking-wide mb-3">
            OUR SERVICES
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Accounting <br className="hidden md:block" />
            Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From compliance to strategic advisory, we provide end-to-end support
            for your business’s financial needs.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* CARD 1 */}
          <div className="reveal-left bg-white rounded-2xl p-8 shadow transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-green-100">
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center mb-6">
              <FileText className="w-6 h-6 text-white" />
            </div>

            <h3 className="text-xl font-semibold mb-2">
              Compliance & Taxation
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Keep your business in good standing with the government.
            </p>

            {/* Content blocks */}
            <div className="relative pl-4 mb-6 reveal">
              <span className="absolute left-0 top-1 h-full w-[2px] bg-orange-400" />
              <p className="font-semibold text-gray-900 mb-1">
                BIR Tax Compliance
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Timely preparation and electronic filing of Monthly,
                Quarterly, and Annual BIR Returns (VAT, Percentage Tax,
                Withholding Taxes, Income Tax).
              </p>
            </div>

            <div className="relative pl-4 reveal">
              <span className="absolute left-0 top-1 h-full w-[2px] bg-orange-400" />
              <p className="font-semibold text-gray-900 mb-1">
                Government Reportorial Requirements
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Mandatory filings for SSS, PhilHealth, Pag-IBIG,
                Mayor’s Permits, and SEC General Information Sheet (GIS).
              </p>
            </div>

            <p className="mt-6 text-orange-500 font-medium text-sm reveal">
              Learn More →
            </p>
          </div>

          {/* CARD 2 */}
          <div className="reveal bg-white rounded-2xl p-8 shadow transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-orange-100">
            <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center mb-6">
              <BookOpen className="w-6 h-6 text-white" />
            </div>

            <h3 className="text-xl font-semibold mb-2">
              Core Accounting & Bookkeeping
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Accurate records for better decision-making.
            </p>

            <div className="relative pl-4 mb-6 reveal">
              <span className="absolute left-0 top-1 h-full w-[2px] bg-orange-400" />
              <p className="font-semibold text-gray-900 mb-1">
                Bookkeeping of Financial Transactions
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Systematic recording of receipts, disbursements,
                journal entries, bank reconciliation, and subsidiary ledgers.
              </p>
            </div>

            <div className="relative pl-4 reveal">
              <span className="absolute left-0 top-1 h-full w-[2px] bg-orange-400" />
              <p className="font-semibold text-gray-900 mb-1">
                Preparation of Financial Statements
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Balance Sheet, Income Statement, Cash Flow,
                and customized management reports.
              </p>
            </div>

            <p className="mt-6 text-orange-500 font-medium text-sm reveal">
              Learn More →
            </p>
          </div>

          {/* CARD 3 */}
          <div className="reveal-right bg-white rounded-2xl p-8 shadow transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-green-100">
            <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center mb-6">
              <Search className="w-6 h-6 text-white" />
            </div>

            <h3 className="text-xl font-semibold mb-2">
              Assurance & Advisory
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Strategic insights and legitimate business setup.
            </p>

            <div className="relative pl-4 mb-6 reveal">
              <span className="absolute left-0 top-1 h-full w-[2px] bg-orange-400" />
              <p className="font-semibold text-gray-900 mb-1">
                Auditing Services
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Independent financial statement audits for BIR/SEC compliance.
                Internal audits to improve efficiency and prevent fraud.
              </p>
            </div>

            <div className="relative pl-4 reveal">
              <span className="absolute left-0 top-1 h-full w-[2px] bg-orange-400" />
              <p className="font-semibold text-gray-900 mb-1">
                Business Registration Assistance
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                DTI or SEC registration, BIR Certificate of Registration (COR),
                and Authority to Print (ATP).
              </p>
            </div>

            <p className="mt-6 text-orange-500 font-medium text-sm reveal">
              Learn More →
            </p>
          </div>
        </div>
      </section>

      {/* TRUSTED BRANDS – CLEAN ENTERPRISE MARQUEE */}
      <section className=" py-20">
        <div className="max-w-7xl mx-auto px-6 relative">

          <p className="text-center text-md tracking-[0.2em] text-orange-500 font-bold mb-12">
            TRUSTED BY LEADING BRANDS
          </p>

          <div className="fade-left" />
          <div className="fade-right" />

          <div className="marquee">
            <div className="marquee-track">
              {[...brands, ...brands].map((brand, i) => (
                <div className="brand-item" key={i}>
                  <img src={brand.icon} alt={brand.name} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>




      {/* WHY CHOOSE US */}
      <section className="bg-white py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div className="reveal-left">
            <p className="text-orange-500 text-sm font-semibold tracking-wide mb-3">
              WHY CHOOSE US
            </p>

            <h2 className="text-4xl font-bold leading-tight mb-6 text-gray-900">
              Your Trusted Financial <br /> Partner
            </h2>

            <p className="text-gray-600 leading-relaxed mb-10 max-w-xl">
              We understand that compliance can be overwhelming. Our mission is to
              transform that stress into clarity—so you can focus on growing your
              business.
            </p>

            {/* FEATURE LIST */}
            <div className="space-y-6 max-w-xl">
              {/* ITEM 1 */}
              <div className="flex gap-4 items-start">
                <div className="bg-orange-50 p-3 rounded-xl text-orange-500">
                  <Clock className="w-5 h-5" />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Deadlines Guaranteed
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We monitor the tax calendar meticulously so you never miss a filing
                    or pay a penalty. Your compliance is our commitment.
                  </p>
                </div>
              </div>

              {/* ITEM 2 */}
              <div className="flex gap-4 items-start">
                <div className="bg-orange-50 p-3 rounded-xl text-orange-500">
                  <Award className="w-5 h-5" />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    CPA-Led Team
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Your accounts are handled by Certified Public Accountants with years
                    of industry experience, ensuring accuracy and professionalism.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="grid sm:grid-cols-2 gap-6">

            {/* CARD 1 – HIGHLIGHT */}
            <div className="reveal-right bg-[#1f7a4a] text-white rounded-2xl p-8 shadow-lg">
              <div className="bg-orange-100 w-10 h-10 flex items-center justify-center rounded-lg mb-4 text-orange-600 ">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-lg mb-3">
                Deadlines Guaranteed
              </h3>
              <p className="text-sm opacity-90">
                We monitor tax calendars meticulously so you never miss a filing
                or incur penalties.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="reveal-right bg-[#f1f7f3] rounded-2xl p-8 shadow transition hover:-translate-y-2 hover:shadow-xl">
              <div className="bg-orange-100 w-10 h-10 flex items-center justify-center rounded-lg mb-4 text-orange-600 ">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-lg mb-3">
                CPA-Led Team
              </h3>
              <p className="text-sm text-gray-600">
                Your accounts are handled by licensed CPAs with deep industry experience.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="reveal bg-[#f1f7f3] rounded-2xl p-8 shadow transition hover:-translate-y-2 hover:shadow-xl">
              <div className="bg-orange-100 w-10 h-10 flex items-center justify-center rounded-lg mb-4 text-orange-600 ">
                <Handshake className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-lg mb-3">
                Holistic Support
              </h3>
              <p className="text-sm text-gray-600">
                From registration to annual audits, we support your entire lifecycle.
              </p>
            </div>

            {/* CARD 4 */}
            <div className="reveal bg-[#f1f7f3] rounded-2xl p-8 shadow transition hover:-translate-y-2 hover:shadow-xl">
              <div className="bg-orange-100 w-10 h-10 flex items-center justify-center rounded-lg mb-4 text-orange-600 ">
                <Star className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-lg mb-3">
                Personalized Service
              </h3>
              <p className="text-sm text-gray-600">
                Every client is treated as a partner. Our solutions fit your needs.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-[#f8f9f7] py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT GREEN CARD */}
          <div className="reveal-left">
            <div className="bg-[#1f7a4a] rounded-3xl p-14 text-white flex flex-col items-center justify-center h-full min-h-[420px]">

              {/* LOGO CIRCLE */}
              <div className="w-20 h-20 rounded-full bg-green-700 flex items-center justify-center mb-6">
                <span className="text-3xl font-bold text-orange-400">S</span>
              </div>

              <h3 className="text-xl font-semibold tracking-wide">SRJJ</h3>
              <p className="text-sm text-green-100 mb-10">
                Accounting Services
              </p>

              <div className="w-full h-px bg-green-600 mb-8" />

              <p className="italic text-orange-300 text-center max-w-sm">
                “Beyond Numbers. We Are Your Strategic Partners.”
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="reveal-right">
            <p className="text-orange-500 text-sm font-semibold tracking-wide mb-3">
              ABOUT US
            </p>

            <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-6">
              Beyond Numbers. We <br />
              Are Your Strategic <br />
              Partners.
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed max-w-xl">
              At SRJJ Accounting Services, we understand that for many business owners,
              accounting is a source of stress. Our mission is to transform that stress
              into clarity.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed max-w-xl">
              We don’t just record history, we help you plan your future. With deep
              expertise in Philippine Tax Code and International Financial Reporting
              Standards (IFRS), we ensure your business remains compliant, profitable,
              and audit-ready.
            </p>

            {/* CHECKLIST */}
            <ul className="space-y-4 text-sm text-gray-700 mb-10">
              <li className="flex items-start gap-3">
                <span className="text-orange-500">✔</span>
                Certified Public Accountants (CPA) licensed by PRC
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500">✔</span>
                Deep expertise in Philippine Tax Code
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500">✔</span>
                International Financial Reporting Standards (IFRS) compliant
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500">✔</span>
                Continuous professional development
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500">✔</span>
                Member of professional accounting bodies
              </li>
            </ul>

            <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-medium btn-hover">
              Meet Our Team
            </button>
          </div>

        </div>
      </section>


      {/* CONTACT */}
      <section className="bg-white py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">

          {/* HEADER */}
          <div className="text-center mb-16 reveal">
            <p className="text-orange-500 text-sm font-semibold tracking-wide mb-3">
              CONTACT US
            </p>
            <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
              Let&apos;s Discuss Your Financial <br className="hidden md:block" />
              Goals
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Ready to take your business to the next level? Get in touch with our
              team for a free consultation.
            </p>
          </div>

          {/* CONTENT */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">

            {/* LEFT FORM */}
            <div className="bg-[#f1f7f3] rounded-2xl p-8 reveal-left">
              <h3 className="text-xl font-semibold mb-6">
                Send Us a Message
              </h3>

              <form className="space-y-5">
                {/* NAME + COMPANY */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Name *
                    </label>
                    <input
                      className="mt-1 w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Juan Dela Cruz"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Company Name
                    </label>
                    <input
                      className="mt-1 w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Your Company Inc."
                    />
                  </div>
                </div>

                {/* EMAIL */}
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Email Address *
                  </label>
                  <input
                    className="mt-1 w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="juan@company.com"
                  />
                </div>

                {/* SERVICE */}
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Service Needed *
                  </label>
                  <select className="mt-1 w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option>Select a service</option>
                    <option>Tax Compliance</option>
                    <option>Bookkeeping</option>
                    <option>Audit & Advisory</option>
                  </select>
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="mt-1 w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Tell us about your needs..."
                  />
                </div>

                <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium btn-hover flex items-center justify-center gap-2">
                  Send Message →
                </button>
              </form>
            </div>

            {/* RIGHT INFO */}
            <div className="space-y-6 reveal-right">

              <h3 className="text-xl font-semibold">
                Get in Touch
              </h3>

              {/* INFO ITEMS */}
              <div className="space-y-5">

                {/* ADDRESS */}
                <div className="flex gap-4 items-start">
                  <div className="bg-green-600 text-white w-10 h-10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Office Address</p>
                    <p className="text-sm text-gray-600">
                      123 Business District<br />
                      Makati City, Metro Manila<br />
                      Philippines 1226
                    </p>
                  </div>
                </div>

                {/* PHONE */}
                <div className="flex gap-4 items-start">
                  <div className="bg-green-600 text-white w-10 h-10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone Numbers</p>
                    <p className="text-sm text-gray-600">
                      +63 2 8123 4567<br />
                      +63 917 123 4567
                    </p>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex gap-4 items-start">
                  <div className="bg-green-600 text-white w-10 h-10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Email Address</p>
                    <p className="text-sm text-gray-600">
                      info@asesoria.ph<br />
                      consult@asesoria.ph
                    </p>
                  </div>
                </div>

                {/* HOURS */}
                <div className="flex gap-4 items-start">
                  <div className="bg-green-600 text-white w-10 h-10 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Office Hours</p>
                    <p className="text-sm text-gray-600">
                      Monday – Friday<br />
                      8:00 AM – 5:00 PM
                    </p>
                  </div>
                </div>

              </div>


              {/* MAP PLACEHOLDER */}
              <div className="bg-[#f1f7f3] rounded-2xl h-48 flex items-center justify-center text-gray-500 text-sm mt-8">
                📍 Makati City, Metro Manila
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Page
