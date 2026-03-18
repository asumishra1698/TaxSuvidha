import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
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
      <body className={`${manrope.className} ${manrope.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
