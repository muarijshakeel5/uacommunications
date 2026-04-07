'use client';

import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from '@/components/icons';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const links = [
  { href: '/services', label: 'Services' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/tech', label: 'Tech' },
  { href: '/about', label: 'About' },
  { href: '/careers', label: 'Careers' },
];

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === 'dark';

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className="sticky top-0 z-40 w-full border-b border-slate-200/50 bg-white/80 backdrop-blur-md dark:border-slate-800/50 dark:bg-slate-950/80"
      initial={{ y: '-150%', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 3.8, duration: 0.8, ease: 'easeInOut' }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between gap-6 py-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-semibold tracking-[0.2em]"
            onClick={closeMobileMenu}
            aria-label="UA Communications Home"
          >
            <span className="font-display text-lg font-bold uppercase text-red-600">UA</span>
            <span className="uppercase text-gray-900 dark:text-white">Communications</span>
          </Link>

          <div className="hidden flex-1 items-center justify-center md:flex">
            <div className="flex items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="border-b-2 border-transparent pb-1 text-sm font-medium text-gray-600 transition-colors duration-300 hover:border-red-600 hover:text-gray-900 dark:text-slate-300 dark:hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 bg-white text-gray-700 shadow-sm transition-colors duration-300 hover:text-red-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-700 hover:shadow-lg"
            >
              Book a Call
            </Link>
          </div>

          <button
            type="button"
            aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm transition-colors duration-300 hover:text-red-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 md:hidden"
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="border-b border-gray-200 bg-white/95 backdrop-blur-lg dark:border-slate-800 dark:bg-slate-950/95 md:hidden"
          >
            <div className="mx-auto max-w-7xl px-6 py-6">
              <div className="flex flex-col gap-3">
                {links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className="rounded-xl px-2 py-3 text-lg font-medium text-gray-900 transition-colors duration-300 hover:text-red-600 dark:text-white dark:hover:text-red-400"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setTheme(isDark ? 'light' : 'dark')}
                  aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 shadow-sm transition-colors duration-300 hover:text-red-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
                >
                  {isDark ? <SunIcon /> : <MoonIcon />}
                </button>

                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="inline-flex flex-1 items-center justify-center rounded-xl bg-red-600 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-700 hover:shadow-lg"
                >
                  Book a Call
                </Link>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.nav>
  );
}
