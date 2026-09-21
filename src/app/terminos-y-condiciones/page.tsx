import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_INFO } from '@/data/content';
import { FileText, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Términos y Condiciones de Servicio',
  description: 'Condiciones generales de contratación de servicios de fontanería, desatascos y presupuesto en Fontaneros Barcelona 24h.',
  alternates: {
    canonical: `${SITE_INFO.domain}/terminos-y-condiciones`,
  },
};

export default function TerminosCondicionesPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link href="/" className="hover:text-blue-600 transition">
            Inicio
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-800 font-semibold">Términos y Condiciones</span>
        </nav>

        <header className="mb-10 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex items-center gap-3 text-blue-600 mb-2">
            <FileText className="w-6 h-6" />
            <span className="text-xs font-bold uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
              Condiciones Generales de Contratación
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Términos y Condiciones del Servicio
          </h1>
          <p className="text-sm text-slate-600 mt-2">
            Última actualización: Septiembre de 2026
          </p>
        </header>

        <article className="bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-slate-200 space-y-8 text-slate-700 text-sm leading-relaxed">
          <p className="font-medium text-slate-800">
            Las presentes condiciones generales regulan la solicitud de presupuestos, prestación de servicios de fontanería, reparaciones de urgencia, reformas y desatascos prestados por {SITE_INFO.name} en Barcelona y su Área Metropolitana.
          </p>

          {/* Sección 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
              1. Solicitud de Presupuesto y Asistencia
            </h2>
            <p>
              La solicitud de información o presupuesto realizada a través del formulario web o atención telefónica es totalmente <strong className="text-slate-900">gratuita y sin compromiso</strong>.
            </p>
            <p>
              Un técnico evaluará la consulta o acudirá a las instalaciones del cliente (en intervenciones de urgencia) para diagnosticar la avería e indicar el importe exacto antes de iniciar los trabajos.
            </p>
          </section>

          {/* Sección 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
              2. Cobertura del Servicio y Tiempo de Respuesta
            </h2>
            <p>
              Prestamos servicio en la ciudad de Barcelona y municipios del Área Metropolitana de Barcelona (AMB). En servicios de urgencia 24h, el tiempo medio estimado de llegada es de 20 a 30 minutos desde la llamada de confirmación, sujeto a condicionantes de tráfico o causas de fuerza mayor.
            </p>
          </section>

          {/* Sección 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
              3. Garantía por Escrito en Intervenciones
            </h2>
            <p>
              Todas nuestras intervenciones de fontanería, desatascos, reparación de calderas e instalaciones cuentan con <strong className="text-slate-900">garantía por escrito</strong> conforme al Real Decreto Legislativo 1/2007 de defensa de los consumidores. La garantía cubre cualquier defecto derivado de la mano de obra o de los materiales suministrados por nuestra empresa durante el plazo legal indicado en la factura o parte de trabajo.
            </p>
          </section>

          {/* Sección 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
              4. Precios, Presupuestos y Formas de Pago
            </h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>No realizamos intervenciones ni cobros sin la aprobación previa del cliente sobre el presupuesto ofrecido.</li>
              <li>Los medios de pago aceptados son efectivo, tarjeta bancaria o transferencia inmediata una vez finalizado y comprobado el trabajo por el cliente.</li>
              <li>En reformas de mayor envergadura (como cambios de bañera por ducha o reformas integrales), se pactará un calendario de pagos indicado en el contrato de obra.</li>
            </ul>
          </section>

          {/* Sección 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
              5. Instaladores Autorizados y Seguro de Responsabilidad Civil
            </h2>
            <p>
              Nuestra plantilla cuenta con técnicos homologados, Registro de Instaladores Autorizados de Gas ({SITE_INFO.gasInstallerReg}) y Seguro de Responsabilidad Civil profesional activo para cubrir cualquier eventualidad durante la prestación de los trabajos.
            </p>
          </section>

          {/* Sección 6 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
              6. Atención al Cliente y Reclamaciones
            </h2>
            <p>
              Para cualquier consulta, aclaración sobre un trabajo realizado o ejercicio de garantía, puede ponerse en contacto con nuestra atención al cliente escribiendo a <a href={`mailto:${SITE_INFO.email}`} className="text-blue-600 font-semibold underline">{SITE_INFO.email}</a> o llamando directamente al <a href={`tel:${SITE_INFO.phoneRaw}`} className="text-blue-600 font-semibold underline">{SITE_INFO.phoneDisplay}</a>.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
