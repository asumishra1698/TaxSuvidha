'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type Testimonial = {
    id: number;
    name: string;
    profile: string;
    message: string;
    rating: number;
    image: string;
};

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Aarav Mehta',
        profile: 'Startup Founder, Delhi',
        message:
            'Tax Suvidha Kendra made our company registration and GST setup absolutely smooth. Tax Suvidha team guided us at every step.',
        rating: 5,
        image:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    },
    {
        id: 2,
        name: 'Priya Sharma',
        profile: 'Freelancer, Mumbai',
        message:
            'I had zero clarity on tax filing, but Tax Suvidha explained everything in simple language and filed on time.',
        rating: 5,
        image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
    },
    {
        id: 3,
        name: 'Rohan Verma',
        profile: 'SME Owner, Jaipur',
        message:
            'Transparent pricing and very responsive support. We now rely on Tax Suvidha for monthly compliance and accounting.',
        rating: 5,
        image:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    },
    {
        id: 4,
        name: 'Neha Kapoor',
        profile: 'Consultant, Pune',
        message:
            'Excellent service quality and fast turnaround. Tax Suvidha online consultation is truly reliable and practical.',
        rating: 4,
        image:
            'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=300&q=80',
    },
    {
        id: 5,
        name: 'Siddharth Jain',
        profile: 'Director, Noida',
        message:
            'From trademark filing to annual returns, Tax Suvidha execution is detailed and professional. Highly recommended.',
        rating: 5,
        image:
            'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=300&q=80',
    },
    {
        id: 6,
        name: 'Ananya Rao',
        profile: 'Boutique Owner, Bengaluru',
        message:
            'Tax Suvidha made GST returns simple for us and saved us from late filing penalties. Tax Suvidha support team is great.',
        rating: 5,
        image:
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
    },
    {
        id: 7,
        name: 'Kunal Arora',
        profile: 'Retail Business, Chandigarh',
        message:
            'Very quick responses and accurate work. Tax Suvidha team helped us clean up pending compliance in just weeks.',
        rating: 4,
        image:
            'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80',
    },
    {
        id: 8,
        name: 'Isha Nair',
        profile: 'Marketing Agency, Kochi',
        message:
            'Professional, polite, and clear communication. Tax Suvidha now manages all our tax and accounting processes.',
        rating: 5,
        image:
            'https://images.unsplash.com/photo-1542206395-9feb3edaa68d?auto=format&fit=crop&w=300&q=80',
    },
    {
        id: 9,
        name: 'Vikram Singh',
        profile: 'Manufacturer, Ludhiana',
        message:
            'Compliance used to be stressful for us. Tax Suvidha structured approach has made everything systematic.',
        rating: 5,
        image:
            'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=300&q=80',
    },
    {
        id: 10,
        name: 'Pooja Desai',
        profile: 'CA Aspirant, Ahmedabad',
        message:
            'Amazing guidance and error-free filings. Tax Suvidha team is experienced and very supportive.',
        rating: 4,
        image:
            'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=300&q=80',
    },
    {
        id: 11,
        name: 'Rahul Iyer',
        profile: 'Tech Entrepreneur, Hyderabad',
        message:
            'Tax Suvidha handled our startup registration, GST, and payroll compliance with precision. Superb execution.',
        rating: 5,
        image:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80',
    },
    {
        id: 12,
        name: 'Sneha Patil',
        profile: 'Food Business, Nashik',
        message:
            'Tax Suvidha consultation gave us complete clarity and confidence. We now have a long-term compliance partner.',
        rating: 5,
        image:
            'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80',
    },
    {
        id: 13,
        name: 'Aditya Kulkarni',
        profile: 'E-commerce Seller, Surat',
        message:
            'Very efficient team with timely filing and reminders. Tax Suvidha process is transparent and reliable.',
        rating: 4,
        image:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=300&q=80',
    },
    {
        id: 14,
        name: 'Ritika Ghosh',
        profile: 'Design Studio, Kolkata',
        message:
            'Best decision for our business compliance needs. Tax Suvidha experts are prompt and detail-oriented.',
        rating: 5,
        image:
            'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
    },
    {
        id: 15,
        name: 'Manish Bhatia',
        profile: 'Importer, Indore',
        message:
            'Great experience with tax planning and annual filings. Everything was handled smoothly and on time.',
        rating: 5,
        image:
            'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80',
    },
];

