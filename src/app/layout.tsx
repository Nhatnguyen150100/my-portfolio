import { inter, josefinSans } from '@/lib/fonts';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Nhat Nguyen | Full Stack Engineer',
    template: '%s | Nhat Nguyen',
  },

  description:
    'Full Stack Engineer specializing in React, Next.js, Node.js, NestJS, Spring Boot, and AI-powered applications. Passionate about building scalable web applications with modern technologies.',

  keywords: [
    'Nhat Nguyen',
    'Full Stack Engineer',
    'Software Engineer',
    'React Developer',
    'Next.js',
    'TypeScript',
    'Node.js',
    'NestJS',
    'Spring Boot',
    'Java',
    'MongoDB',
    'PostgreSQL',
    'Redis',
    'Docker',
    'AI Engineer',
    'OpenAI',
    'Portfolio',
  ],

  authors: [
    {
      name: 'Nhat Nguyen',
    },
  ],

  creator: 'Nhat Nguyen',

  publisher: 'Nhat Nguyen',

  metadataBase: new URL('https://your-domain.com'),

  alternates: {
    canonical: '/',
  },

  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },

  openGraph: {
    title: 'Nhat Nguyen | Full Stack Engineer',

    description:
      'Full Stack Engineer specializing in React, Next.js, NestJS, Spring Boot, and modern AI applications.',

    url: 'https://your-domain.com',

    siteName: 'Nhat Nguyen Portfolio',

    locale: 'en_US',

    type: 'website',

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Nhat Nguyen Portfolio',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title: 'Nhat Nguyen | Full Stack Engineer',

    description:
      'Building scalable web applications with React, Next.js, NestJS, Spring Boot and AI.',

    images: ['/og-image.png'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },

  category: 'Technology',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${josefinSans.variable} ${inter.variable}`}>
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
