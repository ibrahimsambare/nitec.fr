// Mock data for NITEC website

export const services = [
  {
    id: 1,
    title: "Sites Vitrines",
    description: "Créez une présence digitale professionnelle pour votre entreprise avec un site vitrine moderne et responsive.",
    features: ["Design responsive", "Optimisation SEO", "Hébergement inclus", "Maintenance 6 mois"],
    price: "À partir de 299€",
    icon: "globe"
  },
  {
    id: 2,
    title: "Sites E-commerce",
    description: "Développez votre activité en ligne avec une boutique e-commerce simple et efficace.",
    features: ["Catalogue produits", "Paiement sécurisé", "Gestion des commandes", "Formation incluse"],
    price: "À partir de 599€",
    icon: "shopping-cart"
  },
  {
    id: 3,
    title: "Sites Éducatifs",
    description: "Solutions web spécialisées pour les écoles, universités et centres de formation.",
    features: ["Portail étudiant", "Gestion des cours", "Espace parents", "Support technique"],
    price: "À partir de 399€",
    icon: "graduation-cap"
  },
  {
    id: 4,
    title: "Domaine & Email Pro",
    description: "Sécurisez votre identité numérique avec un nom de domaine et des emails professionnels.",
    features: ["Nom de domaine .com/.fr", "Emails professionnels", "Certificat SSL", "Support 24/7"],
    price: "À partir de 99€/an",
    icon: "mail"
  },
  {
    id: 5,
    title: "Maintenance & Support",
    description: "Gardez votre site à jour et sécurisé avec notre service de maintenance continue.",
    features: ["Mises à jour sécurité", "Sauvegardes automatiques", "Support technique", "Monitoring 24/7"],
    price: "À partir de 49€/mois",
    icon: "settings"
  }
];

export const portfolio = [
  {
    id: 1,
    title: "École Primaire Sahel",
    description: "Site vitrine moderne pour une école primaire avec portail parents et présentation des activités.",
    category: "Éducation",
    image: "/api/placeholder/400/300",
    technologies: ["React", "Node.js", "MongoDB"],
    url: "#",
    features: ["Portail parents", "Galerie photos", "Calendrier scolaire"]
  },
  {
    id: 2,
    title: "Boutique Artisanat Niger",
    description: "E-commerce spécialisé dans la vente d'artisanat traditionnel nigérien avec paiement mobile.",
    category: "E-commerce",
    image: "/api/placeholder/400/300",
    technologies: ["WordPress", "WooCommerce", "Mobile Money"],
    url: "#",
    features: ["Paiement mobile", "Catalogue riche", "Livraison locale"]
  },
  {
    id: 3,
    title: "Cabinet Consulting Niamey",
    description: "Site vitrine professionnel pour un cabinet de conseil avec prise de rendez-vous en ligne.",
    category: "Services",
    image: "/api/placeholder/400/300",
    technologies: ["React", "FastAPI", "PostgreSQL"],
    url: "#",
    features: ["Prise de RDV", "Blog", "Espace client"]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Amadou Diallo",
    position: "Directeur, École Sahel",
    company: "École Primaire Sahel",
    content: "NITEC a créé un site web parfait pour notre école. Les parents peuvent maintenant suivre les activités et communiquer plus facilement avec nous.",
    rating: 5,
    avatar: "/api/placeholder/60/60"
  },
  {
    id: 2,
    name: "Aïcha Moussa",
    position: "Fondatrice",
    company: "Artisanat Tradition",
    content: "Grâce à NITEC, j'ai pu lancer ma boutique en ligne et toucher des clients dans toute la région. L'équipe est très professionnelle.",
    rating: 5,
    avatar: "/api/placeholder/60/60"
  },
  {
    id: 3,
    name: "Ibrahim Sani",
    position: "Consultant",
    company: "ConsultPro Niamey",
    content: "Un travail exceptionnel ! Le site reflète parfaitement notre expertise et nous aide à attirer de nouveaux clients.",
    rating: 5,
    avatar: "/api/placeholder/60/60"
  }
];

export const companyInfo = {
  name: "NITEC",
  fullName: "Niger IT & Engineering Consulting",
  slogan: "Construisons l'identité digitale du Niger",
  description: "Nous sommes une société spécialisée dans la création de sites web professionnels pour les petites entreprises, écoles et institutions au Niger et en France.",
  email: "support@nitec.fr",
  phone: "+227 XX XX XX XX",
  whatsapp: "+227XXXXXXXX",
  address: "Niamey, Niger",
  
  social: {
    github: "https://github.com/nitec-niger",
    whatsapp: "https://wa.me/227XXXXXXXX",
    linkedin: "https://linkedin.com/company/nitec-niger"
  },
  
  stats: {
    projects: "50+",
    clients: "30+",
    experience: "3+",
    satisfaction: "100%"
  }
};

// Mock form submission function
export const submitContactForm = async (formData) => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Form submitted:", formData);
      resolve({
        success: true,
        message: "Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais."
      });
    }, 1500);
  });
};

// Mock quote request function
export const submitQuoteRequest = async (serviceType) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Quote requested for:", serviceType);
      resolve({
        success: true,
        message: "Votre demande de devis has été envoyée ! Nous vous contacterons sous 24h."
      });
    }, 1000);
  });
};