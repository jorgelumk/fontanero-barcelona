import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_INFO } from '@/data/content';
import { Cookie, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description: 'Información sobre el uso de cookies y tecnologías de almacenamiento en Fontaneros Barcelona 24h.',
  alternates: {
    canonical: `${SITE_INFO.domain}/politica-de-cookies`,
  },
};

export default function PoliticaCookiesPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link href="/" className="hover:text-blue-600 transition">
            Inicio
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-800 font-semibold">Política de Cookies</span>
        </nav>

        <header className="mb-10 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex items-center gap-3 text-amber-600 mb-2">
            <Cookie className="w-6 h-6" />
            <span className="text-xs font-bold uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full">
              Uso de Cookies y Almacenamiento Local
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Política de Cookies
          </h1>
          <p className="text-sm text-slate-600 mt-2">
            Última actualización: Septiembre de 2026
          </p>
        </header>

        <article className="bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-slate-200 space-y-8 text-slate-700 text-sm leading-relaxed">
          <p>
            Esta web utiliza cookies y/o tecnologías similares que almacenan y recuperan información cuando navegas. En general, estas tecnologías pueden servir para finalidades muy diversas, como por ejemplo, reconocerte como usuario, obtener información sobre tus hábitos de navegación o personalizar la forma en que se muestra el contenido.
          </p>

          {/* Sección 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
              1. ¿Qué es una Cookie?
            </h2>
            <p>
              Una cookie es un pequeño archivo de texto que se almacena en su navegador cuando visita casi cualquier página web. Su utilidad es que la web sea capaz de recordar su visita cuando vuelva a navegar por esa página.
            </p>
          </section>

          {/* Sección 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
              2. Tipos de Cookies Utilizadas en este Sitio Web
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-slate-900">a) Cookies Técnicas y Estrictamente Necesarias</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Son aquellas que permiten al usuario la navegación a través de una página web y la utilización de las diferentes opciones o servicios que en ella existan (como el control del tráfico y la comunicación de datos o la gestión del envío de formularios).
                </p>
              </div>

              <div>
                <h3 className="font-bold text-slate-900">b) Cookies de Análisis y Rendimiento</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Son aquellas que nos permiten cuantificar el número de usuarios y realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio ofertado para mejorar la experiencia de navegación.
                </p>
              </div>
            </div>
          </section>

          {/* Sección 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
              3. Gestión y Desactivación de Cookies
            </h2>
            <p>
              El usuario puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador o dispositivo móvil:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 font-medium text-slate-800">
              <li><strong>Google Chrome:</strong> Configuración &gt; Privacidad y seguridad &gt; Cookies y otros datos de sitios.</li>
              <li><strong>Mozilla Firefox:</strong> Opciones &gt; Privacidad y seguridad &gt; Cookies y datos del sitio.</li>
              <li><strong>Safari:</strong> Preferencias &gt; Privacidad.</li>
              <li><strong>Microsoft Edge:</strong> Configuración &gt; Permisos del sitio &gt; Cookies y datos almacenados.</li>
            </ul>
          </section>

          {/* Sección 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
              4. Contacto
            </h2>
            <p>
              Si tiene cualquier duda sobre esta política de cookies, puede contactar con nosotros en <a href={`mailto:${SITE_INFO.email}`} className="text-blue-600 font-semibold underline">{SITE_INFO.email}</a>.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
