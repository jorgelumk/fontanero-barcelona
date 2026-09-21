import React from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, ShieldCheck, MapPin, Map } from 'lucide-react';
import { SITE_INFO, SERVICES_LIST, AMB_ZONES } from '@/data/content';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-12 pb-24 sm:pb-12 border-t border-slate-900 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-slate-900">
          {/* Column 1: Company Info & Trust */}
          <div className="space-y-4">
            <span className="text-xl font-black tracking-tight text-white block">
              <span className="text-blue-500">FONTANEROS</span> BARCELONA 24h
            </span>
            <p className="text-xs text-slate-400 leading-relaxed">
              Empresa líder en servicios de fontanería y reformas en Barcelona y Área Metropolitana. Plantilla propia de más de 10 fontaneros cualificados a tu servicio.
            </p>
            <div className="space-y-2 text-xs pt-2">
              <div className="flex items-center gap-2 text-slate-300 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Seguro de RC & Garantía por Escrito</span>
              </div>
              <div className="flex items-center gap-2 text-blue-400 font-semibold pt-1">
                <Map className="w-4 h-4 shrink-0" />
                <Link href="/mapa-del-sitio" className="hover:underline">
                  Ver Mapa del Sitio (Navegación UX)
                </Link>
              </div>
            </div>
          </div>

          {/* Column 2: Landings de Servicios (Silo SEO) */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 uppercase tracking-wider text-xs">
              Servicios de Fontanería
            </h3>
            <ul className="space-y-2 text-xs mb-6">
              {SERVICES_LIST.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/${service.slug}`}
                    className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
                  >
                    <span>›</span>
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-white font-bold text-base mb-3 uppercase tracking-wider text-xs">
              Blog y Guías SEO
            </h3>
            <ul className="space-y-1.5 text-xs">
              <li>
                <Link href="/blog" className="text-blue-400 hover:underline font-semibold">
                  › Ver todos los artículos del Blog
                </Link>
              </li>
              <li>
                <Link href="/blog/el-agua-del-grifo-de-barcelona-es-potable" className="hover:text-blue-400 transition">
                  › ¿Agua del grifo potable en BCN?
                </Link>
              </li>
              <li>
                <Link href="/blog/cuanto-cuesta-cambiar-banera-por-plato-de-ducha" className="hover:text-blue-400 transition">
                  › Precio cambiar bañera por ducha
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Cobertura AMB */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 uppercase tracking-wider text-xs flex items-center gap-1">
              <MapPin className="w-4 h-4 text-blue-500" /> Cobertura Barcelona y AMB
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-400">
              {AMB_ZONES.map((zone, idx) => (
                <li key={idx} className="flex items-center gap-1">
                  <span className="text-blue-500">•</span> {zone}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contacto Urgente */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base uppercase tracking-wider text-xs">
              Atención Telefónica 24H
            </h3>
            <p className="text-xs text-slate-400">
              Línea directa de guardia atendida por técnicos las 24 horas del día.
            </p>
            <a
              href={`tel:${SITE_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-black text-base shadow-lg transition w-full justify-center"
            >
              <Phone className="w-5 h-5 animate-pulse" />
              <span>{SITE_INFO.phoneDisplay}</span>
            </a>
            <a
              href={SITE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-950 border border-emerald-700 text-emerald-400 font-bold text-xs transition w-full justify-center"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Contactar por WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <p>© {new Date().getFullYear()} {SITE_INFO.legalName}. Todos los derechos reservados.</p>
          <div className="flex flex-wrap justify-center sm:justify-end gap-3 text-xs">
            <Link href="/mapa-del-sitio" className="hover:text-blue-400 transition-colors font-semibold text-slate-300">
              Mapa del Sitio
            </Link>
            <span>·</span>
            <Link href="/aviso-legal" className="hover:text-blue-400 transition-colors">
              Aviso Legal
            </Link>
            <span>·</span>
            <Link href="/politica-de-privacidad" className="hover:text-blue-400 transition-colors">
              Política de Privacidad
            </Link>
            <span>·</span>
            <Link href="/politica-de-cookies" className="hover:text-blue-400 transition-colors">
              Política de Cookies
            </Link>
            <span>·</span>
            <Link href="/terminos-y-condiciones" className="hover:text-blue-400 transition-colors">
              Términos y Condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
