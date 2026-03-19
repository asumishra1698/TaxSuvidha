import Link from 'next/link';
import ConsultationForm from '../components/ConsultationForm';
import TestimonialSlider from '../components/TestimonialSlider';
import BlogSlider from '../components/BlogSlider';

const HERO_POINTS = [
  'Fast & Reliable Services',
  'Experienced Tax Consultants',
  'Affordable Pricing',
  'Complete Compliance Support',
] as const;

const SERVICES = [
  {
    title: 'Income Tax Filing',
    description:
      'Accurate income tax filing support for salaried individuals, freelancers, and business owners with complete documentation guidance, deduction planning, and return preparation as per latest rules. We help you avoid notices, reduce filing errors, and ensure timely submission with expert review and post-filing assistance.',
    image:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'GST Registration & Returns',
    description:
      'End-to-end GST onboarding and periodic return filing support to keep your business compliant and penalty-free across monthly or quarterly cycles. From registration and invoice setup to reconciliation and return submission, we manage the full process so your operations remain smooth and audit-ready.',
    image:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Company Incorporation',
    description:
      'Private limited, LLP, and startup registration services with complete legal setup, documentation, and practical advisory from start to finish. We handle name approval, incorporation filings, compliance registration, and foundational guidance so you can launch confidently without administrative delays.',
    image:
      'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Trademark Registration',
    description:
      'Protect your brand identity with comprehensive trademark search, application filing, and objection handling support at every stage. Our team guides you through class selection, documentation, response drafting, and status tracking to improve approval readiness and long-term brand protection.',
    image:
      'https://images.unsplash.com/photo-1521790797524-b2497295b8a0?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Business Compliance & Accounting',
    description:
      'Stay compliant with regular accounting, ROC filings, and statutory requirements while focusing on growth and daily business priorities. We provide structured bookkeeping, deadline tracking, compliance reporting, and advisory insights that help maintain financial clarity and reduce regulatory risk.',
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
  },
] as const;

const WHY_CHOOSE_ITEMS = [
  {
    title: 'Experienced Tax Professionals',
    icon: '/conference-call--v1.png',
  },
  {
    title: 'Affordable and Transparent Pricing',
    icon: '/wallet--v1.png',
  },
  {
    title: 'End-to-End Business Compliance Services',
    icon: '/inspection.png',
  },
  {
    title: 'Fast Processing and Timely Delivery',
    icon: '/fast.png',
  },
  {
    title: 'Support for Startups, SMEs, and Individuals',
    icon: '/support.png',
  },
  {
    title: 'Reliable Online Consultation',
    icon: '/video-call.png',
  },
] as const;

const CLIENT_BRANDS = [
  { name: 'Aatam Vigyan Foundation', icon: '/aatam-vigyan-foundation-768x224.png' },
  { name: 'Classic', icon: '/classic.jpg' },
  { name: 'Kodzio', icon: '/klogo.png' },
  { name: 'Loans Need', icon: '/LOANS-NEED-1-png-768x432.png' },
  { name: 'Micron', icon: '/micron.png' },
  { name: 'MSKP', icon: '/mskp.png' },
  { name: 'Ultra Shield', icon: '/LOGOultra.png' },
  { name: 'SD Campus', icon: '/sd.png' },
  { name: 'Villa Furniture', icon: '/villa.png' },
  { name: 'Shop Tango', icon: '/shoptango.png' },
] as const;

