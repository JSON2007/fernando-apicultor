import { Icon } from './Icons';
const steps = [
  { n:'01', icon:'message' as const, title:'Entre em contato', text:'Conte o que está acontecendo e informe a localização aproximada.' },
  { n:'02', icon:'camera' as const, title:'Envie fotos ou solicite uma visita', text:'As imagens ajudam na primeira avaliação. Se necessário, combinamos uma visita presencial gratuita.' },
  { n:'03', icon:'check' as const, title:'Combine o atendimento', text:'Fernando explica a situação, alinha as condições e combina os próximos passos.' },
];
export default function ProcessSteps() {
  return <section id="processo" className="section section-forest process-section">
    <div className="container">
      <div className="section-heading section-heading-light"><div><span className="eyebrow eyebrow-gold">Simples e transparente</span><h2>Como funciona<br/><em>o atendimento.</em></h2></div><p>Da primeira conversa à definição do serviço, tudo é explicado com clareza.</p></div>
      <div className="steps-grid">{steps.map((step, i) => <article className="step-card" key={step.n}><div className="step-top"><span>{step.n}</span><div className="step-icon"><Icon name={step.icon} size={25}/></div></div><h3>{step.title}</h3><p>{step.text}</p>{i < 2 && <span className="step-connector" aria-hidden="true">›</span>}</article>)}</div>
      <div className="free-visit"><Icon name="check" size={20}/><span><strong>Avaliação presencial sem custo.</strong> O atendimento é combinado diretamente pelo WhatsApp.</span></div>
    </div>
    <div className="honeycomb-outline" aria-hidden="true">⬡ ⬡<br/> ⬡ ⬡ ⬡</div>
  </section>;
}
