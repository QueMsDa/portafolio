import type { Metadata } from 'next';
import Lightbox, { type LbItem } from '@/components/Lightbox';

export const metadata: Metadata = { title: 'Curriculum Vitae' };

const CERTS_UAC: LbItem[] = [
  { src: '/assets/certificados/1.jpg', title: 'Actualización Curricular — UAC', type: 'img' },
  { src: '/assets/certificados/2.jpg', title: 'Excel Avanzado — UAC', type: 'img' },
  { src: '/assets/certificados/3.jpg', title: 'GIS Básico ArcGIS — UAC', type: 'img' },
  { src: '/assets/certificados/4.jpg', title: 'Emprendimiento — UAC', type: 'img' },
  { src: '/assets/certificados/5.jpg', title: 'Investigación Formativa — UAC', type: 'img' },
  { src: '/assets/certificados/6.jpg', title: 'Gestión Ambiental — UAC', type: 'img' },
  { src: '/assets/certificados/7.jpg', title: 'Legislación Ambiental — UAC', type: 'img' },
  { src: '/assets/certificados/8.jpg', title: 'Impacto Ambiental — UAC', type: 'img' },
];

const CERTS_ORACLE: LbItem[] = [
  { src: '/assets/certificados/oracle/1.jpg', title: 'Lógica de Programación — Alura/Oracle ONE', type: 'img' },
  { src: '/assets/certificados/oracle/2.jpg', title: 'HTML y CSS: ambientes de desarrollo — Alura', type: 'img' },
  { src: '/assets/certificados/oracle/3.jpg', title: 'HTML y CSS: clases y posicionamiento — Alura', type: 'img' },
  { src: '/assets/certificados/oracle/4.jpg', title: 'HTML y CSS: cabecera, footer y variables CSS — Alura', type: 'img' },
  { src: '/assets/certificados/oracle/5.jpg', title: 'HTML y CSS: responsividad con mobile-first — Alura', type: 'img' },
  { src: '/assets/certificados/oracle/6.jpg', title: 'JavaScript: primeros pasos — Alura', type: 'img' },
  { src: '/assets/certificados/oracle/7.jpg', title: 'JavaScript: arrays y objetos — Alura', type: 'img' },
  { src: '/assets/certificados/oracle/8.jpg', title: 'JavaScript: funciones y listas — Alura', type: 'img' },
  { src: '/assets/certificados/oracle/9.jpg', title: 'Git y GitHub: repositorio, commit y versiones — Alura', type: 'img' },
  { src: '/assets/certificados/oracle/10.jpg', title: 'React: desarrollando con JavaScript — Alura', type: 'img' },
  { src: '/assets/certificados/oracle/11.jpg', title: 'React: como los componentes funcionan — Alura', type: 'img' },
  { src: '/assets/certificados/oracle/12.jpg', title: 'Formación Front End — Oracle ONE (307 h)', type: 'img' },
  { src: '/assets/certificados/oracle/13.jpg', title: 'Oracle ONE — Completado', type: 'img' },
];

const EVIDENCIAS: LbItem[] = [
  { src: '/assets/evidencias/revit1.jpg',   title: 'Modelado BIM — Revit (1)', type: 'img' },
  { src: '/assets/evidencias/revit2.jpg',   title: 'Modelado BIM — Revit (2)', type: 'img' },
  { src: '/assets/evidencias/seda1.jpg',    title: 'Visita SEDACUSCO (1)', type: 'img' },
  { src: '/assets/evidencias/seda2.jpg',    title: 'Visita SEDACUSCO (2)', type: 'img' },
  { src: '/assets/evidencias/sig.pdf',      title: 'Práctica SIG — Análisis espacial (PDF)', type: 'pdf' },
  { src: '/assets/evidencias/poster.pdf',   title: 'Póster Científico — Investigación Formativa (PDF)', type: 'pdf' },
];

const FORMACION = [
  { titulo: 'Universidad Andina del Cusco (UAC)', grado: 'Ingeniería Ambiental', periodo: '2021 — presente', nota: 'Cusco, Perú' },
  { titulo: 'Universidad de Buenos Aires (UBA)', grado: 'Psicología', periodo: '2019 — 2020', nota: 'Buenos Aires, Argentina' },
  { titulo: 'Universidad Nacional de Lomas de Zamora (UNLZ)', grado: 'Administración de Empresas', periodo: '2018 — 2019', nota: 'Buenos Aires, Argentina' },
];

const EXPERIENCIA = [
  { titulo: 'Desarrollador Web Full-Stack', org: 'Proyectos personales', periodo: '2023 — presente', desc: 'Diseño y desarrollo de aplicaciones web con Next.js, TypeScript, Vercel Postgres y Vercel Blob.' },
  { titulo: 'Emprendedor', org: 'Autoempleo', periodo: '2021 — 2023', desc: 'Gestión de emprendimiento de servicios. Desarrollo de habilidades comerciales, logísticas y de atención al cliente.' },
  { titulo: 'Bartender', org: 'Hostelería — Cusco', periodo: '2021 — 2022', desc: 'Servicio en bares de la ciudad del Cusco. Trabajo en equipo en entornos de alta demanda.' },
  { titulo: 'Masajista Terapéutico', org: 'Autoempleo — Argentina', periodo: '2019 — 2021', desc: 'Atención personalizada a clientes. Técnicas de masaje terapéutico y deportivo.' },
];