export default function TestimonialSlider() {
    const [activeIndex, setActiveIndex] = useState(4);
    const [cardsPerView, setCardsPerView] = useState(4);
    const [isPaused, setIsPaused] = useState(false);
    const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
    const wheelLockRef = useRef(false);

    useEffect(() => {
        const mobileQuery = window.matchMedia('(max-width: 639px)');
        const tabletQuery = window.matchMedia('(max-width: 1023px)');

        const updateCardsPerView = () => {
            const nextCardsPerView = mobileQuery.matches ? 1 : tabletQuery.matches ? 2 : 4;
            setCardsPerView((prev) => (prev === nextCardsPerView ? prev : nextCardsPerView));
        };

        updateCardsPerView();
        mobileQuery.addEventListener('change', updateCardsPerView);
        tabletQuery.addEventListener('change', updateCardsPerView);

        return () => {
            mobileQuery.removeEventListener('change', updateCardsPerView);
            tabletQuery.removeEventListener('change', updateCardsPerView);
        };
    }, []);

    const loopedTestimonials = [
        ...testimonials.slice(-cardsPerView),
        ...testimonials,
        ...testimonials.slice(0, cardsPerView),
    ];
    const currentRealIndex =
        ((activeIndex - cardsPerView) % testimonials.length + testimonials.length) % testimonials.length;
    const slideWidth = 100 / cardsPerView;

    const next = () => {
        setActiveIndex((prev) => prev + 1);
    };

    const prev = () => {
        setActiveIndex((prev) => prev - 1);
    };

    const jumpWithoutAnimation = (targetIndex: number) => {
        setIsTransitionEnabled(false);
        setActiveIndex(targetIndex);

        window.requestAnimationFrame(() => {
            window.requestAnimationFrame(() => {
                setIsTransitionEnabled(true);
            });
        });
    };

    const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
        const movement = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;

        if (Math.abs(movement) < 10 || wheelLockRef.current) {
            return;
        }

        event.preventDefault();
        wheelLockRef.current = true;

        if (movement > 0) {
            next();
        } else {
            prev();
        }

        window.setTimeout(() => {
            wheelLockRef.current = false;
        }, 320);
    };

    useEffect(() => {
        if (isPaused) {
            return;
        }

        const timer = setInterval(() => {
            setActiveIndex((prev) => prev + 1);
        }, 3500);

        return () => {
            clearInterval(timer);
        };
    }, [isPaused]);

    const handleTransitionEnd = () => {
        if (activeIndex >= testimonials.length + cardsPerView) {
            jumpWithoutAnimation(cardsPerView);
            return;
        }

        if (activeIndex < cardsPerView) {
            jumpWithoutAnimation(testimonials.length + activeIndex);
        }
    };

    return (
        <section className="border-b border-slate-800 bg-[#090b10] px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="bg-[radial-gradient(circle_at_1px_1px,rgba(148,163,184,0.16)_1px,transparent_0)] [background-size:28px_28px] p-5 sm:p-8">
                    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                        <div>
                            <h2 className="text-2xl font-bold text-white sm:text-2xl lg:text-3xl">
                                What Tax Suvidha Clients Say
                            </h2>
                            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-200">
                                Tax Suvidha clients trust us to deliver expert compliance, timely filings, and complete peace of mind.
                                See how we&apos;ve helped businesses of all sizes grow confidently.
                            </p>
                        </div>

                        <Link
                            href="/pages/contact"
                            className="btn-primary h-fit px-7 py-3 text-lg"
                        >
                            Review Us
                            <span className="ml-3">→</span>
                        </Link>
                    </div>

                    <div
                        className="mt-10 overflow-hidden"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        onWheel={handleWheel}
                    >
                        <div
                            className={`flex transform-gpu will-change-transform ${isTransitionEnabled ? 'transition-transform duration-700 ease-out' : ''}`}
                            style={{ transform: `translateX(-${activeIndex * slideWidth}%)` }}
                            onTransitionEnd={handleTransitionEnd}
                        >
                            {loopedTestimonials.map((item, idx) => (
                                <article
                                    key={`${item.id}-${idx}`}
                                    className="fade-up-card flex-shrink-0 px-2"
                                    style={{
                                        flexBasis: `${slideWidth}%`,
                                        animationDelay: `${Math.min(idx, 7) * 70}ms`,
                                    }}
                                >
                                    <div className="h-full rounded-xl border border-slate-300/20 bg-gray-100 p-5 text-gray-800 shadow-sm">
                                        <div className="flex items-center gap-3">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                width={96}
                                                height={96}
                                                className="h-14 w-14 rounded-full object-cover"
                                            />
                                            <div>
                                                <p className="text-[1rem] font-semibold leading-tight text-gray-800">{item.name}</p>
                                                <p className="text-sm font-medium text-gray-600">{item.profile}</p>
                                            </div>
                                        </div>

                                        <p className="mt-6 text-md leading-6 text-gray-800">{item.message}</p>

                                        <div className="mt-6 flex items-center gap-1 text-xl text-amber-500">
                                            {Array.from({ length: 5 }).map((_, idx) => (
                                                <span key={idx}>{idx < item.rating ? '★' : '☆'}</span>
                                            ))}
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>

                    <div className="mt-8 flex items-center justify-center gap-4">
                        <button
                            type="button"
                            onClick={prev}
                            aria-label="Previous testimonial page"
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-500 text-slate-200 transition hover:bg-slate-800"
                        >
                            ←
                        </button>

                        {/* <div className="flex items-center gap-2">
                            {Array.from({ length: testimonials.length }).map((_, idx) => (
                                <button
                                    key={`dot-${idx}`}
                                    type="button"
                                    onClick={() => setActiveIndex(cardsPerView + idx)}
                                    aria-label={`Go to testimonial slide ${idx + 1}`}
                                    className={`h-2.5 w-2.5 rounded-full transition ${idx === currentRealIndex ? 'bg-white' : 'bg-slate-600'
                                        }`}
                                />
                            ))}
                        </div> */}

                        <button
                            type="button"
                            onClick={next}
                            aria-label="Next testimonial page"
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-500 text-slate-200 transition hover:bg-slate-800"
                        >
                            →
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
