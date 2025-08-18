import React, { useState } from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import PortfolioSection from "./PortfolioSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

const HomePage = () => {
  const [activeSection, setActiveSection] = useState("accueil");

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="dark-container">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <main>
        <section id="accueil">
          <HeroSection scrollToSection={scrollToSection} />
        </section>
        
        <section id="services">
          <ServicesSection />
        </section>
        
        <section id="realisations">
          <PortfolioSection />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;