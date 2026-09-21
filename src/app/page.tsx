import React from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, Clock, CheckCircle2, ArrowRight, Wrench } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { TrustBadges } from '@/components/TrustBadges';
import { CoverageMap } from '@/components/CoverageMap';
import { FAQSection } from '@/components/FAQSection';
import { TestimonialCarousel } from '@/components/TestimonialCarousel';
import { SchemaJsonLd } from '@/components/SchemaJsonLd';
import { SITE_INFO, HOME_FAQS, SERVICES_LIST } from '@/data/content';

export default function HomePage() {
  return (
    <>
      {/* Schema JSON-LD for Plumber / ProfessionalService and FAQs on Home */}
      <SchemaJsonLd type="Home" />
      <SchemaJsonLd type="FAQ" data={{ faqs: HOME_FAQS }} />

      {/* HERO SECTION */}
      <section className="relative bg-slate-900 text-white pt-10 pb-16 lg:py-20 overflow-hidden">
        {/* Decorative background grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: H1, Copy & Immediate CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/40 text-red-300 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                <Clock className="w-4 h-4 text-red-400 animate-pulse" />
                <span>Atención Urgente 24H · Llegada en 30 min</span>
              </div>

              {/* H1 (Mandatory placement of main keyword "Fontanero en Barcelona") */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
                Fontanero en Barcelona <span className="text-blue-500">Urgencias</span> y Reformas de Fontanería
              </h1>

              {/* First paragraph (Mandatory placement of main keyword & local modifiers) */}
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Si buscas un <strong>fontanero en Barcelona</strong> profesional y eficaz, disponemos de una plantilla propia de más de 10 fontaneros en vehículos taller para atender tu consulta con rapidez. Resolvemos desatascos, fugas de agua, reparación de calderas, cambio de bañera por plato de ducha y reparaciones generales con garantía por escrito.
              </p>

              {/* Key Highlights Bullet points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Sin intermediarios ni comisiones</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Presupuesto gratis sin compromiso</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Personal cualificado en plantilla</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Cobertura en toda Barcelona y AMB</span>
                </div>
              </div>

              {/* Call-to-action Action Bar */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${SITE_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 py-4 px-8 rounded-xl font-black text-white bg-red-600 hover:bg-red-700 transition shadow-lg shadow-red-600/30 text-base"
                >
                  <Phone className="w-5 h-5 animate-pulse" />
                  <span>LLAMAR AHORA: {SITE_INFO.phoneDisplay}</span>
                </a>
                <a
                  href={SITE_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-700/60 hover:bg-emerald-900/60 transition text-base"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>WhatsApp 24h</span>
                </a>
              </div>
            </div>

            {/* Right Column: Hero Contact Form (Always visible) */}
            <div className="lg:col-span-5">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST SIGNALS SECTION */}
      <TrustBadges />

      {/* H2 SECTION 1: SERVICIOS DE FONTANERÍA EN BARCELONA (SILO SEO ENLAZADO INTERNO) */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">
              Soluciones Integrales de Fontanería
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Servicios de Fontanería en Barcelona y Reformas
            </h2>
            <p className="text-slate-600 mt-3 text-base sm:text-lg">
              Ofrecemos atención técnica especializada en viviendas, comunidades de propietarios y locales comerciales. Haz clic en cada servicio para conocer los detalles:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_LIST.map((service) => (
              <div
                key={service.id}
                className="group bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-blue-500 hover:shadow-xl transition duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition duration-200 shadow-md shadow-blue-600/20">
                    <Wrench className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-xl text-slate-900 mb-2 group-hover:text-blue-600 transition">
                    <Link href={`/${service.slug}`}>
                      {service.title}
                    </Link>
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Internal SEO Anchor to Service Page */}
                <Link
                  href={`/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800 transition mt-auto pt-4 border-t border-slate-200/80"
                >
                  <span>Saber más sobre {service.title.toLowerCase()}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* H2 SECTION 2: URGENCIAS Y ATENCIÓN 24 HORAS */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Servicio de Emergencias Hydraulicas
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                Fontanero Urgente 24 Horas en Barcelona y AMB
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Las averías graves de fontanería no entienden de horarios. Una tubería rota a medianoche o una inundación en la cocina requiere la intervención inmediata de un profesional cualificado para frenar los daños estructurales.
              </p>
              <p className="text-slate-300 text-base leading-relaxed">
                A diferencia de los servicios de fontanería que subcontratan a autónomos sin control de calidad, en <strong>Fontaneros Barcelona 24h</strong> contamos con más de 10 fontaneros en plantilla con unidades móviles totalmente equipadas para estar en tu puerta en menos de 30 minutos.
              </p>

              <div className="bg-slate-800/80 rounded-xl p-5 border border-slate-700 space-y-3">
                <h4 className="font-bold text-white text-base">Atendemos de inmediato:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    <span>Inundaciones y fugas graves</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    <span>Atascos de inodoros y bajantes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    <span>Sin agua caliente ni calefacción</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    <span>Fallo de bombas de achique</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <a
                  href={`tel:${SITE_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-black rounded-xl text-lg shadow-xl shadow-red-600/30 transition"
                >
                  <Phone className="w-6 h-6 animate-pulse" />
                  <span>SOLICITAR FONTANERO URGENTE ({SITE_INFO.phoneDisplay})</span>
                </a>
              </div>
            </div>

            {/* Visual Box / Trust Card */}
            <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700 space-y-6 shadow-2xl">
              <h3 className="text-2xl font-bold text-white">
                Garantía de Tiempo de Respuesta en Barcelona
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Nuestros vehículos están geolocalizados en distintos sectores de Barcelona (Eixample, Gràcia, Sarrià, Sant Martí, Sants) y municipios colindantes como L&apos;Hospitalet, Badalona y Sant Cugat para minimizar desplazamientos.
              </p>
              <div className="space-y-4 pt-2 border-t border-slate-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Llamada e identificación</h4>
                    <p className="text-xs text-slate-400">Evaluamos por teléfono la gravedad del siniestro y te damos instrucciones para cerrar la llave de paso.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Desplazamiento en 30 minutos</h4>
                    <p className="text-xs text-slate-400">El técnico en guardia más cercano se desplaza directamente a tu domicilio.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Diagnóstico y reparación con garantía</h4>
                    <p className="text-xs text-slate-400">Presupuesto cerrado previo y reparación inmediata con garantía por escrito.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* H2 SECTION 3: TARIFAS Y PRECIOS TRANSPARENTES */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block mb-2">
              Transparencia y Claridad Sin Sorpresas
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Precios y Tarifas de Fontanería en Barcelona
            </h2>
            <p className="text-slate-600 mt-3 text-base">
              Nos alejamos de las presupuestaciones falsas y las tarifas engañosas. Antes de apretar la primera tuerca, te entregamos una valoración clara basada en el tipo de trabajo y materiales necesarios.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md space-y-6">
            <h3 className="text-xl font-bold text-slate-900">
              Factores que determinan el precio de un servicio de fontanería:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900">1. Tipo de intervención</h4>
                <p className="text-slate-600 text-xs">
                  No requiere los mismos medios desatascar un bote sifónico que localizar una fuga no visible con geófono o sustituir una bajante comunitario.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900">2. Horario y urgencia</h4>
                <p className="text-slate-600 text-xs">
                  Los servicios ordinarios programados en horario laboral tienen costes distintos a las urgencias nocturnas o festivas.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900">3. Materiales y repuestos</h4>
                <p className="text-slate-600 text-xs">
                  Utilizamos exclusivamente repuestos homologados de primeras marcas con garantía del fabricante para asegurar la durabilidad.
                </p>
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-emerald-900 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-lg text-emerald-950">
                  ¿Quieres saber el presupuesto exacto para tu caso?
                </h4>
                <p className="text-xs text-emerald-800 mt-1">
                  Solicita información gratuita por teléfono o rellenando nuestro formulario sin ningún compromiso.
                </p>
              </div>
              <a
                href="#formulario-contacto"
                className="shrink-0 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm transition shadow-md"
              >
                SOLICITAR PRESUPUESTO
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* H2 SECTION 4: COBERTURA AMB */}
      <CoverageMap />

      {/* CARRUSEL DE VALORACIONES DE CLIENTES */}
      <TestimonialCarousel />

      {/* H2 SECTION 5: PREGUNTAS FRECUENTES (FAQS) */}
      <FAQSection faqs={HOME_FAQS} />
    </>
  );
}
