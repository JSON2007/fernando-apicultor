import { services, whatsappLink } from '../data/site';
import { Icon } from './Icons';

const iconMap = ['hive','shield','roof','leaf','home','flower'] as const;
export default function ServicesGrid() {
  return <section id="servicos" className="section section-cream">
    <div className="container">
      <div className="section-heading split-heading"><div><span className="eyebrow">Como posso ajudar?</span><h2>Manejo responsável,<br/><em>do jeito certo.</em></h2></div><p>Atendimento para ocorrências com abelhas, marimbondos e vespas em residências, telhados, árvores e outras estruturas.</p></div>
      <div className="service-grid">{services.map((service, i) => <article className="service-card" key={service.title}>
        <div className="service-icon"><Icon name={iconMap[i]} size={26}/></div>
        <span className="service-number">0{i+1}</span>
        <h3>{service.title}</h3><p>{service.description}</p>
        <a href={whatsappLink(`Olá, Fernando! Gostaria de informações sobre: ${service.title.toLowerCase()}.`)} target="_blank" rel="noreferrer" aria-label={`Consultar sobre ${service.title}`}>Consultar serviço <Icon name="arrow" size={16}/></a>
      </article>)}</div>
    </div>
  </section>;
}
