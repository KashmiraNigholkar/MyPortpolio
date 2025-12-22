"use client";
import React from "react";
import { motion } from "framer-motion";

const achievements = [
  {
    title: "2nd Rank in Academics-Third Year",
    year: "2025",
    description:
      "Secured top rank in 3rd year with outstanding academic performance and project excellence.",
    icon: "🎓",
    certificate: "/3rd_year_topper.pdf",
  },
  {
    title: "Full Stack Developer Internship",
    year: "2024",
    description:
      "Worked on MERN stack applications, REST APIs, dashboards, and real-world projects.",
    icon: "💻",
    certificate: "/EyGds-Internship.png",
  },
  {
    title: "Machine Learning Internship",
    year: "2025",
    description:
      "Completed Machine Learning internship at Prodigy Technology with hands-on projects.",
    icon: "🤖",
    certificate: "/Prodigy-Infotech.png",
  },
  {
    title: "Java Crash Course",
    year: "2025",
    description:
      "Completed Java crash course covering OOP concepts, Java basics, and problem solving.",
    icon: "☕",
    certificate: "/JavaCourse.png",
  },
  {
    title: "Problem Solving Basics",
    year: "2025",
    description:
      "Certified in logical thinking and basic problem-solving techniques.",
    icon: "🧠",
    certificate: "/ProblemSolvingCertificate.png",
  },
  {
    title: "Augmented & Virtual Reality Acceleration",
    year: "2025",
    description:
      "Completed AR/VR acceleration program with practical exposure.",
    icon: "🕶️",
    certificate: "/CDac.png",
  },
];

export default function AchievementsPage() {
  return (
    <section className="min-h-screen bg-[#0b0b0f] text-white flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-6xl text-center">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-4xl font-bold mb-12 text-[var(--primary-color)]"
        >
          Achievements & Certifications
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="w-full rounded-3xl p-[1.5px] bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400"
            >
              {/* Inner Card */}
              <div className="rounded-3xl bg-[#111118] p-6 shadow-xl h-full flex flex-col text-left">
                <div className="text-5xl mb-4">{item.icon}</div>

                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-400 mb-3">{item.year}</p>

                <p className="text-gray-300 mb-6 text-sm leading-relaxed flex-grow">
                  {item.description}
                </p>

                <a
                  href={item.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto block text-center rounded-xl bg-purple-600 hover:bg-purple-700 transition py-2 font-semibold"
                >
                  View Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
