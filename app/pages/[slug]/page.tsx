import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';

import AboutPage from '../about';
import ContactPage from '../contact';
import HomePage from '../home';
import PrivacyPolicyPage from '../privacy-policy';
import RefundPolicyPage from '../refund-policy';
import TermsAndConditionsPage from '../terms-and-conditions';
import { buildSEO, pageSEO } from '../../hooks/useSEO';

const pageMap = {
  home: HomePage,
  about: AboutPage,
  contact: ContactPage,
  'privacy-policy': PrivacyPolicyPage,
  'terms-and-conditions': TermsAndConditionsPage,
  'refund-policy': RefundPolicyPage,
} as const;

type Slug = keyof typeof pageMap;

export function generateStaticParams() {
  return Object.keys(pageMap).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const key = slug as Slug;
  const seo = pageSEO[key];

  if (!seo) {
    return {
      title: 'Page Not Found | Tax Suvidha Kendra',
      description: 'The page you are looking for does not exist.',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return buildSEO(seo);
}

export default async function DynamicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (slug === 'home') {
    redirect('/');
  }

  const key = slug as Slug;
  const PageComponent = pageMap[key];
  const breadcrumbLabel = slug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

  if (!PageComponent) {
    notFound();
  }

  return (
    <>
    <PageComponent />
      <section className="border-b border-gray-200 bg-white px-4 py-4 dark:border-gray-700 dark:bg-black sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <Link href="/" className="transition hover:text-blue-600 dark:hover:text-blue-400">
              Home
            </Link>
            <span>/</span>
            <span className="font-medium text-gray-800 dark:text-gray-200">{breadcrumbLabel}</span>
          </nav>
        </div>
      </section>      
    </>
  );
}