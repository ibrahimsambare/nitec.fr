import React, { useState } from "react";
import { ExternalLink, Github, ArrowRight, Grid, List } from "lucide-react";
import { portfolio } from "../mock";

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [viewMode, setViewMode] = useState("grid"); // "grid" or "list"
  
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
            Découvrez nos créations web qui transforment l'identité digitale des entreprises, 
            écoles et institutions à travers l'Afrique. Chaque projet reflète notre engagement 
            pour l'excellence et l'innovation.
          </p>
        </div>

        {/* Controls Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
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

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2 bg-gray-800 bg-opacity-50 p-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 transition-colors ${
                viewMode === "grid" 
                  ? 'bg-purple-600 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
              title="Vue grille"
            >
              <Grid size={20} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 transition-colors ${
                viewMode === "list" 
                  ? 'bg-purple-600 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
              title="Vue liste"
            >
              <List size={20} />
            </button>
          </div>
        </div>

        {/* Portfolio Content */}
        {viewMode === "grid" ? (
          /* Grid View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((project, index) => (
              <div 
                key={project.id}
                className={`animated-card hover-lift animate-scale-in animate-delay-${(index + 1) * 100} group cursor-pointer`}
                style={{
                  animationDelay: `${index * 0.15}s`
                }}
              >
                {/* Project Image with enhanced gradient */}
                <div className="relative overflow-hidden h-48 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 rounded-t-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-purple-800/5"></div>
                  <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <div className="text-center animate-float">
                      <div className="heading-3 text-white mb-2 group-hover:text-purple-300 transition-colors">
                        {project.category}
                      </div>
                      <div className="body-small text-gray-300 group-hover:text-purple-200 transition-colors">
                        Aperçu professionnel
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced hover overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-6">
                    <button className="p-4 bg-purple-600 hover:bg-purple-700 transition-all duration-300 hover-scale rounded-lg animate-bounce">
                      <ExternalLink size={20} className="text-white" />
                    </button>
                    <button className="p-4 bg-gray-700 hover:bg-gray-600 transition-all duration-300 hover-scale rounded-lg animate-bounce animate-delay-100">
                      <Github size={20} className="text-white" />
                    </button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="inline-block px-3 py-1 bg-purple-900 bg-opacity-30 text-purple-300 text-sm mb-4 border border-purple-800 rounded-full hover-glow transition-all duration-300">
                    {project.category}
                  </div>

                  {/* Project Title */}
                  <h3 className="heading-3 mb-3 group-hover:text-purple-300 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="body-small text-gray-300 mb-4 line-clamp-3 group-hover:text-gray-200 transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className={`px-3 py-1 bg-gray-800 text-gray-300 text-xs border border-gray-700 hover:border-purple-600 transition-all duration-300 rounded-md hover-scale animate-fade-in-up animate-delay-${(idx + 1) * 50}`}
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
                        <li key={idx} className="flex items-center gap-2 group/feature hover:text-purple-300 transition-colors">
                          <div className="w-1 h-1 bg-purple-400 rounded-full group-hover/feature:scale-150 transition-transform"></div>
                          <span className="group-hover/feature:font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <button className="btn-secondary w-full group/btn hover:border-purple-500">
                    <span>Voir le projet</span>
                    <ArrowRight size={16} className="ml-2 transition-transform group-hover/btn:translate-x-2 group-hover/btn:scale-110" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* List View */
          <div className="space-y-6">
            {filteredPortfolio.map((project, index) => (
              <div 
                key={project.id}
                className="group bg-black bg-opacity-40 border border-gray-800 p-6 transition-all duration-500 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/10"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Project Image */}
                  <div className="lg:w-64 h-40 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 relative overflow-hidden flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-purple-800/10"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="heading-3 text-white mb-1">{project.category}</div>
                        <div className="body-small text-gray-300">Projet professionnel</div>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="inline-block px-3 py-1 bg-purple-900 bg-opacity-30 text-purple-300 text-sm mb-2 border border-purple-800">
                          {project.category}
                        </div>
                        <h3 className="heading-2 group-hover:text-purple-300 transition-colors">{project.title}</h3>
                      </div>
                      <div className="flex gap-2">
                        <button className="p-2 bg-purple-600 hover:bg-purple-700 transition-colors">
                          <ExternalLink size={16} className="text-white" />
                        </button>
                        <button className="p-2 bg-gray-700 hover:bg-gray-600 transition-colors">
                          <Github size={16} className="text-white" />
                        </button>
                      </div>
                    </div>

                    <p className="body-medium text-gray-300 mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-4 mb-4">
                      <div>
                        <span className="text-sm font-medium text-gray-400">Technologies: </span>
                        {project.technologies.join(", ")}
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-400">Fonctionnalités: </span>
                        {project.features.join(", ")}
                      </div>
                    </div>

                    <button className="btn-primary group">
                      Voir les détails
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty state */}
        {filteredPortfolio.length === 0 && (
          <div className="text-center py-16">
            <div className="heading-3 text-gray-400 mb-4">Aucun projet dans cette catégorie</div>
            <p className="body-medium text-gray-500">
              Nous travaillons constamment sur de nouveaux projets innovants. Revenez bientôt !
            </p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="heading-1 mb-6">Votre projet digital vous attend</h3>
            <p className="body-medium mb-8 text-gray-300">
              Rejoignez nos clients satisfaits à travers l'Afrique et donnez une nouvelle dimension 
              à votre présence digitale avec des solutions web modernes et performantes.
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
              Démarrer votre transformation digitale
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