import type { Metadata } from 'next';
import Link from 'next/link';

import {
  CATEGORY_META,
  SERVICE_CATEGORIES,
  SERVICES_DATA,
  type ServiceCategory,
} from './data';

export const metadata: Metadata = {
  title: 'All Services | Tax Suvidha Kendra',
  description:
    "Explore Tax Suvidha Kendra's registration, compliance, taxation, and IPR services for businesses and professionals.",
};

const CATEGORY_CODES: Record<ServiceCategory, string> = {
  Registrations: 'REG',
  Compliance: 'CMP',
  Taxation: 'TAX',
  IPR: 'IPR',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-950 py-20 dark:border-slate-800 sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.22),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.18),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">
              Tax Suvidha Kendra Services
            </span>
            <h1 className="mt-5 text-4xl font-bold text-white sm:text-5xl lg:text-7xl">
              Business, tax, and compliance services built for execution.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Every service page is designed to make the next step obvious: what it is, what it costs,
              what documents are needed, and how Tax Suvidha Kendra helps you complete it properly.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {SERVICE_CATEGORIES.map((category) => (
                <a
                  key={category}
                  href={`#${category.toLowerCase()}`}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-sky-400/50 hover:bg-sky-400/10"
                >
                  {category}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-gray-100 bg-gray-50 py-8 dark:border-gray-800 dark:bg-slate-950/60">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {[
            ['24', 'Service pages'],
            ['4', 'Service categories'],
            ['Fast', 'Filing execution'],
            ['Expert', 'Tax Suvidha Kendra support'],
          ].map(([value, label]) => (
            <div key={label} className="rounded-2xl border border-gray-200 bg-white px-5 py-5 dark:border-gray-800 dark:bg-slate-900">
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{value}</div>
              <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {SERVICE_CATEGORIES.map((category) => {
        const services = SERVICES_DATA.filter((service) => service.category === category);
        const meta = CATEGORY_META[category];

        return (
          <section key={category} id={category.toLowerCase()} className="py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <span className={`inline-flex rounded-full bg-gradient-to-r px-3 py-1 text-xs font-bold uppercase tracking-[0.24em] text-white ${meta.accent}`}>
                    {CATEGORY_CODES[category]}
                  </span>
                  <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">{category}</h2>
                  <p className="mt-2 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-400">
                    {meta.summary}
                  </p>
                </div>
                <Link
                  href="/pages/contact"
                  className="inline-flex items-center justify-center rounded-full border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:border-blue-500 hover:text-blue-600 dark:border-gray-700 dark:text-gray-300"
                >
                  Need help choosing?
                </Link>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl dark:border-gray-800 dark:bg-slate-900"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className={`inline-flex rounded-full bg-gradient-to-r px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-white ${meta.accent}`}>
                          {CATEGORY_CODES[category]}
                        </div>
                        <h3 className="mt-4 text-xl font-semibold leading-8 text-gray-900 transition group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                          {service.title}
                        </h3>
                      </div>
                      <div className="rounded-2xl border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-semibold text-gray-500 dark:border-gray-700 dark:bg-slate-800 dark:text-gray-300 whitespace-nowrap">
                        {service.turnaround}
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-400">
                      {service.tagline}
                    </p>

                    <div className="mt-6 flex items-end justify-between border-t border-gray-100 pt-5 dark:border-gray-800">
                      <div>
                        <div className="text-xs uppercase tracking-[0.2em] text-gray-400">Starting fee</div>
                        <div className="mt-1 text-lg font-bold text-gray-900 dark:text-white">{service.price}</div>
                      </div>
                      <div className="text-sm font-semibold text-blue-600 transition group-hover:translate-x-1 dark:text-blue-400">
                        View page
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </main>
  );
}