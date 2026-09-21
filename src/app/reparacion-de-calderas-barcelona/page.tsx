import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceLandingView } from "@/components/ServiceLandingView";
import { SERVICES_LIST, SITE_INFO } from "@/data/content";

const SLUG = "reparacion-de-calderas-barcelona";

export async function generateMetadata(): Promise<Metadata> {
  const service = SERVICES_LIST.find((s) => s.slug === SLUG);
  if (!service) return { title: "Servicios de Fontanería en Barcelona" };

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: SITE_INFO.domain + "/" + service.slug,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: SITE_INFO.domain + "/" + service.slug,
    },
  };
}

export default function ServicePage() {
  const service = SERVICES_LIST.find((s) => s.slug === SLUG);
  if (!service) notFound();

  return <ServiceLandingView service={service} />;
}
