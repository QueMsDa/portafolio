import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCurso } from '@/lib/db';
import UnitNav from '@/components/UnitNav';
import type { Seccion, Tema } from '@/lib/db';

export const dynamic = 'force-dynamic';
export const maxDuration = 30;

interface Props { params: Promise<{ curso: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { curso: slug } = await params;
  const data = await getCurso(slug);
  if (!data) return { title: 'Curso no encontrado' };
  return { title: data.curso.nombre };
}

function DocList({ tema }: { tema: Tema }) {
  if (!tema.documentos.length) return null;
  return (
    <ul className="doc-list">
      {tema.documentos.map(d => (
        <li key={d.id}>
          {d.disponible
            ? <a className="doc-link" href={d.url} target="_blank" rel="noopener noreferrer">📄 {d.nombre}</a>
            : <span className="doc-link doc-link--missing">📄 {d.nombre}</span>
          }
        </li>
      ))}
    </ul>
  );
}

function CardGrid({ seccion }: { seccion: Seccion }) {
  return (
    <div className="card-grid">
      {seccion.temas.map(t => (
        <article key={t.id} className="card">
          <p className="card-lbl">{t.label}</p>
          <h3 className="card__title">{t.titulo}</h3>
          <p className="card__desc">{t.descripcion}</p>
          {t.pill && <span className="card__pill">{t.pill}</span>}
          <DocList tema={t} />
        </article>
      ))}
    </div>
  );
}

export default async function CursoPage({ params }: Props) {
  const { curso: slug } = await params;

  let data;
  try {
    data = await getCurso(slug);
  } catch (err) {
    console.error('[CursoPage] getCurso error:', err);
    return (
      <div style={{ padding: '2rem', color: 'red' }}>
        <h1>Error cargando curso</h1>
        <pre style={{ fontSize: '0.8rem', whiteSpace: 'pre-wrap' }}>{String(err)}</pre>
      </div>
    );
  }

  if (!data) notFound();

  const { curso, secciones } = data;

  return (
    <>
      <header className="page-hero">
        <p className="page-hero__eyebrow">{curso.eyebrow}</p>
        <h1 className="page-hero__title">{curso.nombre}</h1>
        <p className="page-hero__lead">{curso.lead}</p>
      </header>

      <section className="section">
        {curso.tiene_unidades ? (
          <UnitNav secciones={secciones}>
            {(active) => <CardGrid seccion={active} />}
          </UnitNav>
        ) : (
          <>
            {secciones[0] && <CardGrid seccion={secciones[0]} />}
          </>
        )}
      </section>
    </>
  );
}
