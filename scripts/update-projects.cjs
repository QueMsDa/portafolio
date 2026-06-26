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
  await client.query(`
    UPDATE proyectos SET
      url_vercel = 'https://calculadora-promedio.vercel.app',
      url_github = 'https://github.com/QueMsDa/calculadora-promedio'
    WHERE numero = 1
  `);
  await client.query(`
    UPDATE proyectos SET
      url_vercel = 'https://convertidor-temperatura-chi.vercel.app',
      url_github = 'https://github.com/QueMsDa/convertidor-temperatura'
    WHERE numero = 2
  `);
  console.log('Proyectos 1 y 2 actualizados.');
  await client.end();
}).catch(e => { console.error(e.message); process.exit(1); });
