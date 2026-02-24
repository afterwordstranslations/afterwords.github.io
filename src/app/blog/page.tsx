import { getAllPosts } from "~/lib/blog";
import { BlogCard } from "~/components/BlogCard";
import Link from "next/link";
import Image from "next/image";

export default async function BlogPage() {
  const posts = await getAllPosts();

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
                      <a className="text-white m-2 py-1 link" href="#about">
                        About us
                      </a>
                      <a className="text-white m-2 py-1 link" href="#services">
                        Our services
                      </a>
                      <a className="text-white m-2 py-1 link" href="#team">
                        Our team
                      </a>
                      <Link className="text-white m-2 py-1 link" href="/blog">
                        Blog
                      </Link>
                    </div>
                  </nav>
                </div>
              </header>

              <div className="max-w-xl text-white">
                <div>
                  <h4 className="bg-accent text-accent-content text-xs shadow-lg rounded-3xl inline-block mb-8 px-4 py-2">
                    Expert insights and industry news
                  </h4>
                  <h1 className="text-5xl leading-tight font-bold mb-4">
                    Translation Blog
                  </h1>
                  <p className="text-xl mb-16">
                    Expert articles on translation best practices, industry insights, and tips for businesses expanding globally.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Blog Posts Section */}
      <div className="container mx-auto">
        <div className="p-8">
          <h2 className="text-4xl font-bold mb-8">Latest Articles</h2>

          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">No blog posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8">
              {posts.map((post) => (
                <BlogCard
                  key={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  slug={post.slug}
                />
              ))}
            </div>
          )}
        </div>
      </div>

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
