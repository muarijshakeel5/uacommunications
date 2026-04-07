import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Footer from '@/components/layout/Footer';
import GlobalFloorStatus from '@/components/features/GlobalFloorStatus';
import IntroAnimation from '@/components/features/IntroAnimation';
import Navbar from '@/components/layout/Navbar';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://uacommunications.co'),
  title: {
    default: 'UA Communications',
    template: '%s | UA Communications',
  },
  description:
    'Revenue-focused lead generation, customer support, and BPO operations for US and UK growth teams.',
  applicationName: 'UA Communications',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'UA Communications',
    description:
      'Revenue-focused lead generation, customer support, and BPO operations for US and UK growth teams.',
    url: 'https://uacommunications.co',
    siteName: 'UA Communications',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UA Communications',
    description:
      'Revenue-focused lead generation, customer support, and BPO operations for US and UK growth teams.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-white">
        <ThemeProvider>
          <div className="relative flex min-h-screen flex-col">
            <IntroAnimation />
            <Navbar />
            <GlobalFloorStatus />
            <div className="flex-1 pt-2 md:pt-4">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
