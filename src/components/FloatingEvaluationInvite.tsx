import { useEffect, useState } from 'react';
import { whatsappLink } from '../data/site';
import { Icon } from './Icons';

const STORAGE_KEY = 'fernando-evaluation-invite-dismissed';

export default function FloatingEvaluationInvite() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.sessionStorage.getItem(STORAGE_KEY) === 'true') return;

    const timeout = window.setTimeout(() => setVisible(true), 7000);
    return () => window.clearTimeout(timeout);
  }, []);

  const dismiss = () => {
    window.sessionStorage.setItem(STORAGE_KEY, 'true');
    setVisible(false);
  };

  if (!visible) return null;

  const message = 'Olá, Fernando Silva! Gostaria de solicitar uma avaliação para um enxame.';

  return (
    <aside className="evaluation-invite" aria-label="Solicite uma avaliação">
      <button
        className="evaluation-invite-close"
        type="button"
        onClick={dismiss}
        aria-label="Fechar convite"
      >
        <Icon name="close" size={16} />
      </button>

      <div className="evaluation-invite-heading">
        <span className="evaluation-invite-mark"><Icon name="hive" size={18} /></span>
        <span>FERNANDO SILVA <i /> ATENDIMENTO DIRETO</span>
      </div>

      <p className="evaluation-invite-title">Encontrou um enxame?</p>
      <p className="evaluation-invite-copy">
        Solicite uma avaliação e receba orientação para a sua situação.
      </p>

      <a
        className="evaluation-invite-action"
        href={whatsappLink(message)}
        target="_blank"
        rel="noreferrer"
        aria-label="Solicitar avaliação com Fernando Silva pelo WhatsApp"
      >
        <Icon name="whatsapp" size={18} />
        <span>Solicitar avaliação</span>
        <Icon name="arrow" size={15} />
      </a>
    </aside>
  );
}
