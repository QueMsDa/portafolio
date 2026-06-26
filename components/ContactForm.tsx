'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ nombre: '', email: '', asunto: '', mensaje: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'err'>('idle');
  const [errMsg, setErrMsg] = useState('');

  function set(k: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm(f => ({ ...f, [k]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/mensajes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Error');
      setStatus('ok');
      setForm({ nombre: '', email: '', asunto: '', mensaje: '' });
    } catch (err) {
      setErrMsg(err instanceof Error ? err.message : 'Error al enviar.');
      setStatus('err');
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="cf-nombre">Nombre</label>
        <input id="cf-nombre" type="text" value={form.nombre} onChange={set('nombre')} required placeholder="Tu nombre" />
      </div>
      <div className="form-group">
        <label htmlFor="cf-email">Email</label>
        <input id="cf-email" type="email" value={form.email} onChange={set('email')} required placeholder="tu@email.com" />
      </div>
      <div className="form-group">
        <label htmlFor="cf-asunto">Asunto</label>
        <select id="cf-asunto" value={form.asunto} onChange={set('asunto')} required>
          <option value="">Seleccionar...</option>
          <option>Proyectos web</option>
          <option>Consultoría ambiental</option>
          <option>Colaboración académica</option>
          <option>Otro</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="cf-mensaje">Mensaje</label>
        <textarea id="cf-mensaje" value={form.mensaje} onChange={set('mensaje')} required placeholder="¿En qué puedo ayudarte?" />
      </div>
      <button type="submit" className="btn-submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
      </button>
      {status === 'ok' && <p className="form-status">¡Mensaje enviado! Me pondré en contacto pronto.</p>}
      {status === 'err' && <p className="form-status form-status--err">{errMsg}</p>}
    </form>
  );
}
