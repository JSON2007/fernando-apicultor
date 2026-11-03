import { useState } from 'react';
import { PHONE_DISPLAY, whatsappLink } from '../data/site';
import { Icon } from './Icons';

const links = [['Início','#inicio'],['Sobre','#sobre'],['Serviços','#servicos'],['Como funciona','#processo'],['Trabalhos','#trabalhos'],['Contato','#contato']];

export default function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <div className="header-inner">
      <a href="#inicio" className="brand" aria-label="Fernando Apicultor - início">
        <span className="brand-mark"><img src="/images/simbolo-apicultura.jpg" alt=""/></span>
        <span className="brand-type"><strong>Fernando</strong><b>APICULTOR</b><small>MANEJO RESPONSÁVEL DE ENXAMES</small></span>
      </a>
      <nav className={`main-nav ${open ? 'is-open' : ''}`} aria-label="Navegação principal">
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="mobile-nav-cta" href={whatsappLink()} target="_blank" rel="noreferrer"><Icon name="whatsapp"/> Falar no WhatsApp</a>
      </nav>
      <div className="header-actions">
        <span className="location-chip"><Icon name="pin" size={17}/><span>Atendimento em<br/><b>Ubatuba e Caraguatatuba</b></span></span>
        <a className="button button-amber header-cta" href={whatsappLink()} target="_blank" rel="noreferrer"><Icon name="whatsapp"/> Falar no WhatsApp</a>
      </div>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open}><Icon name={open ? 'close' : 'menu'} size={24}/></button>
    </div>
  </header>;
}
