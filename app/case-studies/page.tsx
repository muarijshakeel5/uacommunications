'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

type CaseStudy = {
  client: string; // <-- NEW FIELD
  sector: string;
  title: string;
  metric: string;
  metricLabel: string;
  summary: string;
  highlights: string[];
};

// I added placeholder client names here. You can swap these out for your actual clients!
const caseStudies: CaseStudy[] = [
  {
    client: 'Apex Property Group',
    sector: 'Real Estate',
    title: 'US Real Estate Wholesaling',
    metric: '300%',
    metricLabel: 'increase in contact rates',
    summary: 'We rebuilt the list strategy, dialing logic, and script sequencing for a wholesaling operator struggling with stale contact data and inconsistent rep performance. The campaign gained momentum fast once routing discipline and talk-track quality were tightened.',
    highlights: ['Reactivation sequences rebuilt', 'Rep scorecards introduced', 'Cleaner seller qualification'],
  },
  {
    client: 'DataFlow Systems',
    sector: 'SaaS',
    title: 'B2B SaaS Appointment Setting',
    metric: '$2.4M',
    metricLabel: 'in generated pipeline',
    summary: 'For a B2B SaaS client selling into mid-market accounts, we paired outbound research with sharper qualification logic and tighter CRM handoff rules. Pipeline quality improved because meetings were better defined before sales ever joined the call.',
    highlights: ['Mid-market ICP targeting', 'Meeting quality controls', 'Sales-ready handoff notes'],
  },
  {
    client: 'ClearScore Financial',
    sector: 'Credit Repair',
    title: 'Inbound Support & Conversion',
    metric: '<2 min',
    metricLabel: 'SLA recovery time',
    summary: 'An inbound-heavy credit repair program needed support recovery without sacrificing conversion quality. Queue discipline, escalation ownership, and faster script-guided triage brought the service layer back under control.',
    highlights: ['Queue overflow stabilized', 'Escalation path simplified', 'Retention conversations improved'],
  },
  {
    client: 'UK Boiler Pros',
    sector: 'Home Services',
    title: 'UK Home Services Reactivation',
    metric: '41%',
    metricLabel: 'lift in booked callbacks',
    summary: 'Dormant lead lists became productive again once reactivation scripts, callback windows, and follow-up accountability were rebuilt around actual contact behavior rather than generic timing assumptions.',
    highlights: ['Warm lead reactivation', 'Faster follow-up cadence', 'Booked callback reporting'],
  },
  {
    client: 'MedTech Support Inc',
    sector: 'Healthcare Admin',
    title: 'Patient Support Backoffice',
    metric: '97.8%',
    metricLabel: 'SLA adherence at scale',
    summary: 'A high-volume administrative support desk needed steadier execution during peak periods. We tightened staffing visibility, ticket ownership, and queue balancing to protect both speed and professionalism.',
    highlights: ['Omnichannel queue balancing', 'Coverage planning', 'Client-visible dashboards'],
  },
  {
    client: 'Vault Payments',
    sector: 'Fintech',
    title: 'Collections & Retention Support',
    metric: '63%',
    metricLabel: 'faster QA review cycles',
    summary: 'Compliance-sensitive calls demanded faster oversight without adding management drag. Automated transcript review and focused coaching flags gave team leads sharper visibility into risk and conversion friction.',
    highlights: ['Automated transcript review', 'Compliance coaching', 'Sentiment-led QA alerts'],
  },
];

const reveal = {
  hidden: { opacity: 0, y: 15 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function CaseStudiesPage() {
  
  // --- HARD RESET SCROLL ---
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-white text-slate-900 dark:bg-slate-950 dark:text-gray-200">
      
      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden bg-slate-50/50 pb-4 pt-10 lg:pb-6 lg:pt-14 dark:bg-slate-950">
        <div className="absolute inset-x-0 top-0 -z-10 h-full bg-grid-slate-200/[0.3] [mask-image:linear-gradient(to_bottom,white_10%,transparent_100%)] dark:bg-grid-slate-800/[0.2]" />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" custom={0} variants={reveal} className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.3em] text-red-600 dark:border-red-500/20 dark:bg-red-500/10">
              Case Studies
            </span>
            <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-gray-900 sm:text-6xl dark:text-white">
              Proof of <br/>
              <span className="text-red-600">Performance.</span>
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-gray-500 dark:text-slate-400">
              Real numbers, pipeline velocity, and closed revenue for our US and UK partners.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- GRID SECTION --- */}
      <section className="bg-slate-50/50 pb-12 pt-4 lg:pb-16 lg:pt-6 dark:bg-slate-900/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.title}
                custom={index * 0.1}
                variants={reveal}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-red-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.3em] text-red-600 dark:border-red-500/20 dark:bg-red-500/10">
                    {study.sector}
                  </span>
                  <span className="text-[8px] font-bold uppercase tracking-widest text-slate-400">
                    Outcome
                  </span>
                </div>

                <div className="mt-5">
                  <h2 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {study.title}
                  </h2>
                  {/* --- NEW CLIENT MENTION --- */}
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    Partner: <span className="text-slate-600 dark:text-slate-300">{study.client}</span>
                  </p>
                </div>

                <div className="mt-5">
                  <p className="text-4xl font-bold tracking-tight text-red-600">{study.metric}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    {study.metricLabel}
                  </p>
                </div>

                <p className="mt-5 text-[13px] leading-relaxed text-slate-600 dark:text-slate-400">
                  {study.summary}
                </p>

                <div className="mt-6 space-y-2">
                  {study.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-2 text-[11px] font-medium text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300"
                    >
                      {highlight}
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex w-full items-center justify-center rounded-lg border border-red-100 bg-red-50 px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-red-600 transition-all hover:border-red-200 hover:bg-red-100 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-400"
                >
                  Request Full Breakdown
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="bg-white border-t border-gray-100 py-12 lg:py-16 dark:bg-slate-950 dark:border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          
          <div className="max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-red-600">
              Next Move
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Ready to see these numbers <br />
              <span className="text-red-600">in your pipeline?</span>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              Let&apos;s talk about building an outbound engine that actually converts.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-red-600 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-red-700 shadow-md shadow-red-500/10"
            >
              Book Discovery
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}