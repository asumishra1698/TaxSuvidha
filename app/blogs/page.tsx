import type { Metadata } from 'next';
import Link from 'next/link';

import {
  BLOG_CATEGORIES,
  BLOGS_DATA,
  CATEGORY_ACCENT,
  type BlogCategory,
} from './data';

export const metadata: Metadata = {
  title: 'Blog | Tax Suvidha Kendra',
  description:
    'Expert insights on income tax, GST, business registration, compliance, and IPR from Tax Suvidha Kendra.',
};

export default function BlogsPage() {
  const featured = BLOGS_DATA[0];
  const rest = BLOGS_DATA.slice(1);

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-950 py-20 dark:border-slate-800 sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.22),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.18),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">
              Tax Suvidha Kendra Blog
            </span>
            <h1 className="mt-5 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Insights on Tax, GST & Business Compliance
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Expert articles from the Tax Suvidha Kendra team — covering income tax,
              GST, registrations, IPR, and startup compliance in plain language.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {BLOG_CATEGORIES.map((cat) => (
                <a
                  key={cat}
                  href={`#${cat.toLowerCase().replace(/\s+/g, '-')}`}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-sky-400/50 hover:bg-sky-400/10"
                >
                  {cat}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-gray-100 bg-gray-50 py-8 dark:border-gray-800 dark:bg-slate-950/60">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {[
            [BLOGS_DATA.length.toString(), 'In-depth articles'],
            ['6', 'Topic categories'],
            ['Weekly', 'New content'],
            ['Free', 'Expert knowledge'],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-2xl border border-gray-200 bg-white px-5 py-5 dark:border-gray-800 dark:bg-slate-900"
            >
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{value}</div>
              <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-8 text-xs font-bold uppercase tracking-[0.24em] text-blue-600 dark:text-blue-400">
            Featured Article
          </p>
          <Link href={`/blogs/${featured.slug}`} className="group block">
            <div className="overflow-hidden rounded-[32px] border border-gray-100 bg-white shadow-md transition hover:shadow-xl dark:border-gray-800 dark:bg-slate-900">
              <div className={`h-3 w-full bg-gradient-to-r ${featured.accent}`} />
              <div className="p-8 sm:p-12 lg:grid lg:grid-cols-[1.4fr_0.6fr] lg:gap-12">
                <div>
                  <span
                    className={`inline-flex rounded-full bg-gradient-to-r px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white ${CATEGORY_ACCENT[featured.category]}`}
                  >
                    {featured.category}
                  </span>
                  <h2 className="mt-4 text-3xl font-bold leading-snug text-gray-900 transition group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 sm:text-4xl">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400">
                    {featured.excerpt}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-medium text-gray-700 dark:text-gray-300">{featured.author}</span>
                    <span>·</span>
                    <span>{featured.date}</span>
                    <span>·</span>
                    <span>{featured.readTime}</span>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {featured.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-slate-800 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-8 hidden flex-col justify-between lg:mt-0 lg:flex">
                  <div className={`flex h-full items-center justify-center rounded-[24px] bg-gradient-to-br p-8 ${featured.accent}`}>
                    <span className="text-center text-2xl font-bold text-white/90 leading-tight">
                      {featured.readTime}
                    </span>
                  </div>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
                    Read full article <span>→</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* All Articles by Category */}
      {BLOG_CATEGORIES.filter((cat) =>
        rest.some((b) => b.category === cat),
      ).map((category) => {
        const posts = rest.filter((b) => b.category === category);

        return (
          <section
            key={category}
            id={category.toLowerCase().replace(/\s+/g, '-')}
            className="py-12 sm:py-16"
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <span
                    className={`inline-flex rounded-full bg-gradient-to-r px-3 py-1 text-xs font-bold uppercase tracking-[0.24em] text-white ${CATEGORY_ACCENT[category as BlogCategory]}`}
                  >
                    {category}
                  </span>
                  <h2 className="mt-3 text-2xl font-bold text-gray-900 dark:text-white">
                    {category} Articles
                  </h2>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blogs/${post.slug}`}
                    className="group flex flex-col overflow-hidden rounded-[24px] border border-gray-100 bg-white shadow-sm transition hover:shadow-lg dark:border-gray-800 dark:bg-slate-900"
                  >
                    <div className={`h-2 w-full bg-gradient-to-r ${post.accent}`} />
                    <div className="flex flex-1 flex-col p-6">
                      <span
                        className={`inline-flex w-fit rounded-full bg-gradient-to-r px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-white ${CATEGORY_ACCENT[post.category]}`}
                      >
                        {post.category}
                      </span>
                      <h3 className="mt-4 text-lg font-bold leading-snug text-gray-900 transition group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                        {post.title}
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-7 text-gray-600 dark:text-gray-400 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4 text-xs text-gray-500 dark:border-gray-800 dark:text-gray-400">
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
        );
      })}

      {/* CTA Section */}
      <section className="bg-gray-50 px-4 py-20 dark:bg-slate-950 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2.25rem] border border-slate-800 bg-[#030a1f] px-6 py-16 text-center sm:px-10 md:py-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.14),transparent_28%)]" />
            <div className="relative mx-auto max-w-3xl">
              <h2 className="text-2xl font-semibold leading-tight text-white sm:text-4xl">
                Need Expert Help Right Now?
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Reading is a great start — but Tax Suvidha Kendra can handle your actual filing,
                registration, or compliance so you can focus on your business.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link href="/pages/contact" className="btn-primary px-8 py-3 text-base">
                  Talk to an Expert
                </Link>
                <Link
                  href="/services"
                  className="rounded-full border border-white/15 px-8 py-3 text-base font-semibold text-white transition hover:bg-white/10"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
