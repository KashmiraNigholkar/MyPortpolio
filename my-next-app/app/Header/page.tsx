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
    <div className="stats grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
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
  );
}
