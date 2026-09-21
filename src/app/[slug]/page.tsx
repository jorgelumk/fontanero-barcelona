import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ServiceLandingView } from '@/components/ServiceLandingView';
import { SERVICES_LIST, SITE_INFO } from '@/data/content';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES_LIST.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_LIST.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: 'Página no encontrada | Fontaneros Barcelona 24h',
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `${SITE_INFO.domain}/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${SITE_INFO.domain}/${service.slug}`,
    },
  };
}

export default async function DynamicServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES_LIST.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return <ServiceLandingView service={service} />;
}
