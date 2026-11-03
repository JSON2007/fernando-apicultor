import { useState } from 'react';
import Header from './components/Header';
import ServicesGrid from './components/ServicesGrid';
import ProcessSteps from './components/ProcessSteps';
import WhatsAppLink from './components/WhatsAppLink';
import { Icon } from './components/Icons';
import { faqs, gallery, PHONE_DISPLAY, socialLinks, whatsappLink } from './data/site';

type GalleryItem = typeof gallery[number];

function App() {
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return <>
    <Header />
    <main>
      <section id="inicio" className="hero-section">
        <div className="hero-photo" aria-hidden="true"><img src="/images/05_abelhas_em_area_de_telhado.jpg" alt=""/></div>
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-honeycomb" aria-hidden="true">⬡<br/> ⬡ ⬡</div>
        <div className="container hero-content">
          <div className="hero-copy">
            <span className="eyebrow eyebrow-gold">Manejo de enxames • Ubatuba e Caraguatatuba</span>
            <h1>Encontrou um<br/><em>enxame por perto?</em></h1>
            <p className="hero-lead">Cuidado profissional com as abelhas, respeito à natureza e atenção à segurança de pessoas e animais.</p>
            <p className="hero-support">Manejo responsável de abelhas, marimbondos e vespas, com orientação clara do primeiro contato ao atendimento.</p>
            <WhatsAppLink className="button button-amber hero-button" message="Olá, Fernando! Encontrei um enxame e gostaria de solicitar uma avaliação." >Solicitar atendimento</WhatsAppLink>
            <div className="hero-benefits"><span><Icon name="shield"/>Atendimento<br/>responsável</span><span><Icon name="leaf"/>Respeito à<br/>natureza</span><span><Icon name="hive"/>Manejo<br/>cuidadoso</span></div>
          </div>
          <div className="hero-person-wrap"><div className="hero-glow"/><img className="hero-person" src="/images/fernando-recortado.png" alt="Fernando, apicultor, usando roupa de proteção e segurando materiais de manejo"/><div className="hero-note"><span>Desde 2017</span><strong>Experiência<br/>e compromisso</strong><small>Um cuidado em cada atendimento.</small></div></div>
        </div>
        <div className="hero-bottomline"><span>Respeito às abelhas</span><i/> <span>Compromisso com a natureza</span><i/> <span>Transparência com você</span></div>
      </section>

      <section id="sobre" className="section about-section">
        <div className="container about-grid">
          <div className="about-image-wrap"><div className="about-image-frame"><img src="/images/03_apicultor_com_material_de_manejo.jpg" alt="Fernando com equipamentos utilizados no manejo de enxames" loading="lazy"/></div><div className="experience-stamp"><strong>2017</strong><span>início da<br/>trajetória</span></div></div>
          <div className="about-copy"><span className="eyebrow">Sobre o profissional</span><h2>Experiência, respeito<br/><em>e compromisso.</em></h2><p>Fernando trabalha com apicultura desde 2017, realizando manejo e remoção de enxames com atenção aos detalhes, transparência e respeito pelo cliente.</p><p>Seu compromisso é oferecer um serviço eficiente e bem executado, explicar cada etapa sem complicações e cuidar do ambiente durante o atendimento.</p><blockquote>“Trabalho bem feito, sem surpresas e com máximo profissionalismo.”</blockquote><div className="about-points"><span><Icon name="check"/>Explicações claras</span><span><Icon name="check"/>Capricho técnico</span><span><Icon name="check"/>Preço justo e honesto</span></div></div>
        </div>
      </section>

      <ServicesGrid />
      <ProcessSteps />

      <section className="section credentials-section">
        <div className="container credentials-grid">
          <div className="credentials-copy"><span className="eyebrow">Formação e qualificação</span><h2>Conhecimento que<br/><em>vem da experiência.</em></h2><p>Fernando possui treinamento específico em apicultura pelo Serviço Nacional de Aprendizagem Rural — SENAR/AR-SP.</p><div className="credential-facts"><div><strong>168h</strong><span>de carga horária</span></div><div><strong>2011</strong><span>conclusão do treinamento</span></div><div><strong>Desde 2017</strong><span>atuação profissional informada</span></div></div></div>
          <button className="certificate-card" onClick={() => setActivePhoto({src:'/images/certificado-senar-168h.png', title:'Certificado de Treinamento em Apicultura', category:'SENAR-AR/SP • 168 horas'})} aria-label="Ampliar certificado SENAR"><img src="/images/certificado-senar-168h.png" alt="Certificado de treinamento em apicultura pelo SENAR, com dados pessoais ocultados" loading="lazy"/><span><Icon name="camera" size={16}/> Visualizar certificado</span></button>
        </div>
      </section>

      <section id="trabalhos" className="section gallery-section">
        <div className="container">
          <div className="section-heading split-heading"><div><span className="eyebrow">Registros de atendimentos</span><h2>Trabalho real,<br/><em>cuidado em cada detalhe.</em></h2></div><p>Alguns registros de enxames e estruturas atendidas. As imagens mostram situações diferentes encontradas no manejo.</p></div>
          <div className="gallery-grid">{gallery.map((photo, index) => <button className={`gallery-item gallery-item-${index+1}`} key={photo.src} onClick={() => setActivePhoto(photo)} aria-label={`Ampliar foto: ${photo.title}`}><img src={photo.src} alt={photo.title} loading="lazy"/><span className="gallery-caption"><small>{photo.category}</small><strong>{photo.title}</strong><i><Icon name="arrow" size={16}/></i></span></button>)}</div>
          <p className="gallery-note">Fotografias de registros de trabalho e materiais de manejo. A avaliação de cada ocorrência depende das condições encontradas no local.</p>
        </div>
      </section>

      <section className="section values-section">
        <div className="container values-layout"><div><span className="eyebrow eyebrow-gold">O jeito Fernando de trabalhar</span><h2>Transparência do<br/><em>começo ao fim.</em></h2><p>Sem soluções mirabolantes ou termos difíceis. Você entende o que está acontecendo, quais são as possibilidades e como será conduzido o atendimento.</p><WhatsAppLink className="button button-outline-light" message="Olá, Fernando! Gostaria de conversar sobre um atendimento." >Converse com o Fernando</WhatsAppLink></div><div className="values-cards"><article><Icon name="shield"/><h3>Capricho técnico</h3><p>Atenção aos detalhes e ao manejo adequado.</p></article><article><Icon name="message"/><h3>Transparência</h3><p>Orientações claras, sem complicação.</p></article><article><Icon name="leaf"/><h3>Respeito</h3><p>Cuidado com as pessoas, as abelhas e o ambiente.</p></article><article><Icon name="check"/><h3>Preço honesto</h3><p>Condições explicadas antes da realização do serviço.</p></article></div></div>
      </section>

      <section id="faq" className="section faq-section">
        <div className="container faq-layout"><div className="faq-intro"><span className="eyebrow">Dúvidas frequentes</span><h2>Vamos esclarecer<br/><em>suas dúvidas?</em></h2><p>Se precisar de mais informações, fale diretamente com Fernando.</p><WhatsAppLink className="button button-dark" message="Olá, Fernando! Tenho uma dúvida sobre o atendimento." >Tirar uma dúvida</WhatsAppLink></div><div className="faq-list">{faqs.map((faq, index) => <article className={`faq-item ${openFaq === index ? 'active' : ''}`} key={faq.q}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{faq.q}</span><Icon name="plus" size={18}/></button>{openFaq === index && <p>{faq.a}</p>}</article>)}</div></div>
      </section>

      <section id="contato" className="contact-section">
        <div className="container contact-inner"><div><span className="eyebrow eyebrow-gold">Atendimento em Ubatuba e Caraguatatuba</span><h2>Encontrou um enxame?<br/><em>Fale com Fernando.</em></h2><p>Envie uma mensagem, conte o que está acontecendo e combine a melhor forma de avaliação.</p></div><div className="contact-action"><WhatsAppLink className="button button-amber contact-button" message="Olá, Fernando! Encontrei um enxame e gostaria de combinar uma avaliação." >Solicitar avaliação pelo WhatsApp</WhatsAppLink><span><Icon name="check" size={16}/> Avaliação presencial sem custo</span><small>Atendimento mediante agendamento.</small></div></div>
      </section>
    </main>

    <footer className="site-footer">
      <div className="container footer-main"><a href="#inicio" className="brand brand-footer"><span className="brand-mark"><img src="/images/simbolo-apicultura.jpg" alt=""/></span><span className="brand-type"><strong>Fernando</strong><b>APICULTOR</b><small>MANEJO RESPONSÁVEL DE ENXAMES</small></span></a><nav className="footer-nav" aria-label="Links do rodapé">{[['Início','#inicio'],['Sobre','#sobre'],['Serviços','#servicos'],['Trabalhos','#trabalhos'],['Contato','#contato']].map(([label,href])=><a key={href} href={href}>{label}</a>)}</nav><div className="footer-contact"><span><Icon name="pin"/> Ubatuba e Caraguatatuba</span><a href={whatsappLink()} target="_blank" rel="noreferrer"><Icon name="whatsapp"/> {PHONE_DISPLAY}</a><div className="social-links"><a href={socialLinks.facebook} target="_blank" rel="noreferrer" aria-label="Facebook de Fernando"><Icon name="facebook"/></a><a href={socialLinks.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok de Fernando"><Icon name="play"/></a></div></div></div>
      <div className="footer-bottom"><div className="container"><span>© {new Date().getFullYear()} Fernando Apicultor. Todos os direitos reservados.</span><span>Site desenvolvido com foco em informação e contato direto.</span></div></div>
    </footer>

    <a className="floating-whatsapp" href={whatsappLink()} target="_blank" rel="noreferrer" aria-label="Falar com Fernando pelo WhatsApp"><Icon name="whatsapp" size={25}/><span>Falar no WhatsApp</span></a>

    {activePhoto && <div className="lightbox" role="dialog" aria-modal="true" aria-label={activePhoto.title} onClick={() => setActivePhoto(null)}><button className="lightbox-close" onClick={() => setActivePhoto(null)} aria-label="Fechar imagem"><Icon name="close" size={26}/></button><div className="lightbox-content" onClick={e => e.stopPropagation()}><img src={activePhoto.src} alt={activePhoto.title}/><div><strong>{activePhoto.title}</strong><span>{activePhoto.category}</span></div></div></div>}
  </>;
}

export default App;
