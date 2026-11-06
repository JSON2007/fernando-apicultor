export const PHONE_DISPLAY = '12 99739-6650';
export const PHONE_LINK = '5512997396650';
export const whatsappLink = (message = 'Olá, Fernando Silva! Gostaria de solicitar uma avaliação para um enxame.') =>
  `https://wa.me/${PHONE_LINK}?text=${encodeURIComponent(message)}`;

export const socialLinks = {
  tiktok: 'https://vm.tiktok.com/ZS9yuX4w3hTh8-BVz9g/',
  facebook: 'https://www.facebook.com/profile.php?id=100025757838606',
};

export const services = [
  { title: 'Remoção de enxames de abelhas', description: 'Avaliação da situação e manejo cuidadoso de enxames em imóveis e áreas externas.', icon: 'hive' },
  { title: 'Manejo de marimbondos e vespas', description: 'Atendimento para ocorrências envolvendo marimbondos e vespas, com orientação responsável.', icon: 'shield' },
  { title: 'Telhados e forros', description: 'Atuação em beirais, telhados, forros e espaços de difícil acesso, conforme avaliação.', icon: 'roof' },
  { title: 'Árvores e áreas externas', description: 'Avaliação de enxames instalados em árvores, jardins e outros ambientes externos.', icon: 'leaf' },
  { title: 'Paredes e estruturas', description: 'Inspeção de estruturas e pontos de instalação para definir a melhor abordagem.', icon: 'home' },
  { title: 'Resgate e realocação de colônias', description: 'Quando tecnicamente possível, manejo orientado ao resgate e à realocação responsável.', icon: 'flower' },
];

export const gallery = [
  { src: '/images/02_enxame_sob_telhas.jpg', title: 'Enxame sob telhas', category: 'Telhados e beirais' },
  { src: '/images/05_abelhas_em_area_de_telhado.jpg', title: 'Abelhas em área de telhado', category: 'Estruturas residenciais' },
  { src: '/images/06_abelhas_em_estrutura_de_madeira.jpg', title: 'Colônia em estrutura de madeira', category: 'Manejo em estruturas' },
  { src: '/images/01_favos_de_cera_e_abelhas.jpg', title: 'Favos de cera e abelhas', category: 'Detalhes do enxame' },
  { src: '/images/07_detalhe_do_enxame.jpg', title: 'Detalhe do enxame', category: 'Registro de atendimento' },
  { src: '/images/03_apicultor_com_material_de_manejo.jpg', title: 'Materiais de manejo', category: 'Rotina profissional' },
  { src: '/images/04_enxame_em_estrutura.jpg', title: 'Enxame em estrutura', category: 'Manejo em imóvel' },
];

export const faqs = [
  { q: 'Quais cidades são atendidas?', a: 'Fernando Silva atende Ubatuba e Caraguatatuba. Consulte pelo WhatsApp a disponibilidade para o seu endereço.' },
  { q: 'Como faço para solicitar uma avaliação?', a: 'Entre em contato pelo WhatsApp e, se possível, envie fotos ou vídeos do local e informe o endereço aproximado. Se necessário, a avaliação presencial é combinada diretamente.' },
  { q: 'A avaliação presencial tem custo?', a: 'Não. A avaliação presencial não tem cobrança. O valor do serviço, quando necessário, é informado após entender a situação.' },
  { q: 'Fernando Silva atende enxames em telhados, forros e paredes?', a: 'Sim. O atendimento inclui avaliação de ocorrências em telhados, forros, árvores, paredes e outras estruturas.' },
  { q: 'O que devo fazer ao encontrar um enxame?', a: 'Mantenha distância, afaste crianças e animais e não tente tocar, espantar ou remover o enxame. Entre em contato para receber orientação.' },
];