const CLIENT_FIRST_ROW = [...CLIENT_BRANDS, ...CLIENT_BRANDS] as const;
const CLIENT_SECOND_ROW_LOOP = [...[...CLIENT_BRANDS].reverse(), ...[...CLIENT_BRANDS].reverse()] as const;

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="border-b border-gray-200 bg-gradient-to-b from-blue-50/80 to-white px-4 py-16 dark:border-gray-700 dark:from-blue-950/20 dark:to-black sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-4xl dark:text-white">
                Professional Tax & Compliance Services for Individuals and Businesses
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-gray-700 dark:text-gray-300 sm:text-lg">
                Tax Suvidha Kendra provides reliable Income Tax, GST, Company Registration, Trademark,
                and Business Compliance services across India. Our experienced professionals help
                individuals, startups, and businesses manage their tax and legal requirements smoothly and
                efficiently.
              </p>

              <ul className="mt-8 space-y-3">
                {HERO_POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-gray-800 dark:text-gray-200">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                      ✔
                    </span>
                    <span className="text-base font-medium">{point}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-base font-semibold text-gray-900 dark:text-white sm:text-lg">
                Start Your Business or File Your Taxes with Expert Guidance Today.
              </p>

              <div className="mt-6">
                <Link
                  href="/pages/contact"
                  className="btn-primary px-7 py-3"
                >
                  Get Free Consultation
                </Link>
              </div>
            </div>

            <ConsultationForm />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="relative z-30 border-b border-slate-800 bg-slate-950 px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex rounded-full bg-blue-900/30 px-4 py-1 text-sm font-semibold text-blue-300">
                About Us
              </span>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
                About Tax Suvidha Kendra
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
                Tax Suvidha Kendra is a professional platform offering taxation, compliance, and business
                registration services to individuals, startups, and companies across India. Our goal is to
                simplify complex tax and legal processes by connecting clients with experienced professionals.
              </p>
              <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
                We assist businesses with Income Tax Filing, GST Registration, Company Incorporation,
                Trademark Registration, Accounting Services, and other compliance requirements. Our team
                focuses on delivering accurate, transparent, and timely services so that businesses can focus
                on their growth while we handle their compliance needs.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-700 bg-slate-900 p-4 shadow-sm">
                  <p className="text-2xl font-bold text-blue-300">10+ Years</p>
                  <p className="mt-1 text-sm text-slate-400">Domain Experience</p>
                </div>
                <div className="rounded-xl border border-slate-700 bg-slate-900 p-4 shadow-sm">
                  <p className="text-2xl font-bold text-blue-300">PAN India</p>
                  <p className="mt-1 text-sm text-slate-400">Client Service Coverage</p>
                </div>
              </div>

              <Link
                href="/pages/about"
                className="mt-8 inline-flex items-center rounded-lg border border-slate-600 bg-slate-900 px-6 py-3 font-medium text-slate-100 transition hover:bg-slate-800"
              >
                Know More About Us
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 overflow-hidden rounded-2xl border border-slate-700 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80"
                  alt="Tax experts discussing compliance strategy"
                  className="h-64 w-full object-cover sm:h-72"
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden rounded-2xl border border-slate-700 shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80"
                  alt="Professional consultation session"
                  className="h-44 w-full object-cover sm:h-52"
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden rounded-2xl border border-slate-700 shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=900&q=80"
                  alt="Business compliance paperwork and planning"
                  className="h-44 w-full object-cover sm:h-52"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-gray-600">
              Scroll to explore each service in detail.
            </p>
          </div>

          <div className="relative mt-14 pb-24">
            {SERVICES.map((service, index) => (
              <article
                key={service.title}
                className="sticky top-16 z-40 mt-4 flex flex-col rounded-[2rem] border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-950 p-6 shadow-xl sm:mt-5 sm:p-8 lg:grid lg:grid-cols-2 lg:gap-10"
                style={{ zIndex: 20 + index }}
              >
                <div className="order-2 flex flex-col justify-center lg:order-1">
                  <span className="inline-flex w-fit rounded-full bg-indigo-700 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-100">
                    Service 0{index + 1}
                  </span>
                  <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-slate-200 sm:text-lg">
                    {service.description}
                  </p>
                  <div className="mt-8">
                    <Link
                      href="/pages/contact"
                      className="btn-primary px-7 py-3"
                    >
                      View Service
                    </Link>
                  </div>
                </div>

                <div className="order-1 mb-6 overflow-hidden rounded-2xl border border-slate-700 lg:order-2 lg:mb-0 lg:mt-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-72 w-full object-cover sm:h-80 lg:h-[24rem]"
                    loading="lazy"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="bg-white px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
              Our Clients
            </p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Trusted by Growing Brands
            </h2>
          </div>

          <div className="mt-10 space-y-4 overflow-hidden">
            <div className="client-marquee-track client-marquee-left">
              {CLIENT_FIRST_ROW.map((brand, index) => (
                <div
                  key={`row1-${brand.name}-${index}`}
                  className="flex min-w-[180px] items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3"
                >
                  <img
                    src={brand.icon}
                    alt={`${brand.name} icon`}
                    className="h-auto w-10"
                    loading="lazy"
                  />
                  <span className="text-sm font-semibold text-gray-700">{brand.name}</span>
                </div>
              ))}
            </div>

            <div className="client-marquee-track client-marquee-right">
              {CLIENT_SECOND_ROW_LOOP.map((brand, index) => (
                <div
                  key={`row2-${brand.name}-${index}`}
                  className="flex min-w-[180px] items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3"
                >
                  <img
                    src={brand.icon}
                    alt={`${brand.name} icon`}
                    className="h-auto w-10"
                    loading="lazy"
                  />
                  <span className="text-sm font-semibold text-gray-700">{brand.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-b border-gray-200 bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Why Choose Us
            </p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Why Choose Tax Suvidha Kendra
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE_ITEMS.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 text-center"
              >
                <img
                  src={item.icon}
                  alt={`${item.title} icon`}
                  className="h-12 w-12"
                  loading="lazy"
                />
                <p className="mt-4 text-base font-semibold leading-7 text-gray-800">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialSlider />

      <BlogSlider />

      {/* CTA Section */}
      <section className="bg-gray-100 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2.25rem] border border-slate-800 bg-[#030a1f] px-6 py-16 text-center sm:px-10 md:py-20">
            <div className="bg-tech-grid-overlay" />

            <div className="relative mx-auto max-w-4xl">
              <h2 className="text-2xl font-semibold leading-tight text-white sm:text-4xl">
                Need Help with Tax Filing or Business Registration?
              </h2>

              <p className="mt-7 text-xl leading-9 text-slate-100">
                Connect with our professionals today and get expert assistance for tax filing, GST registration,
                company incorporation, and compliance services.
              </p>

              <div className="mt-6 space-y-2 text-xl font-medium text-slate-100">
                <p>📞 Call Now: +91 9999 24 1024</p>
                <p>📩 Email: info@taxsuvidhakendra.com</p>
              </div>

              <p className="mt-5 text-base text-slate-300">
                Fast response, transparent process, and reliable support for individuals, startups, and businesses.
              </p>

              <div className="mt-10">
                <Link
                  href="/pages/contact"
                  className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-fuchsia-700 px-6 py-2.5 text-lg font-semibold text-white shadow-[0_16px_35px_rgba(192,38,211,0.35)] transition hover:brightness-105"
                >
                  Let&apos;s Get Started
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl text-slate-700">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
