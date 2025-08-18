import React from "react";
import { Github, MessageCircle, Linkedin, Mail, ArrowUp } from "lucide-react";
import { companyInfo } from "../mock";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="dark-content-container">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img 
                src="https://customer-assets.emergentagent.com/job_nitec-web/artifacts/a29co52z_NITEC%20Logo.svg" 
                alt="NITEC Logo" 
                className="h-10 mb-4"
              />
            </div>
            <h3 className="heading-3 mb-4">{companyInfo.fullName}</h3>
            <p className="body-medium text-gray-300 mb-6 max-w-md">
              {companyInfo.description}
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href={companyInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-purple-900 transition-colors group"
                aria-label="GitHub"
              >
                <Github size={20} className="text-gray-300 group-hover:text-white" />
              </a>
              
              <a 
                href={companyInfo.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-green-700 transition-colors group"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} className="text-gray-300 group-hover:text-white" />
              </a>
              
              <a 
                href={companyInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-blue-700 transition-colors group"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="text-gray-300 group-hover:text-white" />
              </a>
              
              <a 
                href={`mailto:${companyInfo.email}`}
                className="p-3 bg-gray-800 hover:bg-purple-900 transition-colors group"
                aria-label="Email"
              >
                <Mail size={20} className="text-gray-300 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="heading-3 mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="body-small text-gray-300 hover:text-purple-400 transition-colors">
                  Sites vitrines
                </a>
              </li>
              <li>
                <a href="#services" className="body-small text-gray-300 hover:text-purple-400 transition-colors">
                  Sites e-commerce
                </a>
              </li>
              <li>
                <a href="#services" className="body-small text-gray-300 hover:text-purple-400 transition-colors">
                  Sites éducatifs
                </a>
              </li>
              <li>
                <a href="#services" className="body-small text-gray-300 hover:text-purple-400 transition-colors">
                  Domaine & Email
                </a>
              </li>
              <li>
                <a href="#services" className="body-small text-gray-300 hover:text-purple-400 transition-colors">
                  Maintenance
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="heading-3 mb-6">Contact</h4>
            <div className="space-y-3">
              <div>
                <div className="body-small text-gray-400 mb-1">Email</div>
                <a 
                  href={`mailto:${companyInfo.email}`}
                  className="body-small text-gray-300 hover:text-purple-400 transition-colors"
                >
                  {companyInfo.email}
                </a>
              </div>
              
              <div>
                <div className="body-small text-gray-400 mb-1">Téléphone</div>
                <a 
                  href={`tel:${companyInfo.phone}`}
                  className="body-small text-gray-300 hover:text-purple-400 transition-colors"
                >
                  {companyInfo.phone}
                </a>
              </div>
              
              <div>
                <div className="body-small text-gray-400 mb-1">Adresse</div>
                <div className="body-small text-gray-300">
                  {companyInfo.address}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="body-small text-gray-400">
                © {currentYear} {companyInfo.name} – Tous droits réservés
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
              <a 
                href="#mentions-legales" 
                className="body-small text-gray-400 hover:text-purple-400 transition-colors"
              >
                Mentions légales
              </a>
              <a 
                href="#confidentialite" 
                className="body-small text-gray-400 hover:text-purple-400 transition-colors"
              >
                Confidentialité
              </a>
              
              {/* Back to Top */}
              <button 
                onClick={scrollToTop}
                className="p-2 bg-gray-800 hover:bg-purple-900 transition-colors group"
                aria-label="Retour en haut"
              >
                <ArrowUp size={16} className="text-gray-300 group-hover:text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Attribution */}
        <div className="border-t border-gray-900 py-4">
          <p className="text-center body-muted text-xs">
            Site web créé avec ❤️ au Niger • Technologie moderne • Performance optimisée
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;