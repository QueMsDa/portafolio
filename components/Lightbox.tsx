'use client';
import { useState, useEffect } from 'react';

export interface LbItem {
  src: string;
  title: string;
  type: 'img' | 'pdf';
}

export default function Lightbox({ items }: { items: LbItem[] }) {
  const [active, setActive] = useState<LbItem | null>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setActive(null); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = active ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [active]);

  return (
    <>
      <div className="cert-grid">
        {items.map((item) => (
          <button key={item.src} className="cert-btn" onClick={() => setActive(item)}>
            {item.title}
          </button>
        ))}
      </div>

      <div
        className={`lb-overlay${active ? ' open' : ''}`}
        onClick={(e) => { if (e.target === e.currentTarget) setActive(null); }}
        role="dialog"
        aria-modal="true"
        aria-label={active?.title}
      >
        {active && (
          <div className="lb-box">
            <button className="lb-close" onClick={() => setActive(null)}>✕ Cerrar</button>
            <p className="lb-title">{active.title}</p>
            {active.type === 'img'
              ? <img src={active.src} alt={active.title} className="lb-img" />
              : <iframe src={active.src} className="lb-frame" title={active.title} />
            }
          </div>
        )}
      </div>
    </>
  );
}
