import type { Metadata } from 'next';
import { getProyectos } from '@/lib/db';

export const metadata: Metadata = { title: 'Proyectos' };

export const dynamic = 'force-dynamic';

export default async function Proyectos() {
  const proyectos = await getProyectos();

  return (
    <>
      <header className="page-hero">
        <p className="page-hero__eyebrow">Desarrollo web</p>
        <h1 className="page-hero__title">Proyectos</h1>
        <p className="page-hero__lead">Aplicaciones web construidas con Next.js, TypeScript y SQL. Cada una resuelve un problema concreto.</p>
      </header>

      <section className="section">
        <div className="card-grid card-grid--projects">
          {proyectos.map(p => (
            <article key={p.id} className="card">
              <p className="card-lbl">{p.tech_label}</p>
              <h2 className="card__title">{p.titulo}</h2>
              <p className="card__desc">{p.descripcion}</p>
              <div className="card__links">
                {p.url_vercel && (
                  <a className="card__link" href={p.url_vercel} target="_blank" rel="noopener noreferrer">
                    ◈ Ver app
                  </a>
                )}
                {p.url_github && (
                  <a className="card__link" href={p.url_github} target="_blank" rel="noopener noreferrer">
                    ⌥ Código
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
