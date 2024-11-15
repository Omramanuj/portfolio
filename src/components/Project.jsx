"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const ProjectCard = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Proffrr",
      description:
        "An AI bot helping customers select the best tyre for their requirements, built with FastAPI, React.js, and ChatGPT agent.",
      technologies: ["FastAPI", "React.js", "ChatGPT"],
      image: "/assets/proffrr.png",
    },
    // {
    //   id: 2,
    //   title: "Amazon ML Challenge 2024",
    //   description:
    //     "Engineered a custom ML solution from scratch, securing rank 132 out of 75,000 teams. Applied PaddleOCR for text extraction and spaCy for NLP processing.",
    //   technologies: ["PaddleOCR", "spaCy", "Custom ML"],
    //   image: "/images/amazon-ml.jpg",
    // },
    {
        id: 3,
        title: "Cross-Platform Book Reading Application (BookApp)",
        description:
          "Used React, Go (Fiber), AWS S3, and PostgreSQL to create a book-reading app with TTS conversion for seamless reading and listening.",
        technologies: ["React", "Go (Fiber)", "AWS S3", "PostgreSQL"],
        github: "https://github.com/Omramanuj/bookApp",
        live: "#",
        image: "/assets/bookApp.png",
      },
      {
        id: 4,
        title: "SAS - Fat to Slim",
        description:
          "A dual-interface health tracking platform with predictive insights, fitness content, and advanced data visualization.",
        technologies: ["React", "Node.js", "Data Visualization"],
        github: "https://github.com/Omramanuj/HTT2.0",
        live: "https://htt-2-0.vercel.app/index",
        image: "/assets/sas.png",
      },
      {
        id: 5,
        title: "Design with Spark",
        description:
          "Developed an AI-generated 3D model design system using DALL-E and Three.js, integrated with Gemini API for user engagement.",
        technologies: ["DALL-E", "Three.js", "Gemini API"],
        github: "#",
        live: "https://design-with-spark.vercel.app/",
        image: "/assets/spark.png",
      },
      {
        id: 6,
        title: "Strinja Art Gallery",
        description:
          "A full-stack web app for a local art gallery with advanced UI/UX using React.js, Go, and PostgreSQL.",
        technologies: ["React.js", "Go", "PostgreSQL", "GSAP"],
        github: "https://github.com/Omramanuj/strinja",
        live: "#",
        image: "/assets/strinja(1).png",
      },
      {
        id: 7,
        title: "E-Commerce Platform",
        description:
          "Designed a full suite of e-commerce operations, including cart management, JWT tokens, and secure data retrieval.",
        technologies: ["Node.js", "Express.js", "PostgreSQL"],
        github: "https://github.com/Omramanuj/node-Ecom",
        live: "#",
        image: "/assets/node-exom.png",
      },
      //{
    //     id: 8,
    //     title: "Omni-Drive Robot with Web Application",
    //     description:
    //       "Engineered a robotic system with 360-degree mobility, integrating web and physical interfaces for dynamic responsiveness.",
    //     technologies: ["Robotics", "Go", "React"],
    //     github: "https://github.com/Omramanuj/OmniDRIVE-with-WEB",
    //     live: "#",
    //     image: "/assets/omni.png",
    //   },
  ];

  const ProjectLink = ({ href, icon: Icon, label }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-zinc-400 hover:text-emerald-400 transition-colors duration-300"
      aria-label={label}
    >
      <Icon className="w-5 h-5" />
      <span className="text-sm font-medium">{label}</span>
    </a>
  );

  return (
    <div className="min-h-screen bg-transparent p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-emerald-400 mb-6">Freelancing & Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="group bg-zinc-900 border border-white rounded-lg hover:border-emerald-500 transition-all duration-300"
            >
              <div
                className="relative overflow-hidden rounded-t-lg"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-64 object-cover transition-transform duration-300 ${
                    hoveredIndex === index ? "scale-110 brightness-75" : "scale-100 brightness-90"
                  }`}
                />
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-bold text-emerald-400">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-zinc-300 mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="bg-zinc-900 text-emerald-400 border-emerald-400/20 shadow-[0_0_5px_#4ade80]"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <ProjectLink href="#" icon={Github} label="Source" />
                  <ProjectLink href="#" icon={ExternalLink} label="Live Demo" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
