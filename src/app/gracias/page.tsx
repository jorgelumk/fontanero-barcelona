import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { CheckCircle2, Phone, MessageSquare, ArrowLeft, Clock } from 'lucide-react';
import { SITE_INFO } from '@/data/content';

export const metadata: Metadata = {
  title: 'Solicitud Recibida con Éxito | Fontaneros Barcelona 24h',
  description: 'Hemos recibido tu solicitud de presupuesto o asistencia. Te contactaremos en menos de 15 minutos.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function GraciasPage() {
  return (
    <div className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
          <CheckCircle2 className="w-12 h-12" />
        </div>

        <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          Solicitud Registrada Correctamente
        </span>

        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          ¡Gracias por contactar con Fontaneros Barcelona 24h!
        </h1>

        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Un técnico de nuestra plantilla se pondrá en contacto contigo en el teléfono facilitado en <strong>menos de 15 minutos</strong> para coordinar la asistencia o entregarte tu presupuesto personalizado sin compromiso.
        </p>

        {/* Emergency Alert Callout */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md space-y-4 max-w-xl mx-auto text-left">
          <div className="flex items-center gap-2 text-red-600 font-bold text-sm uppercase">
            <Clock className="w-4 h-4 animate-pulse" />
            <span>¿Es una urgencia grave o inundación en curso?</span>
          </div>
          <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
            Si la avería requiere atención inmediata, te recomendamos llamar directamente a nuestra línea directa de guardia para asignar la unidad móvil más cercana:
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <a
              href={`tel:${SITE_INFO.phoneRaw}`}
              className="flex-1 py-3 px-4 bg-red-600 hover:bg-red-700 text-white font-black rounded-xl text-center shadow transition flex items-center justify-center gap-2 text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Llamar al {SITE_INFO.phoneDisplay}</span>
            </a>
            <a
              href={SITE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-center shadow transition flex items-center justify-center gap-2 text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Avisar por WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a la página principal</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
