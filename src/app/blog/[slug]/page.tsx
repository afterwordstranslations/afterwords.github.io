import { getPostBySlug, getAllPosts } from "~/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "~/components/MdxComponents";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Afterwords Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="w-full bg-base-100 text-base-content">
      {/* Hero Section - Matching page.tsx */}
      <div className="hero-section bg-sl h-full pb-16">
        <div>
          <section className="relative w-full overflow-hidden bg-slate-900">
            <div className="container mx-auto px-4 md:px-8"></div>
            <Image
              src="/bg.jpg"
              alt="Professional signing document"
              className="absolute inset-0 h-full w-full object-cover"
              fill
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>

            <div className="relative z-10 h-full items-center px-8 lg:px-24">
              <header className="text-gray-100 body-font w-full mb-16">
                <div className="container mx-auto grid gap-4 grid-cols-6">
                  <Link className="mt-4 title-font font-medium mb-4 md:mb-0 col-span-6 sm:col-span-2 md:col-span-3" href="/">
                    <Image
                      src="/logo.svg"
                      className="w-2/6"
                      width={312}
                      height={67}
                      alt="Afterwords Logo"
                    />
                  </Link>
                  <nav className="text-base mt-4 col-span-6 sm:col-span-4 md:col-span-3 sm:text-right flex items-center justify-end sm:justify-end">
                    <div className="flex items-center gap-2">
                      <Link className="text-white m-2 py-1 link" href="/">
                        Home
                      </Link>
                      <Link className="text-white m-2 py-1 link" href="/blog">
                        Blog
                      </Link>
                    </div>
                  </nav>
                </div>
              </header>

              <div className="max-w-xl text-white">
                <div>
                  <p className="text-sm mb-2 opacity-80">{post.date}</p>
                  <h1 className="text-5xl leading-tight font-bold mb-4">{post.title}</h1>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Blog Post Content */}
      <article className="container mx-auto">
        <div className="lg:w-3/4 p-8">
          <div className="prose prose-lg max-w-none">
            <MDXRemote source={post.content} components={mdxComponents} />
          </div>

          <div className="mt-16 pt-8 border-t border-base-300">
            <Link href="/blog" className="link link-accent text-lg">
              ← Back to all posts
            </Link>
          </div>
        </div>
      </article>

      {/* Footer */}
      <div className="bg-slate-900">
        <div className="container mx-auto p-8">
          <Image
            alt="Afterwords logo"
            src="/logo.svg"
            width={200}
            height={50}
            className="mb-8 w-1/3 md:w-1/4"
          />
          <div className="flex items-center">
            <h3 className="text-white text-xl mr-4">Find us on social media</h3>
            <a href="https://www.instagram.com/afterwordstranslations/" className="inline-block mr-4">
              <Image
                alt="Instagram logo"
                width={50}
                height={50}
                className="w-6"
                src="/insta.svg"
              />
            </a>
            <a href="https://www.linkedin.com/company/afterwordstranslations/" className="inline-block mr-4">
              <Image
                alt="LinkedIn logo"
                width={50}
                height={50}
                className="w-6"
                src="/in.png"
              />
            </a>
            <a href="https://www.facebook.com/AfterWordstranslations" className="inline-block mr-4">
              <Image
                alt="Facebook logo"
                width={50}
                height={50}
                className="w-6"
                src="/fb.png"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
