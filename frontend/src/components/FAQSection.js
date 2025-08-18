import React, { useState } from "react";
import { ChevronDown, ChevronUp, MessageCircle, HelpCircle } from "lucide-react";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      id: 1,
      question: "Combien de temps faut-il pour créer un site web ?",
      answer: "Le délai varie selon la complexité du projet. Un site vitrine prend généralement 1-2 semaines, un site e-commerce 2-4 semaines, et un site éducatif 3-6 semaines. Nous vous donnons un planning précis dès le début du projet."
    },
    {
      id: 2,
      question: "Proposez-vous la maintenance après la livraison ?",
      answer: "Absolument ! Nous offrons 6 mois de maintenance gratuite avec chaque site, puis des formules d'accompagnement à partir de 49€/mois incluant mises à jour, sauvegardes, support technique et monitoring."
    },
    {
      id: 3,
      question: "Mes clients pourront-ils payer par Mobile Money ?",
      answer: "Oui, nous intégrons les solutions de paiement mobile populaires en Afrique (Orange Money, MTN Mobile Money, Moov Money) ainsi que les paiements internationaux (cartes bancaires, PayPal)."
    },
    {
      id: 4,
      question: "Le site sera-t-il optimisé pour Google ?",
      answer: "Tous nos sites sont conçus avec les meilleures pratiques SEO : structure optimisée, vitesse de chargement, responsive design, métadonnées complètes, et soumission aux moteurs de recherche."
    },
    {
      id: 5,
      question: "Puis-je modifier le contenu moi-même après la livraison ?",
      answer: "Oui ! Nous utilisons des CMS intuitifs qui vous permettent de modifier textes, images et prix facilement. Nous incluons une formation complète et des guides vidéo personnalisés."
    },
    {
      id: 6,
      question: "Proposez-vous un support en français ?",
      answer: "Bien sûr ! Notre équipe est francophone et vous accompagne dans votre langue. Support par email, WhatsApp, et visioconférence selon vos préférences."
    }
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="pad-xlarge bg-gray-900 bg-opacity-10">
      <div className="dark-content-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <HelpCircle size={48} className="text-purple-400" />
          </div>
          <h2 className="display-large mb-6">Questions Fréquentes</h2>
          <p className="body-large max-w-3xl mx-auto">
            Vous avez des questions sur nos services ? Voici les réponses aux questions 
            les plus fréquemment posées par nos clients africains et internationaux.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq) => (
            <div 
              key={faq.id}
              className="mb-4 bg-gray-900 bg-opacity-30 border border-gray-800 overflow-hidden transition-all duration-300 hover:border-purple-500"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 lg:px-8 py-6 text-left flex items-center justify-between hover:bg-gray-800 hover:bg-opacity-30 transition-colors"
              >
                <h3 className="heading-3 pr-4">{faq.question}</h3>
                <div className="flex-shrink-0">
                  {openFAQ === faq.id ? (
                    <ChevronUp size={24} className="text-purple-400" />
                  ) : (
                    <ChevronDown size={24} className="text-gray-400" />
                  )}
                </div>
              </button>
              
              {openFAQ === faq.id && (
                <div className="px-6 lg:px-8 pb-6 border-t border-gray-700">
                  <p className="body-medium text-gray-300 mt-4 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="bg-purple-900 bg-opacity-20 border border-purple-800 p-8 max-w-2xl mx-auto">
            <div className="flex justify-center mb-4">
              <MessageCircle size={32} className="text-purple-400" />
            </div>
            <h3 className="heading-2 mb-4">Une autre question ?</h3>
            <p className="body-medium mb-6 text-gray-300">
              Notre équipe est là pour vous accompagner. Posez-nous vos questions 
              spécifiques et obtenez une réponse personnalisée rapidement.
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
              <MessageCircle size={20} />
              Poser ma question
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;