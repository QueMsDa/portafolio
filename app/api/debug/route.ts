import { NextRequest, NextResponse } from 'next/server';
import { getCurso } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get('slug') ?? 'hidrologia';
  try {
    const data = await getCurso(slug);
    if (!data) return NextResponse.json({ ok: false, error: 'not found' }, { status: 404 });
    return NextResponse.json({
      ok: true,
      curso: data.curso.nombre,
      secciones: data.secciones.length,
      temas: data.secciones.reduce((n, s) => n + s.temas.length, 0),
      docs: data.secciones.reduce((n, s) => n + s.temas.reduce((m, t) => m + t.documentos.length, 0), 0),
    });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    const stack = err instanceof Error ? err.stack : '';
    return NextResponse.json({ ok: false, error: msg, stack }, { status: 500 });
  }
}
