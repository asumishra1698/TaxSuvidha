import type { Metadata } from 'next';

const SITE_NAME = 'Tax Suvidha Kendra';
const SITE_URL = 'https://taxsuvidhakendra.com';

type SEOOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: readonly string[];
};

export const pageSEO = {
  home: {
    title: 'Tax Management Made Simple',
    description:
      'Simplify tax filing with expert guidance, secure workflows, and accurate returns from Tax Suvidha Kendra.',
    path: '/',
    keywords: ['tax filing', 'tax planning', 'tax management', 'tax services'],
  },
  about: {
    title: 'About Us',
    description:
      'Learn about Tax Suvidha Kendra, our mission, and the values that help individuals and businesses manage taxes confidently.',
    path: '/pages/about',
    keywords: ['about Tax Suvidha Kendra', 'tax experts', 'tax platform'],
  },
  contact: {
    title: 'Contact Us',
    description:
      'Get in touch with Tax Suvidha Kendra for tax filing support, compliance help, and planning assistance.',
    path: '/pages/contact',
    keywords: ['contact Tax Suvidha Kendra', 'tax support', 'tax help'],
  },
  'privacy-policy': {
    title: 'Privacy Policy',
    description:
      'Read Tax Suvidha Kendra privacy practices, data collection methods, and information security commitments.',
    path: '/pages/privacy-policy',
    keywords: ['privacy policy', 'data protection', 'tax data security'],
  },
  'terms-and-conditions': {
    title: 'Terms and Conditions',
    description:
      'Review the terms and conditions for using Tax Suvidha Kendra services and website.',
    path: '/pages/terms-and-conditions',
    keywords: ['terms and conditions', 'service terms', 'website terms'],
  },
  'refund-policy': {
    title: 'Refund Policy',
    description:
      'Understand Tax Suvidha Kendra refund eligibility, timelines, and cancellation policy details.',
    path: '/pages/refund-policy',
    keywords: ['refund policy', 'subscription cancellation', 'money-back guarantee'],
  },
} as const;

export function buildSEO({ title, description, path, keywords = [] }: SEOOptions): Metadata {
  const canonical = `${SITE_URL}${path}`;
  const fullTitle = `${title} | ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
    keywords: [...keywords],
    alternates: {
      canonical,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: SITE_NAME,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
