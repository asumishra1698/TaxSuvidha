import Link from 'next/link';

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
            Making tax management accessible and simple for everyone.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Our Mission */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                At Tax Suvidha Kendra, we believe that tax management shouldn&apos;t be complicated or stressful. Our mission is to provide accessible, affordable, and expert tax guidance to individuals and businesses of all sizes. We leverage technology and expert knowledge to simplify the tax filing process and help our users save money through smart tax planning.
              </p>
            </div>

            {/* Our Values */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Our Values
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Integrity
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    We maintain the highest standards of honesty and transparency with our clients and regulators.
                  </p>
                </div>
                <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Expertise
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Our team stays updated with the latest tax laws and best practices to serve you better.
                  </p>
                </div>
                <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Innovation
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    We use cutting-edge technology to make tax management faster and more efficient.
                  </p>
                </div>
                <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Accessibility
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Tax guidance should be available to everyone, regardless of their financial background.
                  </p>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Why Choose Tax Suvidha Kendra?
              </h2>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-3">
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
                  <span>Expert certified tax professionals with years of experience</span>
                </li>
                <li className="flex items-start gap-3">
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
                  <span>100% secure and encrypted data handling</span>
                </li>
                <li className="flex items-start gap-3">
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
                  <span>24/7 customer support in multiple languages</span>
                </li>
                <li className="flex items-start gap-3">
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
                  <span>Affordable pricing with transparent, no-hidden-fee model</span>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-8 dark:border-gray-700 dark:bg-gray-900">
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
