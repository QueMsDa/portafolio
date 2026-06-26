const { Client } = require('pg');
const fs = require('fs');

const env = fs.readFileSync('.env.local', 'utf8')
  .split('\n')
  .reduce((acc, line) => {
    const m = line.match(/^([^=]+)="?([^"]*)"?$/);
    if (m) acc[m[1]] = m[2];
    return acc;
  }, {});

const client = new Client({ connectionString: env['POSTGRES_URL_NON_POOLING'] + '?sslmode=require' });

client.connect().then(async () => {
  // Check if proyecto 7 already exists
  const { rows } = await client.query('SELECT id FROM proyectos WHERE numero = 7');

  if (rows.length > 0) {
    await client.query(`
      UPDATE proyectos SET
        titulo      = 'Finanzas Personal — App Android + Cloud',
        descripcion = 'App Android nativa (Kotlin + Jetpack Compose) para análisis financiero personal en tiempo real. Registra gastos manualmente o importándolos desde capturas de pantalla de Yape mediante OCR (Google ML Kit). Base de datos cloud con Supabase PostgreSQL y sincronización automática con Google Sheets y Excel. Sin IA para el análisis, solo datos reales.',
        tech_label  = 'Proyecto 7 · Android · Kotlin · Supabase · ML Kit',
        url_vercel  = NULL,
        url_github  = 'https://github.com/QueMsDa/finanzas-personales'
      WHERE numero = 7
    `);
    console.log('Proyecto 7 actualizado.');
  } else {
    await client.query(`
      INSERT INTO proyectos (numero, titulo, descripcion, tech_label, url_vercel, url_github)
      VALUES (
        7,
        'Finanzas Personal — App Android + Cloud',
        'App Android nativa (Kotlin + Jetpack Compose) para análisis financiero personal en tiempo real. Registra gastos manualmente o importándolos desde capturas de pantalla de Yape mediante OCR (Google ML Kit). Base de datos cloud con Supabase PostgreSQL y sincronización automática con Google Sheets y Excel. Sin IA para el análisis, solo datos reales.',
        'Proyecto 7 · Android · Kotlin · Supabase · ML Kit',
        NULL,
        'https://github.com/QueMsDa/finanzas-personales'
      )
    `);
    console.log('Proyecto 7 insertado.');
  }

  await client.end();
}).catch(e => { console.error(e.message); process.exit(1); });
