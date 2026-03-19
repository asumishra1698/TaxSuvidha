import Link from 'next/link';

const teamMembers = [
  {
    name: 'Amit Sharma',
    role: 'Senior Tax Consultant',
    expertise: 'Income Tax Planning, ITR Filing, Tax Notice Handling',
  },
  {
    name: 'Neha Gupta',
    role: 'Compliance Lead',
    expertise: 'MCA Compliance, ROC Filings, Annual Returns',
  },
  {
    name: 'Rohan Verma',
    role: 'GST Specialist',
    expertise: 'GST Registration, Monthly Filing, GST Notice Response',
  },
  {
    name: 'Priya Singh',
    role: 'Client Success Manager',
    expertise: 'Onboarding, Service Tracking, Multi-channel Support',
  },
];

const certifications = [
  'GST Compliance Expertise',
  'Income Tax Return Specialists',
  'MCA Filing & Compliance Support',
  'MSME & Startup Registration Support',
  'Trademark and IPR Assistance',
  'Secure Data Handling Practices',
];

const coreValues = [
  {
    title: 'Integrity',
    text: 'We maintain high standards of honesty and transparency in every client engagement.',
  },
  {
    title: 'Expertise',
    text: 'Our team remains updated on changing tax laws, filings, and compliance regulations.',
  },
  {
    title: 'Innovation',
    text: 'We combine expert advice with practical technology to reduce delays and errors.',
  },
  {
    title: 'Accessibility',
    text: 'Professional tax and compliance support should be easy to access for every business.',
  },
];

const whyChooseUs = [
  'Expert tax and compliance professionals with practical industry experience',
  'Secure handling of sensitive business and financial documents',
  'Timely filing and proactive reminders to avoid penalties',
  'Transparent pricing with clear deliverables and support',
];

export default function About() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      {/* Header Section */}
      <section className="border-b border-gray-200 bg-gray-50 py-20 dark:border-gray-700 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
            About Tax Suvidha Kendra
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Practical tax and compliance support for individuals, startups, and growing businesses.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-blue-100 bg-blue-50/70 p-4 dark:border-slate-700 dark:bg-slate-800/60">
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-300">Trusted Support</p>
              <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">5000+</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Client queries resolved</p>
            </div>
            <div className="rounded-xl border border-amber-100 bg-amber-50/70 p-4 dark:border-slate-700 dark:bg-slate-800/60">
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-300">Service Coverage</p>
              <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">250+</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Tax and compliance services</p>
            </div>
            <div className="rounded-xl border border-emerald-100 bg-emerald-50/70 p-4 dark:border-slate-700 dark:bg-slate-800/60">
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">Response Time</p>
              <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">Fast</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Quick callback and action</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-14">
            {/* Our Mission */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 dark:border-gray-700 dark:bg-gray-900">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Our Mission
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400">
                At Tax Suvidha Kendra, we believe that tax management shouldn&apos;t be complicated or stressful. Our mission is to provide accessible, affordable, and expert tax guidance to individuals and businesses of all sizes. We leverage technology and expert knowledge to simplify the tax filing process and help our users save money through smart tax planning.
              </p>
            </div>

            {/* Our Values */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Our Values
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {coreValues.map((value) => (
                  <div
                    key={value.title}
                    className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                      {value.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Team Members */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Meet Our Team
              </h2>
              <p className="max-w-3xl text-gray-600 dark:text-gray-400">
                Our team brings together tax experts, compliance specialists, and client support professionals to provide practical and timely guidance.
              </p>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {teamMembers.map((member) => (
                  <div
                    key={member.name}
                    className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900"
                  >
                    <div className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                      Team
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-blue-600 dark:text-blue-400">
                      {member.role}
                    </p>
                    <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                      {member.expertise}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Certifications and Expertise
              </h2>
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8 dark:border-gray-700 dark:bg-gray-900">
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {certifications.map((item) => (
                    <div
                      key={item}
                      className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 dark:border-gray-700 dark:bg-black dark:text-gray-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Why Choose Tax Suvidha Kendra?
              </h2>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                {whyChooseUs.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="mt-1 h-6 w-6 flex-shrink-0 text-blue-600 dark:text-blue-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Section */}
            <div className="rounded-2xl border border-gray-200 bg-gradient-to-r from-gray-50 to-blue-50 p-8 dark:border-gray-700 dark:from-gray-900 dark:to-slate-900">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Get in Touch
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Have questions about Tax Suvidha Kendra? We&apos;d love to hear from you!
              </p>
              <Link href="/pages/contact" className="btn-primary mt-6 px-6 py-3">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
