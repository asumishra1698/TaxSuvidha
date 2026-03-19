'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const [showAll, setShowAll] = useState(false);

    return (
        <footer className="border-t border-slate-800 bg-slate-950">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-10 py-14 md:grid-cols-6">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-2">
                        <Link href="/" className="inline-flex items-center">
                            <Image
                                src="/taxlogo.png"
                                alt="Tax Suvidha Kendra logo"
                                width={200}
                                height={60}
                                className="h-12 w-auto object-contain"
                            />
                        </Link>
                        <p className="mt-4 max-w-md text-sm leading-6 text-slate-400">
                            Making tax management simple and accessible for everyone.
                        </p>

                        <div className="mt-6 space-y-2 text-sm text-slate-300">
                            <p>
                                <span className="font-semibold text-slate-200">Phone:</span> +91 9999 24 1024
                            </p>
                            <p>
                                <span className="font-semibold text-slate-200">Email:</span> info@taxsuvidhakendra.com
                            </p>
                            <p>
                                <span className="font-semibold text-slate-200">Address:</span> Office Number 403, Jain Complex, Opposite Metroplex mall, Nirman vihar delhi 110092
                            </p>
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="text-sm font-semibold text-white">
                            Product
                        </h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <Link
                                    href="#"
                                    className="text-sm text-slate-400 transition hover:text-white"
                                >
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-sm text-slate-400 transition hover:text-white"
                                >
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-sm text-slate-400 transition hover:text-white"
                                >
                                    Security
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-sm font-semibold text-white">
                            Company
                        </h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <Link
                                    href="/"
                                    className="text-sm text-slate-400 transition hover:text-white"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/pages/about"
                                    className="text-sm text-slate-400 transition hover:text-white"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/pages/contact"
                                    className="text-sm text-slate-400 transition hover:text-white"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-sm font-semibold text-white">
                            Resources
                        </h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <Link
                                    href="#"
                                    className="text-sm text-slate-400 transition hover:text-white"
                                >
                                    Bookkeeping Guide
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-sm text-slate-400 transition hover:text-white"
                                >
                                    Tax Filing
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-sm text-slate-400 transition hover:text-white"
                                >
                                    GST Returns
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/blogs"
                                    className="text-sm text-slate-400 transition hover:text-white"
                                >
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-sm font-semibold text-white">
                            Legal
                        </h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <Link
                                    href="/pages/privacy-policy"
                                    className="text-sm text-slate-400 transition hover:text-white"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/pages/terms-and-conditions"
                                    className="text-sm text-slate-400 transition hover:text-white"
                                >
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/pages/refund-policy"
                                    className="text-sm text-slate-400 transition hover:text-white"
                                >
                                    Refund Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* View All Toggle */}
                <div className="pt-8 pb-4 flex flex-col items-center gap-3">
                    <p className="text-sm text-slate-500">Income Tax · GST · Trademark · Company Registration &amp; more</p>
                    <button
                        onClick={() => setShowAll((v) => !v)}
                        className="flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900 px-5 py-2 text-sm font-medium text-slate-300 transition hover:border-amber-500 hover:text-amber-400"
                    >
                        {showAll ? 'Hide Services' : 'View All Services'}
                        <svg
                            className={`h-4 w-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
                            fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>

                <div
                    className="overflow-hidden transition-all duration-500 ease-in-out"
                    style={{ maxHeight: showAll ? '9999px' : '0px' }}
                >

                {/* Registrations */}
                <div className="pt-4 pb-2">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-amber-500">Registrations</h3>
                    <div className="mt-4" />
                    <div className="mt-6 grid grid-cols-2 gap-y-3 gap-x-6 sm:grid-cols-4">
                        <Link href="/services/private-limited-company-registration" className="text-sm text-slate-400 transition hover:text-white">Private Limited Company Registration</Link>
                        <Link href="#" className="text-sm text-slate-400 transition hover:text-white">Sole Proprietorship Registration</Link>
                        <Link href="#" className="text-sm text-slate-400 transition hover:text-white">Trust Registration</Link>
                        <Link href="#" className="text-sm text-slate-400 transition hover:text-white">Fssai Registration</Link>
                        <Link href="/services/partnership-firm-registration" className="text-sm text-slate-400 transition hover:text-white">Partnership Firm Registration</Link>
                        <Link href="/services/startup-india-registration" className="text-sm text-slate-400 transition hover:text-white">Startup India Registration</Link>
                        <Link href="#" className="text-sm text-slate-400 transition hover:text-white">Society Registration</Link>
                        <Link href="#" className="text-sm text-slate-400 transition hover:text-white">Nidhi Company Registration</Link>
                        <Link href="/services/llp-registration" className="text-sm text-slate-400 transition hover:text-white">LLP Registration</Link>
                        <Link href="/services/one-person-company-registration" className="text-sm text-slate-400 transition hover:text-white">One Person Company Registration</Link>
                        <Link href="#" className="text-sm text-slate-400 transition hover:text-white">NGO Registration</Link>
                        <Link href="#" className="text-sm text-slate-400 transition hover:text-white">Section 8 Company Registration</Link>
                        <Link href="/services/trade-license" className="text-sm text-slate-400 transition hover:text-white">Trade License</Link>
                        <Link href="#" className="text-sm text-slate-400 transition hover:text-white">Gumasta License</Link>
                        <Link href="#" className="text-sm text-slate-400 transition hover:text-white">Digital Signature Certificate</Link>
                        <Link href="#" className="text-sm text-slate-400 transition hover:text-white">Virtual Office</Link>
                    </div>
                </div>

                {/* Compliance */}
                <div className="pt-4 pb-2">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-amber-500">Compliance</h3>
                    <div className="mt-4" />
                    <div className="mt-6 grid grid-cols-2 gap-y-3 gap-x-6 sm:grid-cols-4">
                        <Link href="/services/llp-annual-compliance" className="text-sm text-slate-400 transition hover:text-white">LLP Annual Compliance</Link>
                        <Link href="/services/epf-registration" className="text-sm text-slate-400 transition hover:text-white">EPF Registration</Link>
                        <Link href="/services/director-appointment" className="text-sm text-slate-400 transition hover:text-white">Director Appointment</Link>
                        <Link href="#" className="text-sm text-slate-400 transition hover:text-white">Change Pvt Ltd Company Name</Link>
                        <Link href="/services/annual-compliance-pvt-ltd" className="text-sm text-slate-400 transition hover:text-white">Annual Compliance for Private Limited Company</Link>
                        <Link href="/services/winding-up-company" className="text-sm text-slate-400 transition hover:text-white">Winding Up of A Company</Link>
                        <Link href="#" className="text-sm text-slate-400 transition hover:text-white">Book Keeping and Accounting Services</Link>
                        <Link href="#" className="text-sm text-slate-400 transition hover:text-white">Shop and Establishment Act Registration</Link>
                        <Link href="/services/udyam-msme-registration" className="text-sm text-slate-400 transition hover:text-white">Udyam (MSME) Registration</Link>
                    </div>
                </div>

                {/* Taxation */}
                <div className="pt-4 pb-2">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-amber-500">Taxation</h3>
                    <div className="mt-4" />
                    <div className="mt-6 grid grid-cols-2 gap-y-3 gap-x-6 sm:grid-cols-4">
                        <Link href="/services/income-tax-return-filing" className="text-sm text-slate-400 transition hover:text-white">Income Tax Return Filing</Link>
                        <Link href="/services/tds-return-filing" className="text-sm text-slate-400 transition hover:text-white">TDS Return Filing</Link>
                        <Link href="/services/gst-registration" className="text-sm text-slate-400 transition hover:text-white">GST Registration</Link>
                        <Link href="/services/gstr-9-filing" className="text-sm text-slate-400 transition hover:text-white">GSTR-9 Filing</Link>
                        <Link href="/services/gst-return-filing" className="text-sm text-slate-400 transition hover:text-white">GST Return Filing</Link>
                        <Link href="/services/pf-return-filing" className="text-sm text-slate-400 transition hover:text-white">PF Return Filing</Link>
                    </div>
                </div>

                {/* IPR */}
                <div className="pt-4 pb-8">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-amber-500">IPR</h3>
                    <div className="mt-4" />
                    <div className="mt-6 grid grid-cols-2 gap-y-3 gap-x-6 sm:grid-cols-4">
                        <Link href="/services/copyright-registration" className="text-sm text-slate-400 transition hover:text-white">Copyright Registration</Link>
                        <Link href="/services/patent-registration" className="text-sm text-slate-400 transition hover:text-white">Patent Registration</Link>
                        <Link href="#" className="text-sm text-slate-400 transition hover:text-white">Trademark Rectification</Link>
                        <Link href="/services/trademark-objection" className="text-sm text-slate-400 transition hover:text-white">Trademark Objection</Link>
                        <Link href="/services/trademark-registration" className="text-sm text-slate-400 transition hover:text-white">Trademark Registration</Link>
                        <Link href="/services/trademark-renewal" className="text-sm text-slate-400 transition hover:text-white">Trademark Renewal</Link>
                        <Link href="/services/international-trademark-registration" className="text-sm text-slate-400 transition hover:text-white">International Trademark Registration</Link>
                    </div>
                </div>

                </div>

                {/* Bottom Section */}
                <div className="border-t border-slate-800 py-2">
                    <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
                        <p className="text-sm text-slate-400">
                            © {currentYear} Tax Suvidha Kendra. All rights reserved.
                        </p>
                        <div className="flex space-x-6">
                            <a
                                href="https://x.com"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition hover:border-slate-500 hover:text-white"
                                aria-label="Twitter"
                            >
                                <svg
                                    className="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-7.029 3.746 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                            </a>
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition hover:border-slate-500 hover:text-white"
                                aria-label="GitHub"
                            >
                                <svg
                                    className="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.543 2.914 1.186.092-.923.35-1.543.636-1.896-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.817a9.56 9.56 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C17.137 18.194 20 14.44 20 10.017 20 4.484 15.522 0 10 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition hover:border-slate-500 hover:text-white"
                                aria-label="LinkedIn"
                            >
                                <svg
                                    className="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M16.337 16.337H13.67v-4.177c0-.996-.363-1.675-1.255-1.675-.684 0-1.09.46-1.27.904-.065.16-.081.384-.081.609v4.338h-2.667V6.716h2.667v.915c.3-.462.823-1.12 2.022-1.12 1.474 0 2.576.975 2.576 3.071v6.756zM2.672 5.715a1.548 1.548 0 11.001-3.096 1.548 1.548 0 01-.001 3.096zm1.287 10.622H1.385V6.716h2.574v9.621zM17.101 0H.894C.368 0 0 .368 0 .894v18.212c0 .526.368.894.894.894h16.207c.526 0 .895-.368.895-.894V.894C18.001.368 17.626 0 17.101 0z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
