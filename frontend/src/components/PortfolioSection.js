import React, { useState } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { portfolio } from "../mock";

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  
  const categories = ["Tous", "Éducation", "E-commerce", "Services"];
  
  const filteredPortfolio = selectedCategory === "Tous" 
    ? portfolio 
    : portfolio.filter(item => item.category === selectedCategory);

  return (
    <div className="pad-xlarge bg-gray-900 bg-opacity-20">
      <div className="dark-content-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="display-large mb-6">Nos Réalisations</h2>
          <p className="body-large max-w-3xl mx-auto">
            Découvrez quelques-uns de nos projets récents et laissez-vous inspirer 
            par la qualité de nos créations web.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 transition-all duration-300 ${
                selectedCategory === category
                  ? 'btn-primary'
                  : 'btn-secondary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPortfolio.map((project, index) => (
            <div 
              key={project.id}
              className="group bg-black bg-opacity-40 border border-gray-800 overflow-hidden transition-all duration-500 hover:border-purple-500 dark-hover"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48 bg-gray-800">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-600 opacity-80"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="heading-3 text-white mb-2">{project.category}</div>
                    <div className="body-small text-purple-200">Aperçu du projet</div>
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <button className="p-3 bg-purple-600 hover:bg-purple-700 transition-colors">
                    <ExternalLink size={20} className="text-white" />
                  </button>
                  <button className="p-3 bg-gray-700 hover:bg-gray-600 transition-colors">
                    <Github size={20} className="text-white" />
                  </button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Category Badge */}
                <div className="inline-block px-3 py-1 bg-purple-900 bg-opacity-50 text-purple-300 text-sm mb-4">
                  {project.category}
                </div>

                {/* Project Title */}
                <h3 className="heading-3 mb-3">{project.title}</h3>

                {/* Project Description */}
                <p className="body-small text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-1 bg-gray-800 text-gray-300 text-xs border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-6">
                  <div className="text-sm font-medium text-gray-400 mb-2">Fonctionnalités clés :</div>
                  <ul className="text-xs text-gray-400 space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <button className="btn-secondary w-full group text-sm">
                  Voir le projet
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredPortfolio.length === 0 && (
          <div className="text-center py-16">
            <div className="heading-3 text-gray-400 mb-4">Aucun projet dans cette catégorie</div>
            <p className="body-medium text-gray-500">
              Nous travaillons constamment sur de nouveaux projets. Revenez bientôt !
            </p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="heading-2 mb-4">Votre projet sera le prochain</h3>
            <p className="body-medium mb-8 text-gray-300">
              Rejoignez nos clients satisfaits et donnez une nouvelle dimension à votre présence digitale.
            </p>
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-primary"
            >
              Démarrer votre projet
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default PortfolioSection;