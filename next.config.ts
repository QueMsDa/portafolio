import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/index.html',                          destination: '/',                     permanent: true },
      { source: '/about.html',                          destination: '/sobre-mi',             permanent: true },
      { source: '/cv.html',                             destination: '/cv',                   permanent: true },
      { source: '/contacto.html',                       destination: '/contacto',             permanent: true },
      { source: '/enlaces-proyectos.html',              destination: '/proyectos',            permanent: true },
      { source: '/hidrologia.html',                     destination: '/hidrologia',           permanent: true },
      { source: '/tecnologias-limpias.html',            destination: '/tecnologias-limpias',  permanent: true },
      { source: '/monitoreo-ambiental.html',            destination: '/monitoreo-ambiental',  permanent: true },
      { source: '/riesgos-ambientales.html',            destination: '/riesgos-ambientales',  permanent: true },
      { source: '/topicos-de-produccion-mas-limpia.html', destination: '/topicos-pml',        permanent: true },
    ];
  },
};

export default nextConfig;
