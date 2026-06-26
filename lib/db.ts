import { sql } from '@vercel/postgres';

export { sql };

export async function initDB() {
  await sql`
    CREATE TABLE IF NOT EXISTS proyectos (
      id          SERIAL PRIMARY KEY,
      numero      INTEGER NOT NULL,
      titulo      TEXT NOT NULL,
      descripcion TEXT NOT NULL,
      tech_label  TEXT NOT NULL,
      url_vercel  TEXT,
      url_github  TEXT,
      activo      BOOLEAN DEFAULT true,
      created_at  TIMESTAMPTZ DEFAULT NOW()
    )
  `;
  await sql`CREATE INDEX IF NOT EXISTS idx_proyectos_num ON proyectos(numero)`;

  await sql`
    CREATE TABLE IF NOT EXISTS cursos (
      id             SERIAL PRIMARY KEY,
      slug           TEXT UNIQUE NOT NULL,
      nombre         TEXT NOT NULL,
      eyebrow        TEXT NOT NULL DEFAULT 'Portafolio de Curso · UAC',
      lead           TEXT NOT NULL,
      icon           TEXT NOT NULL DEFAULT '◈',
      tiene_unidades BOOLEAN NOT NULL DEFAULT true,
      orden          INTEGER NOT NULL DEFAULT 0
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS secciones (
      id           SERIAL PRIMARY KEY,
      curso_id     INTEGER REFERENCES cursos(id) ON DELETE CASCADE,
      slug         TEXT NOT NULL,
      numero       TEXT NOT NULL,
      titulo       TEXT NOT NULL,
      subtitulo    TEXT NOT NULL DEFAULT '',
      bubble_label TEXT NOT NULL,
      bubble_title TEXT NOT NULL,
      num_style    TEXT,
      orden        INTEGER NOT NULL DEFAULT 0,
      UNIQUE (curso_id, slug)
    )
  `;
  await sql`CREATE INDEX IF NOT EXISTS idx_secciones_curso ON secciones(curso_id, orden)`;

  await sql`
    CREATE TABLE IF NOT EXISTS temas (
      id          SERIAL PRIMARY KEY,
      seccion_id  INTEGER REFERENCES secciones(id) ON DELETE CASCADE,
      label       TEXT NOT NULL,
      titulo      TEXT NOT NULL,
      descripcion TEXT NOT NULL,
      pill        TEXT,
      orden       INTEGER NOT NULL DEFAULT 0
    )
  `;
  await sql`CREATE INDEX IF NOT EXISTS idx_temas_seccion ON temas(seccion_id, orden)`;

  await sql`
    CREATE TABLE IF NOT EXISTS documentos (
      id         SERIAL PRIMARY KEY,
      tema_id    INTEGER REFERENCES temas(id) ON DELETE CASCADE,
      nombre     TEXT NOT NULL,
      url        TEXT NOT NULL,
      disponible BOOLEAN NOT NULL DEFAULT true,
      orden      INTEGER NOT NULL DEFAULT 0
    )
  `;
  await sql`CREATE INDEX IF NOT EXISTS idx_docs_tema ON documentos(tema_id, orden)`;

  await sql`
    CREATE TABLE IF NOT EXISTS mensajes (
      id         SERIAL PRIMARY KEY,
      nombre     TEXT NOT NULL,
      email      TEXT NOT NULL CHECK (email LIKE '%@%'),
      asunto     TEXT NOT NULL,
      mensaje    TEXT NOT NULL,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `;
}

export type Proyecto = {
  id: number;
  numero: number;
  titulo: string;
  descripcion: string;
  tech_label: string;
  url_vercel: string | null;
  url_github: string | null;
};

export type Curso = {
  id: number;
  slug: string;
  nombre: string;
  eyebrow: string;
  lead: string;
  icon: string;
  tiene_unidades: boolean;
};

export type Seccion = {
  id: number;
  slug: string;
  numero: string;
  titulo: string;
  subtitulo: string;
  bubble_label: string;
  bubble_title: string;
  num_style: string | null;
  orden: number;
  temas: Tema[];
};

export type Tema = {
  id: number;
  label: string;
  titulo: string;
  descripcion: string;
  pill: string | null;
  documentos: Documento[];
};

export type Documento = {
  id: number;
  nombre: string;
  url: string;
  disponible: boolean;
};

export async function getCurso(slug: string): Promise<{ curso: Curso; secciones: Seccion[] } | null> {
  const { rows: cursoRows } = await sql<Curso>`
    SELECT * FROM cursos WHERE slug = ${slug}
  `;
  if (!cursoRows.length) return null;
  const curso = cursoRows[0];

  // 3 sequential queries to avoid connection pool exhaustion
  const { rows: seccionRows } = await sql`
    SELECT id, slug, numero, titulo, subtitulo, bubble_label, bubble_title, num_style, orden
    FROM secciones WHERE curso_id = ${curso.id} ORDER BY orden`;

  const { rows: temaRows } = await sql`
    SELECT t.id, t.seccion_id, t.label, t.titulo, t.descripcion, t.pill, t.orden
    FROM temas t
    INNER JOIN secciones s ON s.id = t.seccion_id
    WHERE s.curso_id = ${curso.id} ORDER BY t.orden`;

  const { rows: docRows } = await sql`
    SELECT d.id, d.tema_id, d.nombre, d.url, d.disponible, d.orden
    FROM documentos d
    INNER JOIN temas t ON t.id = d.tema_id
    INNER JOIN secciones s ON s.id = t.seccion_id
    WHERE s.curso_id = ${curso.id} ORDER BY d.orden`;

  // Group into nested structure in memory
  const docsPerTema = new Map<number, Documento[]>();
  for (const d of docRows) {
    if (!docsPerTema.has(d.tema_id)) docsPerTema.set(d.tema_id, []);
    docsPerTema.get(d.tema_id)!.push({ id: d.id, nombre: d.nombre, url: d.url, disponible: d.disponible });
  }

  const temasPerSeccion = new Map<number, Tema[]>();
  for (const t of temaRows) {
    if (!temasPerSeccion.has(t.seccion_id)) temasPerSeccion.set(t.seccion_id, []);
    temasPerSeccion.get(t.seccion_id)!.push({
      id: t.id, label: t.label, titulo: t.titulo,
      descripcion: t.descripcion, pill: t.pill,
      documentos: docsPerTema.get(t.id) ?? [],
    });
  }

  const secciones: Seccion[] = seccionRows.map(s => ({
    id: s.id, slug: s.slug, numero: s.numero,
    titulo: s.titulo, subtitulo: s.subtitulo,
    bubble_label: s.bubble_label, bubble_title: s.bubble_title,
    num_style: s.num_style, orden: s.orden,
    temas: temasPerSeccion.get(s.id) ?? [],
  }));

  return { curso, secciones };
}

export async function getProyectos(): Promise<Proyecto[]> {
  const { rows } = await sql<Proyecto>`
    SELECT id, numero, titulo, descripcion, tech_label, url_vercel, url_github
    FROM proyectos WHERE activo = true ORDER BY numero
  `;
  return rows;
}
