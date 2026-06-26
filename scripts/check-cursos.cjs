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
  const { rows } = await client.query('SELECT slug, nombre FROM cursos ORDER BY orden');
  console.log('CURSOS EN DB:');
  rows.forEach(r => console.log(' -', r.slug, ':', r.nombre));
  if (rows.length === 0) console.log('  (ninguno)');
  await client.end();
}).catch(e => { console.error(e.message); process.exit(1); });
