import { getAllPosts } from "~/lib/blog";
import { BlogCard, FeaturedBlogCard } from "~/components/BlogCard";
import Image from "next/image";
import { Header } from "~/components/Header";

export default async function BlogPage() {
  const posts = await getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <div className="w-full bg-base-100 text-base-content">
      {/* Hero Section */}
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
              <Header navItems={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
              ]} />

              <div className="max-w-2xl text-white py-8">
                <div>
                  <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-white bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
                    The Afterwords Blog
                  </span>
                  <h1 className="text-5xl md:text-6xl leading-tight font-bold mb-6">
                    The stories behind the words
                  </h1>
                  <p className="text-xl md:text-2xl mb-20 text-white/70 leading-relaxed">
                    {/* TODO: alternative subtitle: "Notes from the space between languages." */}
                    Where we unpack what gets lost — and found — in translation.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Blog Posts Section */}
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
        {posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-base-content/60">No blog posts yet. Check back soon!</p>
          </div>
        ) : (
          <>
            {/* Featured Post */}
            {featured && (
              <section className="mb-12 md:mb-16">
                <FeaturedBlogCard
                  title={featured.title}
                  excerpt={featured.excerpt}
                  date={featured.date}
                  slug={featured.slug}
                  image={featured.image}
                  content={featured.content}
                />
              </section>
            )}

            {/* Remaining Posts */}
            {rest.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold mb-8 text-base-content/80">More articles</h2>
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {rest.map((post) => (
                    <BlogCard
                      key={post.slug}
                      title={post.title}
                      excerpt={post.excerpt}
                      date={post.date}
                      slug={post.slug}
                      image={post.image}
                      content={post.content}
                    />
                  ))}
                </div>
              </section>
            )}
          </>
        )}
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
