import type { Metadata } from 'next';
import Lightbox, { type LbItem } from '@/components/Lightbox';

export const metadata: Metadata = { title: 'Curriculum Vitae' };

const P = '/assets/certificados';

const CERTS_UAC: LbItem[] = [
  { src: `${P}/GARCIA PALOMINO KARSTEN GUILLERMO.pdf`,                                       title: 'Certificado UAC — Karsten G. P.',                    type: 'pdf' },
  { src: `${P}/GARCIA PALOMINO KARSTEN GUILLERMO (1).pdf`,                                   title: 'Certificado UAC (2)',                                 type: 'pdf' },
  { src: `${P}/GARCIA PALOMINO , KARSTEN GUILLERMO (1).pdf`,                                 title: 'Certificado UAC (3)',                                 type: 'pdf' },
  { src: `${P}/022200142i[R][R].pdf`,                                                         title: 'Constancia — Cód. 022200142i',                        type: 'pdf' },
  { src: `${P}/Certif.- III Encuentro defensores univ (1148)-1070-022200142I-KARSTEN GUILLERMO GARCIA PALOMINO.pdf`, title: 'Cert. III Encuentro Defensores Univ.', type: 'pdf' },
  { src: `${P}/Certif.- Metod. procesamiento datos (60)-26.pdf`,                             title: 'Cert. Metodología Procesamiento de Datos',           type: 'pdf' },
  { src: `${P}/Certif.- Sem. Int. Invest. Cientif. RyP (466)-235.pdf`,                      title: 'Cert. Sem. Investigación Científica',                type: 'pdf' },
  { src: `${P}/Certif.- Socialización exp invest (599)-276.pdf`,                             title: 'Cert. Socialización Experiencias de Investigación',  type: 'pdf' },
];

const CERTS_ORACLE: LbItem[] = [
  { src: `${P}/Karsten Guillermo Garcia Palomino - Curso Lógica de programación_ sumérgete en la programación con JavaScript - Alura (1).pdf`, title: 'Lógica de Programación — Alura/Oracle ONE', type: 'pdf' },
  { src: `${P}/Karsten Guillermo Garcia Palomino - Curso HTML y CSS_ ambientes de desarrollo, estructura de archivos y tags - Alura.pdf`,       title: 'HTML y CSS: ambientes de desarrollo — Alura', type: 'pdf' },
  { src: `${P}/Karsten Guillermo Garcia Palomino - Curso HTML y CSS_ Clases, Posicionamiento y Flexbox - Alura.pdf`,                           title: 'HTML y CSS: clases y posicionamiento — Alura', type: 'pdf' },
  { src: `${P}/Karsten Guillermo Garcia Palomino - Curso HTML y CSS_ header, footer y variables CSS - Alura.pdf`,                              title: 'HTML y CSS: cabecera, footer y variables CSS — Alura', type: 'pdf' },
  { src: `${P}/Karsten Guillermo Garcia Palomino - Curso Lógica de programación_ explorar funciones y listas - Alura.pdf`,                     title: 'JavaScript: funciones y listas — Alura', type: 'pdf' },
  { src: `${P}/certificado de git.pdf`,                                                        title: 'Git y GitHub — Alura', type: 'pdf' },
  { src: `${P}/Karsten Guillermo Garcia Palomino - Programa -.pdf`,                           title: 'Formación Front End — Oracle ONE (307 h)', type: 'pdf' },
  { src: `${P}/certificado de amigo secreto.pdf`,                                              title: 'JavaScript: Amigo Secreto — Alura', type: 'pdf' },
];

const EVIDENCIAS: LbItem[] = [
  { src: `${P}/pruebas de formacion/revit 0.jpeg`,                                              title: 'Modelado BIM — Revit (1)', type: 'img' },
  { src: `${P}/pruebas de formacion/revit.jpeg`,                                                title: 'Modelado BIM — Revit (2)', type: 'img' },
  { src: `${P}/pruebas de formacion/visita a planta santa ana purificación de agua sedacusco.jpeg`, title: 'Visita SEDACUSCO — Planta Santa Ana', type: 'img' },
  { src: `${P}/pruebas de formacion/visita a planta sedacusco.jpeg`,                            title: 'Visita SEDACUSCO (2)', type: 'img' },
  { src: `${P}/pruebas de formacion/OPERACIONES Y PROCESOS UNITARIOS II poster.pdf`,            title: 'Póster Científico — Investigación Formativa', type: 'pdf' },
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
