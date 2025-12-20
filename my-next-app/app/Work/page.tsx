"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
// import "swiper/css";
// import "swiper/css/navigation";
import { FaBootstrap, FaFigma, FaJsSquare, FaReact, FaGithub } from "react-icons/fa";
import { SiFramer, SiTailwindcss, SiNextdotjs, SiNodedotjs } from "react-icons/si";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectSlider() {
  const projects = [
    {
      id: "01",
      title: "Stock Market App",
      desc: "A full-featured stock market web app built with Next.js, React, Tailwind CSS, and JavaScript to view and track stocks in real-time.",
      tech: ["Next.js", "React JS", "Tailwind CSS", "JavaScript"],
      img: "/project1.webp",
      demo: "#",
      github: "#",
    },
    {
      id: "02",
      title: "AI Product Ad Generator",
      desc: "An AI-powered advertising tool that generates product ads automatically, built with Next.js, Tailwind CSS, and Figma for UI/UX design.",
      tech: ["Next.js", "Tailwind CSS", "Figma"],
      img: "/AIProducctAdGenerator.png",
      demo: "#",
      github: "#",
    },
    {
      id: "03",
      title: "Job Portal Web App",
      desc: "A comprehensive job portal built with React.js and Framer Motion, including job listings, user registration, and interactive UI animations.",
      tech: ["React", "Framer Motion", "JavaScript"],
      img: "/JobPortalWeb.png",
      demo: "#",
      github: "#",
    },
    {
      id: "04",
      title: "Imagify AI",
      desc: "An AI image generator that creates images from user input using React.js, Node.js, and Express.js with responsive Tailwind CSS design.",
      tech: ["React JS", "Tailwind CSS", "Node.js", "Express JS"],
      img: "/Imagify.png",
      demo: "#",
      github: "#",
    },
    {
      id: "05",
      title: "Hotel Booking Website",
      desc: "A modern hotel booking platform built with React.js and Tailwind CSS, allowing users to search, view, and book hotel rooms online.",
      tech: ["React JS", "Tailwind CSS", "Figma"],
      img: "/Hotel-Booking.png",
      demo: "#",
      github: "#",
    },
  ];

  const getTechIcon = (tech: string) => {
    switch (tech.toLowerCase()) {
      case "react js":
      case "react":
        return FaReact;
      case "tailwind css":
        return SiTailwindcss;
      case "javascript":
        return FaJsSquare;
      case "bootstrap css":
        return FaBootstrap;
      case "figma":
        return FaFigma;
      case "motion":
      case "framer motion":
        return SiFramer;
      case "next.js":
      case "next js":
        return SiNextdotjs;
      case "node.js":
      case "node js":
        return SiNodedotjs;
      default:
        return null;
    }
  };

  return (
    <>
      {/* Section Heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-4xl font-bold text-[var(--primary-color)]">
            Work Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-white">
            My projects highlight strong full-stack development skills, modern UI/UX practices, and real-world problem-solving using technologies like React, Next.js, Node.js, Tailwind CSS, and JavaScript.
          </p>
        </motion.div>
      </div>

      {/* Project Slider */}
      <div className="px-[8%] lg:px-[16%] py-15 text-white">
        <Swiper
          modules={[Navigation]}
          loop={true}
          navigation={{ prevEl: ".custom-prev", nextEl: ".custom-next" }}
          spaceBetween={40}
          slidesPerView={1}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* Content Section */}
                <div className="work-content">
                  <h2 className="text-8xl font-bold stroke-text">{project.id}</h2>
                  <h2 className="text-5xl font-semibold font-unbounded mt-4">
                    {project.title}
                  </h2>

                  <p className="text-gray-400 mt-3 text-lg leading-relaxed">
                    {project.desc}
                  </p>

                  {/* Tech Icons */}
                  <div className="flex gap-4 mt-4">
                    {project.tech.map((tech, index) => {
                      const IconComponent = getTechIcon(tech);
                      return IconComponent ? (
                        <div
                          key={index}
                          className="work-icons text-4xl text-[var(--primary-color)] cursor-pointer transition-all duration-300"
                          title={tech}
                        >
                          <IconComponent />
                        </div>
                      ) : null;
                    })}
                  </div>

                  {/* Buttons */}
                  <div className="work-share flex gap-4 mt-6 border-t border-gray-500 pt-5">
                    <Link
                      href={project.demo}
                      className="w-15 h-15 flex items-center justify-center rounded-full bg-gray-500/5 hover:bg-white hover:text-black transition-all duration-500"
                      target="_blank"
                    >
                      <i className="bi bi-arrow-up-right text-2xl"></i>
                    </Link>

                    <Link
                      href={project.github}
                      className="w-15 h-15 flex items-center justify-center rounded-full bg-gray-500/5 hover:bg-white hover:text-black transition-all duration-500"
                      target="_blank"
                    >
                      <FaGithub className="text-2xl" />
                    </Link>
                  </div>
                </div>

                {/* Image Section */}
                <div className="relative work-image">
                  <Image
                    src={project.img}
                    className="rounded-lg shadow-lg"
                    alt={project.title}
                    width={650}
                    height={300}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom navigation buttons */}
          <div className="flex gap-3 justify-end mt-6">
            <button className="custom-prev w-12 h-12 flex items-center justify-center bg-[color:var(--primary-color)] text-white rounded shadow hover:bg-white hover:text-black transition-all duration-500">
              <i className="bi bi-arrow-left text-2xl"></i>
            </button>

            <button className="custom-next w-12 h-12 flex items-center justify-center bg-[color:var(--primary-color)] text-white rounded shadow hover:bg-white hover:text-black transition-all duration-500">
              <i className="bi bi-arrow-right text-2xl"></i>
            </button>
          </div>
        </Swiper>
      </div>
    </>
  );
}
