"use client";

import Image from "next/image";
import Link from "next/link";
import Hero from "@/public/Hero.png";
import { useEffect, useRef } from "react";
import { CountUp } from "countup.js";

export default function Header() {
  const statsData = [
    { value: 3, label: "Years of\nExperience" },
    { value: 27, label: "Projects\nCompleted" },
    { value: 10, label: "Technologies\nMastered" },
    { value: 560, label: "Code\nCommits" },
  ];

  // ✅ Properly typed ref array
  const countRefs = useRef<(HTMLHeadingElement | null)[]>([]);

  useEffect(() => {
    countRefs.current.forEach((el, index) => {
      if (el) {
        const countUp = new CountUp(el, statsData[index].value, {
          duration: 3,
          separator: ",",
        });
        if (!countUp.error) countUp.start();
      }
    });
  }, []);

  return (
      <header className="h-[100vh] text-white py-12 relative overflow-hidden">
      {/* Gradient blobs */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[var(--primary-light-1)] to-[var(--primary-light-2)] blur-[100px] -z-10"></div>
      <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-gradient-to-r from-[var(--primary-light-1)] to-[var(--primary-light-2)] blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-[20%] w-[500px] h-[700px] rounded-full bg-gradient-to-r from-[var(--primary-light-1)] to-[var(--primary-light-2)] blur-[100px] -z-10"></div>

      {/* Hero section */}
      <div className="flex pt-10 flex-col lg:flex-row items-center justify-between px-[8%] lg:px-[16%]">
        {/* Left content */}
        <div className="lg:w-1/2 text-start md:text-left">
          
          <h1 className="text-6xl lg:text-4xl font-unbounded font-normal mb-2 leading-tight">
            Hello I'm
            <br />
            <span className="text-[color:var(--primary-color)]">
              Kashmira Nigholkar
            </span>
            <p className="text-lg mb-2 text-gray-400"> Full Stack  Developer</p>
          </h1>
          <p className="text-gray-400 text-md lg:text-xl font-normal font-sora my-8">
            I excel at crafting elegant digital experiences and am proficient in
            various programming languages and technologies.
          </p>

          <div className="flex flex-wrap gap-8 items-center">
            <Link
              href="/Kashmira_Nigholkar_Resume.pdf"
              className="border border-[var(--primary-color)] font-bold text-[var(--primary-color)] px-6 py-3 rounded hover:bg-[var(--primary-color)] hover:text-white transition-all duration-500"
            >
              <i className="bi bi-download me-2"></i>Download CV
            </Link>

            <div className="flex hero-social gap-3 text-2xl">
              <Link href="https://github.com/KashmiraNigholkar"><i className="bi bi-github hover:text-[var(--primary-color)] cursor-pointer transition"  /></Link>
              <Link href="linkedin.com/in/kashmira1234"><i className="bi bi-linkedin hover:text-[var(--primary-color)] cursor-pointer transition" /></Link>
              <Link href=""><i className="bi bi-youtube hover:text-[var(--primary-color)] cursor-pointer transition" /></Link>
             <Link href="https://x.com/KashmiraN_19"><i className="bi bi-twitter hover:text-[var(--primary-color)] cursor-pointer transition" /></Link>
            </div>
          </div>
        </div>

        {/* Right content - hero image */}
        <div className="lg:w-1/2 w-full mt-10 lg:mt-0 flex justify-center relative">
          <div className="relative rounded-full flex items-center justify-center">
            <div className="relative hero-image w-full h-full rounded-full overflow-hidden bg-gradient-to-r from-[var(--hero-image-from)] to-[var(--hero-image-to)]">
              <Image
                src={Hero}
                alt="Portfolio Picture"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    <div className="stats px-[8%] lg:px-[16%] mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {statsData.map((stat, index) => (
        <div key={index} className="flex gap-2 items-center">
          <h1
            ref={(el) => {
              countRefs.current[index] = el;
            }}
            className="text-7xl font-unbounded font-bold"
          >
            0
          </h1>
          <p className="whitespace-pre-line text-gray-400 text-lg">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
    </header>
  );
}
