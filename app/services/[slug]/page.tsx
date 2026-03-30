import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import ServiceFaqAccordion from '../components/ServiceFaqAccordion';
import {
  CATEGORY_META,
  SERVICES_DATA,
  getRelatedServices,
  getServiceBenefits,
  getServiceBySlug,
  getServiceDocuments,
  getServiceFaqs,
  getServiceProcess,
} from '../data';

export function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Service Not Found | Tax Suvidha Kendra',
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `${service.title} | Tax Suvidha Kendra`,
    description: service.overview,
    alternates: {
      canonical: `https://taxsuvidha-c3c4a.web.app/services/${slug}`,
    },
    openGraph: {
      url: `https://taxsuvidha-c3c4a.web.app/services/${slug}`,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const meta = CATEGORY_META[service.category];
  const benefits = getServiceBenefits(service);
  const documents = getServiceDocuments(service);
  const process = getServiceProcess(service);
  const faqs = getServiceFaqs(service);
  const relatedServices = getRelatedServices(service);

  return (
    <main className="min-h-screen bg-white dark:bg-black">    

      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-950 py-20 dark:border-slate-800 sm:py-24">
        <div className={`absolute inset-0 bg-gradient-to-br opacity-90 ${meta.accent}`} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_24%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.35fr_0.9fr] lg:px-8">
          <div>
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white">
              {service.category}
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-5xl">
              {service.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/85">
              {service.overview}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/pages/contact" className="btn-primary px-7 py-3">
                Start this service
              </Link>
              <Link
                href="tel:+919999241024"
                className="rounded-full border border-white/20 bg-white/10 px-7 py-3 font-semibold text-white transition hover:bg-white/15"
              >
                Speak to Tax Suvidha Kendra
              </Link>
            </div>
          </div>

          <div className="rounded-[30px] border border-white/15 bg-white/10 p-7 backdrop-blur-sm">
            <div className="text-xs font-bold uppercase tracking-[0.24em] text-white/70">Service snapshot</div>
            <div className="mt-6 grid gap-5">
              <div className="rounded-2xl bg-white/10 px-5 py-4">
                <div className="text-xs uppercase tracking-[0.2em] text-white/60">Starting fee</div>
                <div className="mt-2 text-2xl font-bold text-white">{service.price}</div>
              </div>
              <div className="rounded-2xl bg-white/10 px-5 py-4">
                <div className="text-xs uppercase tracking-[0.2em] text-white/60">Estimated timeline</div>
                <div className="mt-2 text-xl font-semibold text-white">{service.turnaround}</div>
              </div>
              <div className="rounded-2xl bg-white/10 px-5 py-4 text-sm leading-7 text-white/80">
                Tax Suvidha Kendra handles document review, filing workflow, follow-up, and practical guidance so your process stays clear from start to completion.
              </div>
            </div>
          </div>
        </div>
      </section>
       <section className="bg-white px-4 py-4 dark:border-gray-800 dark:bg-black sm:px-6 lg:px-4">
        <div className="mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <Link href="/" className="transition hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span>/</span>
            <Link href="/services" className="transition hover:text-blue-600 dark:hover:text-blue-400">Services</Link>
            <span>/</span>
            <span className="font-medium text-gray-800 dark:text-gray-200">{service.title}</span>
          </nav>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Why choose this service?</h2>
            <p className="mt-3 text-base leading-7 text-gray-600 dark:text-gray-400">
              The page is structured so you can understand value, execution flow, and what Tax Suvidha Kendra actually handles.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {benefits.map((benefit, index) => (
              <article key={benefit.title} className="rounded-[26px] border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-slate-900">
                <div className={`inline-flex rounded-full bg-gradient-to-r px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-white ${meta.accent}`}>
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-gray-100 bg-gray-50 py-16 dark:border-gray-800 dark:bg-slate-950/60 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">How Tax Suvidha Kendra executes it</h2>
              <p className="mt-3 text-base leading-7 text-gray-600 dark:text-gray-400">
                A straightforward four-step process designed to reduce confusion and keep timelines moving.
              </p>
            </div>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            {process.map((item) => (
              <article key={item.step} className="rounded-[26px] border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-slate-900">
                <div className={`inline-flex rounded-full bg-gradient-to-r px-3 py-1 text-xs font-bold text-white ${meta.accent}`}>
                  {item.step}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Documents typically required</h2>
            <p className="mt-3 text-base leading-7 text-gray-600 dark:text-gray-400">
              Tax Suvidha Kendra shares the exact checklist after review, but these are the common documents most clients should keep ready.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {documents.map((document) => (
                <div key={document} className="rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm font-medium text-gray-700 dark:border-gray-800 dark:bg-slate-900 dark:text-gray-300">
                  {document}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-gray-200 bg-slate-950 p-8 text-white dark:border-gray-800">
            <div className="text-xs font-bold uppercase tracking-[0.24em] text-slate-400">Need quick action?</div>
            <h3 className="mt-4 text-3xl font-bold">Talk to Tax Suvidha Kendra today.</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              If you want the right service matched to your case, we can review the requirement, confirm documents, and guide the next step without wasting time.
            </p>
            <div className="mt-8 mx-auto w-full max-w-sm space-y-3 text-center">
              <Link href="/pages/contact" className="btn-primary block w-full px-6 py-3 text-center">
                Request consultation
              </Link>
              <Link
                href="tel:+919999241024"
                className="block w-full rounded-full border border-white/15 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/10"
              >
                Call Tax Suvidha Kendra
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-gray-100 bg-gray-50 py-16 dark:border-gray-800 dark:bg-slate-950/60 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Frequently asked questions</h2>
          <p className="mt-3 text-base leading-7 text-gray-600 dark:text-gray-400">
            These answers are designed to help you understand the service before you speak to Tax Suvidha Kendra.
          </p>
          <div className="mt-8">
            <ServiceFaqAccordion items={faqs} />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Related services</h2>
              <p className="mt-3 text-base leading-7 text-gray-600 dark:text-gray-400">
                Explore nearby services from the same category if your requirement overlaps.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:border-blue-500 hover:text-blue-600 dark:border-gray-700 dark:text-gray-300"
            >
              View all services
            </Link>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {relatedServices.map((related) => (
              <Link
                key={related.slug}
                href={`/services/${related.slug}`}
                className="rounded-[26px] border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg dark:border-gray-800 dark:bg-slate-900"
              >
                <div className="text-xs font-bold uppercase tracking-[0.24em] text-gray-400">
                  {related.category}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">{related.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">{related.tagline}</p>
                <div className="mt-5 text-sm font-semibold text-blue-600 dark:text-blue-400">{related.price}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}