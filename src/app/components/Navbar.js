
"use client";

import { useState, useEffect } from "react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "menu", label: "Menu" },
  { id: "mob", label: "Our App" },
  { id: "footer", label: "Information" },
 
];

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "";
      sections.forEach((section) => {
        const sectionElement = document.getElementById(section.id);
        if (sectionElement) {
          const { top } = sectionElement.getBoundingClientRect();
          if (top <= 150) {
            currentSection = `#${section.id}`;
          }
        }
      });
      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="h-[1.7cm] w-full bg-white fixed top-0 z-10 shadow-md">
      <div className="flex justify-between items-center px-8">
        {/* Logo */}
       <a href="#hero"> <h1 className="font-bold text-[28px] text-green-600 pt-[.3cm] ml-9">Tasty</h1></a>

        {/* Navigation Links */}
        <ul className="flex gap-10 text-[18px] pt-3">
          {sections.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`${
                  activeLink === `#${item.id}` ? "text-green-700 underline font-bold" : "text-black"
                } transition-colors duration-300`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
