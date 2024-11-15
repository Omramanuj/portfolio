"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Links = [
  {
    name: "home",
    id: "home"
  },
  {
    name: "experience",
    id: "experience"
  },
  {
    name: "free-lancing & projects",
    id: "projects"
  }
];

const Nav = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [...Links.map(link => link.id), 'contact']; // Add contact to sections
      const scrollPosition = window.scrollY + 100;

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="flex gap-8 items-center">
      {Links.map((link, index) => {
        return (
          <button
            key={index}
            onClick={() => scrollToSection(link.id)}
            className={`${
              activeSection === link.id && "text-accent border-accent border-b-2"
            } capitalize font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </button>
        );
      })}
      
      <Button 
        onClick={() => scrollToSection("contact")}
        className={`${
          activeSection === "contact" && "bg-accent"
        }`}
      >
        Hire me
      </Button>
    </nav>
  );
};

export default Nav;