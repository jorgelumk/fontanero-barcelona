import React from 'react';
import { MapPin, CheckCircle2 } from 'lucide-react';
import { AMB_ZONES, SITE_INFO, ZONE_FAQS } from '@/data/content';
import { FAQSection } from './FAQSection';

export function CoverageMap() {
  return (
    <>
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

            <div className="flex-1 space-y-4">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-blue-400" /> Cobertura Inmediata AMB
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Fontaneros de Urgencia en Barcelona Ciudad y Área Metropolitana
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Disponemos de unidades móviles con fontaneros en plantilla estratégicamente repartidos para responder a llamadas de emergencia en menos de 30 minutos en todas las siguientes zonas:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {AMB_ZONES.map((zone, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{zone}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <a
                  href={`tel:${SITE_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-black rounded-xl shadow-lg transition text-sm"
                >
                  <span>CONSULTAR COBERTURA EN TU BARRIO ({SITE_INFO.phoneDisplay})</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zone Coverage FAQs */}
      <FAQSection
        faqs={ZONE_FAQS}
        title="Preguntas Frecuentes sobre Cobertura y Desplazamientos en Barcelona y AMB"
        subtitle="Resolvemos tus dudas sobre tiempos de llegada, zonas atendidas y tarifas por municipio."
      />
    </>
  );
}
