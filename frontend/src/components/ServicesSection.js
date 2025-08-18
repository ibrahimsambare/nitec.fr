import React, { useState } from "react";
import { 
  Globe, 
  ShoppingCart, 
  GraduationCap, 
  Mail, 
  Settings,
  ArrowRight,
  Check
} from "lucide-react";
import { services, submitQuoteRequest } from "../mock";
import { useToast } from "../hooks/use-toast";

const ServicesSection = () => {
  const [loadingService, setLoadingService] = useState(null);
  const { toast } = useToast();

  const getIcon = (iconName) => {
    const icons = {
      globe: Globe,
      "shopping-cart": ShoppingCart,
      "graduation-cap": GraduationCap,
      mail: Mail,
      settings: Settings
    };
    
    const IconComponent = icons[iconName] || Globe;
    return <IconComponent size={32} className="text-purple-400" />;
  };

  const handleQuoteRequest = async (service) => {
    setLoadingService(service.id);
    
    try {
      const result = await submitQuoteRequest(service.title);
      
      if (result.success) {
        toast({
          title: "Demande envoyée !",
          description: result.message,
          duration: 5000,
        });
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setLoadingService(null);
    }
  };

  return (
    <div className="pad-xlarge">
      <div className="dark-content-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="display-large mb-6">Nos Services</h2>
          <p className="body-large max-w-3xl mx-auto">
            <strong>Propulsez votre entreprise vers l'avenir digital</strong> avec nos solutions web 
            sur mesure. De Niamey à Paris, nous accompagnons les entrepreneurs, écoles et institutions 
            dans leur transformation numérique avec passion et expertise.
          </p>
          <div className="mt-6 text-purple-400 body-medium font-semibold">
            🌍 Spécialistes du web en Afrique • Solutions modernes • Support dédié
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="group bg-gray-900 bg-opacity-50 border border-gray-800 p-8 transition-all duration-500 hover:border-purple-500 hover:bg-opacity-70 dark-hover"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Service Icon */}
              <div className="mb-6">
                {getIcon(service.icon)}
              </div>

              {/* Service Title */}
              <h3 className="heading-2 mb-4">{service.title}</h3>

              {/* Service Description */}
              <p className="body-medium mb-6">{service.description}</p>

              {/* Features List */}
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Check size={16} className="text-purple-400 flex-shrink-0" />
                    <span className="body-small">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Price */}
              <div className="mb-6">
                <span className="heading-3 text-purple-400">{service.price}</span>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => handleQuoteRequest(service)}
                disabled={loadingService === service.id}
                className="btn-secondary w-full group"
              >
                {loadingService === service.id ? (
                  <span>Envoi en cours...</span>
                ) : (
                  <>
                    Demander un devis
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gray-900 bg-opacity-30 border border-gray-800 p-8 rounded-none max-w-2xl mx-auto">
            <h3 className="heading-2 mb-4">Besoin d'une solution personnalisée ?</h3>
            <p className="body-medium mb-6">
              Chaque projet est unique. Contactez-nous pour discuter de vos besoins spécifiques 
              et obtenir un devis sur mesure.
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
              Discuter de votre projet
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;