import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { BLOG_POSTS } from '@/data/blog';
import { SITE_INFO } from '@/data/content';
import { BookOpen, Clock, Calendar, ChevronRight, User } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog de Fontanería y Reformas en Barcelona | Guías y Consejos',
  description: 'Artículos técnicos, consejos de mantenimiento, guías de bricolaje, calidad del agua y presupuestos de fontanería en Barcelona.',
  alternates: {
    canonical: `${SITE_INFO.domain}/blog`,
  },
};

export default function BlogIndexPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link href="/" className="hover:text-blue-600 transition">
            Inicio
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-800 font-semibold">Blog</span>
        </nav>

        {/* Hero Header */}
        <div className="mb-12 text-center sm:text-left bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-slate-200">
          <div className="inline-flex items-center gap-2 text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-4 h-4" />
            <span>Guías Técnicas y Consejos Prácticos</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Blog de Fontanería en Barcelona
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-3xl mt-3 leading-relaxed">
            Resolvemos tus dudas sobre mantenimiento de tuberías, presupuestos de reformas, instalación de termos y la calidad del agua en Barcelona y el Área Metropolitana.
          </p>
        </div>

        {/* Grid de Artículos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col hover:shadow-md transition group"
            >
              <div className="relative h-52 sm:h-64 w-full bg-slate-100 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.h1}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                  {post.category}
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition leading-snug mb-3">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                    <User className="w-3.5 h-3.5 text-blue-500" />
                    {post.author}
                  </span>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-bold text-blue-600 hover:text-blue-800 transition"
                  >
                    <span>Leer Artículo</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
