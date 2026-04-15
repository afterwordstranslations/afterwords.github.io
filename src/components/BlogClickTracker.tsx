"use client";

import { trackBlogClick } from "~/lib/analytics";

export function BlogClickTracker({
  slug,
  context,
  children,
}: {
  slug: string;
  context: "listing" | "featured" | "related";
  children: React.ReactNode;
}) {
  return (
    <div onClick={() => trackBlogClick(slug, context)}>
      {children}
    </div>
  );
}
