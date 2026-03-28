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
                <div className="grid grid-cols-2 gap-10 py-14 md:grid-cols-5">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-2">
                        <Link href="/" className="inline-flex items-center">
                            <Image
                                src="/whitelogo.png"
                                alt="Tax Suvidha Kendra logo"
                                width={200}
                                height={60}
                                className="object-contain"
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
                                <span className="font-semibold text-slate-200">Address:</span> Shahdara, Near Durga puri Chowk, Delhi, India 110032
                            </p>
                        </div>
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
                            <li>
                                <Link
                                    href="/blogs"
                                    className="text-sm text-slate-400 transition hover:text-white"
                                >
                                    Blogs
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
                                    href="/services"
                                    className="text-sm text-slate-400 transition hover:text-white"
                                >
                                    Registrations
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services"
                                    className="text-sm text-slate-400 transition hover:text-white"
                                >
                                    Compliance
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services"
                                    className="text-sm text-slate-400 transition hover:text-white"
                                >
                                    Taxation
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services"
                                    className="text-sm text-slate-400 transition hover:text-white"
                                >
                                    IPR
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
                                href="https://facebook.com"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition hover:border-slate-500 hover:text-white"
                                aria-label="Facebook"
                            >
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
                                </svg>
                            </a>
                            <a
                                href="https://www.instagram.com/taxsuvidha.kendra/"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition hover:border-slate-500 hover:text-white"
                                aria-label="Instagram"
                            >
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.659.334 3.678 1.315c-.98.98-1.187 2.092-1.245 3.373C2.012 5.668 2 6.077 2 12c0 5.923.012 6.332.07 7.612.058 1.281.265 2.393 1.245 3.373.98.98 2.092 1.187 3.373 1.245C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.281-.058 2.393-.265 3.373-1.245.98-.98 1.187-2.092 1.245-3.373.058-1.28.07-1.689.07-7.612 0-5.923-.012-6.332-.07-7.612-.058-1.281-.265-2.393-1.245-3.373-.98-.98-2.092-1.187-3.373-1.245C15.668.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm7.2-11.162a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
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
