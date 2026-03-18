'use client';

import { useState } from 'react';

type FormState = {
  name: string;
  email: string;
  contactNumber: string;
  services: string[];
};

const availableServices = [
  'Income Tax Filing',
  'GST Services',
  'Company Registration',
  'Trademark Registration',
  'Business Compliance',
] as const;

export default function ConsultationForm() {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    contactNumber: '',
    services: [],
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
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

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Consultation form submitted:', formState);
    alert('Thanks! Our team will contact you shortly.');

    setFormState({
      name: '',
      email: '',
      contactNumber: '',
      services: [],
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xl dark:border-gray-700 dark:bg-gray-900"
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
                <span>{service}</span>
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <button
        type="submit"
        className="btn-primary mt-6 w-full px-5 py-3"
      >
        Submit Request
      </button>
    </form>
  );
}
