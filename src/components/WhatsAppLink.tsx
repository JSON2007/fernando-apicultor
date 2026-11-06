import type { ReactNode } from 'react';
import { whatsappLink } from '../data/site';
import { Icon } from './Icons';

export default function WhatsAppLink({ children = 'Falar no WhatsApp', message, className = '' }: { children?: ReactNode; message?: string; className?: string }) {
  return <a className={className} href={whatsappLink(message)} target="_blank" rel="noreferrer" aria-label="Conversar com Fernando Silva pelo WhatsApp"><Icon name="whatsapp" size={19}/><span>{children}</span><Icon name="arrow" size={16}/></a>;
}
