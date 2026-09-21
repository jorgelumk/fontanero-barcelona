import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, ArrowRight, BookOpen } from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '@/data/blog';

interface RelatedPostsProps {
  currentSlug: string;
  category: string;
}

export function RelatedPosts({ currentSlug, category }: RelatedPostsProps) {
  // Filter out current post
  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== currentSlug);

  if (otherPosts.length === 0) return null;

  // Prioritize same category, then append remaining posts
  const sameCategory = otherPosts.filter((p) => p.category === category);
  const diffCategory = otherPosts.filter((p) => p.category !== category);

  const related: BlogPost[] = [...sameCategory, ...diffCategory].slice(0, 3);

  return (
    <section className="mt-14 pt-10 border-t border-slate-200">
      <div className="flex items-center gap-2 mb-6">
        <BookOpen className="w-5 h-5 text-blue-600" />
        <h2 className="text-2xl font-black text-slate-900 tracking-tight">
          Artículos Relacionados
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {related.map((post) => (
          <article
            key={post.slug}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col hover:shadow-md hover:border-blue-300 transition duration-200"
          >
            {/* Post Thumbnail */}
            <div className="relative h-44 w-full bg-slate-100">
              <Image
                src={post.image}
                alt={post.h1}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                {post.category}
              </div>
            </div>

            {/* Post Content */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-2">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{post.readTime}</span>
                </div>

                <h3 className="font-bold text-slate-900 text-base leading-snug mb-2 line-clamp-2 hover:text-blue-600 transition">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                <p className="text-slate-600 text-xs line-clamp-3 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
              </div>

              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition mt-auto pt-3 border-t border-slate-100"
              >
                <span>Leer artículo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
