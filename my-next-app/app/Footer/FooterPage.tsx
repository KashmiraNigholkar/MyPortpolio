"use client";

import React from "react";
import Link from "next/link";

const FooterPage = () => {
  return (
    <footer className="bg-[#1c1b21] border-t border-[var(--primary-color)]">
      <div className="px-[8%] lg:px-[16%] py-6 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left */}
        <p className="text-sm text-white/70 text-center md:text-left font-sora">
          © {new Date().getFullYear()} Kashmira Nigholkar. All rights reserved.
        </p>

        {/* Right - Social Icons */}
        <div className="flex hero-social gap-4 text-2xl text-white/70">
          
          <Link
            href="https://github.com/KashmiraNigholkar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github hover:text-[var(--primary-color)] cursor-pointer transition" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/kashmira1234"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-linkedin hover:text-[var(--primary-color)] cursor-pointer transition" />
          </Link>

          <Link
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-youtube hover:text-[var(--primary-color)] cursor-pointer transition" />
          </Link>

          <Link
            href="https://x.com/KashmiraN_19"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-twitter hover:text-[var(--primary-color)] cursor-pointer transition" />
          </Link>

        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
