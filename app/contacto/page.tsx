import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = { title: 'Contacto' };

export default function Contacto() {
  return (
    <>
      <header className="page-hero">
        <p className="page-hero__eyebrow">Karsten García Palomino</p>
        <h1 className="page-hero__title">Ponerse en contacto</h1>
        <Image
          src="/assets/yo sin fondo.png"
          alt="Karsten García Palomino"
          width={100} height={100}
          style={{ margin: '1.25rem auto 0', borderRadius: '50%', border: '2px solid var(--border-em)' }}
        />
      </header>

      <div className="contact-wrap">
        {/* Formulario */}
        <div>
          <div className="section-head">
            <p className="section-head__label">Formulario</p>
            <h2 className="section-head__title" style={{ fontSize: '1.4rem' }}>Enviar un mensaje</h2>
          </div>
          <ContactForm />
        </div>

        {/* Info */}
        <div>
          <div className="section-head">
            <p className="section-head__label">Redes y contacto</p>
            <h2 className="section-head__title" style={{ fontSize: '1.4rem' }}>¿En qué puedo ayudarte?</h2>
          </div>
          <p style={{ color: 'var(--quill)', marginBottom: '1.5rem', fontSize: '.95rem' }}>
            Estoy disponible para colaboraciones en proyectos de ingeniería ambiental, desarrollo web
            o cualquier iniciativa que combine tecnología y sostenibilidad.
          </p>
          <ul className="contact-links-list">
            <li>
              <a href="https://github.com/QueMsDa" target="_blank" rel="noopener noreferrer">
                ⌥ GitHub — QueMsDa
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/karsten-guillermo2000" target="_blank" rel="noopener noreferrer">
                ◈ LinkedIn — karsten-guillermo2000
              </a>
            </li>
            <li>
              <a href="https://www.twitch.tv/karstengp" target="_blank" rel="noopener noreferrer">
                ▶ Twitch — karstengp
              </a>
            </li>
            <li>
              <a href="mailto:karstenpalomino@gmail.com">
                ✉ karstenpalomino@gmail.com
              </a>
            </li>
            <li>
              <Link href="/cv">◎ Curriculum Vitae</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
