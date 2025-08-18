import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { companyInfo, submitContactForm } from "../mock";
import { useToast } from "../hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const services = [
    "Site vitrine",
    "Site e-commerce", 
    "Site éducatif",
    "Domaine & Email",
    "Maintenance",
    "Autre"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await submitContactForm(formData);
      
      if (result.success) {
        toast({
          title: "Message envoyé !",
          description: result.message,
          duration: 5000,
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          service: "",
          message: ""
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
      setIsSubmitting(false);
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Bonjour NITEC, j'aimerais discuter d'un projet web...");
    window.open(`https://wa.me/${companyInfo.whatsapp.replace('+', '')}?text=${message}`, '_blank');
  };

  return (
    <div className="pad-xlarge">
      <div className="dark-content-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="display-large mb-6">Contactez-nous</h2>
          <p className="body-large max-w-3xl mx-auto">
            Prêt à donner vie à votre projet web ? Contactez-nous dès aujourd'hui pour une consultation gratuite 
            et découvrez comment nous pouvons vous aider à réussir en ligne.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <div className="bg-gray-900 bg-opacity-30 border border-gray-800 p-8">
              <h3 className="heading-2 mb-6">Envoyez-nous un message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block body-small text-gray-300 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 bg-black bg-opacity-50 border border-gray-700 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="Votre nom complet"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block body-small text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 bg-black bg-opacity-50 border border-gray-700 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block body-small text-gray-300 mb-2">
                    Entreprise / Organisation
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-black bg-opacity-50 border border-gray-700 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="Nom de votre entreprise"
                  />
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="service" className="block body-small text-gray-300 mb-2">
                    Service souhaité
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-black bg-opacity-50 border border-gray-700 text-white focus:border-purple-500 focus:outline-none transition-colors"
                  >
                    <option value="">Sélectionnez un service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block body-small text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full p-4 bg-black bg-opacity-50 border border-gray-700 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors resize-y"
                    placeholder="Décrivez votre projet ou vos besoins..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span>Envoi en cours...</span>
                  ) : (
                    <>
                      Envoyer le message
                      <Send size={20} className="transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="order-1 lg:order-2">
            <div className="space-y-8">
              {/* Contact Details */}
              <div>
                <h3 className="heading-2 mb-6">Informations de contact</h3>
                
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-900 bg-opacity-30 border border-purple-800 mt-1">
                      <Mail size={20} className="text-purple-400" />
                    </div>
                    <div>
                      <div className="heading-3 mb-1">Email</div>
                      <a 
                        href={`mailto:${companyInfo.email}`}
                        className="body-medium text-gray-300 hover:text-purple-400 transition-colors"
                      >
                        {companyInfo.email}
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-900 bg-opacity-30 border border-purple-800 mt-1">
                      <Phone size={20} className="text-purple-400" />
                    </div>
                    <div>
                      <div className="heading-3 mb-1">Téléphone</div>
                      <a 
                        href={`tel:${companyInfo.phone}`}
                        className="body-medium text-gray-300 hover:text-purple-400 transition-colors"
                      >
                        {companyInfo.phone}
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-900 bg-opacity-30 border border-purple-800 mt-1">
                      <MapPin size={20} className="text-purple-400" />
                    </div>
                    <div>
                      <div className="heading-3 mb-1">Adresse</div>
                      <div className="body-medium text-gray-300">
                        {companyInfo.address}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-green-900 bg-opacity-20 border border-green-800 p-6">
                <h4 className="heading-3 mb-3 flex items-center gap-2">
                  <MessageCircle size={20} className="text-green-400" />
                  Contact rapide
                </h4>
                <p className="body-small text-gray-300 mb-4">
                  Besoin d'une réponse rapide ? Contactez-nous directement via WhatsApp pour 
                  une discussion immédiate sur votre projet.
                </p>
                <button 
                  onClick={openWhatsApp}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 transition-colors flex items-center gap-2 w-full justify-center"
                >
                  <MessageCircle size={20} />
                  Ouvrir WhatsApp
                </button>
              </div>

              {/* Response Time */}
              <div className="bg-gray-900 bg-opacity-40 border border-gray-800 p-6">
                <h4 className="heading-3 mb-3">Temps de réponse</h4>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span className="body-small">Email :</span>
                    <span className="body-small font-medium">&lt; 24h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="body-small">WhatsApp :</span>
                    <span className="body-small font-medium">&lt; 2h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="body-small">Devis :</span>
                    <span className="body-small font-medium">&lt; 48h</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;