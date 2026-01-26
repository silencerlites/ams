"use client"

import {
  FileText,
  BookOpen,
  Search,
} from "lucide-react"
import { useReveal } from "@/hooks/useReveal"

const ServicesSection = () => {
  useReveal()

  return (
    <>
      {/* SERVICES SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-24 overflow-hidden">

        {/* HEADER */}
        <div className="text-center mb-16 reveal">
          <p className="text-orange-500 text-sm font-semibold tracking-wide mb-3">
            OUR SERVICES
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Comprehensive Accounting <br className="hidden md:block" />
            Solutions
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            From compliance to strategic advisory, we provide end-to-end support
            for your business&apos;s financial needs in the Philippines.
          </p>
        </div>

        {/* SERVICE CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="reveal-left bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-green-100">
            <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center mb-6">
              <FileText className="w-6 h-6 text-white" />
            </div>

            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              BIR Tax Compliance
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed">
              Timely preparation and electronic filing of Monthly, Quarterly,
              and Annual BIR Returns including VAT, Percentage Tax, Withholding
              Taxes, and Income Tax. Tax assessment assistance and dispute
              resolution.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="reveal bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-green-100">
            <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center mb-6">
              <FileText className="w-6 h-6 text-white" />
            </div>

            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Government Reportorial Requirements
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed">
              Mandatory filings for SSS, PhilHealth, and Pag-IBIG. Renewals of
              Mayor’s Business Permits. SEC General Information Sheet (GIS)
              filing.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="reveal-right bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-green-100">
            <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center mb-6">
              <BookOpen className="w-6 h-6 text-white" />
            </div>

            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Bookkeeping of Financial Transactions
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed">
              Systematic recording of all receipts, disbursements, and journal
              entries. Bank reconciliation and subsidiary ledger maintenance.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="reveal-left bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-green-100">
            <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center mb-6">
              <BookOpen className="w-6 h-6 text-white" />
            </div>

            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Preparation of Financial Statements
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed">
              Drafting of Balance Sheet, Statement of Comprehensive Income,
              and Cash Flow. Customized management reports for internal review.
            </p>
          </div>

          {/* CARD 5 */}
          <div className="reveal bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-green-100">
            <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center mb-6">
              <Search className="w-6 h-6 text-white" />
            </div>

            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Auditing Services
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed">
              Independent financial statement audits for regulatory compliance
              (BIR/SEC). Internal audits to improve efficiency and prevent
              fraud.
            </p>
          </div>

          {/* CARD 6 */}
          <div className="reveal-right bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-green-100">
            <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center mb-6">
              <Search className="w-6 h-6 text-white" />
            </div>

            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Business Registration Assistance
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed">
              End-to-end processing for DTI (Sole Proprietorship) or SEC
              (Corporations/Partnerships). Processing of BIR Certificate of
              Registration (COR) and Authority to Print (ATP).
            </p>
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-green-700 py-20 px-6 text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Simplify Your Finances?
        </h3>

        <p className="text-green-100 max-w-xl mx-auto mb-8">
          Let our team of experienced CPAs handle your accounting needs so you
          can focus on growing your business.
        </p>

        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-xl transition">
          Get in touch
        </button>
      </section>
    </>
  )
}

export default ServicesSection
