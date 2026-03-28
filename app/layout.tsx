import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://taxsuvidhakendra.com'),
  title: {
    default: 'Tax Suvidha Kendra | Tax Management Made Simple',
    template: '%s',
  },
  description: 'Your trusted tax guidance and management platform.',
  icons: {
    icon: '/fav.png',
    shortcut: '/fav.png',
    apple: '/fav.png',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Tax Suvidha Kendra | Tax Management Made Simple',
    description: 'Your trusted tax guidance and management platform.',
    url: 'https://taxsuvidhakendra.com',
    siteName: 'Tax Suvidha Kendra',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tax Suvidha Kendra | Tax Management Made Simple',
    description: 'Your trusted tax guidance and management platform.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18041307032"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18041307032');
            `,
          }}
        />
      </head>
      <body className={`${poppins.className} ${poppins.variable} antialiased`}>
        <Header />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
