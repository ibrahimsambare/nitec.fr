import React from "react";
import { ArrowRight, Code, Globe, Zap } from "lucide-react";
import { companyInfo } from "../mock";

const HeroSection = ({ scrollToSection }) => {
  const handleCTAClick = () => {
    scrollToSection("contact");
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 border border-purple-800 opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-purple-600 opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-purple-400 opacity-10 animate-pulse delay-500"></div>
      </div>

      <div className="dark-content-container relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="display-huge mb-8 animate-fadeInUp">
            {companyInfo.slogan}
          </h1>
          
          {/* Subtitle */}
          <p className="body-large mb-12 max-w-2xl mx-auto animate-fadeInUp delay-200">
            <strong>L'Afrique mérite des solutions web d'exception.</strong> Créez une présence digitale 
            puissante pour votre entreprise, école ou institution avec nos solutions modernes, 
            performantes et parfaitement adaptées au marché africain et international.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 animate-fadeInUp delay-400">
            <div className="text-center">
              <div className="display-medium text-purple-400 mb-2">{companyInfo.stats.projects}</div>
              <div className="body-small">Projets réalisés</div>
            </div>
            <div className="text-center">
              <div className="display-medium text-purple-400 mb-2">{companyInfo.stats.clients}</div>
              <div className="body-small">Clients satisfaits</div>
            </div>
            <div className="text-center">
              <div className="display-medium text-purple-400 mb-2">{companyInfo.stats.experience}</div>
              <div className="body-small">Années d'expérience</div>
            </div>
            <div className="text-center">
              <div className="display-medium text-purple-400 mb-2">{companyInfo.stats.satisfaction}</div>
              <div className="body-small">Satisfaction client</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fadeInUp delay-600">
            <button 
              onClick={handleCTAClick}
              className="btn-primary group"
            >
              Demander un devis gratuit
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </button>
            
            <button 
              onClick={() => scrollToSection("services")}
              className="btn-secondary group"
            >
              Découvrir nos services
              <Code size={20} className="transition-transform group-hover:rotate-12" />
            </button>
          </div>

          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center gap-8 mt-16 animate-fadeInUp delay-800">
            <div className="flex items-center gap-3 text-gray-300">
              <Globe size={20} className="text-purple-400" />
              <span className="body-small">Sites responsives</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Zap size={20} className="text-purple-400" />
              <span className="body-small">Performance optimisée</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Code size={20} className="text-purple-400" />
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