'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Send, Lock, AlertCircle } from 'lucide-react';
import { SERVICES_LIST } from '@/data/content';
import { trackFormSubmit } from '@/lib/gtm';

interface ContactFormProps {
  defaultService?: string;
  className?: string;
}

export function ContactForm({ defaultService = '', className = '' }: ContactFormProps) {
  const router = useRouter();
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [servicio, setServicio] = useState(defaultService);
  const [mensaje, setMensaje] = useState('');
  const [rgpd, setRgpd] = useState(false);

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!rgpd) {
      setErrorMsg('Debes aceptar los términos y condiciones y la política de privacidad.');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, telefono, servicio, mensaje }),
      });

      if (res.ok) {
        // Track Form Submission for GTM & Google Ads Enhanced Conversions
        trackFormSubmit({
          name: nombre,
          phone: telefono,
          service: servicio,
        });

        // Redirect to /gracias page as specified in section 6.1 of briefing
        router.push('/gracias');
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data.error || 'Hubo un problema al enviar la solicitud. Por favor, llámanos directamente.');
      }
    } catch {
      setErrorMsg('Error de red. Te recomendamos llamar directamente por teléfono.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="formulario-contacto"
      className={`bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-8 text-slate-800 ${className}`}
    >
      <div className="mb-5 text-center sm:text-left">
        <span className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full mb-2 uppercase tracking-wider">
          Presupuesto Gratuito Sin Compromiso
        </span>
        <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
          Solicitar Asistencia o Presupuesto
        </h3>
        <p className="text-sm text-slate-600 mt-1">
          Te contactamos en menos de 15 minutos. Respuesta garantizada.
        </p>
      </div>

      {errorMsg && (
        <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2">
          <AlertCircle className="w-5 h-5 shrink-0 text-red-600" />
          <span>{errorMsg}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Campo 1: Nombre */}
        <div>
          <label htmlFor="nombre" className="block text-xs font-bold text-slate-700 uppercase mb-1">
            Nombre completo <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="nombre"
            required
            placeholder="Ej. Carlos García"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-sm font-medium outline-none transition"
          />
        </div>

        {/* Campo 2: Teléfono */}
        <div>
          <label htmlFor="telefono" className="block text-xs font-bold text-slate-700 uppercase mb-1">
            Teléfono de contacto <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="telefono"
            required
            placeholder="Ej. 657 144 186"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-sm font-medium outline-none transition"
          />
        </div>

        {/* Campo 3: Servicio (Desplegable) */}
        <div>
          <label htmlFor="servicio" className="block text-xs font-bold text-slate-700 uppercase mb-1">
            Servicio requerido <span className="text-red-500">*</span>
          </label>
          <select
            id="servicio"
            required
            value={servicio}
            onChange={(e) => setServicio(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-sm font-medium outline-none transition bg-white"
          >
            <option value="">Selecciona un servicio...</option>
            <option value="Urgencia 24h / Fuga / Inundación">Urgencia 24h / Fuga de Agua</option>
            {SERVICES_LIST.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Otros trabajos de fontanería">Otros trabajos de fontanería</option>
          </select>
        </div>

        {/* Campo 4: Mensaje */}
        <div>
          <label htmlFor="mensaje" className="block text-xs font-bold text-slate-700 uppercase mb-1">
            Detalle del problema <span className="text-slate-400 font-normal">(Opcional)</span>
          </label>
          <textarea
            id="mensaje"
            rows={2}
            placeholder="Describe brevemente lo que necesitas..."
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-sm font-medium outline-none transition"
          />
        </div>

        {/* RGPD Consent & Terms */}
        <div className="flex items-start gap-2.5 pt-1">
          <input
            type="checkbox"
            id="rgpd"
            required
            checked={rgpd}
            onChange={(e) => setRgpd(e.target.checked)}
            className="mt-1 w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500 cursor-pointer"
          />
          <label htmlFor="rgpd" className="text-xs text-slate-600 leading-tight cursor-pointer">
            Acepto los{' '}
            <Link
              href="/terminos-y-condiciones"
              target="_blank"
              className="font-semibold text-blue-600 hover:underline"
            >
              términos y condiciones
            </Link>{' '}
            y la{' '}
            <Link
              href="/politica-de-privacidad"
              target="_blank"
              className="font-semibold text-blue-600 hover:underline"
            >
              política de privacidad
            </Link>{' '}
            para el tratamiento de mis datos y envío del presupuesto.
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 px-6 rounded-xl font-black text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 text-base disabled:opacity-50 cursor-pointer"
        >
          {loading ? (
            <span>Enviando...</span>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>SOLICITAR PRESUPUESTO AHORA</span>
            </>
          )}
        </button>

        <div className="pt-2 text-center flex items-center justify-center gap-1.5 text-xs text-slate-500">
          <Lock className="w-3.5 h-3.5 text-emerald-600" />
          <span>Datos 100% confidenciales. Sin spam.</span>
        </div>
      </form>
    </div>
  );
}
