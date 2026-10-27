export const PHOTOS = {
  hero: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85',
  arch: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85',
  slat: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85',
  stone: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85',
  oculus: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85',
  still: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85',
  detail: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85',
  curve: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1400&q=85',
  portrait: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1200&q=85',
};

export const ART = {
  hero: `<defs><linearGradient id="h1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#C98A6B"/><stop offset="1" stop-color="#B2694C"/></linearGradient><linearGradient id="h2" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F3E3C8"/><stop offset="1" stop-color="#E7C79A"/></linearGradient></defs><rect width="800" height="900" fill="url(#h1)"/><path d="M230 900V330a170 170 0 0 1 340 0v570z" fill="#2a1d17"/><path d="M262 900V335a138 138 0 0 1 276 0v565z" fill="url(#h2)"/><path d="M0 760h800v140H0z" fill="#D9D3C9"/><path d="M300 760l-90 140h340l-60-140z" fill="#F7EBD2" opacity=".85"/><path d="M0 760h800" stroke="#a9a196"/><ellipse cx="620" cy="770" rx="60" ry="14" fill="#000" opacity=".25"/><path d="M570 700q50-60 100 0v70h-100z" fill="#191919"/>`,
  arch: `<defs><linearGradient id="a1" x1="0" x2="1"><stop offset="0" stop-color="#D4A27F"/><stop offset="1" stop-color="#EBD3B1"/></linearGradient></defs><rect width="1200" height="520" fill="url(#a1)"/><g fill="#8E5B42"><path d="M80 520V200a110 110 0 0 1 220 0v320z"/><path d="M380 520V200a110 110 0 0 1 220 0v320z"/><path d="M680 520V200a110 110 0 0 1 220 0v320z"/></g><g fill="#F7E8CC"><path d="M110 520V205a80 80 0 0 1 160 0v315z"/><path d="M410 520V205a80 80 0 0 1 160 0v315z"/><path d="M710 520V205a80 80 0 0 1 160 0v315z"/></g><path d="M0 440h1200v80H0z" fill="#C9BEAF"/><path d="M110 520l300-80h200l-300 80z" fill="#fff" opacity=".4"/><rect x="960" y="0" width="240" height="520" fill="#20201E" opacity=".82"/>`,
  slat: `<rect width="600" height="750" fill="#7A5236"/><g fill="#C69369">${Array.from({ length: 14 }, (_, i) => `<rect x="${20 + i * 42}" y="0" width="22" height="750"/>`).join('')}</g><g fill="#2a1a10" opacity=".45">${Array.from({ length: 14 }, (_, i) => `<rect x="${42 + i * 42}" y="0" width="14" height="750"/>`).join('')}</g><path d="M0 560L600 330v120L0 700z" fill="#F7E3BE" opacity=".35"/><rect y="650" width="600" height="100" fill="#20201E"/>`,
  stone: `<rect width="600" height="700" fill="#D8CDB9"/><rect y="0" width="600" height="130" fill="#C9B79B"/><rect y="130" width="600" height="90" fill="#E5DAC6"/><rect y="220" width="600" height="150" fill="#A5694A"/><rect y="370" width="600" height="70" fill="#E0D4BD"/><rect y="440" width="600" height="140" fill="#BBA98B"/><rect y="580" width="600" height="120" fill="#4a463f"/><path d="M0 220h600M0 370h600M0 440h600" stroke="#000" opacity=".15"/><path d="M0 0h260v700H0z" fill="#000" opacity=".12"/>`,
  oculus: `<rect width="900" height="600" fill="#8C8A85"/><rect y="400" width="900" height="200" fill="#6E6C67"/><circle cx="450" cy="150" r="80" fill="#FFF6DC"/><path d="M370 150L250 400h400L530 150z" fill="#FFF3D0" opacity=".35"/><ellipse cx="450" cy="480" rx="190" ry="52" fill="#FFEBBA" opacity=".9"/><path d="M0 0h110v400H0zM790 0h110v400H790z" fill="#000" opacity=".15"/>`,
  still: `<rect width="600" height="800" fill="#D9D3C9"/><rect y="560" width="600" height="240" fill="#B9AE9C"/><path d="M0 560h600" stroke="#000" opacity=".15"/><path d="M130 560c-40-70-30-190 40-190s80 120 40 190z" fill="#C64B35"/><path d="M260 560c-20-140 10-300 55-300s75 160 55 300z" fill="#20201E"/><path d="M420 560c-30-50-20-130 30-130s60 80 30 130z" fill="#EDE5D3"/><ellipse cx="300" cy="568" rx="240" ry="14" fill="#000" opacity=".18"/>`,
  detail: `<defs><linearGradient id="d1" x1="0" x2="1"><stop offset="0" stop-color="#F0E6D4"/><stop offset=".6" stop-color="#D8C9AE"/><stop offset="1" stop-color="#8E8571"/></linearGradient></defs><rect width="600" height="750" fill="url(#d1)"/><path d="M0 520q300-130 600 0v230H0z" fill="#B9B3A6"/><path d="M0 520q300-130 600 0v18q-300-130-600 0z" fill="#fff" opacity=".6"/><path d="M0 0l300 0 300 380v-380z" fill="#fff" opacity=".18"/>`,
  curve: `<defs><linearGradient id="c1" x1="0" x2="1"><stop offset="0" stop-color="#E5C7A3"/><stop offset="1" stop-color="#9B6A4C"/></linearGradient></defs><rect width="700" height="900" fill="url(#c1)"/><g fill="none" stroke="#F8EEDB" stroke-width="3" opacity=".7">${Array.from({ length: 9 }, (_, i) => `<path d="M${-100 + i * 70} 900Q${200 + i * 60} 400 ${500 + i * 20} 0"/>`).join('')}</g><path d="M0 760q350-120 700 0v140H0z" fill="#20201E" opacity=".7"/>`,
  portrait: `<rect width="600" height="750" fill="#D9D3C9"/><rect x="60" y="60" width="480" height="630" fill="#C9C1B3"/><circle cx="300" cy="300" r="85" fill="#9A9183"/><path d="M130 690q20-210 170-210t170 210z" fill="#9A9183"/><text x="300" y="730" text-anchor="middle" font-family="Manrope,sans-serif" font-size="14" letter-spacing="3" fill="#C64B35">PORTRAIT PLACEHOLDER</text>`,
};

export const getViewBox = (art) => {
  const viewBoxes = {
    hero: '0 0 800 900',
    arch: '0 0 1200 520',
    slat: '0 0 600 750',
    stone: '0 0 600 700',
    oculus: '0 0 900 600',
    still: '0 0 600 800',
    detail: '0 0 600 750',
    curve: '0 0 700 900',
    portrait: '0 0 600 750',
  };
  return viewBoxes[art] || '0 0 100 100';
};
