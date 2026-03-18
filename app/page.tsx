import type { Metadata } from 'next';
import HomePage from './pages/home';

export const metadata: Metadata = {
  title: 'Tax Management Made Simple | Tax Suvidha Kendra',
  description:
    'Navigate complex tax regulations with confidence using expert guidance, streamlined filing, and secure workflows.',
  alternates: {
    canonical: 'https://taxsuvidhakendra.com/',
  },
};

export default function RootPage() {
  return <HomePage />;
}
