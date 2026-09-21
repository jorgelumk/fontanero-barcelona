import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { BLOG_POSTS } from '@/data/blog';
import { SITE_INFO } from '@/data/content';
import { Calendar, Clock, User, ChevronRight, Phone, MessageSquare, ArrowLeft } from 'lucide-react';
import { ShareButtons } from '@/components/ShareButtons';
import { TableOfContents, TocItem } from '@/components/TableOfContents';
import { RelatedPosts } from '@/components/RelatedPosts';

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

function processHtmlContent(htmlContent: string): { toc: TocItem[]; processedHtml: string } {
  const toc: TocItem[] = [];
  const processedHtml = htmlContent.replace(/<h2([^>]*)>([\s\S]*?)<\/h2>/gi, (_, attrs, content) => {
    const cleanText = content.replace(/<[^>]+>/g, '').trim();
    const id = slugify(cleanText);
    toc.push({ id, text: cleanText });
    return `<h2 id="${id}"${attrs}>${content}</h2>`;
  });

  return { toc, processedHtml };
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Artículo no encontrado | Blog Fontaneros Barcelona 24h',
    };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `${SITE_INFO.domain}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${SITE_INFO.domain}/blog/${post.slug}`,
      type: 'article',
      publishedTime: '2026-09-15T08:00:00.000Z',
      authors: [post.author],
      images: [
        {
          url: `${SITE_INFO.domain}${post.image}`,
          alt: post.h1,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const { toc, processedHtml } = processHtmlContent(post.content);
  const articleUrl = `${SITE_INFO.domain}/blog/${post.slug}`;

  // Schema Structured Data for Article
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.h1,
    title: post.title,
    description: post.metaDescription,
    image: `${SITE_INFO.domain}${post.image}`,
    author: {
      '@type': 'Organization',
      name: SITE_INFO.name,
      url: SITE_INFO.domain,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_INFO.name,
      url: SITE_INFO.domain,
    },
    mainEntityOfPage: articleUrl,
    datePublished: '2026-09-15',
  };

  const faqSchema =
    post.faqs && post.faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: post.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className="bg-slate-50 min-h-screen py-8 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 flex-wrap">
            <Link href="/" className="hover:text-blue-600 transition">
              Inicio
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/blog" className="hover:text-blue-600 transition">
              Blog
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-800 font-semibold truncate max-w-xs sm:max-w-md">
              {post.title}
            </span>
          </nav>

          {/* Article Header Card */}
          <header className="bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-slate-200 mb-8">
            <div className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3.5 py-1 rounded-full mb-4 uppercase tracking-wider">
              {post.category}
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-4">
              {post.h1}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-2 border-t border-slate-100">
              <span className="flex items-center gap-1.5 font-medium text-slate-700">
                <User className="w-4 h-4 text-blue-600" />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-slate-400" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-slate-400" />
                {post.readTime}
              </span>
            </div>
          </header>

          {/* 1. Imagen Principal (Featured Main Image) */}
          <div className="relative h-64 sm:h-96 md:h-[420px] w-full rounded-2xl overflow-hidden shadow-md border border-slate-200 mb-8 bg-slate-100">
            <Image
              src={post.image}
              alt={post.h1}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
            />
          </div>

          {/* Top Share Buttons */}
          <ShareButtons title={post.title} url={articleUrl} />

          {/* 2. Tabla de Contenidos (Table of Contents) */}
          <TableOfContents items={toc} />

          {/* Main Article Body */}
          <main className="bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-slate-200 text-slate-800">
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: processedHtml }}
            />

            {/* Visual FAQ Section */}
            {post.faqs && post.faqs.length > 0 && (
              <section className="mt-12 pt-8 border-t border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <span>Preguntas Frecuentes</span>
                </h2>
                <div className="space-y-4">
                  {post.faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-50 p-5 rounded-xl border border-slate-200"
                    >
                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed m-0">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </main>

          {/* Bottom Share Buttons */}
          <ShareButtons title={post.title} url={articleUrl} />

          {/* Urgencias / Contact Card */}
          <section className="mt-10 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Servicio Técnico 24H
              </span>
              <h3 className="text-xl font-black text-white">
                ¿Tienes una avería de fontanería o consulta en Barcelona?
              </h3>
              <p className="text-xs text-slate-300">
                Llegada en 30 minutos a cualquier distrito de Barcelona y municipios del AMB.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
              <a
                href={`tel:${SITE_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-black text-sm transition shadow-lg"
              >
                <Phone className="w-4 h-4" />
                <span>{SITE_INFO.phoneDisplay}</span>
              </a>
              <a
                href={SITE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-950 border border-emerald-700 text-emerald-400 font-bold text-sm transition"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </section>

          {/* 3. Post Relacionados (Related Posts) */}
          <RelatedPosts currentSlug={post.slug} category={post.category} />

          {/* Back to Blog */}
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-blue-600 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver a la lista de artículos del blog</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