const COMPETENCIAS = [
  { titulo: 'Herramientas SIG', items: 'ArcGIS, QGIS, análisis espacial, cartografía temática' },
  { titulo: 'Modelamiento Ambiental', items: 'HEC-HMS, modelado hidrológico, dispersión gaussiana' },
  { titulo: 'Desarrollo Web', items: 'Next.js, React, TypeScript, SQL, Vercel, Git' },
  { titulo: 'Idiomas', items: 'Español (nativo) · Inglés (intermedio-avanzado)' },
];

export default function CV() {
  return (
    <>
      <header className="page-hero">
        <p className="page-hero__eyebrow">Karsten García Palomino · Ing. Ambiental · UAC</p>
        <h1 className="page-hero__title">Curriculum Vitae</h1>
      </header>

      <div className="cv-wrap">
        {/* Header */}
        <div className="cv-header">
          <h2 className="cv-name">Karsten García Palomino</h2>
          <p className="cv-contact">
            <a href="mailto:karstenpalomino@gmail.com">karstenpalomino@gmail.com</a>
            {' · '}
            <a href="https://github.com/QueMsDa" target="_blank" rel="noopener noreferrer">GitHub</a>
            {' · '}
            <a href="https://www.linkedin.com/in/karsten-guillermo2000" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            {' · '}
            <a href="https://www.twitch.tv/karstengp" target="_blank" rel="noopener noreferrer">Twitch</a>
            {' · '}
            <a href="https://www.credly.com/" target="_blank" rel="noopener noreferrer">Credly</a>
          </p>
        </div>

        {/* Data row */}
        <div className="data-row" style={{ borderRadius: 8, marginBottom: '2rem' }}>
          <div className="data-row__inner">
            {[
              { value: '21', label: 'Certificaciones' },
              { value: '307h', label: 'Oracle ONE' },
              { value: '3', label: 'Universidades' },
              { value: 'ARG·PER', label: 'Países' },
              { value: 'ES·EN', label: 'Idiomas' },
            ].map(s => (
              <div key={s.label} className="data-row__stat">
                <div className="data-row__value">{s.value}</div>
                <div className="data-row__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Perfil profesional */}
        <div className="cv-section">
          <h3 className="cv-section__title">Perfil profesional</h3>
          <p style={{ color: 'var(--quill)', lineHeight: 1.7 }}>
            Estudiante de Ingeniería Ambiental con énfasis en gestión de recursos hídricos, modelamiento con
            HEC-HMS y cartografía ambiental con ArcGIS. Desarrollador web full-stack con experiencia en Next.js,
            TypeScript y bases de datos SQL. Capacidad para integrar análisis ambiental con herramientas digitales
            para la toma de decisiones sostenibles. Bilingüe (español-inglés), con experiencia de trabajo en
            Argentina y Perú.
          </p>
        </div>

        {/* Formación */}
        <div className="cv-section">
          <h3 className="cv-section__title">Formación académica</h3>
          {FORMACION.map(f => (
            <div key={f.titulo} className="cv-item">
              <div className="cv-item__title">{f.titulo}</div>
              <div className="cv-item__sub">{f.grado}</div>
              <div className="cv-item__date">{f.periodo} · {f.nota}</div>
            </div>
          ))}
        </div>

        {/* Experiencia */}
        <div className="cv-section">
          <h3 className="cv-section__title">Experiencia</h3>
          {EXPERIENCIA.map(e => (
            <div key={e.titulo} className="cv-item">
              <div className="cv-item__title">{e.titulo}</div>
              <div className="cv-item__sub">{e.org} · {e.periodo}</div>
              <div className="cv-item__sub" style={{ marginTop: '.25rem' }}>{e.desc}</div>
            </div>
          ))}
        </div>

        {/* Certificaciones UAC */}
        <div className="cv-section">
          <h3 className="cv-section__title">Certificaciones — UAC</h3>
          <Lightbox items={CERTS_UAC} />
        </div>

        {/* Certificaciones Oracle ONE */}
        <div className="cv-section">
          <h3 className="cv-section__title">Certificaciones — Alura / Oracle ONE</h3>
          <Lightbox items={CERTS_ORACLE} />
        </div>

        {/* Evidencias */}
        <div className="cv-section">
          <h3 className="cv-section__title">Evidencias académicas</h3>
          <Lightbox items={EVIDENCIAS} />
        </div>

        {/* Competencias */}
        <div className="cv-section">
          <h3 className="cv-section__title">Competencias</h3>
          <div className="skills-grid">
            {COMPETENCIAS.map(g => (
              <div key={g.titulo}>
                <div className="skills-group__title">{g.titulo}</div>
                <div className="skills-group__items">{g.items}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
