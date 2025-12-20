"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import IntroPage from "./IntroPage/IntroPage";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname().toLowerCase();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/Services" },
    { name: "Resume", href: "/Resume" },
    { name: "Work", href: "/Work" },
    { name: "Project", href: "/Project" },
    { name: "Achievements", href: "/achievements" },
    { name: "Contact", href: "/Contact" },
  ];

  return (
    <>
      <IntroPage />

      <nav className="w-full z-[99999] transition-all duration-300">
        <div className="flex justify-between items-center px-[8%] lg:px-[16%] py-6">

          {/* Logo with right spacing */}
          <Link
            href="/"
            className="text-5xl font-bold font-unbounded text-white mr-16 lg:mr-24"
          >
            Folio
            <span className="text-[var(--primary-color)]">Hub.</span>
          </Link>

          {/* Desktop Menu + Button */}
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center space-x-5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-base font-bold transition-all duration-300 px-2 py-2 rounded ${
                    pathname === link.href
                      ? "text-[var(--primary-color)]"
                      : "text-white hover:text-[var(--primary-color)]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Hire Us Button */}
            <Link
              href="/contact"
              className="bg-[var(--primary-color)] px-5 py-2 text-xl text-white font-semibold rounded-md
              hover:bg-transparent hover:shadow-[0px_2px_5px_var(--primary-color)]
              transition-all duration-300"
            >
              Hire Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="ri-menu-2-fill text-white"></i>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden bg-[#1c1b21] text-white border-y border-[var(--primary-color)]
          px-[8%] overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? "max-h-96 py-5 opacity-100" : "max-h-0 py-0 opacity-0"
          }`}
        >
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-base transition-all duration-300 ${
                    pathname === link.href
                      ? "text-[var(--primary-color)]"
                      : "text-white hover:text-[var(--primary-color)]"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
