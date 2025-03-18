import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth <= 1000);
    updateIsMobile();

    const resizeListener = () => {
      clearTimeout(window.resizeTimer);
      window.resizeTimer = setTimeout(updateIsMobile, 150);
    };

    window.addEventListener("resize", resizeListener);
    return () => window.removeEventListener("resize", resizeListener);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "pastEvent", label: "PastEvent"},
    { id: "prizes", label: "Prizes" },
    { id: "timeline", label: "Timeline" },
    { id: "guidelines", label: "Guidelines" },
    { id: "faq", label: "FAQ" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      {isMobile ? (
          <FontAwesomeIcon className="mobile-icon"  icon={menuOpen ? faTimes : faBars} onClick={() => setMenuOpen(!menuOpen)}/>
      ) : (
        <nav className="nav-items">
          {navLinks.map(({ id, label }) => (
            <p key={id} onClick={() => scrollToSection(id)}>
              {label}
            </p>
          ))}
        </nav>
      )}

      {menuOpen && (
        <nav className="mobile-nav open">
          {navLinks.map(({ id, label }) => (
            <p key={id} onClick={() => scrollToSection(id)}>
              {label}
            </p>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;