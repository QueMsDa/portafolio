'use client';
import { useState } from 'react';
import type { Seccion } from '@/lib/db';

interface Props {
  secciones: Seccion[];
  panels: React.ReactNode[];
}

export default function UnitNav({ secciones, panels }: Props) {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = secciones[activeIdx];

  return (
    <>
      <nav className="unit-nav" aria-label="Unidades del curso">
        {secciones.map((s, i) => (
          <button
            key={s.id}
            className={`unit-bubble${i === activeIdx ? ' active' : ''}`}
            onClick={() => setActiveIdx(i)}
            aria-pressed={i === activeIdx}
          >
            <span
              className="bubble-circle"
              style={s.num_style ? { fontSize: s.num_style.replace('font-size:', '').replace(';', '').trim() } : undefined}
            >
              {s.numero}
            </span>
            <span className="bubble-label">{s.bubble_label}</span>
          </button>
        ))}
      </nav>
      <div className="unit-section visible">
        <div className="unit-section__head">
          <h2 className="unit-section__title">{active.titulo}</h2>
          {active.subtitulo && <p className="unit-section__sub">{active.subtitulo}</p>}
        </div>
        {panels[activeIdx]}
      </div>
    </>
  );
}
