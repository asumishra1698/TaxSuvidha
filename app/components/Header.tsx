'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import ConsultationForm from './ConsultationForm';

const SERVICES = [
    {
        category: 'Registrations',
        links: [
            { label: 'Private Limited Company Registration', slug: 'private-limited-company-registration' },
            { label: 'LLP Registration', slug: 'llp-registration' },
            { label: 'Partnership Firm Registration', slug: 'partnership-firm-registration' },
            { label: 'One Person Company Registration', slug: 'one-person-company-registration' },
            { label: 'Startup India Registration', slug: 'startup-india-registration' },
            { label: 'Trade License', slug: 'trade-license' },
        ],
    },
    {
        category: 'Compliance',
        links: [
            { label: 'LLP Annual Compliance', slug: 'llp-annual-compliance' },
            { label: 'Annual Compliance for Pvt Ltd', slug: 'annual-compliance-pvt-ltd' },
            { label: 'EPF Registration', slug: 'epf-registration' },
            { label: 'Udyam (MSME) Registration', slug: 'udyam-msme-registration' },
            { label: 'Director Appointment', slug: 'director-appointment' },
            { label: 'Winding Up of A Company', slug: 'winding-up-company' },
        ],
    },
    {
        category: 'Taxation',
        links: [
            { label: 'Income Tax Return Filing', slug: 'income-tax-return-filing' },
            { label: 'GST Registration', slug: 'gst-registration' },
            { label: 'GST Return Filing', slug: 'gst-return-filing' },
            { label: 'TDS Return Filing', slug: 'tds-return-filing' },
            { label: 'GSTR-9 Filing', slug: 'gstr-9-filing' },
            { label: 'PF Return Filing', slug: 'pf-return-filing' },
        ],
    },
    {
        category: 'IPR',
        links: [
            { label: 'Trademark Registration', slug: 'trademark-registration' },
            { label: 'Copyright Registration', slug: 'copyright-registration' },
            { label: 'Patent Registration', slug: 'patent-registration' },
            { label: 'Trademark Renewal', slug: 'trademark-renewal' },
            { label: 'Trademark Objection', slug: 'trademark-objection' },
            { label: 'International Trademark Registration', slug: 'international-trademark-registration' },
        ],
    },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const [isConsultationOpen, setIsConsultationOpen] = useState(false);
    const servicesCloseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const closeMobileMenu = () => {
        setIsMenuOpen(false);
        setMobileServicesOpen(false);
    };

    const openConsultationModal = () => {
        setIsConsultationOpen(true);
    };

    const openConsultationFromMobileMenu = () => {
        closeMobileMenu();
        setIsConsultationOpen(true);
    };

    const closeConsultationModal = () => {
        setIsConsultationOpen(false);
    };

    const openServicesMenu = () => {
        if (servicesCloseTimeoutRef.current) {
            clearTimeout(servicesCloseTimeoutRef.current);
            servicesCloseTimeoutRef.current = null;
        }
        setIsServicesOpen(true);
    };

    const closeServicesMenu = () => {
        servicesCloseTimeoutRef.current = setTimeout(() => {
            setIsServicesOpen(false);
        }, 180);
    };

    useEffect(() => {
        return () => {
            if (servicesCloseTimeoutRef.current) {
                clearTimeout(servicesCloseTimeoutRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!isMenuOpen && !isConsultationOpen) {
            return;
        }

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, [isMenuOpen, isConsultationOpen]);

    useEffect(() => {
        if (!isConsultationOpen) {
            return;
        }

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closeConsultationModal();
            }
        };

        window.addEventListener('keydown', handleEscape);
        return () => {
            window.removeEventListener('keydown', handleEscape);
        };
    }, [isConsultationOpen]);

    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm dark:bg-black">
            <nav className="mx-auto max-w-7xl px-0 sm:px-06 lg:px-0">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/taxlogo.png"
                            alt="Tax Suvidha Kendra logo"
                            width={260}
                            height={80}
                            priority
                            className="h-15 w-auto object-contain"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center space-x-8 md:flex">
                        <Link
                                href="/"
                            className="text-gray-600 transition hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                        >
                            Home
                        </Link>

                        {/* Services Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={openServicesMenu}
                            onMouseLeave={closeServicesMenu}
                        >
                            <button className="flex items-center gap-1 text-gray-600 transition hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                                Services
                                <svg
                                    className={`h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Mega Dropdown */}
                            <div
                                className={`absolute left-1/2 top-full z-50 w-[min(92vw,860px)] -translate-x-1/2 rounded-2xl border border-gray-100 bg-white p-6 shadow-2xl transition-all duration-200 ease-in-out dark:border-slate-700 dark:bg-slate-900 ${isServicesOpen
                                        ? 'pointer-events-auto translate-y-0 opacity-100'
                                        : 'pointer-events-none -translate-y-2 opacity-0'
                                    }`}
                            >
                                <div className="grid grid-cols-4 gap-6">
                                    {SERVICES.map((section) => (
                                        <div key={section.category}>
                                            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-amber-500">
                                                {section.category}
                                            </p>
                                            <ul className="space-y-2">
                                                {section.links.map((link) => (
                                                    <li key={link.slug}>
                                                        <Link
                                                            href={`/services/${link.slug}`}
                                                            className="text-[14px] text-gray-600 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-white"
                                                        >
                                                            {link.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-5 border-t border-gray-100 pt-4 dark:border-slate-700">
                                    <Link
                                        href="/services"
                                        className="inline-flex items-center gap-1 text-[14px] font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                                    >
                                        View all 24 services →
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <Link
                            href="/blogs"
                            className="text-gray-600 transition hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                        >
                            Blog
                        </Link>
                        <Link
                            href="/pages/about"
                            className="text-gray-600 transition hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                        >
                            About
                        </Link>
                        <Link
                            href="/pages/contact"
                            className="text-gray-600 transition hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden items-center space-x-4 md:flex">
                        <button
                            type="button"
                            onClick={openConsultationModal}
                            className="btn-primary px-6 py-2"
                        >
                            Get Started
                        </button>
                    </div>

                    {/* Mobile Actions */}
                    <div className="mr-4 flex items-center gap-3 md:hidden">
                        <a
                            href="https://wa.me/919999241024"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Chat on WhatsApp"
                            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white shadow-sm transition hover:bg-green-600"
                        >
                            <svg
                                className="h-5 w-5"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path d="M20.52 3.48A11.86 11.86 0 0012.07 0C5.52 0 .18 5.34.18 11.9c0 2.1.55 4.16 1.6 5.98L0 24l6.3-1.65a11.84 11.84 0 005.77 1.48h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.17-3.45-8.45ZM12.08 21.8h-.01a9.8 9.8 0 01-4.99-1.37l-.36-.21-3.74.98 1-3.64-.24-.37a9.82 9.82 0 01-1.5-5.27c0-5.43 4.42-9.85 9.86-9.85 2.63 0 5.1 1.02 6.95 2.89a9.79 9.79 0 012.88 6.96c0 5.43-4.42 9.86-9.85 9.86Zm5.4-7.36c-.3-.15-1.77-.88-2.04-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.95 1.18-.17.2-.35.22-.65.08-.3-.15-1.28-.47-2.44-1.5a9.1 9.1 0 01-1.7-2.1c-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.67-1.62-.92-2.21-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.53.08-.8.38-.28.3-1.06 1.03-1.06 2.51 0 1.48 1.08 2.91 1.23 3.11.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.07-.12-.27-.2-.57-.35Z" />
                            </svg>
                        </a>

                        <button
                            onClick={() => setIsMenuOpen((open) => !open)}
                            aria-label="Toggle menu"
                            aria-expanded={isMenuOpen}
                        >
                            <svg
                                className="h-6 w-6 text-gray-600 dark:text-gray-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

            </nav>

            {/* Mobile Sidebar Menu */}
            <div className="md:hidden">
                <button
                    type="button"
                    aria-label="Close mobile menu overlay"
                    onClick={closeMobileMenu}
                    className={`fixed inset-0 z-40 bg-black/45 transition-opacity duration-300 ${isMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
                        }`}
                />

                <aside
                    className={`fixed right-0 top-0 z-50 flex h-dvh w-[86vw] max-w-sm transform flex-col border-l border-gray-200 bg-white p-5 shadow-2xl transition-transform duration-300 ease-out dark:border-slate-700 dark:bg-black ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                    aria-hidden={!isMenuOpen}
                >
                    <div className="flex items-center justify-between border-b border-gray-200 pb-4 dark:border-slate-700">
                        <p className="text-sm font-bold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">Menu</p>
                        <button
                            type="button"
                            onClick={closeMobileMenu}
                            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-lg leading-none text-gray-700 transition hover:bg-gray-100 dark:border-slate-600 dark:text-gray-200 dark:hover:bg-slate-900"
                            aria-label="Close mobile menu"
                        >
                            ✕
                        </button>
                    </div>

                    <div className="mt-4 min-h-0 flex-1 space-y-2 overflow-y-auto pb-8">
                        <Link
                            href="/"
                            onClick={closeMobileMenu}
                            className="block rounded-lg px-4 py-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-900"
                        >
                            Home
                        </Link>

                        {/* Mobile Services Accordion */}
                        <div>
                            <button
                                onClick={() => setMobileServicesOpen((v) => !v)}
                                className="flex w-full items-center justify-between rounded-lg px-4 py-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-900"
                                aria-expanded={mobileServicesOpen}
                            >
                                Services
                                <svg
                                    className={`h-4 w-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div
                                className={`grid transition-all duration-300 ease-in-out ${mobileServicesOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                                    }`}
                            >
                                <div className="overflow-hidden">
                                    <div className="mt-1 space-y-4 rounded-lg bg-gray-50 px-4 py-3 dark:bg-slate-900">
                                        {SERVICES.map((section) => (
                                            <div key={section.category}>
                                                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-amber-500">
                                                    {section.category}
                                                </p>
                                                <ul className="space-y-1">
                                                    {section.links.map((link) => (
                                                        <li key={link.slug}>
                                                            <Link
                                                                href={`/services/${link.slug}`}
                                                                onClick={closeMobileMenu}
                                                                className="block text-sm text-gray-600 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-white"
                                                            >
                                                                {link.label}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                        <Link
                                            href="/services"
                                            onClick={closeMobileMenu}
                                            className="mt-2 block text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400"
                                        >
                                            View all services →
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Link
                            href="/blogs"
                            onClick={closeMobileMenu}
                            className="block rounded-lg px-4 py-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-900"
                        >
                            Blog
                        </Link>
                        <Link
                            href="/pages/about"
                            onClick={closeMobileMenu}
                            className="block rounded-lg px-4 py-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-900"
                        >
                            About
                        </Link>
                        <Link
                            href="/pages/contact"
                            onClick={closeMobileMenu}
                            className="block rounded-lg px-4 py-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-900"
                        >
                            Contact
                        </Link>
                        <button
                            type="button"
                            onClick={openConsultationFromMobileMenu}
                            className="btn-primary w-full px-4 py-2"
                        >
                            Get Started
                        </button>
                    </div>
                </aside>
            </div>

            {/* Consultation Popup */}
            <div
                className={`fixed inset-0 z-[70] flex items-center justify-center overflow-y-auto p-3 transition-all duration-300 sm:p-6 ${isConsultationOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
                    }`}
                aria-hidden={!isConsultationOpen}
            >
                <button
                    type="button"
                    aria-label="Close consultation popup"
                    onClick={closeConsultationModal}
                    className={`absolute inset-0 bg-black/55 transition-opacity duration-300 ${isConsultationOpen ? 'opacity-100' : 'opacity-0'
                        }`}
                />

                <div
                    className={`relative z-[71] my-auto w-full max-w-lg transform overflow-hidden rounded-2xl transition-all duration-300 max-sm:max-h-[calc(100dvh-1.5rem)] sm:max-h-[calc(100dvh-3rem)] ${isConsultationOpen ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-5 scale-95 opacity-0'
                        }`}
                    onClick={(event) => event.stopPropagation()}
                >
                    <button
                        type="button"
                        onClick={closeConsultationModal}
                        className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white/95 text-lg leading-none text-gray-700 shadow-md transition hover:bg-gray-100 dark:border-slate-600 dark:bg-slate-900/95 dark:text-gray-200 dark:hover:bg-slate-800"
                        aria-label="Close consultation popup"
                    >
                        ✕
                    </button>

                    <div className="modal-form-scroll max-h-[calc(100dvh-1.5rem)] overflow-y-auto sm:max-h-[calc(100dvh-3rem)]">
                        <ConsultationForm onSuccess={closeConsultationModal} />
                    </div>
                </div>
            </div>
        </header>
    );
}
