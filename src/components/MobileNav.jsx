"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet";
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

  // Combined click handler for scroll and sheet close
  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    // Find and click the SheetClose trigger to close the sheet
    const closeButton = document.querySelector('[data-sheet-close]');
    if (closeButton) {
      closeButton.click();
    }
  };

  return (
    <Sheet>
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
            <Button variant="outline" onClick={() => {
              // Add your resume download/view logic here
              window.open('your-resume-url', '_blank');
            }}>
              resume
            </Button>
            <Button variant="outline" onClick={() => {
              window.open('your-github-url', '_blank');
            }}>
              github
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;