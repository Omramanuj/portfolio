"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { Button } from "./ui/button";

const Links = [
  {
    name: "home",
    id: "home",
  },
  {
    name: "experience",
    id: "experience",
  },
  {
    name: "free-lancing & projects",
    id: "projects",
  },
  {
    name: "contact",
    id: "contact",
  },
];

const MobileNav = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    console.log(element)
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    scrollToSection(sectionId);
    setIsOpen(false); // Close the sheet after navigation
  };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const sections = Links.map(link => link.id);
  //     const scrollPosition = window.scrollY + 100;

  //     sections.forEach((sectionId) => {
  //       const section = document.getElementById(sectionId);
  //       if (section) {
  //         const sectionTop = section.offsetTop;
  //         const sectionHeight = section.clientHeight;

  //         if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
  //           setActiveSection(sectionId);
  //         }
  //       }
  //     });
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   handleScroll(); // Initial check

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  console.log(activeSection)
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent>
        <div className="h-full flex flex-col gap-4 justify-around">
          {/* logo */}
          <SheetTitle>
            <div className="mt-10 text-center text-2xl">
              <button onClick={() => handleNavClick("home")}>
                <h1>
                  om<span className="text-accent">.</span>dev
                </h1>
              </button>
            </div>
          </SheetTitle>

          {/* nav-links */}
          <nav className="flex flex-col justify-center items-center gap-6 mb-4">
            {Links.map((link, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(link.id)}
                className={`${
                  activeSection === link.id && "text-accent border-b-2 border-accent"
                } text-xl capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* links to socials */}
          <div className="flex gap-4 justify-center">
            <Button 
              variant="outline" 
              onClick={() => {
                window.open('https://drive.google.com/uc?export=download&id=10Wwr9OGLhu-k10K2yt-dEoc70qOLj9F4', '_blank');
              }}
            >
              resume
            </Button>
            <Button 
              variant="outline" 
              onClick={() => {
                window.open('https://github.com/Omramanuj', '_blank');
              }}
            >
              github
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;