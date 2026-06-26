import { NextResponse } from 'next/server';
import { initDB, sql } from '@/lib/db';
import { PROYECTOS, CURSOS } from '@/lib/seed-data';

export async function POST() {
  try {
    await initDB();

    // Clear in dependency order
    await sql`DELETE FROM documentos`;
    await sql`DELETE FROM temas`;
    await sql`DELETE FROM secciones`;
    await sql`DELETE FROM cursos`;
    await sql`DELETE FROM proyectos`;

    // Seed proyectos
    for (const p of PROYECTOS) {
      await sql`
        INSERT INTO proyectos (numero, titulo, descripcion, tech_label, url_vercel, url_github)
        VALUES (${p.numero}, ${p.titulo}, ${p.descripcion}, ${p.tech_label}, ${p.url_vercel}, ${p.url_github})
      `;
    }

    // Seed cursos + secciones + temas + documentos
    for (const c of CURSOS) {
      const { rows } = await sql`
        INSERT INTO cursos (slug, nombre, eyebrow, lead, icon, tiene_unidades, orden)
        VALUES (${c.slug}, ${c.nombre}, ${c.eyebrow}, ${c.lead}, ${c.icon}, ${c.tiene_unidades}, ${c.orden})
        RETURNING id
      `;
      const cursoId = rows[0].id;

      for (const s of c.secciones) {
        const { rows: sRows } = await sql`
          INSERT INTO secciones (curso_id, slug, numero, titulo, subtitulo, bubble_label, bubble_title, num_style, orden)
          VALUES (${cursoId}, ${s.slug}, ${s.numero}, ${s.titulo}, ${s.subtitulo}, ${s.bubble_label}, ${s.bubble_title}, ${s.num_style ?? null}, ${s.orden})
          RETURNING id
        `;
        const seccionId = sRows[0].id;

        for (const t of s.temas) {
          const { rows: tRows } = await sql`
            INSERT INTO temas (seccion_id, label, titulo, descripcion, pill, orden)
            VALUES (${seccionId}, ${t.label}, ${t.titulo}, ${t.descripcion}, ${t.pill ?? null}, ${t.orden})
            RETURNING id
          `;
          const temaId = tRows[0].id;

          for (let i = 0; i < t.docs.length; i++) {
            const d = t.docs[i];
            await sql`
              INSERT INTO documentos (tema_id, nombre, url, disponible, orden)
              VALUES (${temaId}, ${d.nombre}, ${d.url}, ${d.disponible}, ${i})
            `;
          }
        }
      }
    }

    return NextResponse.json({ ok: true, message: 'Base de datos poblada correctamente.' });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
