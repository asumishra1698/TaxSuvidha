'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

type BlogItem = {
  title: string;
  date: string;
  author: string;
  excerpt: string;
  image: string;
};

const blogs: BlogItem[] = [
  {
    title: 'Top Advantages of Bookkeeping and Accounting Services in India',
    date: 'March 18, 2026',
    author: 'Srihari Dhondalay',
    excerpt:
      'Managing a business requires balancing daily operations with accurate financial record-keeping. However, many businesses...',
    image:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1100&q=80',
  },
  {
    title: 'LLC vs Inc vs Corp: Key Differences & Structure',
    date: 'March 17, 2026',
    author: 'Joel Dsouza',
    excerpt:
      'LLC, Inc., and Corp are common business structures used globally, each defining how a company is owned, taxed,...',
    image:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1100&q=80',
  },
  {
    title: 'Types of Bookkeeping: Methods, Importance & Objectives',
    date: 'March 17, 2026',
    author: 'Joel Dsouza',
    excerpt:
      'Every business generates financial data, from salary payments and vendor invoices to expenses and tax filings. Without proper...',
    image:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1100&q=80',
  },
  {
    title: 'How Startups Can Avoid Common Tax Filing Penalties',
    date: 'March 15, 2026',
    author: 'Ananya Rao',
    excerpt:
      'Missing key deadlines can trigger unnecessary penalties for startups. A disciplined compliance calendar makes all the difference...',
    image:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1100&q=80',
  },
  {
    title: 'GST Return Filing: Monthly vs Quarterly Strategy',
    date: 'March 14, 2026',
    author: 'Rahul Iyer',
    excerpt:
      'Choosing the right GST filing cycle can improve cash flow and simplify reporting. Here is what businesses should evaluate...',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1100&q=80',
  },
  {
    title: 'Trademark Basics: Protecting Your Business Identity',
    date: 'March 12, 2026',
    author: 'Neha Kapoor',
    excerpt:
      'A registered trademark strengthens your legal ownership and branding confidence. Learn the practical first steps for filing...',
    image:
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1100&q=80',
  },
];

export default function BlogSlider() {
  const [cardsPerView, setCardsPerView] = useState(3);
  const [activeIndex, setActiveIndex] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
        return;
      }

      if (window.innerWidth < 1280) {
        setCardsPerView(2);
        return;
      }

      setCardsPerView(3);
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);

    return () => {
      window.removeEventListener('resize', updateCardsPerView);
    };
  }, []);

  const loopedBlogs = useMemo(
    () => [
      ...blogs.slice(-cardsPerView),
      ...blogs,
      ...blogs.slice(0, cardsPerView),
    ],
    [cardsPerView]
  );
  const slideWidth = 100 / cardsPerView;
  const currentRealIndex = ((activeIndex - cardsPerView) % blogs.length + blogs.length) % blogs.length;

  const jumpWithoutAnimation = (targetIndex: number) => {
    setIsTransitionEnabled(false);
    setActiveIndex(targetIndex);

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setIsTransitionEnabled(true);
      });
    });
  };

  const next = () => {
    setActiveIndex((prev) => prev + 1);
  };

  const prev = () => {
    setActiveIndex((prev) => prev - 1);
  };

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const timer = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, 4200);

    return () => {
      clearInterval(timer);
    };
  }, [isPaused]);

  const handleTransitionEnd = () => {
    if (activeIndex >= blogs.length + cardsPerView) {
      jumpWithoutAnimation(cardsPerView);
      return;
    }

    if (activeIndex < cardsPerView) {
      jumpWithoutAnimation(blogs.length + activeIndex);
    }
  };

  return (
    <section className="border-b border-gray-200 bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
              Latest Blogs
            </p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
              Insights and Updates
            </h2>
          </div>

          <Link href="#" className="btn-primary px-6 py-2.5 text-sm sm:text-base">
            View All
          </Link>
        </div>

        <div
          className="mt-10 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className={`flex ${isTransitionEnabled ? 'transition-transform duration-700 ease-out' : ''}`}
            style={{ transform: `translateX(-${activeIndex * slideWidth}%)` }}
            onTransitionEnd={handleTransitionEnd}
          >
            {loopedBlogs.map((blog, index) => (
              <article
                key={`${blog.title}-${index}`}
                className="flex-shrink-0 px-3"
                style={{ flexBasis: `${slideWidth}%` }}
              >
                <div className="h-full overflow-hidden rounded-3xl border border-gray-200 bg-[#f9f9fa] p-6 shadow-sm">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-52 w-full rounded-2xl object-cover"
                    loading="lazy"
                  />

                  <div className="mt-6 inline-flex rounded-full bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700">
                    {blog.date}
                  </div>

                  <h3 className="mt-5 text-xl font-semibold leading-tight text-gray-900">
                    {blog.title}
                  </h3>

                  <p className="mt-4 text-sm font-medium text-gray-600">{blog.author}</p>

                  <p className="mt-4 text-sm leading-6 text-gray-600">{blog.excerpt}</p>

                  <a
                    href="#"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-amber-500 transition hover:text-amber-600"
                  >
                    Read More
                    <span>→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous blog slide"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition hover:bg-gray-100"
          >
            ←
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: blogs.length }).map((_, idx) => (
              <button
                key={`blog-dot-${idx}`}
                type="button"
                onClick={() => setActiveIndex(cardsPerView + idx)}
                aria-label={`Go to blog slide ${idx + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  idx === currentRealIndex ? 'bg-violet-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next blog slide"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition hover:bg-gray-100"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
