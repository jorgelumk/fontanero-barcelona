import React from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, CheckCircle2, ArrowRight, Wrench, ChevronRight } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { TrustBadges } from '@/components/TrustBadges';
import { CoverageMap } from '@/components/CoverageMap';
import { FAQSection } from '@/components/FAQSection';
import { TestimonialCarousel } from '@/components/TestimonialCarousel';
import { SchemaJsonLd } from '@/components/SchemaJsonLd';
import { SITE_INFO, ServiceItem, SERVICES_LIST } from '@/data/content';

interface ServiceLandingViewProps {
  service: ServiceItem;
}

export function ServiceLandingView({ service }: ServiceLandingViewProps) {
  // Cross-linked services for internal SEO linking
  const relatedServices = SERVICES_LIST.filter((s) => s.id !== service.id).slice(0, 3);

  // Map service specific images
  const getServiceImage = () => {
    const slug = service.slug.toLowerCase();
    if (slug.includes('banera') || slug.includes('ducha')) return '/images/banera_por_ducha_real.jpg';
    if (slug.includes('caldera')) return '/images/reparacion_caldera_real.jpg';
    if (slug.includes('fuga')) return '/images/deteccion_fugas_real.jpg';
    return '/images/hero_plumber_barcelona.jpg';
  };

  const serviceImg = getServiceImage();

  return (
    <>
      {/* Schema Service, Breadcrumb & FAQ JSON-LD */}
      <SchemaJsonLd
        type="Service"
        data={{
          serviceName: service.title,
          serviceDescription: service.metaDescription,
          serviceUrl: `${SITE_INFO.domain}/${service.slug}`,
        }}
      />
      <SchemaJsonLd
        type="Breadcrumb"
        data={{
          breadcrumbs: [
            { name: 'Inicio', item: SITE_INFO.domain },
            { name: service.title, item: `${SITE_INFO.domain}/${service.slug}` },
          ],
        }}
      />
      {service.faqs && service.faqs.length > 0 && (
        <SchemaJsonLd type="FAQ" data={{ faqs: service.faqs }} />
      )}

      {/* Breadcrumbs UI */}
      <div className="bg-slate-800 text-slate-300 text-xs py-2.5 px-4 border-b border-slate-700">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <Link href="/" className="hover:text-white transition">
            Inicio (Fontanero en Barcelona)
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
          <span className="text-white font-semibold">{service.title}</span>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative bg-slate-900 text-white pt-10 pb-16 lg:py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: H1 & Hero Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                <Wrench className="w-4 h-4 text-blue-400" />
                <span>Servicio Técnico Profesional en Barcelona y AMB</span>
              </div>

              {/* H1 Tag */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
                {service.h1}
              </h1>

              {/* Introduction Paragraph */}
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                {service.heroText} Si necesitas asistencia para <strong>{service.title.toLowerCase()} en Barcelona</strong>, nuestro equipo de fontaneros cualificados evalúa tu caso para ofrecerte la mejor solución y entregarte un presupuesto cerrado sin compromiso.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-200 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Personal técnico propio en plantilla (+10 fontaneros)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Garantía escrita firmada en parte de trabajo</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Presupuesto cerrado sin sorpresas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Seguro de Responsabilidad Civil & Gas Autorizado</span>
                </div>
              </div>

              {/* Direct CTAs */}
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
                  <span>Consultar por WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Column: Pre-selected Contact Form */}
            <div className="lg:col-span-5">
              <ContactForm defaultService={service.title} />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST SIGNALS */}
      <TrustBadges />

      {/* CONTENT SECTIONS (H2 & H3 STRUCTURE WITH REAL IMAGES & INTERMEDIATE CTAS) */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Featured Service Photo */}
          <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 mb-8 max-h-[420px]">
            <img
              src={serviceImg}
              alt={`Servicio profesional de ${service.title} en Barcelona`}
              className="w-full h-full object-cover"
            />
          </div>

          {service.sections.map((sec, idx) => (
            <React.Fragment key={idx}>
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {sec.title}
                </h2>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                  {sec.content}
                </p>
                {sec.bulletPoints && sec.bulletPoints.length > 0 && (
                  <ul className="space-y-3 pt-2">
                    {sec.bulletPoints.map((bp, bpIdx) => (
                      <li key={bpIdx} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base font-medium">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Intermediate CTA after section 1 */}
              {idx === 0 && service.sections.length > 1 && (
                <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 my-8 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800">
                  <div className="space-y-2 text-center sm:text-left">
                    <span className="text-xs uppercase font-bold text-red-400 tracking-wider">
                      ¿Necesitas asistencia rápida en tu zona?
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black">
                      Presupuesto sin compromiso para {service.title.toLowerCase()}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm">
                      Llegada en 30 minutos para emergencias y agenda programada en 24h.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                    <a
                      href={`tel:${SITE_INFO.phoneRaw}`}
                      className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-black rounded-xl text-sm transition shadow-md flex items-center justify-center gap-2"
                    >
                      <Phone className="w-4 h-4 animate-pulse" />
                      <span>{SITE_INFO.phoneDisplay}</span>
                    </a>
                    <a
                      href={SITE_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 bg-emerald-700 hover:bg-emerald-600 text-white font-bold rounded-xl text-sm transition flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}

          {/* Mandatory SEO Internal Link Back to Home (Rendered ONCE) */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-slate-800 space-y-3">
            <h3 className="font-bold text-lg text-slate-900">
              ¿Buscas un fontanero en Barcelona para otros trabajos?
            </h3>
            <p className="text-sm text-slate-600">
              Además de nuestro servicio especializado de <strong>{service.title.toLowerCase()}</strong>, prestamos atención para urgencias 24h, desatascos, fugas de agua y reformas completas.
            </p>
            <div className="pt-1">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition"
              >
                <span>Volver a la página principal de Fontanero en Barcelona</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* COBERTURA GEOGRÁFICA EN BARCELONA Y AMB */}
      <CoverageMap />

      {/* RELATED SERVICES CROSS-LINKING */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-slate-900 mb-6 tracking-tight text-center">
            Otros Servicios Relacionados en Barcelona
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <div key={rel.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  <Link href={`/${rel.slug}`} className="hover:text-blue-600 transition">
                    {rel.title}
                  </Link>
                </h3>
                <p className="text-slate-600 text-xs mb-4">
                  {rel.shortDescription}
                </p>
                <Link
                  href={`/${rel.slug}`}
                  className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1"
                >
                  <span>Ver servicio de {rel.title.toLowerCase()}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL CAROUSEL */}
      <TestimonialCarousel />

      {/* FAQS SECTION FOR THIS SERVICE */}
      {service.faqs && service.faqs.length > 0 && (
        <FAQSection
          faqs={service.faqs}
          title={`Preguntas Frecuentes sobre ${service.title}`}
          subtitle={`Resolvemos las dudas más habituales sobre ${service.title.toLowerCase()} en Barcelona.`}
        />
      )}
    </>
  );
}
