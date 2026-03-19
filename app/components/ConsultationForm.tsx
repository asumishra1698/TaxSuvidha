'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type FormState = {
  name: string;
  email: string;
  contactNumber: string;
  services: string[];
};

type ToastState = {
  type: 'success' | 'error';
  message: string;
} | null;

const availableServices = [
  'Income Tax Filing',
  'GST Services',
  'Company Registration',
  'Trademark Registration',
  'Business Compliance',
] as const;

type ConsultationFormProps = {
  onSuccess?: () => void;
};

export default function ConsultationForm({ onSuccess }: ConsultationFormProps) {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    contactNumber: '',
    services: [],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<ToastState>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, []);

  const showToast = (type: 'success' | 'error', message: string) => {
    setToast({ type, message });
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    const normalizedValue =
      name === 'contactNumber' ? value.replace(/\D/g, '').slice(0, 10) : value;

    setFormState((prev) => ({
      ...prev,
      [name]: normalizedValue,
    }));
  };

  const handleServiceToggle = (service: string) => {
    setFormState((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((item) => item !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (formState.services.length === 0) {
      showToast('error', 'Please select at least one service.');
      return;
    }

    if (!/^\d{10}$/.test(formState.contactNumber)) {
      showToast('error', 'Please enter a valid 10-digit contact number.');
      return;
    }

    try {
      setIsSubmitting(true);
      setToast(null);

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          subject: 'Consultation Request',
          message: `Contact Number: ${formState.contactNumber}\nRequested Services: ${formState.services.join(', ')}`,
        }),
      });

      const result: { message?: string; error?: string } = await response.json();

      if (!response.ok) {
        throw new Error(result.error ?? 'Failed to submit consultation request.');
      }

      showToast('success', result.message ?? 'Thanks! Our team will contact you shortly.');
      setFormState({
        name: '',
        email: '',
        contactNumber: '',
        services: [],
      });

      onSuccess?.();
    } catch (error) {
      showToast(
        'error',
        error instanceof Error
          ? error.message
          : 'Something went wrong while submitting your request.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-gray-200 bg-white p-4 shadow-xl sm:p-6 dark:border-gray-700 dark:bg-gray-900"
    >
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
        Get Free Consultation
      </h3>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        Fill out the form and our experts will connect with you.
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <label
            htmlFor="name"
            className="mb-1 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formState.name}
            onChange={handleInputChange}
            required
            placeholder="Enter your full name"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-1 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formState.email}
            onChange={handleInputChange}
            required
            placeholder="Enter your email"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
          />
        </div>

        <div>
          <label
            htmlFor="contactNumber"
            className="mb-1 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Contact Number
          </label>
          <input
            id="contactNumber"
            type="tel"
            name="contactNumber"
            value={formState.contactNumber}
            onChange={handleInputChange}
            required
            inputMode="numeric"
            pattern="[0-9]{10}"
            maxLength={10}
            minLength={10}
            title="Please enter a valid 10-digit contact number"
            placeholder="Enter contact number"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
          />
        </div>

        <fieldset>
          <legend className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Services
          </legend>
          <div className="grid gap-2 sm:grid-cols-2">
            {availableServices.map((service) => (
              <label
                key={service}
                className="flex items-center gap-2 rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-700 dark:border-gray-700 dark:text-gray-300"
              >
                <input
                  type="checkbox"
                  checked={formState.services.includes(service)}
                  onChange={() => handleServiceToggle(service)}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-xs leading-5">{service}</span>
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary mt-6 w-full px-5 py-3"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Request'}
      </button>

      {isMounted && toast
        ? createPortal(
            <div className="pointer-events-none fixed right-4 top-4 z-[100] sm:right-6 sm:top-6">
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
            </div>,
            document.body
          )
        : null}
    </form>
  );
}
