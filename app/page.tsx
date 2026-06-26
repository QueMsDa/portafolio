import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = { title: 'Inicio' };

const CURSOS = [
  { slug: 'hidrologia',          nombre: 'Hidrología',                icon: '◈', desc: 'Ciclo hidrológico, cuencas, HEC-HMS, Ley 29338' },
  { slug: 'tecnologias-limpias', nombre: 'Tecnologías Limpias',        icon: '◇', desc: 'PML, ACV, diagramas ISO 10628, balance de materia' },
  { slug: 'monitoreo-ambiental', nombre: 'Monitoreo Ambiental',        icon: '◑', desc: 'Agua, aire, ruido y suelo — protocolos nacionales' },
  { slug: 'riesgos-ambientales', nombre: 'Riesgos Ambientales',        icon: '◉', desc: 'Identificación, evaluación y planes de manejo' },
  { slug: 'topicos-pml',         nombre: 'Tópicos de PML',             icon: '◎', desc: 'Principios, herramientas e implementación de PML' },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero-home">
        <div className="hero-home__text">
          <p className="hero-home__eyebrow">Portafolio · Ing. Ambiental · UAC 2026</p>
          <h1 className="hero-home__name">Karsten García Palomino</h1>
          <p className="hero-home__role">Desarrollador web full-stack · Especialidad ambiental</p>
          <div className="social-row">
            <a className="social-btn" href="https://github.com/QueMsDa" target="_blank" rel="noopener noreferrer">⌥ GitHub</a>
            <a className="social-btn" href="https://www.linkedin.com/in/karsten-guillermo2000" target="_blank" rel="noopener noreferrer">◈ LinkedIn</a>
            <a className="social-btn" href="https://www.twitch.tv/karstengp" target="_blank" rel="noopener noreferrer">▶ Twitch</a>
            <Link className="social-btn" href="/contacto">✉ Contacto</Link>
            <Link className="social-btn" href="/cv">◎ CV</Link>
          </div>
        </div>
        <Image
          src="/assets/yo sin fondo.png"
          alt="Foto de Karsten García Palomino"
          width={220} height={220}
          className="hero-home__photo"
          priority
        />
      </section>

      {/* Stats */}
      <div className="data-row">
        <div className="data-row__inner">
          {[
            { value: '8.º', label: 'Semestre' },
            { value: '4', label: 'Apps web' },
            { value: 'ArcGIS', label: 'GIS' },
            { value: 'HEC-HMS', label: 'Modelamiento' },
            { value: 'Cusco', label: 'Perú' },
          ].map(s => (
            <div key={s.label} className="data-row__stat">
              <div className="data-row__value">{s.value}</div>
              <div className="data-row__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Cursos */}
      <section className="section">
        <div className="section-head">
          <p className="section-head__label">Portafolios</p>
          <h2 className="section-head__title">Cursos del semestre</h2>
        </div>
        <div className="courses-grid">
          {CURSOS.map(c => (
            <Link key={c.slug} href={`/${c.slug}`} className="course-card">
              <span className="course-card__icon">{c.icon}</span>
              <span className="course-card__name">{c.nombre}</span>
              <span className="course-card__desc">{c.desc}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Proyectos preview */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <p className="section-head__label">Desarrollo</p>
          <h2 className="section-head__title">Proyectos web</h2>
        </div>
        <Link href="/proyectos" className="social-btn" style={{ display: 'inline-flex' }}>
          Ver todos los proyectos →
        </Link>
      </section>
    </>
  );
}
