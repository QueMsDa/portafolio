import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    const { nombre, email, asunto, mensaje } = await req.json();

    if (!nombre || !email || !asunto || !mensaje) {
      return NextResponse.json({ error: 'Todos los campos son obligatorios.' }, { status: 400 });
    }
    if (!email.includes('@')) {
      return NextResponse.json({ error: 'Email inválido.' }, { status: 400 });
    }

    await sql`
      INSERT INTO mensajes (nombre, email, asunto, mensaje)
      VALUES (${nombre}, ${email}, ${asunto}, ${mensaje})
    `;

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Error interno del servidor.' }, { status: 500 });
  }
}
