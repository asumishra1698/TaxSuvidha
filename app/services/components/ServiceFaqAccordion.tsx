'use client';

import { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

interface ServiceFaqAccordionProps {
  items: FaqItem[];
}

export default function ServiceFaqAccordion({ items }: ServiceFaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <article
            key={item.question}
            className={`rounded-2xl border bg-white transition dark:bg-slate-900 ${
              isOpen
                ? 'border-blue-300 shadow-md dark:border-blue-700'
                : 'border-gray-200 dark:border-gray-700'
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
            >
              <span className="text-base font-semibold text-gray-900 dark:text-white">
                {item.question}
              </span>
              <svg
                className={`h-5 w-5 flex-shrink-0 text-gray-400 transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <div className="border-t border-gray-100 px-5 pb-5 pt-4 text-sm leading-7 text-gray-600 dark:border-gray-800 dark:text-gray-400">
                  {item.answer}
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}