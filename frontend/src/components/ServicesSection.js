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
            Spécialistes du web en Afrique • Solutions modernes • Support dédié
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`service-card hover-lift animate-fade-in-up animate-delay-${(index + 1) * 100} group`}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Service Icon */}
              <div className="mb-6 transform group-hover:scale-110 transition-all duration-300">
                <div className="p-4 bg-purple-900 bg-opacity-20 inline-block rounded-lg border border-purple-800 hover-glow">
                  {getIcon(service.icon)}
                </div>
              </div>

              {/* Service Title */}
              <h3 className="heading-2 mb-4 group-hover:text-purple-300 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="body-medium mb-6 group-hover:text-gray-200 transition-colors duration-300">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 group/item hover:text-purple-300 transition-colors duration-300">
                    <div className="p-1 rounded-full bg-purple-900 bg-opacity-30 group-hover/item:bg-purple-600 group-hover/item:scale-110 transition-all duration-300">
                      <Check size={12} className="text-purple-400 group-hover/item:text-white" />
                    </div>
                    <span className="body-small group-hover/item:font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Price */}
              <div className="mb-6">
                <span className="heading-3 text-purple-400 animate-glow">{service.price}</span>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group/button flex items-center justify-center gap-2 px-4 py-2 border border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white rounded-lg transition-all duration-300"
              >
                <span>Demander un devis</span>
                <ArrowRight
                  size={16}
                  className="ml-2 transition-transform group-hover/button:translate-x-1 group-hover/button:scale-110"
                />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gray-900 bg-opacity-30 border border-gray-800 p-8 rounded-none max-w-2xl mx-auto">
            <h3 className="heading-1 mb-4">Votre vision, notre expertise</h3>
            <p className="body-medium mb-6">
              <strong>Chaque projet raconte une histoire unique.</strong> Que vous soyez une startup 
              ambitieuse à Niamey, une école innovante à Dakar, ou une entreprise en croissance à Paris, 
              nous créons des solutions web qui révèlent votre potentiel et connectent vos audiences.
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
              Transformons vos idées en réalité digitale
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
