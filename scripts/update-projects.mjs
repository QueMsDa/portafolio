import { config } from 'dotenv';
import { sql } from '@vercel/postgres';

config({ path: '.env.local' });

await sql`
  UPDATE proyectos SET
    url_vercel = 'https://calculadora-promedio.vercel.app',
    url_github = 'https://github.com/QueMsDa/calculadora-promedio'
  WHERE numero = 1
`;

await sql`
  UPDATE proyectos SET
    url_vercel = 'https://convertidor-temperatura-chi.vercel.app',
    url_github = 'https://github.com/QueMsDa/convertidor-temperatura'
  WHERE numero = 2
`;

console.log('✅ Proyectos 1 y 2 actualizados en la base de datos.');
process.exit(0);
