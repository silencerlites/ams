"use client"

import Link from "next/link"
import { Facebook, Linkedin, Mail } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-[#1f7a45] text-white">
      <div className="w-[90%] md:w-[80%] mx-auto py-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-[#2e8b57] text-yellow-400 flex items-center justify-center rounded-md font-bold text-lg">
                S
              </div>
              <div>
                <h2 className="font-semibold text-lg">SRJJ</h2>
                <p className="text-xs uppercase tracking-wide text-white/70">
                  Accounting Services
                </p>
              </div>
            </div>

            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Your partner in compliance. Your catalyst for growth. We help
              Philippine businesses navigate the complexities of tax laws and
              financial management.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a className="w-10 h-10 bg-white/10 hover:bg-white/20 transition rounded-md flex items-center justify-center">
                <Facebook size={18} />
              </a>
              <a className="w-10 h-10 bg-white/10 hover:bg-white/20 transition rounded-md flex items-center justify-center">
                <Linkedin size={18} />
              </a>
              <a className="w-10 h-10 bg-white/10 hover:bg-white/20 transition rounded-md flex items-center justify-center">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-orange-400 font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li><Link href="#">Tax Compliance</Link></li>
              <li><Link href="#">Bookkeeping</Link></li>
              <li><Link href="#">Auditing</Link></li>
              <li><Link href="#">Business Registration</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-orange-400 font-semibold mb-6">Company</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li><Link href="#">About Us</Link></li>
              <li><Link href="#">Our Team</Link></li>
              <li><Link href="#">Tax Updates</Link></li>
              <li><Link href="#">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-orange-400 font-semibold mb-6">Legal</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-12" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-white/70 gap-4">
          <p>© 2026 SRJJ Accounting Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
