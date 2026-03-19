type ContentBlock =
  | {
      type: 'paragraph';
      text: string;
    }
  | {
      type: 'list';
      items: string[];
      ordered?: boolean;
    }
  | {
      type: 'subheading';
      text: string;
    };

type TermsSection = {
  id: string;
  title: string;
  blocks: ContentBlock[];
};

const sections: TermsSection[] = [
  {
    id: 'i',
    title: 'I. Welcome to TaxSuvidhaKendra.com',
    blocks: [
      {
        type: 'paragraph',
        text: 'Since we may not meet face to face, it is important to set out the terms of this agreement clearly in advance. In these terms, Tax Suvidha Kendra, TaxSuvidhaKendra.com, we, us, and our refer to the website, platform and related services made available through Tax Suvidha Kendra. You and your refer to the user of the website or services. Advisor refers to advocates, advisors, chartered accountants, company secretaries, tax professionals and other independent professionals who may be introduced or connected through the platform.',
      },
      {
        type: 'paragraph',
        text: 'If you have any questions about Tax Suvidha Kendra, please contact us before using the service. By using the website, submitting an enquiry, purchasing a service, uploading information, or otherwise interacting with our platform, you agree to these terms and conditions.',
      },
      {
        type: 'paragraph',
        text: 'If you use any document generation tools, templates, checklists or similar self-service features provided on the platform, you confirm that you are at least 18 years old and are fully capable of entering into binding obligations and understanding the implications of generating or requesting such documents. If you require help, please contact our team before proceeding.',
      },
    ],
  },
  {
    id: 'ii',
    title: 'II. Tax Suvidha Kendra Only Provides a Medium for Interaction',
    blocks: [
      {
        type: 'paragraph',
        text: 'Tax Suvidha Kendra is an online platform that facilitates communication between users and professionals who may offer tax, compliance, registration, legal, accounting, documentation and related advisory services. We provide a venue through which users and professionals may exchange information and, where appropriate, move toward a direct professional engagement.',
      },
      {
        type: 'paragraph',
        text: 'Tax Suvidha Kendra does not guarantee that a user will successfully find or engage an Advisor through the platform. We do not guarantee the completion of any engagement, the quality of the services provided by an Advisor, or the outcome of any legal, tax, regulatory or compliance matter. Users are solely responsible for evaluating the qualifications, integrity, trustworthiness and suitability of any professional they decide to engage.',
      },
      {
        type: 'subheading',
        text: '(a) No advisor-client or professional-client relationship with Tax Suvidha Kendra',
      },
      {
        type: 'paragraph',
        text: 'Tax Suvidha Kendra is not itself your advocate, chartered accountant, company secretary, tax consultant or legal representative unless expressly agreed in writing in a separate engagement. Any communication sent to Tax Suvidha Kendra alone does not create an advisor-client, attorney-client, accountant-client, consultant-client or fiduciary relationship with us.',
      },
      {
        type: 'subheading',
        text: '(b) No promotion of any user or professional',
      },
      {
        type: 'paragraph',
        text: 'The website is not intended to be a source of solicitation or guaranteed endorsement. We may display or recommend professionals based on the information available to us and the user requirements submitted through the platform, but such listing or recommendation should not be treated as a warranty, certification or representation of quality, specialization or suitability.',
      },
      {
        type: 'subheading',
        text: '(c) No avenue for improper solicitation',
      },
      {
        type: 'paragraph',
        text: 'We may limit the visibility of private user details until the user chooses to proceed directly with a professional. Professionals using the platform are not permitted to misuse personal data or access restricted user information outside the scope of the platform rules.',
      },
      {
        type: 'subheading',
        text: '(d) No professional advice through general content',
      },
      {
        type: 'paragraph',
        text: 'Any FAQs, blog content, checklists, document tools, website pages or general communications are for informational purposes only and do not amount to legal, tax, accounting, financial or compliance advice. Users should obtain specific advice from a qualified professional before acting on any information found on the website.',
      },
      {
        type: 'subheading',
        text: '(e) Limited license for personal or client use',
      },
      {
        type: 'paragraph',
        text: 'Where Tax Suvidha Kendra provides forms, templates, drafts or generated documents, you receive a limited, personal, non-exclusive, non-transferable license to use those materials for your own internal personal or business use, or for the use of your client where you are authorized to act for such client. You may not resell, redistribute, publish, commercially exploit or create derivative products from those materials without prior written consent from Tax Suvidha Kendra.',
      },
      {
        type: 'subheading',
        text: '(f) No representation about independent professionals',
      },
      {
        type: 'paragraph',
        text: 'Tax Suvidha Kendra makes no representation, guarantee or warranty, express or implied, regarding the competence, standing, license status, responsiveness, quality of work or outcome that may be delivered by any independent professional listed on or introduced through the platform. Unless clearly stated otherwise, such professionals are not employees or agents of Tax Suvidha Kendra.',
      },
    ],
  },
  {
    id: 'iii',
    title: 'III. User Guidelines',
    blocks: [
      {
        type: 'paragraph',
        text: 'Users are granted a non-exclusive, limited right to access and use the website in accordance with these terms. To keep the platform useful and safe for everyone, users must comply with the following rules. Tax Suvidha Kendra reserves the right to suspend or terminate access for violation of these rules, for repeated complaints, or for any misuse of the service.',
      },
      {
        type: 'list',
        items: [
          'Do not use foul, abusive, threatening, vulgar, obscene or otherwise inappropriate language.',
          'Do not post racist, hateful, discriminatory or offensive content.',
          'Do not promote illegal activity or provide instructions for unlawful acts or physical harm.',
          'Do not defame any individual or group.',
          'Do not infringe any copyright, trademark, patent, trade secret or other intellectual property rights.',
          'Do not violate applicable internet standards, laws or regulations.',
          'Do not upload or transmit malware, spam, chain letters, unsolicited promotional material or deceptive content.',
          'Do not interfere with, disrupt or attempt to compromise the security of the platform, servers or connected networks.',
          'Do not attempt to gain unauthorized access to private areas of the system, other users accounts or restricted information.',
        ],
      },
    ],
  },
  {
    id: 'iv',
    title: 'IV. Disclaimer of Information Obtained on the Service and User-Supplied Content',
    blocks: [
      {
        type: 'subheading',
        text: '(a) Information available on the service',
      },
      {
        type: 'paragraph',
        text: 'Tax Suvidha Kendra is intended as an informational resource and facilitation platform. While we aim to keep information accurate, complete and current, we do not promise or guarantee that all website content, templates, articles, explanations, pricing, turnaround times or service descriptions are error-free, complete, current or suitable for every situation. Laws, procedures and requirements can vary by jurisdiction, department, regulator and facts of each case.',
      },
      {
        type: 'paragraph',
        text: 'Links to third party websites are provided only as a convenience. They do not constitute a referral, endorsement, certification or affiliation unless expressly stated. Tax Suvidha Kendra is not responsible for the content, availability or practices of any third party site.',
      },
      {
        type: 'paragraph',
        text: 'Although we may make reasonable efforts to verify some information about professionals who use the platform, we do not continuously track or monitor their standing, registrations, discipline history or current eligibility to practice. Users should independently verify credentials and suitability before engagement.',
      },
      {
        type: 'subheading',
        text: '(b) Reviews, comments and user content',
      },
      {
        type: 'paragraph',
        text: 'At various places on the website, users may be allowed to submit reviews, comments, messages, documents or other content. Tax Suvidha Kendra is not the author of such content and is not responsible for it. We reserve the right, but not the obligation, to remove content that we consider unlawful, misleading, offensive, abusive, infringing or otherwise inappropriate.',
      },
    ],
  },
  {
    id: 'v',
    title: 'V. Limitations on Use',
    blocks: [
      {
        type: 'paragraph',
        text: 'The contents of Tax Suvidha Kendra are for personal, internal business or authorized client-service use only and may not be commercially exploited except as expressly permitted in writing. You may not decompile, reverse engineer, disassemble, rent, lease, loan, sell, sublicense, scrape, data mine or create derivative works from the website, software, forms, templates or other materials available through the platform.',
      },
      {
        type: 'paragraph',
        text: 'You may not use robots, spiders, automated systems or manual processes to monitor, reproduce, republish, extract or copy site content without prior written permission. Any unauthorized use of the website or its content is prohibited.',
      },
    ],
  },
  {
    id: 'vi',
    title: 'VI. Confidentiality',
    blocks: [
      {
        type: 'paragraph',
        text: 'Tax Suvidha Kendra makes reasonable efforts to maintain the confidentiality of information submitted by users. However, internet transmissions and email are not completely secure, and the use of online systems for sensitive or confidential information always involves risk. We therefore cannot guarantee absolute confidentiality, security or non-disclosure in all circumstances.',
      },
      {
        type: 'paragraph',
        text: 'Users should avoid submitting confessions, admissions or highly sensitive personal, financial or dispute-related details unless necessary. Where possible, describe issues in general terms at the initial stage and disclose detailed information only after selecting and directly engaging the relevant professional through appropriate channels.',
      },
    ],
  },
  {
    id: 'vii',
    title: 'VII. Indemnification',
    blocks: [
      {
        type: 'paragraph',
        text: 'You agree that Tax Suvidha Kendra is not responsible for losses caused by your use of the service in violation of these terms. You agree to indemnify, defend and hold harmless Tax Suvidha Kendra, its founders, officers, employees, consultants and affiliates from and against any and all claims, liabilities, losses, damages, demands, costs and expenses, including reasonable legal fees, arising out of or connected with your use of the platform, your content, your communications, your breach of these terms or your violation of any law or third-party rights.',
      },
    ],
  },
  {
    id: 'viii',
    title: 'VIII. Communications and Other Data',
    blocks: [
      {
        type: 'paragraph',
        text: 'Tax Suvidha Kendra is not responsible for any loss of data resulting from accidental deletion, delayed transmission, network outage, hosting failure, backup failure, file corruption, technical malfunction, cyber incident or any other cause beyond our reasonable control.',
      },
    ],
  },
  {
    id: 'ix',
    title: 'IX. License of Your Content to Tax Suvidha Kendra',
    blocks: [
      {
        type: 'paragraph',
        text: 'By uploading content, documents, text, information, feedback or other materials to the platform, you grant Tax Suvidha Kendra a worldwide, royalty-free, non-exclusive license to host, store, reproduce, adapt, process and use that content to operate, improve and provide the service requested by you, subject to our privacy commitments and applicable law. You represent that you have the right to submit such content and to grant this license.',
      },
    ],
  },
  {
    id: 'x',
    title: 'X. Tax Suvidha Kendra Proprietary Rights',
    blocks: [
      {
        type: 'paragraph',
        text: 'Except as expressly provided in these terms, nothing on the website grants any license or right in any copyright, trademark, trade dress, logo, software, design, document, format, interface, service mark or other intellectual property belonging to Tax Suvidha Kendra. All materials on the website are protected by applicable intellectual property laws. Users may use such materials only as expressly permitted by these terms or by prior written authorization.',
      },
    ],
  },
  {
    id: 'xi',
    title: 'XI. Linking to TaxSuvidhaKendra.com',
    blocks: [
      {
        type: 'paragraph',
        text: 'Users may link to the homepage of TaxSuvidhaKendra.com provided they do not frame, misrepresent, obscure or otherwise alter the appearance or ownership of the site. We reserve the right to request removal of any link at any time.',
      },
    ],
  },
  {
    id: 'xii',
    title: 'XII. Advertisers',
    blocks: [
      {
        type: 'paragraph',
        text: 'The website may contain advertising, sponsorship or partner information. Advertisers and sponsors are responsible for ensuring that materials submitted by them comply with applicable law. Tax Suvidha Kendra is not responsible for any illegality, inaccuracy or omission in such third-party materials.',
      },
    ],
  },
  {
    id: 'xiii',
    title: 'XIII. Registration',
    blocks: [
      {
        type: 'paragraph',
        text: 'Certain sections of the website may require registration or the submission of personal details. If registration is requested, you agree to provide accurate, current and complete information and to update it when necessary. You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account. Unauthorized sharing of account access is prohibited.',
      },
    ],
  },
  {
    id: 'xiv',
    title: 'XIV. Errors and Corrections',
    blocks: [
      {
        type: 'paragraph',
        text: 'Tax Suvidha Kendra does not represent or warrant that the service will be error-free, uninterrupted, free of harmful components or that defects will be corrected immediately. We may make improvements, modifications, corrections or changes to any feature, content or service at any time without prior notice.',
      },
    ],
  },
  {
    id: 'xv',
    title: 'XV. Third Party Content',
    blocks: [
      {
        type: 'paragraph',
        text: 'Third-party content may appear on the website or be accessible through links. Tax Suvidha Kendra is not responsible for any errors, omissions, falsehoods, defamatory statements, unlawful claims or offensive material contained in such content. Third-party views do not necessarily reflect our views.',
      },
    ],
  },
  {
    id: 'xvi',
    title: 'XVI. Unlawful Activity',
    blocks: [
      {
        type: 'paragraph',
        text: 'Tax Suvidha Kendra reserves the right to investigate complaints and suspected violations of these terms and to take any action we deem appropriate, including reporting suspected unlawful activity to law enforcement authorities, regulators or other relevant third parties and disclosing information as required by law or reasonably necessary to protect our rights, users or the public.',
      },
    ],
  },
  {
    id: 'xvii',
    title: 'XVII. Remedies for Violations',
    blocks: [
      {
        type: 'paragraph',
        text: 'We reserve the right to seek all remedies available at law and in equity for violations of these terms, including suspension or termination of access, blocking of IP addresses, removal of content and legal action where appropriate.',
      },
    ],
  },
  {
    id: 'xviii',
    title: 'XVIII. Conflict Checks',
    blocks: [
      {
        type: 'paragraph',
        text: 'Users understand that independent professionals contacted through the platform may not be able to conduct a full conflict-of-interest check before an initial response is given. A full conflict check may require the user to provide additional identifying information, names of related entities, names of counterparties and other relevant details. Tax Suvidha Kendra does not perform conflict checks on behalf of independent professionals.',
      },
    ],
  },
  {
    id: 'xix',
    title: 'XIX. Severability of Provisions',
    blocks: [
      {
        type: 'paragraph',
        text: 'If any provision of these terms is found to be unlawful, void or unenforceable, that provision shall be deemed severable and the remaining provisions shall remain valid and enforceable to the fullest extent permitted by law.',
      },
    ],
  },
  {
    id: 'xx',
    title: 'XX. Modifications to Terms of Use',
    blocks: [
      {
        type: 'paragraph',
        text: 'Tax Suvidha Kendra may revise these terms at any time. Updated terms become effective when posted on the website unless otherwise stated. Continued use of the website after changes are posted constitutes acceptance of the revised terms.',
      },
    ],
  },
  {
    id: 'xxi',
    title: 'XXI. Modifications to Service',
    blocks: [
      {
        type: 'paragraph',
        text: 'Tax Suvidha Kendra reserves the right to modify, suspend or discontinue any part of the service, temporarily or permanently, with or without notice. We shall not be liable to any user or third party for any modification, suspension or discontinuance of the service.',
      },
    ],
  },
  {
    id: 'xxii',
    title: 'XXII. Disclaimer of Warranties and Limitation of Liability',
    blocks: [
      {
        type: 'paragraph',
        text: 'Use of the service is at your sole risk. The service is provided on an as is and as available basis. To the fullest extent permitted by law, Tax Suvidha Kendra disclaims all warranties, whether express or implied, including warranties of merchantability, fitness for a particular purpose, title, non-infringement, accuracy and uninterrupted availability.',
      },
      {
        type: 'paragraph',
        text: 'Tax Suvidha Kendra makes no warranty that the service will meet your requirements, that the service will be uninterrupted, secure or error-free, that any defects will be corrected, or that the results obtained from use of the service will be accurate or reliable.',
      },
      {
        type: 'paragraph',
        text: 'To the fullest extent permitted by law, Tax Suvidha Kendra shall not be liable for any direct, indirect, incidental, special, exemplary, punitive or consequential damages, including loss of profits, loss of business, loss of data, service interruption or procurement of substitute services, arising out of or relating to the use of or inability to use the service, even if advised of the possibility of such damages.',
      },
    ],
  },
  {
    id: 'xxiii',
    title: 'XXIII. Arbitration and Governing Law',
    blocks: [
      {
        type: 'paragraph',
        text: 'Any controversy, claim or dispute arising out of or relating to these terms or the services of Tax Suvidha Kendra shall be governed by the laws of India. The parties shall first attempt to resolve disputes amicably. Failing such resolution, the dispute may be referred to arbitration in accordance with applicable Indian law. Subject to applicable law and the arbitration provisions, the courts at Delhi shall have jurisdiction over disputes arising from or relating to these terms and the website.',
      },
    ],
  },
  {
    id: 'xxiv',
    title: 'XXIV. Ownership',
    blocks: [
      {
        type: 'paragraph',
        text: 'This site is owned and operated by Tax Suvidha Kendra. All rights, title and interest in the website and its materials, including documents, graphics, layout, logos, designs, text, software and other content, belong to Tax Suvidha Kendra or its licensors unless otherwise stated. No part of the website may be copied, reproduced, republished, uploaded, posted, displayed, transmitted or distributed without prior written permission, except as permitted by law or these terms.',
      },
    ],
  },
  {
    id: 'xxv',
    title: 'XXV. Entire Agreement',
    blocks: [
      {
        type: 'paragraph',
        text: 'These terms, together with the Privacy Policy, Refund Policy and any additional service-specific terms expressly incorporated by reference, constitute the entire agreement between you and Tax Suvidha Kendra regarding use of the website and services and supersede prior communications or understandings relating to the same subject matter.',
      },
    ],
  },
  {
    id: 'xxvi',
    title: 'XXVI. Additional Indemnification',
    blocks: [
      {
        type: 'paragraph',
        text: 'You agree to defend, indemnify and hold harmless Tax Suvidha Kendra, its officers, directors, employees, agents, consultants and affiliates from and against any claims, liabilities, damages, losses and expenses, including reasonable legal fees and costs, arising out of or in any way connected with your access to or use of the website, your submitted content, your violation of law or your breach of these terms.',
      },
    ],
  },
  {
    id: 'xxvii',
    title: 'XXVII. Cancellation and Refund Policy',
    blocks: [
      {
        type: 'paragraph',
        text: 'Tax Suvidha Kendra strives to deliver services at reasonable and competitive rates. However, refund requests may arise where you decide not to proceed after payment, where there is a delay directly attributable to us beyond the committed timeline, or where you believe the service delivered by us is unsatisfactory.',
      },
      {
        type: 'paragraph',
        text: 'Refund requests must be submitted by email with the relevant order, enquiry or ticket details. Only the professional fee or service fee component paid for the relevant service may be considered for refund, and any government fees, statutory charges, filing fees, third-party costs or other non-refundable out-of-pocket expenses may be excluded.',
      },
      {
        type: 'paragraph',
        text: 'Refund requests are reviewed by our management team and the final decision will depend on the nature of the service, the stage of work completed, documents already processed, third-party costs incurred and the reasons stated in the request. Circumstances outside our reasonable control, including government delays, regulatory processing delays, public holidays, internet failures, power failures, force majeure events, labour disputes, technical outages, cyber incidents and similar events, shall not create refund liability on our part.',
      },
      {
        type: 'paragraph',
        text: 'If a refund is approved, we may request bank or payment details necessary to process the refund. Approved refunds are typically processed within 48 to 72 working hours after receipt of complete and correct refund information, although final credit timelines depend on the banking or payment network involved.',
      },
    ],
  },
  {
    id: 'xxviii',
    title: 'XXVIII. Grievance Officer and Contact Details',
    blocks: [
      {
        type: 'paragraph',
        text: 'If you have a complaint, grievance, legal notice or compliance-related concern, please contact Tax Suvidha Kendra using the details below. We will review and respond in accordance with applicable law and our internal escalation process.',
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

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <section className="border-b border-gray-200 bg-gray-50 py-20 dark:border-gray-700 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
            Terms and Conditions
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

                  if (block.type === 'subheading') {
                    return (
                      <h3
                        key={`${section.id}-${index}`}
                        className="pt-2 text-lg font-semibold text-gray-900 dark:text-white"
                      >
                        {block.text}
                      </h3>
                    );
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
