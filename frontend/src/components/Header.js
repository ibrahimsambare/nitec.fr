import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = ({ activeSection, scrollToSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { id: "accueil", label: "Accueil" },
    { id: "services", label: "Services" },
    { id: "realisations", label: "Réalisations" },
    { id: "contact", label: "Contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`dark-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div 
            className="cursor-pointer"
            onClick={() => scrollToSection("accueil")}
          >
            <img 
              src="https://customer-assets.emergentagent.com/job_nitec-web/artifacts/a29co52z_NITEC%20Logo.svg" 
              alt="NITEC Logo" 
              className="dark-logo"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="dark-nav">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
                className={`dark-nav-link ${
                  activeSection === item.id ? 'active' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white hover:text-purple-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <button
              className="absolute top-6 right-6 p-2 text-white hover:text-purple-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>
            
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
                className={`text-2xl font-medium transition-colors ${
                  activeSection === item.id 
                    ? 'text-purple-400' 
                    : 'text-white hover:text-purple-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <style jsx>{`
        .scrolled {
          backdrop-filter: blur(10px);
          background: rgba(12, 12, 12, 0.9);
        }
      `}</style>
    </>
  );
};

export default Header;