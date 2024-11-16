"use client"

import React, { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const Timeline = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRefs = useRef([]);
  const containerRef = useRef(null);

  const experienceData = [
    {
      id: 1,
      title: "SDE intern",
      company: "Nomorede",
      duration: "May,2024 - June,2024",
      description: "Developed a dual-sided platform for fashion stylists and customers using NextJS and TypeScript • Led the project from initial draft to live deployment on Vercel • Implemented video call services and dynamic appointment booking with integrated calendar functionalities• Improved SEO, enhancing site visibility (to top 3 search results) and user engagement.",
      technologies: ["NextJS", "TypeScript", "Vercel", "TailwindCSS", "SEO"]
    },
    {
      id: 2,
      title: "SDE intern",
      company: "Megascale",
      duration: "April,2024 - May,2024",
      description: "Developed and maintained multiple client websites, implementing modern UI/UX practices and ensuring cross-browser compatibility.",
      technologies: ["React", "JavaScript", "CSS3", "REST API", "Git"]
    },
  ];

  useEffect(() => {
    timelineRefs.current = timelineRefs.current.slice(0, experienceData.length);

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleItems((prev) => [...prev, parseInt(entry.target.dataset.id)]);
        }
      });
    }, observerOptions);

    timelineRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    const handleScroll = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const rect = container.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const scrollProgress = Math.max(0, Math.min(1, 
          (windowHeight - rect.top) / (windowHeight + rect.height)
        ));
        setScrollProgress(scrollProgress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [experienceData.length]);

  return (
    <Card className="min-h-screen py-8 md:py-16 bg-zinc-950 flex items-center justify-center">
      <div ref={containerRef} className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 md:mb-12 text-center">
          Professional Experience
        </h2>
        <div className="relative">
          {/* Background line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-zinc-800">
            <div 
              className="absolute top-0 left-0 w-full bg-emerald-400 transition-all duration-150"
              style={{ 
                height: `${scrollProgress * 100}%`,
                boxShadow: '0 0 10px #4ade80, 0 0 20px #4ade80'
              }}
            />
          </div>

          {experienceData.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => (timelineRefs.current[index] = el)}
              data-id={item.id}
              className="flex flex-col md:flex-row items-start md:items-center mb-12 md:mb-16 w-full relative"
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 mt-1 md:mt-0">
                <div
                  className={`w-8 h-8 rounded-full border-4 flex items-center justify-center transition-all duration-500 bg-zinc-950 ${
                    visibleItems.includes(item.id)
                      ? "border-emerald-400 shadow-[0_0_10px_#4ade80]"
                      : "border-zinc-700"
                  }`}
                >
                  <Briefcase
                    className={`w-4 h-4 ${
                      visibleItems.includes(item.id)
                        ? "text-emerald-400"
                        : "text-zinc-400"
                    }`}
                  />
                </div>
              </div>

              {/* Content */}
              <div
                className={`pl-20 md:pl-0 md:w-5/12 ${
                  index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                } ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}
              >
                <div
                  className={`transition-all duration-700 transform ${
                    visibleItems.includes(item.id)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  <h3 className="text-emerald-400 text-xl font-bold mb-2">
                    {item.title}
                  </h3>
                  <h4 className="text-white text-lg mb-1">{item.company}</h4>
                  <p className="text-zinc-400 mb-2">{item.duration}</p>
                  <p className="text-white/80 mb-4">{item.description}</p>
                  <div className={`flex flex-wrap gap-2 ${
                    index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                  }`}>
                    {item.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 shadow-[0_0_5px_#4ade80]"
                      >
                        #{tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default Timeline;