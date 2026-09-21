import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Home, 
  Wrench, 
  FileText, 
  ShieldCheck, 
  ChevronRight, 
  Map, 
  ArrowRight,
  Sparkles,
  Layers,
  HelpCircle,
  PhoneCall
} from 'lucide-react';
import { SITE_INFO, SERVICES_LIST } from '@/data/content';
import { BLOG_POSTS } from '@/data/blog';
import { SchemaJsonLd } from '@/components/SchemaJsonLd';

export const metadata: Metadata = {
  title: 'Mapa del Sitio | Fontaneros Barcelona 24h',
  description: 'Explora el mapa completo del sitio web de Fontaneros Barcelona 24h. Encuentra todas nuestras landings de servicios de fontanería, guías del blog y páginas legales.',
  alternates: {
    canonical: `${SITE_INFO.domain}/mapa-del-sitio`,
  },
  openGraph: {
    title: 'Mapa del Sitio | Fontaneros Barcelona 24h',
    description: 'Guía de navegación completa para explorar todos los servicios de fontanería urgente, desatascos, calderas y reformas en Barcelona.',
    url: `${SITE_INFO.domain}/mapa-del-sitio`,
  },
};

export default function MapaDelSitioPage() {
  const fase1Services = SERVICES_LIST.filter((s) => s.phase === 1);
  const fase2Services = SERVICES_LIST.filter((s) => s.phase !== 1);

  return (
    <>
      <SchemaJsonLd
        type="Breadcrumb"
        data={{
          breadcrumbs: [
            { name: 'Inicio', item: SITE_INFO.domain },
            { name: 'Mapa del Sitio', item: `${SITE_INFO.domain}/mapa-del-sitio` },
          ],
        }}
      />

      {/* Breadcrumb UI */}
      <div className="bg-slate-800 text-slate-300 text-xs py-2.5 px-4 border-b border-slate-700">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <Link href="/" className="hover:text-white transition">
            Inicio
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
          <span className="text-white font-semibold">Mapa del Sitio</span>
        </div>
      </div>

      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-12 lg:py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-4">
            <Map className="w-4 h-4 text-blue-400" />
            <span>Navegación Estructurada UX</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            Mapa del Sitio Web
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Accede a cualquier sección de nuestro portal de forma rápida e intuitiva. Aquí encontrarás el catálogo completo de nuestros servicios de fontanería en Barcelona, artículos técnicos y páginas de transparencia.
          </p>
        </div>
      </section>

      {/* Main Sitemap Grid */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Section 1: Páginas Principales */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                <Home className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900">Páginas Principales</h2>
                <p className="text-slate-500 text-xs">Acceso directo a la página de inicio, blog e información de urgencias.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link
                href="/"
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-500 hover:shadow-md transition group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 group-hover:text-blue-600 transition">
                    Inicio (Fontanero en Barcelona)
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-blue-600 transition" />
                </div>
                <p className="text-xs text-slate-500 mt-1">Servicios 24h, tarifas y plantilla propia.</p>
              </Link>

              <Link
                href="/blog"
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-500 hover:shadow-md transition group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 group-hover:text-blue-600 transition">
                    Blog & Guías de Fontanería
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-blue-600 transition" />
                </div>
                <p className="text-xs text-slate-500 mt-1">Consejos, mantenimiento y normativas.</p>
              </Link>

              <a
                href={`tel:${SITE_INFO.phoneRaw}`}
                className="p-4 rounded-2xl bg-red-50 border border-red-200 hover:border-red-400 hover:shadow-md transition group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-red-900 flex items-center gap-1.5">
                    <PhoneCall className="w-4 h-4 text-red-600" /> Atencion 24h Urgencias
                  </span>
                  <ArrowRight className="w-4 h-4 text-red-500 group-hover:translate-x-1 transition" />
                </div>
                <p className="text-xs text-red-700 mt-1">Llámanos directamente al {SITE_INFO.phoneDisplay}</p>
              </a>
            </div>
          </div>

          {/* Section 2: Servicios de Alta Prioridad */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900">Servicios Principales en Barcelona</h2>
                <p className="text-slate-500 text-xs">Landings de alta especialización y reformas express.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {fase1Services.map((service) => (
                <Link
                  key={service.id}
                  href={`/${service.slug}`}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-500 hover:shadow-md transition group space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 group-hover:text-emerald-600 transition text-base">
                      {service.title}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-emerald-600 transition" />
                  </div>
                  <p className="text-xs text-slate-600 line-clamp-2">
                    {service.shortDescription}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Section 3: Catálogo Completo de Servicios */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900">Servicios Especializados y Mantenimiento</h2>
                <p className="text-slate-500 text-xs">Desatascos, comunidades, calderas e instalaciones de agua.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {fase2Services.map((service) => (
                <Link
                  key={service.id}
                  href={`/${service.slug}`}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-purple-500 hover:shadow-md transition group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 group-hover:text-purple-600 transition text-sm">
                      {service.title}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-purple-600 transition" />
                  </div>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                    {service.shortDescription}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Section 4: Artículos del Blog */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900">Artículos y Guías del Blog</h2>
                <p className="text-slate-500 text-xs">Contenido informativo y respuestas a problemas comunes de fontanería.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {BLOG_POSTS.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-500 hover:shadow-md transition group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 group-hover:text-amber-600 transition text-sm">
                      {post.title}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-amber-600 transition" />
                  </div>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {post.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Section 5: Transparencia & Legalidad */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900">Información Legal y Garantías</h2>
                <p className="text-slate-500 text-xs">Cumplimiento RGPD, condiciones de servicio y políticas de privacidad.</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm font-medium">
              <Link
                href="/aviso-legal"
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-700 text-center transition"
              >
                Aviso Legal
              </Link>
              <Link
                href="/politica-de-privacidad"
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-700 text-center transition"
              >
                Política de Privacidad
              </Link>
              <Link
                href="/politica-de-cookies"
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-700 text-center transition"
              >
                Política de Cookies
              </Link>
              <Link
                href="/terminos-y-condiciones"
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-700 text-center transition"
              >
                Términos y Condiciones
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
