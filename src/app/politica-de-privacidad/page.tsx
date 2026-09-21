import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_INFO } from '@/data/content';
import { Lock, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Información sobre el tratamiento de datos personales y derechos RGPD en Fontaneros Barcelona 24h.',
  alternates: {
    canonical: `${SITE_INFO.domain}/politica-de-privacidad`,
  },
};

export default function PoliticaPrivacidadPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link href="/" className="hover:text-blue-600 transition">
            Inicio
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-800 font-semibold">Política de Privacidad</span>
        </nav>

        <header className="mb-10 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex items-center gap-3 text-emerald-600 mb-2">
            <Lock className="w-6 h-6" />
            <span className="text-xs font-bold uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full">
              Protección de Datos RGPD & LOPDGDD
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Política de Privacidad
          </h1>
          <p className="text-sm text-slate-600 mt-2">
            Última actualización: Septiembre de 2026
          </p>
        </header>

        <article className="bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-slate-200 space-y-8 text-slate-700 text-sm leading-relaxed">
          <p className="font-medium text-slate-800">
            En {SITE_INFO.name} nos tomamos muy en serio la privacidad y protección de los datos personales de nuestros usuarios y clientes. A continuación, detallamos cómo recabamos, utilizamos y protegemos la información personal facilitada a través de nuestros formularios y líneas de contacto.
          </p>

          {/* Sección 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
              1. Responsable del Tratamiento de Datos
            </h2>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-800 font-medium">
              <li><strong>Denominación Social:</strong> {SITE_INFO.legalName}</li>
              <li><strong>Correo Electrónico para protección de datos:</strong> {SITE_INFO.email}</li>
              <li><strong>Teléfono:</strong> {SITE_INFO.phoneDisplay}</li>
              <li><strong>Actividad principal:</strong> Servicios de fontanería, desatascos, instalaciones y reformas.</li>
            </ul>
          </section>

          {/* Sección 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
              2. Datos Recabados y Finalidad del Tratamiento
            </h2>
            <p>
              A través de los formularios de contacto y presupuesto disponibles en la web, recabamos únicamente los datos estrictamente necesarios para prestar la asistencia solicitada:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Datos recopilados:</strong> Nombre completo, número de teléfono de contacto, tipo de servicio o avería solicitada y detalles adicionales indicados por el usuario.</li>
              <li><strong>Finalidad del tratamiento:</strong> Gestionar el envío de presupuestos gratuitos, concertar citas de asistencia técnica o urgencias de fontanería, y realizar el seguimiento de la consulta recibida.</li>
            </ul>
          </section>

          {/* Sección 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
              3. Legitimación para el Tratamiento
            </h2>
            <p>
              La base legal para el tratamiento de los datos es el <strong className="text-slate-900">consentimiento expreso e inequívoco</strong> manifestado por el usuario al marcar la casilla de verificación correspondiente en los formularios antes de enviar su solicitud.
            </p>
          </section>

          {/* Sección 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
              4. Conservación de los Datos
            </h2>
            <p>
              Los datos personales proporcionados se conservarán durante el tiempo necesario para atender la solicitud de servicio o presupuesto y, una vez finalizada la relación, durante los plazos legalmente exigidos para el cumplimiento de obligaciones administrativas o fiscales.
            </p>
          </section>

          {/* Sección 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
              5. Cesión de Datos a Terceros
            </h2>
            <p>
              Sus datos personales no serán vendidos, alquilados ni cedidos a terceros salvo obligación legal expresa o cuando resulte estrictamente necesario para la ejecución del servicio de asistencia técnica solicitado en su domicilio (técnicos asignados de la plantilla).
            </p>
          </section>

          {/* Sección 6 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
              6. Derechos del Usuario (ARCO-POL)
            </h2>
            <p>
              Como titular de los datos, el usuario tiene derecho a:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Acceder a sus datos personales.</li>
              <li>Solicitar la rectificación de los datos inexactos.</li>
              <li>Solicitar su supresión cuando ya no sean necesarios para los fines que fueron recogidos.</li>
              <li>Oponerse o limitar el tratamiento de sus datos.</li>
              <li>Solicitar la portabilidad de sus datos.</li>
            </ul>
            <p className="pt-2">
              Para ejercitar cualquiera de estos derechos, el usuario puede enviar una solicitud por escrito acompañada de una copia de documento acreditativo de identidad al correo electrónico: <a href={`mailto:${SITE_INFO.email}`} className="text-blue-600 font-semibold underline">{SITE_INFO.email}</a>.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
