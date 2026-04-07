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

function LinkedInIcon() {
  return (
    /* Scaled down to 18px to account for its lack of internal SVG padding */
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8h4V24h-4V8Zm7 0h3.83v2.19h.05c.53-1.01 1.84-2.19 3.79-2.19 4.05 0 4.8 2.67 4.8 6.14V24h-4v-7.86c0-1.87-.03-4.28-2.61-4.28-2.62 0-3.02 2.04-3.02 4.14V24h-4V8Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    /* Scaled up to 22px to balance the thin stroke and internal padding */
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[22px] w-[22px]">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400">
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-20">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          
          {/* Brand/Contact Column */}
          <div className="md:w-[35%]">
            <Link href="/" className="group flex items-center gap-2 text-sm font-semibold tracking-[0.25em]">
              <span className="font-display text-lg font-bold uppercase text-red-600">UA</span>
              <span className="uppercase text-slate-900 transition-colors duration-300 group-hover:text-red-600 dark:text-white">
                Communications
              </span>
            </Link>

            <div className="mt-8 space-y-3">
              <a
                href="mailto:partnerships@uacommunications.co"
                className="block text-sm font-medium text-slate-500 transition-colors duration-300 hover:text-red-600 dark:text-slate-400"
              >
                partnerships@uacommunication.com
              </a>
              <p className="text-sm font-medium text-slate-400 dark:text-slate-500">
                DHA · Lahore, PK
              </p>
            </div>
          </div>

          {/* Navigation Grid */}
          <div className="flex flex-1 flex-row justify-between md:max-w-[45%]">
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-900 dark:text-white">
                Services
              </h3>
              <ul className="mt-8 space-y-4">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-block text-sm text-slate-500 transition-all duration-300 hover:translate-x-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-900 dark:text-white">
                Company
              </h3>
              <ul className="mt-8 space-y-4">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-block text-sm text-slate-500 transition-all duration-300 hover:translate-x-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar Section */}
        <div className="mt-20 border-t border-slate-100 pt-10 dark:border-slate-800">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            
            <div className="flex flex-col gap-2">
              <p className="text-xs font-medium text-slate-400 dark:text-slate-500">
                © 2026 UA Communications. All rights reserved.
              </p>
              <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 opacity-40 dark:text-slate-600">
                GDPR · TCPA · SLA COMPLIANCE MONITORING BUILT-IN
              </p>
            </div>

            {/* Perfected Social Containers */}
            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/company/uacommunications"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full text-slate-300 transition-all duration-300 hover:bg-slate-50 hover:text-[#0A66C2] dark:hover:bg-slate-900 dark:hover:text-white"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://www.instagram.com/uacommunications/"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full text-slate-300 transition-all duration-300 hover:bg-slate-50 hover:text-[#E4405F] dark:hover:bg-slate-900 dark:hover:text-white"
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