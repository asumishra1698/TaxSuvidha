'use client';

import { useState } from 'react';

type ToastState = {
  type: 'success' | 'error';
  message: string;
} | null;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<ToastState>(null);

  const showToast = (type: 'success' | 'error', message: string) => {
    setToast({ type, message });
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

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
      setToast(null);

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

      showToast('success', result.message ?? 'Thank you for your message.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      showToast(
        'error',
        error instanceof Error
          ? error.message
          : 'Something went wrong while sending your enquiry.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-black dark:to-slate-950">
      {/* Header Section */}
      <section className="border-b border-gray-200 bg-white/70 py-16 backdrop-blur-sm sm:py-20 dark:border-gray-700 dark:bg-slate-900/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700 dark:border-blue-900/60 dark:bg-blue-900/20 dark:text-blue-300">
            We are here to help
          </div>

          <h1 className="mt-4 text-2xl font-bold leading-tight text-gray-900 sm:text-5xl dark:text-white">
            Let&apos;s Talk About Your
            <span className="block text-blue-600 dark:text-blue-400">Tax and Compliance Needs</span>
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-gray-600 dark:text-gray-400">
            Reach out for GST, ITR, company registration, compliance filings, or any tax-related support. Our experts will respond quickly with clear next steps.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Support</p>
              <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">24/7</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Response</p>
              <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">Fast</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Guidance</p>
              <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">Expert</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12">
            {/* Contact Info */}
            <div className="lg:col-span-4">
              <div className="space-y-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Contact Information</h2>

                {/* Email */}
                <div className="rounded-xl border border-gray-200 p-4 dark:border-slate-700">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Email
                  </h3>
                  <p className="mt-2 text-base font-medium text-gray-700 dark:text-gray-300">
                    info@taxsuvidhakendra.com
                  </p>
                </div>

                {/* Phone */}
                <div className="rounded-xl border border-gray-200 p-4 dark:border-slate-700">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Phone
                  </h3>
                  <p className="mt-2 text-base font-medium text-gray-700 dark:text-gray-300">
                    +91 9999 24 1024
                  </p>
                </div>

                {/* Address */}
                <div className="rounded-xl border border-gray-200 p-4 dark:border-slate-700">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Address
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Shahdara, Near Durga puri Chowk, Delhi, India 110032
                  </p>
                </div>

                {/* Hours */}
                <div className="rounded-xl border border-gray-200 p-4 dark:border-slate-700">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
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

            {/* Contact Form + Map */}
            <div className="lg:col-span-8">
              <div className="grid gap-6 xl:grid-cols-2">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900"
                >
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Send Us a Message</h2>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                      Fill this form and our team will get back to you shortly.
                    </p>
                  </div>

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
                </form>

                <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
                  <div className="border-b border-gray-200 px-5 py-4 dark:border-slate-700">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Find Us on Map</h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                      Visit our office in Nirman Vihar, Delhi.
                    </p>
                  </div>
                  <iframe
                    title="Tax Suvidha Kendra Location"
                    src="https://www.google.com/maps?q=Office+Number+403+Jain+Complex+Nirman+Vihar+Delhi+110092&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full min-h-[420px] w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {toast ? (
        <div className="pointer-events-none fixed right-4 top-20 z-[80] sm:right-6">
          <div
            role="status"
            aria-live="polite"
            className={`max-w-sm rounded-lg px-4 py-3 text-sm font-medium shadow-lg ${
              toast.type === 'success'
                ? 'border border-green-200 bg-green-50 text-green-700 dark:border-green-900/40 dark:bg-green-900/20 dark:text-green-300'
                : 'border border-red-200 bg-red-50 text-red-700 dark:border-red-900/40 dark:bg-red-900/20 dark:text-red-300'
            }`}
          >
            {toast.message}
          </div>
        </div>
      ) : null}
    </main>
  );
}
