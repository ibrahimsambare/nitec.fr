// Mock data for NITEC website

export const services = [
  {
    id: 1,
    title: "Sites Vitrines",
    description: "Révélez l'essence de votre marque avec un site vitrine moderne qui raconte votre histoire et connecte avec vos clients africains et internationaux.",
    features: ["Design responsive", "Optimisation SEO", "Hébergement premium", "Maintenance 6 mois"],
    price: "À partir de 299€",
    icon: "globe"
  },
  {
    id: 2,
    title: "Sites E-commerce",
    description: "Libérez le potentiel commercial de l'Afrique avec une boutique en ligne puissante, sécurisée et adaptée aux paiements mobiles locaux.",
    features: ["Paiement mobile Money", "Catalogue multi-langues", "Gestion avancée", "Formation complète"],
    price: "À partir de 599€",
    icon: "shopping-cart"
  },
  {
    id: 3,
    title: "Sites Éducatifs",
    description: "Transformez l'éducation africaine avec des plateformes web innovantes qui rapprochent enseignants, étudiants et parents dans un écosystème digital moderne.",
    features: ["Portail interactif", "Gestion pédagogique", "Communication parents", "Support technique 24/7"],
    price: "À partir de 399€",
    icon: "graduation-cap"
  },
  {
    id: 4,
    title: "Domaine & Email Pro",
    description: "Établissez votre crédibilité professionnelle avec un nom de domaine mémorable et des emails qui renforcent votre identité de marque.",
    features: ["Domaine .com/.africa/.fr", "Emails illimités", "Certificat SSL premium", "Support expert"],
    price: "À partir de 99€/an",
    icon: "mail"
  },
  {
    id: 5,
    title: "Maintenance & Évolution",
    description: "Votre site web grandit avec votre business. Notre maintenance proactive assure performance, sécurité et évolutions continues.",
    features: ["Sécurité renforcée", "Sauvegardes quotidiennes", "Support prioritaire", "Mises à jour gratuites"],
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