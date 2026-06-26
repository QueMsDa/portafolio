import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: { default: 'Karsten G. P. — Ing. Ambiental', template: '%s · Karsten G. P.' },
  description: 'Portafolio de Karsten García Palomino, estudiante de Ingeniería Ambiental en la UAC. Proyectos web, GIS, hidrología y más.',
  openGraph: {
    siteName: 'Karsten G. P.',
    locale: 'es_PE',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <Nav />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
