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
    <Link href={`/blog/${slug}`} className="group block">
      <article className="card bg-base-100 border border-base-300 overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        {image && (
          <figure className="relative h-48 overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
          </figure>
        )}
        <div className="card-body gap-3">
          <div className="flex items-center gap-3 text-sm text-base-content/60">
            <time dateTime={date}>{formatDate(date)}</time>
            <span className="w-1 h-1 rounded-full bg-base-content/30" />
            <span>{readingTime} min read</span>
          </div>
          <h3 className="card-title text-xl leading-snug group-hover:text-secondary transition-colors">
            {title}
          </h3>
          <p className="text-base-content/70 text-sm line-clamp-3">{excerpt}</p>
          <div className="card-actions mt-auto pt-2">
            <span className="text-secondary text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
              Read article
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      <article className="grid md:grid-cols-2 gap-0 bg-base-100 border border-base-300 rounded-box overflow-hidden transition-all duration-300 hover:shadow-xl">
        {image && (
          <figure className="relative h-64 md:h-full min-h-[300px] overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900/20" />
          </figure>
        )}
        <div className="flex flex-col justify-center p-8 md:p-10">
          <div className="flex items-center gap-3 text-sm text-base-content/60 mb-4">
            <span className="bg-secondary text-secondary-content text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              Latest
            </span>
            <time dateTime={date}>{formatDate(date)}</time>
            <span className="w-1 h-1 rounded-full bg-base-content/30" />
            <span>{readingTime} min read</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4 group-hover:text-secondary transition-colors">
            {title}
          </h2>
          <p className="text-base-content/70 text-lg mb-6 line-clamp-3">{excerpt}</p>
          <span className="text-secondary font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
            Read article
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
