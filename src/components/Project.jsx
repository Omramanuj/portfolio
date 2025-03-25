"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

const ProjectCard = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      id:1,
      title:"Spark-Grid",
      description:
      "Spark-Grid uses AI and blockchain to predict energy demand and optimize distribution via Ethereum-based carbon credit trading with an interactive dashboard.",
      image:"/assets/spark-grid.png",
      technologies:["Machine-Learning Model","EthereumJS","Solidity","React.js","Node.js","MongoDB"],
      github:"https://github.com/Omramanuj/SparkGrid",
      live:"https://sparkgrid.vercel.app/",
    },
    {
      id: 2,
      title: "Proffrr",
      description:
        "An AI bot helping customers select the best tyre for their requirements, built with FastAPI, React.js, and ChatGPT agent.",
      technologies: ["FastAPI", "React.js", "ChatGPT"],
      image: "/assets/proffrr.png",
      github: "#",
      live: null, // null indicates no live demo
    },
    {
      id: 3,
      title: "Cross-Platform Book Reading Application (BookApp)",
      description:
        "Used React, Go (Fiber), AWS S3, and PostgreSQL to create a book-reading app with TTS conversion for seamless reading and listening.",
      technologies: ["React", "Go (Fiber)", "AWS S3", "PostgreSQL"],
      github: "https://github.com/Omramanuj/bookApp",
      live: null,
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
      live: null,
      image: "/assets/strinja(1).png",
    },
    {
      id: 7,
      title: "E-Commerce Platform",
      description:
        "Designed a full suite of e-commerce operations, including cart management, JWT tokens, and secure data retrieval.",
      technologies: ["Node.js", "Express.js", "PostgreSQL"],
      github: "https://github.com/Omramanuj/node-Ecom",
      live: null,
      image: "/assets/node-exom.png",
    },
  ];

  const ProjectLink = ({ href, icon: Icon, label }) => {
    if (href === "#") return null; // Don't render if no valid link

    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-zinc-400 hover:text-emerald-400 transition-colors duration-300"
        aria-label={label}
        onClick={(e) => e.stopPropagation()} // Prevent card click when clicking link
      >
        <Icon className="w-5 h-5" />
        <span className="text-sm font-medium">{label}</span>
      </a>
    );
  };

  const handleCardClick = (project) => {
    if (project.live) {
      window.open(project.live, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-transparent p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-emerald-400 mb-6">
          Freelancing & Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className={`group bg-zinc-900 border border-white rounded-lg hover:border-emerald-500 transition-all duration-300 ${
                project.live ? 'cursor-pointer' : ''
              }`}
              onClick={() => handleCardClick(project)}
            >
              <div
                className="relative overflow-hidden rounded-t-lg"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 2}
                    className={`object-cover transition-transform duration-300 ${
                      hoveredIndex === index
                        ? "scale-110 brightness-75"
                        : "scale-100 brightness-90"
                    }`}
                    quality={85}
                  />
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-bold text-emerald-400">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-zinc-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

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
                  <ProjectLink href={project.github} icon={Github} label="Source" />
                  {project.live && (
                    <ProjectLink href={project.live} icon={ExternalLink} label="Live Demo" />
                  )}
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