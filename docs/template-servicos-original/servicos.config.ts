export const servicosConfig = {
  niche: "servicos",

  brand: {
    name: "Nome da Empresa",
    description: "Soluções profissionais para você",
    logo: "/images/servicos/logo.png",
    favicon: "/images/servicos/favicon.png",
  },

  theme: {
    primary: "#1D4ED8",
    primaryHover: "#1E40AF",
    background: "#F8FAFC",
    surface: "#FFFFFF",
    text: "#172033",
    muted: "#64748B",
    border: "#E2E8F0",
    fontHeading: "sans",
    borderRadius: "lg",
  },

  header: {
    variant: "corporate",
    showLogo: true,
    showPhone: true,
    showWhatsapp: true,
    sticky: true,
    menu: [
      { label: "Início", href: "#inicio" },
      { label: "Serviços", href: "#servicos" },
      { label: "Como funciona", href: "#processo" },
      { label: "Sobre nós", href: "#sobre" },
      { label: "Contato", href: "#contato" },
    ],
  },

  hero: {
    component: "HeroServicos",
    variant: "split",
    eyebrow: "Atendimento profissional",
    title: "Soluções que facilitam o seu dia a dia",
    description:
      "Conheça nossos serviços e descubra como podemos ajudar você ou sua empresa.",
    image: "/images/servicos/hero.jpg",
    primaryLabel: "Solicitar orçamento",
    primaryHref: "#contato",
    secondaryLabel: "Conhecer serviços",
    secondaryHref: "#servicos",
  },

  services: {
    component: "ServicesGrid",
    variant: "cards",
    title: "Nossos serviços",
    description: "Soluções personalizadas para diferentes necessidades.",
    items: [],
  },

  process: {
    component: "ProcessSteps",
    variant: "horizontal",
    title: "Como funciona nosso atendimento",
    description:
      "Um processo simples e organizado, do primeiro contato à entrega.",
    steps: [
      {
        title: "Entre em contato",
        description: "Conte-nos o que você precisa.",
        icon: "message-circle",
      },
      {
        title: "Receba uma proposta",
        description: "Vamos avaliar sua necessidade e apresentar as opções.",
        icon: "file-text",
      },
      {
        title: "Comece o projeto",
        description: "Alinhamos os detalhes e iniciamos o serviço.",
        icon: "check-circle",
      },
    ],
  },

  about: {
    enabled: true,
    title: "Conheça nossa empresa",
    description:
      "Apresente aqui a história, os valores e os diferenciais do negócio.",
    image: "/images/servicos/sobre.jpg",
  },

  testimonials: {
    enabled: true,
    title: "O que dizem nossos clientes",
    items: [],
  },

  faq: {
    enabled: true,
    variant: "accordion",
    title: "Dúvidas frequentes",
    items: [],
  },

  contact: {
    title: "Vamos conversar sobre seu projeto?",
    whatsapp: "",
    phone: "",
    email: "",
    address: "",
    openingHours: "",
    instagram: "",
    mapUrl: "",
  },

  whatsappButton: {
    enabled: true,
    variant: "floating",
    label: "Solicitar atendimento",
    phone: "",
    message: "Olá! Gostaria de conhecer os serviços e solicitar informações.",
    position: "bottom-right",
  },

  footer: {
    variant: "footer2",
    showSocialLinks: true,
    showAddress: true,
    showPhone: true,
    showCopyright: true,
  },

  seo: {
    title: "Nome da Empresa | Serviços Profissionais",
    description:
      "Conheça nossos serviços e solicite um orçamento personalizado.",
    keywords: ["serviços", "atendimento", "orçamento"],
    ogImage: "/images/servicos/og-image.jpg",
  },
} as const;
