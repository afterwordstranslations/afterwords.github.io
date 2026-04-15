import Link from "next/link";
import Image from "next/image";
import { formatDate, estimateReadingTime } from "~/lib/blog";
import { BlogClickTracker } from "./BlogClickTracker";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  image?: string;
  content: string;
  trackingContext?: "listing" | "featured" | "related";
}

export function BlogCard({ title, excerpt, date, slug, image, content, trackingContext = "listing" }: BlogCardProps) {
  const readingTime = estimateReadingTime(content);

  return (
    <BlogClickTracker slug={slug} context={trackingContext}>
    <Link href={`/blog/${slug}`} className="group block h-full">
      <article className="relative h-full rounded-2xl overflow-hidden border border-base-content/5 bg-base-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        {image && (
          <div className="relative h-52 overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        )}
        <div className="p-6 flex flex-col gap-3 flex-1">
          <div className="flex items-center gap-3 text-xs text-base-content/50">
            <time dateTime={date}>{formatDate(date)}</time>
            <span className="w-1 h-1 rounded-full bg-base-content/30" />
            <span>{readingTime} min read</span>
          </div>
          <h3 className="font-[family-name:var(--font-display)] text-lg leading-snug text-base-content group-hover:text-warm-dark transition-colors duration-300">
            {title}
          </h3>
          <p className="text-base-content/60 text-sm leading-relaxed line-clamp-3">{excerpt}</p>
          <div className="mt-auto pt-3">
            <span className="text-warm-dark text-sm font-medium inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-300">
              Read article
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </article>
    </Link>
    </BlogClickTracker>
  );
}

export function FeaturedBlogCard({ title, excerpt, date, slug, image, content, trackingContext = "featured" }: BlogCardProps) {
  const readingTime = estimateReadingTime(content);

  return (
    <BlogClickTracker slug={slug} context={trackingContext}>
    <Link href={`/blog/${slug}`} className="group block">
      <article className="relative rounded-2xl overflow-hidden min-h-[400px] md:min-h-[480px] flex items-end">
        {/* Background image */}
        {image && (
          <Image
            src={image}
            alt={title}
            fill
            sizes="100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-slate-900/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 to-transparent" />

        {/* Content */}
        <div className="relative z-10 p-8 md:p-12 w-full max-w-3xl">
          <div className="flex items-center gap-3 text-sm text-white/60 mb-4">
            <span className="bg-warm text-slate-900 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
              Latest
            </span>
            <time dateTime={date}>{formatDate(date)}</time>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span>{readingTime} min read</span>
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl leading-tight text-white mb-4">
            {title}
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-6 line-clamp-2 max-w-2xl">{excerpt}</p>
          <span className="inline-flex items-center gap-2 text-warm font-medium group-hover:gap-3 transition-all duration-300">
            Read article
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </span>
        </div>
      </article>
    </Link>
    </BlogClickTracker>
  );
}
