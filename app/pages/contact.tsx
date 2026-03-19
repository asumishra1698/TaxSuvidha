'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);
      setStatusMessage(null);
      setSubmitError(null);

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result: { message?: string; error?: string } = await response.json();

      if (!response.ok) {
        throw new Error(result.error ?? 'Failed to send your enquiry.');
      }

      setStatusMessage(result.message ?? 'Thank you for your message.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : 'Something went wrong while sending your enquiry.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      {/* Header Section */}
      <section className="border-b border-gray-200 bg-gray-50 py-20 dark:border-gray-700 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            We&apos;re here to help. Reach out to us with any questions or inquiries.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-3">
            {/* Contact Info */}
            <div className="md:col-span-1">
              <div className="space-y-8">
                {/* Email */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Email
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    info@taxsuvidhakendra.com
                  </p>
                </div>

                {/* Phone */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Phone
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    +91 9999 24 1024
                  </p>
                </div>

                {/* Address */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Address
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Office Number 403, Jain Complex,<br />
                    Opposite Metroplex mall, Nirman vihar,<br />
                    Delhi 110092
                  </p>
                </div>

                {/* Hours */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Support Hours
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    24/7 Available<br />
                    Mon-Fri: 9 AM - 8 PM EST<br />
                    Sat-Sun: 10 AM - 6 PM EST
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-900 dark:text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 dark:text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 dark:text-white">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 dark:text-white">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full px-5 py-2.5"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {statusMessage ? (
                  <p className="text-sm text-green-600 dark:text-green-400">{statusMessage}</p>
                ) : null}

                {submitError ? (
                  <p className="text-sm text-red-600 dark:text-red-400">{submitError}</p>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
