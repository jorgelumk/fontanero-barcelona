import React from 'react';
import { Users, Clock, ShieldCheck, Award } from 'lucide-react';
import { SITE_INFO } from '@/data/content';

export function TrustBadges() {
  return (
    <section className="py-12 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            ¿Por qué elegir Fontaneros Barcelona 24h?
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            Garantizamos respuesta rápida, trato directo sin intermediarios abusivos y máxima garantía técnica en cada intervención.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Badge 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">
              {SITE_INFO.teamSize}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Equipo técnico propio desplegado por Barcelona y municipios del AMB para asegurar que siempre haya un profesional cerca de ti.
            </p>
          </div>

          {/* Badge 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">
              Llegada en 30 Minutos
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Unidades móviles de urgencia disponibles las 24 horas del día, 365 días al año. Atendemos tu llamada sin demoras.
            </p>
          </div>

          {/* Badge 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition">
            <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">
              Garantía por Escrito
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Firmamos en el parte de trabajo la garantía oficial de cada reparación e instalación realizada para tu total tranquilidad.
            </p>
          </div>

          {/* Badge 4 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition">
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-4">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">
              Técnicos Cualificados
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Seguro de Responsabilidad Civil e Instaladores Autorizados de Gas para trabajos de calefacción y climatización.
            </p>
          </div>
        </div>

        {/* Team Photo & Highlight Banner */}
        <div className="mt-10 bg-slate-900 text-white rounded-3xl overflow-hidden shadow-2xl border border-slate-800 grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 relative h-64 sm:h-80 lg:h-full min-h-[280px]">
            <img
              src="/images/equipo_fontaneros_barcelona.jpg"
              alt="Equipo de fontaneros en plantilla en Barcelona"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-900/90" />
            <div className="absolute bottom-4 left-4 bg-blue-600/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-lg">
              Equipo Propio en Barcelona & AMB
            </div>
          </div>
          <div className="lg:col-span-6 p-6 sm:p-10 space-y-4">
            <span className="text-xs uppercase font-bold text-blue-400 tracking-wider">
              Compromiso de Calidad Total
            </span>
            <h4 className="text-2xl sm:text-3xl font-black text-white leading-tight">
              Más de 10 fontaneros cualificados a tu servicio
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              No somos una plataforma de intermediación ni subcontratamos a desconocidos. Contamos con furgonetas taller equipadas desplegadas por Barcelona (Eixample, Gràcia, Les Corts, Sant Martí, Sants) y los principales municipios del Área Metropolitana.
            </p>
            <div className="pt-2">
              <a
                href={`tel:${SITE_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-black rounded-xl text-base shadow-lg transition"
              >
                <span>LLAMAR AHORA: {SITE_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
