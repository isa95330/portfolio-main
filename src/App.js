import React, { useState, useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  const [showSocialLinks, setShowSocialLinks] = useState(true);

  const handleScroll = () => {
    const portfolioSection = document.getElementById("portfolio-section");
    if (portfolioSection) {
      const { top } = portfolioSection.getBoundingClientRect();
      const hideThreshold = 100; // Adjust this value if necessary
      const isBelowThreshold = top <= hideThreshold;
      setShowSocialLinks(!isBelowThreshold);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-gradient-to-b from-black to-gray-800 min-h-screen">
      <NavBar />
      <Home />
      <About />
      <div id="portfolio-section">
        <Portfolio />
      </div>
      <Experience />
      <Contact />
      {showSocialLinks && <SocialLinks />}
    </div>
  );
}

export default App;
