type ContentBlock =
  | {
      type: 'paragraph';
      text: string;
    }
  | {
      type: 'list';
      items: string[];
      ordered?: boolean;
    };

type RefundSection = {
  id: string;
  title: string;
  blocks: ContentBlock[];
};

const sections: RefundSection[] = [
  {
    id: 'refund-policy',
    title: '1. Refund Policy',
    blocks: [
      {
        type: 'paragraph',
        text: 'We thank you for purchasing a service or product through TaxSuvidhaKendra.com. Please read this Refund Policy together with our Terms and Conditions carefully, as it sets out important information regarding your rights and obligations as a customer of Tax Suvidha Kendra.',
      },
      {
        type: 'paragraph',
        text: 'We make reasonable efforts to provide each service in accordance with the specifications, scope and timelines indicated for that service. However, if for any reason we are unable to provide the purchased service or product, or if there is a clear and demonstrable deficiency in the service delivered by us, you may be eligible for a refund subject to the conditions below.',
      },
      {
        type: 'list',
        items: [
          'Refunds will be considered only where there is a clear, visible and supportable deficiency in the service or product purchased from Tax Suvidha Kendra.',
          'If a customer has paid for a service and later requests a refund only because of a change of mind, the refund request will generally not be accepted where there is no fault, defect or service deficiency attributable to Tax Suvidha Kendra.',
          'Refund requests based on change of mind will not be entertained after the work product, draft, filing, consultation output, document set or service deliverable has been shared or substantially initiated. However, at our discretion, we may allow the amount paid to be adjusted in whole or in part toward another service of equivalent value offered by Tax Suvidha Kendra.',
          'If a refund request is raised 30 days after the purchase has been completed or after we have communicated by email, message or other written communication that the work has been completed, such refund request may be treated as invalid and may not be considered.',
          'Government fees, statutory fees, filing charges, third-party charges, taxes and other out-of-pocket expenses paid or committed on your behalf are generally non-refundable unless recoverable from the relevant authority or provider.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Where a refund request is approved by Tax Suvidha Kendra, the same will be processed and communicated to you by email or another appropriate written mode. Refund processing may take a minimum of 15 business days, although actual credit timelines may vary depending on the banking channel, payment partner or original payment method used for the transaction.',
      },
      {
        type: 'paragraph',
        text: 'We will review refund requests carefully and in good faith. The final decision on eligibility, refund amount, deductions and method of settlement shall remain with Tax Suvidha Kendra after considering the status of the service, work already performed, third-party costs incurred and the reasons given in the refund request.',
      },
    ],
  },
  {
    id: 'grievance',
    title: '2. Grievance Officer',
    blocks: [
      {
        type: 'paragraph',
        text: 'In accordance with applicable consumer protection and e-commerce laws and related rules, if you have any complaint, grievance or refund-related concern, you may contact Tax Suvidha Kendra through the following details:',
      },
      {
        type: 'list',
        items: [
          'Email: info@taxsuvidhakendra.com',
          'Phone: +91 9999 24 1024',
          'Address: Office Number 403, Jain Complex, Opposite Metroplex Mall, Nirman Vihar, Delhi 110092',
          'Website: https://taxsuvidhakendra.com',
        ],
      },
    ],
  },
];

export default function RefundPolicy() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <section className="border-b border-gray-200 bg-gray-50 py-20 dark:border-gray-700 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
            Refund Policy
          </h1>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Last updated: March 20, 2026
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-12">
        <div className="mx-auto max-w-5xl space-y-10 px-4 sm:px-6 lg:px-8">
          {sections.map((section) => (
            <div key={section.id}>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {section.title}
              </h2>

              <div className="mt-4 space-y-4 text-gray-600 dark:text-gray-400">
                {section.blocks.map((block, index) => {
                  if (block.type === 'paragraph') {
                    return <p key={`${section.id}-${index}`}>{block.text}</p>;
                  }

                  const ListTag = block.ordered ? 'ol' : 'ul';
                  const listClassName = block.ordered
                    ? 'list-decimal space-y-2 pl-6'
                    : 'list-disc space-y-2 pl-6';

                  return (
                    <ListTag key={`${section.id}-${index}`} className={listClassName}>
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ListTag>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
