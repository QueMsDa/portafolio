'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const LINKS = [
  { href: '/', label: 'Inicio' },
  { href: '/sobre-mi', label: 'Sobre mí' },
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/cv', label: 'CV' },
  { href: '/contacto', label: 'Contacto' },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-dark-mode');
    if (saved === 'true') { document.documentElement.classList.add('dark'); setDark(true); }
  }, []);

  function toggleDark() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('portfolio-dark-mode', String(next));
  }

  return (
    <nav className="nav">
      <div className="nav__inner">
        <Link href="/" className="nav__brand">Karsten G. P.</Link>
        <ul className={`nav__links${open ? ' open' : ''}`}>
          {LINKS.map(l => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={pathname === l.href ? 'active' : ''}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav__controls">
          <button className="nav__btn" onClick={toggleDark} aria-label="Cambiar tema">
            {dark ? '☀' : '◑'}
          </button>
          <button
            className="nav__btn nav__hamburger"
            onClick={() => setOpen(o => !o)}
            aria-label="Menú"
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </nav>
  );
}
