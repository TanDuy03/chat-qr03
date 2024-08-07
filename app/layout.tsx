import Navbar from '@/components/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';
import PlausibleProvider from 'next-plausible';
import {Suspense} from "react";

const inter = Inter({ subsets: ['latin'] });

let title = 'Nguyen Tan Duy';
let description = 'Generate your AI QR Code in seconds';
let url = 'https://tanduy-qr.vercel.app';
let ogimage = 'https://tanduy-qr.vercel.app/';
let sitename = 'tanduy-qr.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    images: [ogimage],
    title,
    description,
    url: url,
    siteName: sitename,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: [ogimage],
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<>Loading...</>}>
      <html lang="en">
        <head>
          <PlausibleProvider domain="tanduy-qr.vercel.app" />
        </head>
        <body className={inter.className}>
          <Navbar />
          <main>{children}</main>
          <Analytics />
          <Footer />
        </body>
      </html>
    </Suspense>
  );
}
