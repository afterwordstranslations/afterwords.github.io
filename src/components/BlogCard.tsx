import Link from "next/link";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
}

export function BlogCard({ title, excerpt, date, slug }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="block">
      <div className="card bg-base-200 hover:bg-base-300 transition-colors cursor-pointer h-full">
        <div className="card-body">
          <p className="text-sm text-muted-foreground mb-2">{date}</p>
          <h3 className="card-title text-2xl mb-4">{title}</h3>
          <p className="text-base-content/80">{excerpt}</p>
          <div className="card-actions mt-4">
            <span className="link link-accent">Read more →</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
