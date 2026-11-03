import type { SVGProps, ReactNode } from 'react';

type IconName = 'menu'|'close'|'whatsapp'|'arrow'|'pin'|'leaf'|'shield'|'hive'|'roof'|'home'|'flower'|'check'|'clock'|'camera'|'plus'|'facebook'|'play'|'award'|'message'|'phone';

export function Icon({ name, size = 20, ...props }: SVGProps<SVGSVGElement> & { name: IconName; size?: number }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, 'aria-hidden': true as const, ...props };
  const paths: Record<IconName, ReactNode> = {
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>, close: <><path d="m6 6 12 12M18 6 6 18" /></>,
    whatsapp: <><path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.2-4.6A8.5 8.5 0 1 1 20.5 11.5Z"/><path d="M8.5 8.2c.3-.6.6-.6.9-.6h.5c.2 0 .4.1.5.4l.8 1.8c.1.2.1.4-.1.6l-.6.7c-.2.2-.2.4 0 .6.5.9 1.3 1.6 2.2 2.1.2.1.4.1.6-.1l.8-.9c.2-.2.4-.2.6-.1l1.7.8c.3.1.4.3.4.5 0 .3-.2 1.2-.8 1.6-.6.5-1.4.6-2.2.4-1-.2-2.2-.8-3.4-1.9-1.2-1.1-2-2.5-2.2-3.5-.2-.9.1-1.8.5-2.4Z"/></>,
    arrow: <><path d="M4 12h15M13 5l7 7-7 7" /></>, pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    leaf: <><path d="M20 4c-8 0-14 3-14 10a6 6 0 0 0 6 6c7 0 8-8 8-16Z"/><path d="M4 21c3-5 7-8 12-11"/></>,
    shield: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/></>,
    hive: <><path d="m12 2 8 4.5v9L12 20l-8-4.5v-9L12 2Z"/><path d="m4 6.5 8 4.5 8-4.5M12 11v9"/><path d="m8 4.2 8 4.5"/></>,
    roof: <><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10M9 20v-6h6v6"/></>, home: <><path d="m3 10 9-7 9 7v10H3Z"/><path d="M9 20v-6h6v6"/></>,
    flower: <><path d="M12 12c-4-1-5-5-2-7 2-1 4 1 2 7Zm0 0c1-4 5-5 7-2 1 2-1 4-7 2Zm0 0c4 1 5 5 2 7-2 1-4-1-2-7Zm0 0c-1 4-5 5-7 2-1-2 1-4 7-2Z"/><circle cx="12" cy="12" r="2"/><path d="M12 14v8"/></>,
    check: <><path d="m5 12 4 4L19 6"/></>, clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    camera: <><path d="M4 7h3l2-3h6l2 3h3v13H4Z"/><circle cx="12" cy="13" r="4"/></>, plus: <><path d="M12 5v14M5 12h14"/></>,
    facebook: <><path d="M14 8h3V4h-3a5 5 0 0 0-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9a1 1 0 0 1 1-1Z"/></>,
    play: <><path d="m8 5 11 7-11 7V5Z"/></>, award: <><circle cx="12" cy="8" r="6"/><path d="m8 13-2 9 6-3 6 3-2-9"/></>, message: <><path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H5l1.5-4A7.5 7.5 0 1 1 20 11.5Z"/></>, phone: <><path d="M6 3h3l2 5-2 2a15 15 0 0 0 5 5l2-2 5 2v3a2 2 0 0 1-2 2C10 20 4 14 4 5a2 2 0 0 1 2-2Z"/></>,
  };
  return <svg {...common}>{paths[name]}</svg>;
}
