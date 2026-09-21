import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_INFO } from '@/data/content';
import { Shield, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Aviso Legal',
  description: 'Información legal, condiciones de uso y aviso regulatorio de Fontaneros Barcelona 24h.',
  alternates: {
    canonical: `${SITE_INFO.domain}/aviso-legal`,
  },
};

export default function AvisoLegalPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link href="/" className="hover:text-blue-600 transition">
            Inicio
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-800 font-semibold">Aviso Legal</span>
        </nav>

        <header className="mb-10 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex items-center gap-3 text-blue-600 mb-2">
            <Shield className="w-6 h-6" />
            <span className="text-xs font-bold uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
              Información Regulatoria LSSI-CE
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Aviso Legal
          </h1>
          <p className="text-sm text-slate-600 mt-2">
            Última actualización: Septiembre de 2026
          </p>
        </header>

        <article className="bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-slate-200 space-y-8 text-slate-700 text-sm leading-relaxed">
          {/* Sección 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
              1. Datos Identificativos del Titular
            </h2>
            <p>
              En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), se facilitan los siguientes datos identificativos del titular del sitio web:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-800 font-medium">
              <li><strong>Denominación comercial:</strong> {SITE_INFO.name}</li>
              <li><strong>Razón Social:</strong> {SITE_INFO.legalName}</li>
              <li><strong>Dominio oficial:</strong> {SITE_INFO.domain}</li>
              <li><strong>Teléfono de contacto:</strong> {SITE_INFO.phoneDisplay}</li>
              <li><strong>Correo electrónico de contacto:</strong> {SITE_INFO.email}</li>
              <li><strong>Registro de Empresa Instaladora / Mantenedora de Gas y Agua:</strong> {SITE_INFO.gasInstallerReg}</li>
              <li><strong>Ámbito de actuación:</strong> Barcelona y Área Metropolitana (AMB)</li>
            </ul>
          </section>

          {/* Sección 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
              2. Objeto y Ámbito de Aplicación
            </h2>
            <p>
              El presente Aviso Legal regula el acceso, navegación y uso del sitio web <strong className="text-slate-900">{SITE_INFO.domain}</strong>, así como las responsabilidades derivadas de la utilización de sus contenidos (textos, gráficos, datos, imágenes, software, etc.).
            </p>
            <p>
              El acceso o la mera utilización del sitio web por parte del usuario implica su adhesión plena y sin reservas a todas y cada una de las condiciones publicadas en este Aviso Legal.
            </p>
          </section>

          {/* Sección 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
              3. Condiciones de Uso y Propiedad Intelectual
            </h2>
            <p>
              El usuario se compromete a hacer un uso adecuado, diligente y lícito del sitio web y de sus contenidos, de conformidad con la legislación aplicable, el presente Aviso Legal, la moral y el orden público.
            </p>
            <p>
              Todos los contenidos del sitio web, incluyendo marcas, nombres comerciales, logotipos, estructuras de diseño, código fuente y contenidos redactados son propiedad exclusiva de {SITE_INFO.legalName} o de sus licenciantes, quedando protegidos por las leyes de propiedad intelectual e industrial.
            </p>
            <p>
              Queda expresamente prohibida la reproducción, distribución, comunicación pública o transformación total o parcial de los contenidos sin la autorización previa y por escrito del titular.
            </p>
          </section>

          {/* Sección 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
              4. Exclusión de Responsabilidad
            </h2>
            <p>
              {SITE_INFO.legalName} no se hace responsable de:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>La continuidad o disponibilidad ininterrumpida de los servicios web.</li>
              <li>La presencia de virus o componentes dañinos introducidos por terceros ajenos a la plataforma.</li>
              <li>Los daños o perjuicios ocasionados por un uso indebido de los datos facilitados por parte del usuario.</li>
            </ul>
          </section>

          {/* Sección 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
              5. Legislación Aplicable y Jurisdicción
            </h2>
            <p>
              Las relaciones establecidas entre {SITE_INFO.name} y el usuario se regirán por la normativa española vigente. Para la resolución de cualquier controversia o litigio derivado del uso de esta web, las partes se someten a los Juzgados y Tribunales de la ciudad de Barcelona.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
