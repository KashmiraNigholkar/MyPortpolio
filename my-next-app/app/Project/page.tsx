"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { motion, Variants, easeOut } from "framer-motion";

export default function Project() {
  const projects = [
    {
      title: "Coffee-Shop",
      description:
        "A Coffee Shop Website built with React.js that lets users browse the menu, order online, and explore offers with a responsive, interactive UI and smooth navigation for an engaging user experience.",
      image: "./Coffe-shop.png",
      technologies: ["React.js", "Tailwind CSS", "Figma"],
      liveUrl: "https://coffe-shop-drab.vercel.app/",
      githubUrl: "https://github.com/KashmiraNigholkar/Coffe_Shop",
    },
    {
      title: "Full Stack Hotel Booking",
      description:
        "A Full Stack Hotel Booking Website that enables users to search, view, and book hotel rooms online with secure authentication and real-time availability. It includes an admin panel for managing hotels, rooms, and bookings efficiently.",
      image: "./Hotel-Booking.png",
      technologies: ["React.js", "Express.js", "Node.js", "MongoDB"],
      liveUrl: "",
      githubUrl: "https://github.com/KashmiraNigholkar/Full-Stack-Hotel_Booking",
    },
    {
      title: "Full Stack Recipe Web App",
      description:
        "A Full Stack Recipe Sharing Web App where users can create, share, and explore recipes with images and ingredients. It includes user authentication, interactive UI, and an admin panel for managing content.",
      image: "./Recipe-Sharing-Platform.png",
      technologies: ["React.js", "Express.js", "Node.js", "MongoDB"],
      liveUrl: "",
      githubUrl: "https://github.com/KashmiraNigholkar/Full-Stack--Food-Web-Tomato",
    },
    {
      title: "Spotify-Clone",
      description:
        "A Full Stack Spotify Clone App that lets users stream music, create playlists, and manage their library with real-time playback. It features user authentication, a modern UI, and an admin panel for managing songs and artists.",
      image: "./Spotify.png",
      technologies: ["React.js", "Express.js", "Node.js", "MongoDB"],
      liveUrl: "",
      githubUrl: "https://github.com/KashmiraNigholkar/Spotify_Clone",
    },
    {
      title: "Travel-React-App",
      description:
        "A Travel Web App that helps users explore destinations, book trips, and plan itineraries with an interactive React-based interface and real-time travel information.",
      image: "./Travel.png",
      technologies: ["React.js", "SCSS", "Figma", "Tailwind CSS"],
      liveUrl: "",
      githubUrl: "https://github.com/KashmiraNigholkar/Travel.-React_Web",
    },
    {
      title: "Real-Estate",
      description:
        "Real Estate Website (React) A modern and responsive real estate web application built with React.js, allowing users to browse, search, and view property listings with detailed information, images, and filters.",
      image: "./Real-estate.png",
      technologies: ["React.js", "Tailwind CSS", "Figma"],
      liveUrl: "",
      githubUrl: "https://github.com/KashmiraNigholkar/Real_Estate",
    },
  ];

  /* Animation Variants */
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardAnim: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  return (
    <section id="projects" className="py-20 bg-muted/500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-4xl font-bold mb-1 text-[var(--primary-color)]">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-white">
            A showcase of my recent work, demonstrating various technologies and problem-solving approaches.
          </p>
        </motion.div>

        {/* Cards Grid Animation */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={cardAnim} whileHover={{ scale: 1.03 }}>
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "./placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button size="sm" className="w-full">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Button>
                      </a>
                    )}
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline">
                        <i className="bi bi-github text-xl"></i>
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
