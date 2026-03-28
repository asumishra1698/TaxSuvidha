export const dynamic = "force-static";
import { NextResponse } from 'next/server';
import { SERVICES_DATA } from '../services/data';

export async function GET() {
    const baseUrl = 'https://taxsuvidhakendra.com';
    const staticPages = [
        '',
        '/services',
        '/blogs',
        '/pages/about',
        '/pages/contact',
        '/pages/privacy-policy',
        '/pages/terms-and-conditions',
        '/pages/refund-policy',
    ];

    const servicePages = SERVICES_DATA.map((service) => `/services/${service.slug}`);

    const urls = [...staticPages, ...servicePages];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
            .map(
                (url) => `  <url><loc>${baseUrl}${url}</loc></url>`
            )
            .join('\n')}
</urlset>`;

    return new NextResponse(sitemap, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
