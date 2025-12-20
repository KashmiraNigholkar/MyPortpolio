"use client";

import { motion, easeOut } from "framer-motion";

const ServicesData = [
  {
    id: "01",
    title: "Web Development",
    desc: "Building responsive, high-performance websites using React, Next.js, and MERN stack."
  },
  {
    id: "02",
    title: "UI/UX Design",
    desc: "Designing intuitive, user-friendly interfaces with modern design principles."
  },
  {
    id: "03",
    title: "Logo Design",
    desc: "Creating clean, scalable, and memorable logos for strong brand identity."
  },
  {
    id: "04",
    title: "SEO",
    desc: "Improving website visibility with performance optimization and SEO best practices."
  },
];

// animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const card = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut }, // ✅ TypeScript compatible
  },
};

export default function Services() {
  return (
    <div>
      {/* HEADING */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-2xl sm:text-4xl font-bold text-[var(--primary-color)]"
            initial={{ letterSpacing: "0.2em", opacity: 0 }}
            whileInView={{ letterSpacing: "0.05em", opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Services
          </motion.h2>

          <p className="text-lg max-w-2xl mx-auto text-white mt-4">
            Explore the services offered in my projects, highlighting my skills
            and real-world problem-solving abilities.
          </p>
        </motion.div>
      </div>

      {/* CARDS */}
      <motion.section
        className="px-[8%] lg:px-[16%] py-20 text-white"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {ServicesData.map((service, index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={{ scale: 1.04 }}
              className="group py-10 px-10 border border-gray-800 rounded-xl cursor-pointer transition-all duration-500 hover:border-[var(--primary-color)]"
            >
              <div className="flex justify-between items-center mb-4">
                <motion.h3
                  className="text-6xl font-bold text-gray-400 group-hover:text-[var(--primary-color)]"
                  whileHover={{ x: -6 }}
                >
                  {service.id}
                </motion.h3>

                <motion.div
                  className="w-20 h-20 flex items-center justify-center rounded-full bg-white text-black group-hover:bg-[var(--primary-color)] group-hover:text-white"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 1.8 }}
                  whileHover={{ rotate: 45 }}
                >
                  <i className="bi bi-arrow-up-right text-3xl"></i>
                </motion.div>
              </div>

              <motion.h2
                className="text-4xl font-normal font-unbounded mb-5 group-hover:text-[var(--primary-color)]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {service.title}
              </motion.h2>

              <p className="text-gray-400 text-lg">{service.desc}</p>

              {/* animated underline */}
              <motion.div
                className="h-[2px] bg-gray-700 mt-5"
                initial={{ width: "0%" }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.4, ease: easeOut }}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
}
