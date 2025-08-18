import React from "react";
import { ArrowRight, Code, Globe, Zap } from "lucide-react";
import { companyInfo } from "../mock";

const HeroSection = ({ scrollToSection }) => {
  const handleCTAClick = () => {
    scrollToSection("contact");
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-0">
      {/* Subtle tech-inspired background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-purple-400 animate-float"></div>
        <div className="absolute bottom-40 right-16 w-24 h-24 border border-purple-400 animate-float-delay-1"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-purple-400 animate-float-delay-2"></div>
        <div className="absolute bottom-1/3 left-1/4 w-20 h-20 border border-purple-400 animate-float-delay-3"></div>
        
        {/* Circuit-inspired lines */}
        <svg className="absolute inset-0 w-full h-full animate-pulse-slow" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 0 50 L 50 50 L 50 0" stroke="#A259FF" strokeWidth="0.5" fill="none" opacity="0.1"/>
              <path d="M 50 100 L 50 50 L 100 50" stroke="#A259FF" strokeWidth="0.5" fill="none" opacity="0.1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
      </div>

      <div className="dark-content-container relative z-10">
        <div className="text-center max-w-4xl mx-auto px-4">
          {/* Main heading */}
          <h1 className="display-huge mb-8 mt-8 md:mt-0 animate-slideInUp">
            {companyInfo.slogan}
          </h1>
          
          {/* Subtitle */}
          <p className="body-large mb-12 max-w-2xl mx-auto animate-slideInUp delay-300">
            <strong>L'Afrique mérite des solutions web d'exception.</strong> Créez une présence digitale 
            puissante pour votre entreprise, école ou institution avec nos solutions modernes, 
            performantes et parfaitement adaptées au marché africain et international.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-8 md:gap-8 mb-16 animate-slideInUp delay-500">
            <div className="text-center p-4 transform hover:scale-105 transition-transform duration-300">
              <div className="display-medium text-purple-400 mb-2 animate-counter">{companyInfo.stats.projects}</div>
              <div className="body-small">Projets réalisés</div>
            </div>
            <div className="text-center p-4 transform hover:scale-105 transition-transform duration-300">
              <div className="display-medium text-purple-400 mb-2 animate-counter delay-100">{companyInfo.stats.clients}</div>
              <div className="body-small">Clients satisfaits</div>
            </div>
            <div className="text-center p-4 transform hover:scale-105 transition-transform duration-300">
              <div className="display-medium text-purple-400 mb-2 animate-counter delay-200">{companyInfo.stats.experience}</div>
              <div className="body-small">Années d'expérience</div>
            </div>
            <div className="text-center p-4 transform hover:scale-105 transition-transform duration-300">
              <div className="display-medium text-purple-400 mb-2 animate-counter delay-300">{companyInfo.stats.satisfaction}</div>
              <div className="body-small">Satisfaction client</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-6 justify-center items-center animate-slideInUp delay-700 max-w-md mx-auto">
            <button 
              onClick={handleCTAClick}
              className="btn-primary group w-full flex items-center justify-center transform hover:scale-105 transition-all duration-300"
            >
              <span>Demander un devis gratuit</span>
              <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
            </button>
            
            <button 
              onClick={() => scrollToSection("services")}
              className="btn-secondary group w-full flex items-center justify-center transform hover:scale-105 transition-all duration-300"
            >
              <span>Découvrir nos services</span>
              <Code size={20} className="ml-2 transition-transform group-hover:rotate-12" />
            </button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 animate-slideInUp delay-900">
            <div className="flex items-center justify-center gap-3 text-gray-300 transform hover:text-purple-300 transition-all duration-300">
              <Globe size={20} className="text-purple-400 animate-spin-slow" />
              <span className="body-small">Sites responsives</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-300 transform hover:text-purple-300 transition-all duration-300">
              <Zap size={20} className="text-purple-400 animate-pulse" />
              <span className="body-small">Performance optimisée</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-300 transform hover:text-purple-300 transition-all duration-300">
              <Code size={20} className="text-purple-400 animate-bounce-subtle" />
              <span className="body-small">Technologies modernes</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        .delay-400 {
          animation-delay: 0.4s;
        }
        
        .delay-600 {
          animation-delay: 0.6s;
        }
        
        .delay-800 {
          animation-delay: 0.8s;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
        
        .delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;