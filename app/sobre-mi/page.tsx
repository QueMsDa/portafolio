import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Sobre mí' };

const CHIPS = [
  'Ing. Ambiental', 'Sostenibilidad', 'Cambio Climático',
  'ArcGIS', 'HEC-HMS', 'HTML/CSS', 'JavaScript', 'React', 'Next.js',
  'Inglés', 'Cusco · Perú',
];

const CURSOS = [
  { href: '/hidrologia',          nombre: 'Hidrología' },
  { href: '/monitoreo-ambiental', nombre: 'Monitoreo Ambiental' },
  { href: '/tecnologias-limpias', nombre: 'Tecnologías Limpias' },
  { href: '/riesgos-ambientales', nombre: 'Riesgos Ambientales' },
  { href: '/topicos-pml',         nombre: 'Tópicos de PML' },
];

const GALLERY = [
  { src: '/assets/yo.jpg',                   alt: 'Karsten perfil' },
  { src: '/assets/yo de viaje .jpg',         alt: 'Karsten de viaje' },
  { src: '/assets/disparando.jpg',           alt: 'Karsten en práctica' },
  { src: '/assets/20260317_110410.png',      alt: 'Karsten campo' },
];

export default function SobreMi() {
  return (
    <>
      <header className="page-hero">
        <p className="page-hero__eyebrow">Portafolio · UAC 2026</p>
        <h1 className="page-hero__title">Sobre mí</h1>
        <p className="page-hero__lead">Estudiante de Ingeniería Ambiental, desarrollador web y curioso permanente.</p>
      </header>

      <div className="profile-wrap">
        <div>
          <Image
            src="/assets/yo.jpg"
            alt="Karsten García Palomino"
            width={240} height={240}
            className="profile-photo"
            priority
          />
        </div>
        <div className="profile-bio">
          <p>
            Soy estudiante de Ingeniería Ambiental en la Universidad Andina del Cusco (UAC), cursando el 8.º semestre.
            Mi trabajo se orienta a la gestión de recursos hídricos, el modelamiento hidrológico con HEC-HMS y la
            elaboración de cartografía ambiental con ArcGIS, siempre con foco en la sostenibilidad del territorio andino.
          </p>
          <p>
            Paralelamente, me dedico al desarrollo web full-stack: construyo aplicaciones con Next.js, TypeScript y SQL
            que resuelven problemas concretos. Entre mis proyectos figuran una app de dispersión de contaminantes con
            modelado gaussiano en tiempo real, un sistema de análisis de cromatogramas sin IA externa y un closet virtual
            con gestión de outfits.
          </p>
          <p>
            Nací en Argentina y vivo en Cusco. Eso me dio una perspectiva doble — técnica y territorial — que llevo a
            cada proyecto. Me interesa la intersección entre ingeniería ambiental y tecnología como palanca de cambio
            en contextos con limitado acceso a herramientas especializadas.
          </p>

          <div className="skill-chips">
            {CHIPS.map(c => <span key={c} className="chip">{c}</span>)}
          </div>

          <hr className="divider" />

          <div className="section-head">
            <p className="section-head__label">Portafolios académicos</p>
            <h2 className="section-head__title" style={{ fontSize: '1.4rem' }}>Cursos del semestre</h2>
          </div>
          <div className="courses-grid" style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))' }}>
            {CURSOS.map(c => (
              <Link key={c.href} href={c.href} className="course-card">
                <span className="course-card__name">{c.nombre}</span>
              </Link>
            ))}
          </div>

          <hr className="divider" />

          <div className="section-head">
            <p className="section-head__label">Galería</p>
            <h2 className="section-head__title" style={{ fontSize: '1.4rem' }}>Fotos</h2>
          </div>
          <div className="gallery-grid">
            {GALLERY.map(g => (
              <Image key={g.src} src={g.src} alt={g.alt} width={300} height={300} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
