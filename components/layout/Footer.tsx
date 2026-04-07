import { InstagramIcon, LinkedInIcon } from '@/components/icons';
import Link from 'next/link';

const serviceLinks = [
  { href: '/services', label: 'Outbound Sales' },
  { href: '/services', label: 'Inbound CX Support' },
  { href: '/services', label: 'Lead Reactivation' },
  { href: '/services', label: 'Automated QA & Logic' },
];

const companyLinks = [
  { href: '/about', label: 'About' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/tech', label: 'Infrastructure' },
  { href: '/careers', label: 'Careers' },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400">
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-16 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          
          {/* Brand/Contact Column - Widened to 40% */}
          <div className="md:w-[40%]">
            <Link href="/" className="group flex items-center gap-2 text-sm font-semibold tracking-[0.25em]" aria-label="UA Communications Home">
              <span className="font-display text-lg font-bold uppercase text-red-600">UA</span>
              <span className="uppercase text-slate-900 transition-colors duration-300 group-hover:text-red-600 dark:text-white">
                Communications
              </span>
            </Link>

            <div className="mt-6 space-y-2">
              <a
                href="mailto:partnerships@uacommunications.co"
                className="block text-sm font-medium text-slate-500 transition-colors duration-300 hover:text-red-600 dark:text-slate-400"
              >
                partnerships@uacommunications.co
              </a>
              <p className="text-sm font-medium text-slate-400 dark:text-slate-500">
                DHA · Lahore, PK
              </p>
            </div>
          </div>

          {/* Navigation Grid - Adjusted spacing to fill horizontal gap */}
          <div className="flex flex-1 flex-row justify-between sm:justify-around md:justify-between lg:max-w-[40%]">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-900 dark:text-white">
                Services
              </h3>
              <ul className="mt-6 space-y-3">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-block text-xs font-medium text-slate-500 transition-all duration-300 hover:translate-x-1 hover:text-red-600 dark:text-slate-400 dark:hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-900 dark:text-white">
                Company
              </h3>
              <ul className="mt-6 space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-block text-xs font-medium text-slate-500 transition-all duration-300 hover:translate-x-1 hover:text-red-600 dark:text-slate-400 dark:hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar Section - Reduced mt-20 to mt-12 */}
        <div className="mt-12 border-t border-slate-100 pt-8 dark:border-slate-800">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            
            <div className="flex flex-col gap-1.5">
              <p className="text-[10px] font-medium text-slate-400 dark:text-slate-500">
                © 2026 UA Communications. All rights reserved.
              </p>
              <p className="text-[8px] font-bold uppercase tracking-widest text-slate-400 opacity-50 dark:text-slate-600">
                GDPR · TCPA · SLA COMPLIANCE MONITORING BUILT-IN
              </p>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/company/uacommunications"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit our LinkedIn page"
                className="flex h-9 w-9 items-center justify-center rounded-full text-slate-300 transition-all duration-300 hover:bg-slate-50 hover:text-[#0A66C2] dark:hover:bg-slate-900 dark:hover:text-white"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://www.instagram.com/uacommunications/"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit our Instagram page"
                className="flex h-9 w-9 items-center justify-center rounded-full text-slate-300 transition-all duration-300 hover:bg-slate-50 hover:text-[#E4405F] dark:hover:bg-slate-900 dark:hover:text-white"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}