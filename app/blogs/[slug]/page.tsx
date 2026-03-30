import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import {
  BLOGS_DATA,
  CATEGORY_ACCENT,
  getBlogBySlug,
  getBlogFaqs,
  getRelatedBlogs,
} from '../data';

export function generateStaticParams() {
  return BLOGS_DATA.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return {
      title: 'Article Not Found | Tax Suvidha Kendra',
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `${blog.title} | Tax Suvidha Kendra Blog`,
    description: blog.excerpt,
    alternates: {
      canonical: `https://taxsuvidha-c3c4a.web.app/blogs/${slug}`,
    },
    openGraph: {
      url: `https://taxsuvidha-c3c4a.web.app/blogs/${slug}`,
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const related = getRelatedBlogs(blog, 3);
  const faqs = getBlogFaqs(blog);
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* Hero Banner */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-950 py-20 dark:border-slate-800 sm:py-24">
        <div className={`absolute inset-0 bg-gradient-to-br opacity-80 ${blog.accent}`} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.07),transparent_24%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white">
              {blog.category}
            </span>
            <h1 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              {blog.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">
              {blog.excerpt}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-white/70">
              <span className="font-semibold text-white">{blog.author}</span>
              <span>·</span>
              <span>{blog.date}</span>
              <span>·</span>
              <span>{blog.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-white px-4 py-4 dark:bg-black sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <Link href="/" className="transition hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span>/</span>
            <Link href="/blogs" className="transition hover:text-blue-600 dark:hover:text-blue-400">Blog</Link>
            <span>/</span>
            <span className="font-medium text-gray-800 dark:text-gray-200 line-clamp-1">{blog.title}</span>
          </nav>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-14">

            {/* Main Content */}
            <article>
              <div className="space-y-10">
                {blog.sections.map((section, idx) => (
                  <div key={idx}>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {section.heading}
                    </h2>
                    <p className="mt-4 text-base leading-8 text-gray-600 dark:text-gray-400">
                      {section.body}
                    </p>
                  </div>
                ))}
              </div>

              {/* FAQs */}
              <div className="mt-12 border-t border-gray-100 pt-8 dark:border-gray-800">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">FAQs</h2>
                <div className="mt-6 space-y-4">
                  {faqs.map((faq) => (
                    <article
                      key={faq.question}
                      className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-slate-900"
                    >
                      <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                        {faq.question}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-gray-600 dark:text-gray-400">
                        {faq.answer}
                      </p>
                    </article>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="mt-12 border-t border-gray-100 pt-8 dark:border-gray-800">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Tags</p>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-gray-200 bg-gray-50 px-4 py-1 text-sm font-medium text-gray-600 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="mt-12 space-y-6 lg:mt-0">

              {/* Article Info Card */}
              <div className="rounded-[24px] border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-slate-900">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-gray-400">About This Article</p>
                <div className="mt-5 grid gap-4">
                  <div className="rounded-2xl bg-gray-50 px-4 py-3 dark:bg-slate-800">
                    <p className="text-xs uppercase tracking-[0.18em] text-gray-400">Category</p>
                    <p className="mt-1.5 font-semibold text-gray-900 dark:text-white">{blog.category}</p>
                  </div>
                  <div className="rounded-2xl bg-gray-50 px-4 py-3 dark:bg-slate-800">
                    <p className="text-xs uppercase tracking-[0.18em] text-gray-400">Author</p>
                    <p className="mt-1.5 font-semibold text-gray-900 dark:text-white">{blog.author}</p>
                  </div>
                  <div className="rounded-2xl bg-gray-50 px-4 py-3 dark:bg-slate-800">
                    <p className="text-xs uppercase tracking-[0.18em] text-gray-400">Published</p>
                    <p className="mt-1.5 font-semibold text-gray-900 dark:text-white">{blog.date}</p>
                  </div>
                  <div className="rounded-2xl bg-gray-50 px-4 py-3 dark:bg-slate-800">
                    <p className="text-xs uppercase tracking-[0.18em] text-gray-400">Read Time</p>
                    <p className="mt-1.5 font-semibold text-gray-900 dark:text-white">{blog.readTime}</p>
                  </div>
                </div>
              </div>

              {/* CTA Card */}
              <div className={`relative overflow-hidden rounded-[24px] bg-gradient-to-br p-6 ${blog.accent}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_50%)]" />
                <div className="relative">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/70">
                    Need Help?
                  </p>
                  <h3 className="mt-3 text-xl font-bold text-white leading-snug">
                    Let Tax Suvidha Kendra Handle This
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/85">
                    Our experts handle filings, registrations, and compliance so you don&apos;t have to.
                  </p>
                  <div className="mt-5 space-y-3">
                    <Link
                      href="/pages/contact"
                      className="block w-full rounded-full bg-white px-5 py-2.5 text-center text-sm font-bold text-gray-900 transition hover:bg-white/90"
                    >
                      Get Consultation
                    </Link>
                    <Link
                      href="tel:+919999241024"
                      className="block w-full rounded-full border border-white/20 px-5 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-white/10"
                    >
                      Call Us Now
                    </Link>
                  </div>
                </div>
              </div>

              {/* All Services Link */}
              <div className="rounded-[24px] border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-slate-900">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  Explore All Tax Suvidha Kendra Services
                </p>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  24 services across registration, taxation, compliance, and IPR.
                </p>
                <Link
                  href="/services"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  View all services →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="border-t border-gray-100 bg-gray-50 py-16 dark:border-gray-800 dark:bg-slate-950/60 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Related Articles</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blogs/${post.slug}`}
                  className="group flex flex-col overflow-hidden rounded-[24px] border border-gray-200 bg-white shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-slate-900"
                >
                  <div className={`h-2 w-full bg-gradient-to-r ${post.accent}`} />
                  <div className="flex flex-1 flex-col p-6">
                    <span
                      className={`inline-flex w-fit rounded-full bg-gradient-to-r px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-white ${CATEGORY_ACCENT[post.category]}`}
                    >
                      {post.category}
                    </span>
                    <h3 className="mt-3 text-base font-bold leading-snug text-gray-900 transition group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                      {post.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-6 text-gray-500 dark:text-gray-400 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4 text-xs text-gray-400 dark:border-gray-800">
                      <span>{post.date}</span>
                      <span className="font-medium text-blue-600 transition group-hover:underline dark:text-blue-400">
                        {post.readTime} →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
