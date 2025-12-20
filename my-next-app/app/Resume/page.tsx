"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { FaBootstrap, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiAngular,
  SiCss3,
  SiHtml5,
  SiNextdotjs,
  SiPhp,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function Resume() {
  const [activeTab, setActiveTab] = useState("Experience");
  const tabs = ["Experience", "Education", "Skills", "About me"];

  const experiences = [
    { date: "2025 - Present", role: "Full Stack Developer", company: "Tech Solution Inc" },

    { date: "Winter 2024", role: "Front-End Developer Intern", company: "EyGDS-Edunet Foundation" },
  ];

  const educations = [
    {
      year: "2022 - 2026",
      degree: "B.E. Information Technology",
      institute: "Trinity College Of Engineering & Research, Pune",
      grade: "9.45 CGPA",
    },
    {
      year: "2021 - 2022",
      degree: "HSC",
      institute: "Jijamata Jr College, Jejuri",
      grade: "60.17%",
    },
    {
      year: "2019 - 2020",
      degree: "SSC",
      institute: "Jijamata Highschool, Jejuri",
      grade: "92%",
    },
  ];

  const skills = [
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss3 /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "PHP", icon: <SiPhp /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Angular", icon: <SiAngular /> },
  ];

  // Variants for staggered animation
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="show"
          viewport={{ once: true }}
          className="text-center mb-16"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-4xl font-bold text-[var(--primary-color)]"
          >
            Resume
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto text-white"
          >
            Projects reflect my technical expertise, hands-on experience with modern technologies.
          </motion.p>
        </motion.div>
      </div>

      <section className="px-[8%] lg:px-[16%] py-20 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left */}
          <div>
            <h2 className="text-4xl font-unbounded font-bold mb-4">Why hire me?</h2>
            <p className="text-gray-400 mt-6 mb-10">
              I’m a passionate developer focused on creating fast, responsive, and user-friendly digital experiences.
            </p>

            <div className="flex flex-col gap-5">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-4 text-left rounded-md font-semibold transition-all ${
                    activeTab === tab
                      ? "bg-[var(--primary-color)] text-white"
                      : "bg-gray-500/5 text-gray-400 hover:bg-gray-500/20 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="md:col-span-2">
            <h2 className="text-4xl font-unbounded font-bold mb-4">{activeTab}</h2>
            <p className="text-gray-400 mb-10">
              {activeTab === "About me"
                ? "I am a full stack developer specializing in React, Node.js, and modern web technologies."
                : "Explore my professional journey, education, and skills below."}
            </p>

            <AnimatePresence mode="wait">
              {/* EXPERIENCE */}
              {activeTab === "Experience" && (
                <motion.div
                  key="experience"
                  variants={container}
                  initial="hidden"
                  animate="show"
                  exit={{ opacity: 0 }}
                  className="h-[500px] overflow-y-scroll pr-2 custom-scrollbar"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {experiences.map((exp, index) => (
                      <motion.div
                        key={index}
                        variants={item}
                        whileHover={{ scale: 1.03 }}
                        className="bg-gray-500/5 hover:bg-gray-500/10 border border-gray-800 rounded-lg px-5 py-10 transition-all duration-500"
                      >
                        <h3 className="text-[var(--primary-color)] font-semibold my-2">{exp.date}</h3>
                        <h4 className="text-2xl font-unbounded mb-1">{exp.role}</h4>
                        <p className="text-gray-400 text-sm mt-2">{exp.company}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* EDUCATION */}
              {activeTab === "Education" && (
                <motion.div
                  key="education"
                  variants={container}
                  initial="hidden"
                  animate="show"
                  exit={{ opacity: 0 }}
                  className="h-[500px] overflow-y-scroll pr-2 custom-scrollbar"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {educations.map((edu, index) => (
                      <motion.div
                        key={index}
                        variants={item}
                        whileHover={{ scale: 1.03 }}
                        className="bg-gray-500/5 hover:bg-gray-500/10 border border-gray-800 rounded-lg px-5 py-10 transition-all duration-500"
                      >
                        <h3 className="text-[var(--primary-color)] font-semibold my-2">{edu.year}</h3>
                        <h4 className="text-2xl font-unbounded mb-1">{edu.degree}</h4>
                        <p className="text-gray-400 text-sm mt-2">{edu.institute}</p>
                        <p className="text-sm mt-2 text-white/80">
                          Grade: <span className="text-[var(--primary-color)] font-semibold">{edu.grade}</span>
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* SKILLS */}
            {activeTab === "Skills" && (
              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-gray-200 mt-4"
              >
                {skills.map((skill, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="relative cursor-pointer bg-gray-500/5 rounded py-11 flex flex-col items-center group"
                  >
                    <i className="text-6xl group-hover:text-[var(--primary-color)] transition-all duration-500">
                      {skill.icon}
                    </i>
                    <span className="absolute bottom-[5px] scale-0 rounded bg-gray-800 px-2 py-1 font-semibold transition-all duration-300 group-hover:scale-100 group-hover:text-[var(--primary-color)]">
                      {skill.name}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            )}

            {/* ABOUT ME */}
            {activeTab === "About me" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gray-400 space-y-4">
                <p>
                  Hi! I'm <span className="text-[color:var(--primary-color)] font-semibold">Kashmira Nigholkar</span> — A passionate Full-stack developer who enjoys crafting modern web applications.
                </p>
                <ul className="space-y-2">
                  <li><strong>Experience:</strong> 3+ years in Web Development.</li>
                  <li><strong>Nationality:</strong> Indian</li>
                 <li><strong>Phone:</strong> 9579106334</li>
                  <li><strong>Email:</strong> kashmiranigholkar421@gmail.com</li>
                  <li><strong>Languages:</strong> English</li>
                </ul>
                <p>I specialize in React, Next.js, Node.js, and Tailwind CSS. I love turning ideas into functional, elegant web solutions that users enjoy using.</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
