'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

type CaseStudy = {
  sector: string;
  title: string;
  metric: string;
  metricLabel: string;
  summary: string;
  highlights: string[];
  darkCard?: boolean;
};

const caseStudies: CaseStudy[] = [
  {
    sector: 'Real Estate',
    title: 'US Real Estate Wholesaling',
    metric: '300%',
    metricLabel: 'increase in contact rates',
    summary:
      'We rebuilt the list strategy, dialing logic, and script sequencing for a wholesaling operator struggling with stale contact data and inconsistent rep performance. The campaign gained momentum fast once routing discipline and talk-track quality were tightened.',
    highlights: ['Reactivation sequences rebuilt', 'Rep scorecards introduced', 'Cleaner seller qualification'],
    darkCard: true,
  },
  {
    sector: 'SaaS',
    title: 'B2B SaaS Appointment Setting',
    metric: '$2.4M',
    metricLabel: 'in generated pipeline',
    summary:
      'For a B2B SaaS client selling into mid-market accounts, we paired outbound research with sharper qualification logic and tighter CRM handoff rules. Pipeline quality improved because meetings were better defined before sales ever joined the call.',
    highlights: ['Mid-market ICP targeting', 'Meeting quality controls', 'Sales-ready handoff notes'],
  },
  {
    sector: 'Credit Repair',
    title: 'Inbound Support & Conversion',
    metric: '<2 min',
    metricLabel: 'SLA recovery time',
    summary:
      'An inbound-heavy credit repair program needed support recovery without sacrificing conversion quality. Queue discipline, escalation ownership, and faster script-guided triage brought the service layer back under control.',
    highlights: ['Queue overflow stabilized', 'Escalation path simplified', 'Retention conversations improved'],
    darkCard: true,
  },
  {
    sector: 'Home Services',
    title: 'UK Home Services Reactivation',
    metric: '41%',
    metricLabel: 'lift in booked callbacks',
    summary:
      'Dormant lead lists became productive again once reactivation scripts, callback windows, and follow-up accountability were rebuilt around actual contact behavior rather than generic timing assumptions.',
    highlights: ['Warm lead reactivation', 'Faster follow-up cadence', 'Booked callback reporting'],
  },
  {
    sector: 'Healthcare Admin',
    title: 'Patient Support Backoffice',
    metric: '97.8%',
    metricLabel: 'SLA adherence at scale',
    summary:
      'A high-volume administrative support desk needed steadier execution during peak periods. We tightened staffing visibility, ticket ownership, and queue balancing to protect both speed and professionalism.',
    highlights: ['Omnichannel queue balancing', 'Coverage planning', 'Client-visible dashboards'],
    darkCard: true,
  },
  {
    sector: 'Fintech',
    title: 'Collections & Retention Support',
    metric: '63%',
    metricLabel: 'faster QA review cycles',
    summary:
      'Compliance-sensitive calls demanded faster oversight without adding management drag. Automated transcript review and focused coaching flags gave team leads sharper visibility into risk and conversion friction.',
    highlights: ['Automated transcript review', 'Compliance coaching', 'Sentiment-led QA alerts'],
  },
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.68,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function CaseStudiesPage() {
  return (
    <main className="bg-white text-slate-900 dark:bg-slate-950 dark:text-gray-200">
      <section className="relative overflow-hidden bg-white dark:bg-slate-950">
        <div className="absolute inset-x-0 top-0 -z-10 h-[30rem] bg-grid-slate-100 bg-[size:28px_28px] [mask-image:linear-gradient(to_bottom,white_55%,transparent_100%)] dark:bg-grid-slate-800 dark:[mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]" />
        <div className="absolute right-[-3rem] top-10 -z-10 h-64 w-64 rounded-full bg-red-600/10 blur-3xl dark:bg-red-600/18" />

        <div className="mx-auto max-w-7xl px-6 pb-20 pt-12 lg:px-8 lg:pb-24 lg:pt-16">
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={reveal}
            className="max-w-3xl"
          >
            <span className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-red-600 dark:border-red-500/20 dark:bg-red-500/10">
              Case Studies
            </span>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
              Proof of Performance.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-slate-300">
              Real numbers, pipeline velocity, and closed revenue for our US and UK partners.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-50 py-24 dark:bg-slate-900/55">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.title}
                custom={index * 0.08}
                variants={reveal}
                className={`rounded-[1.9rem] border p-7 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  study.darkCard
                    ? 'border-slate-800 bg-slate-950 text-white'
                    : 'border-gray-200 bg-white text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:text-white'
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span
                    className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] ${
                      study.darkCard
                        ? 'border-red-500/20 bg-red-500/10 text-red-400'
                        : 'border-red-200 bg-red-50 text-red-600 dark:border-red-500/20 dark:bg-red-500/10'
                    }`}
                  >
                    {study.sector}
                  </span>
                  <span
                    className={`text-xs uppercase tracking-[0.2em] ${
                      study.darkCard ? 'text-slate-400' : 'text-gray-500 dark:text-slate-400'
                    }`}
                  >
                    Outcome
                  </span>
                </div>

                <h2
                  className={`mt-6 text-2xl font-semibold leading-tight ${
                    study.darkCard ? 'text-white' : 'text-gray-900 dark:text-white'
                  }`}
                >
                  {study.title}
                </h2>

                <div className="mt-6">
                  <p className="text-5xl font-semibold tracking-tight text-red-600">{study.metric}</p>
                  <p
                    className={`mt-2 text-sm ${
                      study.darkCard ? 'text-slate-300' : 'text-gray-600 dark:text-slate-300'
                    }`}
                  >
                    {study.metricLabel}
                  </p>
                </div>

                <p
                  className={`mt-6 text-base leading-7 ${
                    study.darkCard ? 'text-slate-300' : 'text-gray-600 dark:text-slate-300'
                  }`}
                >
                  {study.summary}
                </p>

                <div className="mt-6 space-y-3">
                  {study.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className={`rounded-2xl border px-4 py-3 text-sm ${
                        study.darkCard
                          ? 'border-slate-800 bg-slate-900 text-slate-200'
                          : 'border-gray-200 bg-gray-50 text-gray-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200'
                      }`}
                    >
                      {highlight}
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  aria-label={`Request the full breakdown for ${study.title}`}
                  className={`mt-8 inline-flex items-center justify-center rounded-md border px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                    study.darkCard
                      ? 'border-red-500/30 bg-red-500/10 text-red-300 hover:bg-red-500/20'
                      : 'border-red-200 bg-red-50 text-red-600 hover:border-red-300 hover:bg-red-100 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-300'
                  }`}
                >
                  Request Full Breakdown
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-400">
              Next Move
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Ready to see these numbers in your pipeline? Let&apos;s talk.
            </h2>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-red-600 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/30"
          >
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </main>
  );
}
