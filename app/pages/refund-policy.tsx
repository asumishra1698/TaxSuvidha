export default function RefundPolicy() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      {/* Header Section */}
      <section className="border-b border-gray-200 bg-gray-50 py-20 dark:border-gray-700 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
            Refund Policy
          </h1>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Last updated: March 18, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Refund Policy Overview
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              At Tax Suvidha Kendra, we stand behind our services and want you to be completely satisfied. We offer a comprehensive refund policy to ensure your peace of mind when using our platform.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              30-Day Money-Back Guarantee
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              We offer a full refund within 30 days of your purchase if you are not completely satisfied with our services, no questions asked. This applies to all subscription plans and one-time service fees.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Refund Eligibility
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              To be eligible for a refund, the following conditions must be met:
            </p>
            <ul className="mt-4 space-y-2 list-disc list-inside text-gray-600 dark:text-gray-400">
              <li>Refund request must be made within 30 days of purchase</li>
              <li>Your account must not have submitted a tax return that was filed with tax authorities</li>
              <li>You must provide a valid reason for the refund request</li>
              <li>Original payment method will be used for refunds</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Non-Refundable Items
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              The following items are non-refundable:
            </p>
            <ul className="mt-4 space-y-2 list-disc list-inside text-gray-600 dark:text-gray-400">
              <li>Tax returns that have been filed with tax authorities</li>
              <li>Services rendered in full where the customer has benefited</li>
              <li>Promotional or discounted pricing (refunds are based on full price)</li>
              <li>Rush fees or expedited processing charges</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Refund Process
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              To request a refund, please follow these steps:
            </p>
            <ol className="mt-4 space-y-2 list-decimal list-inside text-gray-600 dark:text-gray-400">
              <li>Contact our support team at refunds@Tax Suvidha Kendra.com</li>
              <li>Provide your order number and reason for the refund</li>
              <li>Our team will review your request within 2-3 business days</li>
              <li>If approved, your refund will be processed to your original payment method</li>
              <li>Refunds typically appear within 5-10 business days</li>
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Subscription Cancellations
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              If you cancel your subscription:
            </p>
            <ul className="mt-4 space-y-2 list-disc list-inside text-gray-600 dark:text-gray-400">
              <li>You will not be charged for the next billing cycle</li>
              <li>Your access will continue until the end of your current billing period</li>
              <li>Early cancellation charges may apply depending on your plan</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Contact Us
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              If you have any questions about our refund policy, please contact us:
            </p>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Email: refunds@Tax Suvidha Kendra.com<br />
              Phone: +1 (555) 123-4567<br />
              Support Hours: 24/7
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
