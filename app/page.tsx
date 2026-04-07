'use client';

import ActivityFeed from '@/components/dashboard/ActivityFeed';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type Stat = {
  value: string;
  label: string;
  detail: string;
};

type Offer = {
  title: string;
  description: string;
  metrics: string[];
};

const stats: Stat[] = [
  {
    value: '100k+',
    label: 'Outbound calls placed',
    detail: 'Multi-market outreach programs spanning real estate, SaaS, and local services.',
  },
  {
    value: '$2M+',
    label: 'Revenue influenced',
    detail: 'Measured pipeline contribution from booked calls, nurtured leads, and client retention.',
  },
  {
    value: '94%',
    label: 'QA visibility across conversations',
    detail: 'Rep-level call scoring, transcript review, and coaching loops built into delivery.',
  },
  {
    value: '24/7',
    label: 'Operational coverage available',
    detail: 'Support pods designed for after-hours continuity, overflow coverage, and SLA control.',
  },
];

const offers: Offer[] = [
  {
    title: 'Outbound Sales & B2B Appointment Setting',
    description:
      'High-energy outbound teams focused on B2B and B2C market penetration. From cold outreach to qualified appointments, we drive your pipeline velocity.',
    metrics: [
      'US/UK Native-Level Outreach',
      'B2B/B2C Market Penetration',
      'Live QA & Sentiment Scoring',
    ],
  },
  {
    title: 'Inbound Support & Customer Experience',
    description:
      'Premium inbound operations designed for high-volume support, escalation handling, and seamless customer retention across all time zones.',
    metrics: [
      '24/7 SLA-Led Response',
      'Omnichannel (Voice/Chat) Support',
      'Technical Escalation Management',
    ],
  },
  {
    title: 'Digital Growth & CRM Operations',
    description:
      'Closing the loop between paid acquisition and sales. We manage lead nurture, CRM hygiene, and data-driven reactivation to maximize your ROI.',
    metrics: [
      'Lead Nurture & Reactivation',
      'CRM Hygiene & Data Sync',
      'Reporting & Attribution Clarity',
    ],
  },
];

const logos = [
  'HUBSPOT',
  'SALESFORCE',
  'RINGCENTRAL',
  'AIRCALL',
  'CLOSE',
  'ZAPIER',
  'HUBSPOT',
  'SALESFORCE',
  'RINGCENTRAL',
  'AIRCALL',
  'CLOSE',
  'ZAPIER',
];

const dashboardChannels = [
  { label: 'Outbound Penetration', baseWidth: 92 },
  { label: 'Email Engagement', baseWidth: 76 },
  { label: 'Lead Reactivation', baseWidth: 68 },
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

function CrimsonArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      className="h-5 w-5"
    >
      <path d="M7 17 17 7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.5 7H17v8.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LiveDashboardMockup() {
  const [bookedMeetings, setBookedMeetings] = useState(186);
  const [qualifiedLeads, setQualifiedLeads] = useState(31);

  useEffect(() => {
    const interval = window.setInterval(() => {
      if (Math.random() > 0.45) {
        setBookedMeetings((current) => current + 1);
      }

      setQualifiedLeads((current) => {
        const direction = Math.random() > 0.5 ? 1 : -1;
        const nextValue = current + direction;

        return Math.min(34, Math.max(31, nextValue));
      });
    }, 4000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-gray-100 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900">
      <div className="absolute right-6 top-6 flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50/50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-300">
        <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
        Active Sync
      </div>

      <div className="border-b border-gray-100 pb-5 pr-32 dark:border-slate-800">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-600">
            Real-Time Lead Dashboard
          </p>
          <h2 className="mt-3 font-display text-2xl font-semibold text-gray-900 dark:text-white">
            Live pipeline visibility for every client.
          </h2>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {[
          { label: 'Qualified leads', value: `+${qualifiedLeads}%` },
          { label: 'Avg. speed to lead', value: '42 sec' },
          { label: 'Booked meetings', value: bookedMeetings.toString() },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-3xl border border-gray-100 bg-gray-50 p-4 shadow-md dark:border-slate-800 dark:bg-slate-950"
          >
            <p className="text-sm text-gray-600 dark:text-slate-400">{item.label}</p>
            <p className="mt-3 text-2xl font-semibold text-gray-900 dark:text-white">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-gray-100 bg-white p-5 shadow-md dark:border-slate-800 dark:bg-slate-950">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-gray-900 dark:text-white">
              Campaign Efficiency
            </p>
            <span className="text-xs text-gray-500 dark:text-slate-400">Last 30 days</span>
          </div>
          <div className="mt-5 space-y-4">
            {dashboardChannels.map((item, index) => (
              <div key={item.label}>
                <div className="mb-2 flex items-center justify-between text-sm text-gray-600 dark:text-slate-400">
                  <span>{item.label}</span>
                  <span>{item.baseWidth}%</span>
                </div>
                <div className="h-2.5 rounded-full bg-gray-100 dark:bg-slate-800">
                  <motion.div
                    className="h-2.5 rounded-full bg-gradient-to-r from-red-600 to-slate-900 dark:to-slate-200"
                    initial={{ width: `${item.baseWidth - 2}%` }}
                    animate={{
                      width: [
                        `${item.baseWidth - 2}%`,
                        `${item.baseWidth}%`,
                        `${item.baseWidth - 1}%`,
                      ],
                    }}
                    transition={{
                      duration: 6 + index,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <ActivityFeed />
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      <section className="relative overflow-hidden bg-white dark:bg-slate-950">
        <div className="absolute inset-x-0 top-0 -z-10 h-[40rem] bg-grid-slate-100 bg-[size:28px_28px] [mask-image:linear-gradient(to_bottom,white_52%,transparent_100%)] dark:bg-grid-slate-800 dark:[mask-image:linear-gradient(to_bottom,black_58%,transparent_100%)]" />
        <div className="absolute right-0 top-20 -z-10 h-64 w-64 rounded-full bg-red-600/10 blur-3xl dark:bg-red-600/20" />

        <div className="mx-auto grid max-w-7xl gap-14 px-6 pb-12 pt-4 md:pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pt-8">
          <div className="max-w-2xl">
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0}
              variants={reveal}
              className="inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white/90 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-300"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-red-600" />
              Enterprise-grade lead generation and BPO operations from Lahore
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              custom={0.08}
              variants={reveal}
              className="mt-8 font-display text-4xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white"
            >
              High-output teams for outbound growth, client support, and operational control.
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              custom={0.16}
              variants={reveal}
              className="mt-8 max-w-xl text-lg leading-8 text-gray-600 dark:text-slate-300"
            >UA Communications delivers full-spectrum BPO infrastructure. From B2B and B2C appointment setting to high-volume inbound support and outbound sales, we combine disciplined execution with live performance visibility so you can scale without compromise.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              custom={0.24}
              variants={reveal}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-red-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/30"
              >
                Book a Call
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-6 py-3.5 text-sm font-semibold text-gray-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:text-white"
              >
                Explore Services
              </Link>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              custom={0.32}
              variants={reveal}
              className="mt-10 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2"
            >
              {[
                'GDPR-aware operations',
                'TCPA-conscious outreach',
                'Live client reporting',
                'Neutral-Accent Operations',
              ].map((badge) => (
                <div
                  key={badge}
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-slate-200/60 bg-slate-50/40 px-4 py-2 text-[10px] font-semibold uppercase tracking-wider text-slate-500 backdrop-blur-sm transition-all duration-300 hover:border-slate-300 hover:bg-white dark:border-slate-800/60 dark:bg-slate-900/40 dark:text-slate-400 dark:hover:border-slate-600 dark:hover:bg-slate-800 sm:w-auto sm:justify-start md:text-[11px]"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-3 w-3 text-slate-400 dark:text-slate-500"
                  >
                    <path
                      d="M10 2.5 4.75 4.5v4.75c0 3.28 2.21 6.2 5.25 7 3.04-.8 5.25-3.72 5.25-7V4.5L10 2.5Z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="m7.85 10.05 1.45 1.45 2.85-3.1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {badge}
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.2}
            variants={reveal}
            className="relative"
          >
            <LiveDashboardMockup />
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-50 pb-20 pt-12 dark:bg-slate-900/60 md:pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-5 md:grid-cols-2"
          >
            {stats.map((stat, index) => (
              <motion.article
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                custom={index * 0.08}
                variants={reveal}
                className="rounded-[1.75rem] border border-gray-100 bg-white p-7 shadow-md dark:border-slate-800 dark:bg-slate-950"
              >
                <p className="text-4xl font-semibold tracking-tight text-red-600 sm:text-5xl">
                  {stat.value}
                </p>
                <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                  {stat.label}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-gray-600 dark:text-slate-300">
                  {stat.detail}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="services" className="bg-white py-24 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            custom={0}
            variants={reveal}
            className="max-w-3xl text-left"
          >
            <span className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-red-600 dark:border-red-500/20 dark:bg-red-500/10">
              Offer Stack
            </span>
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Services built to create signal, speed, and revenue clarity.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600 dark:text-slate-300">
              We combine the energy of a high-performing sales floor with the reporting discipline
              clients expect from modern enterprise operators.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-6 md:mt-20 lg:grid-cols-3">
            {offers.map((offer, index) => (
              <motion.article
                key={offer.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                custom={0.08 + index * 0.1}
                variants={reveal}
                className="group rounded-[2rem] border border-gray-100 bg-white p-7 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-600 dark:bg-red-500/10">
                    <CrimsonArrowIcon />
                  </div>
                  <span className="text-sm font-medium uppercase tracking-[0.22em] text-red-600">
                    Core Service
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-bold text-gray-900 dark:text-white">
                  {offer.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-gray-600 dark:text-slate-300">
                  {offer.description}
                </p>

                <div className="mt-8 space-y-3">
                  {offer.metrics.map((metric) => (
                    <div
                      key={metric}
                      className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm text-gray-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200"
                    >
                      <span className="h-2.5 w-2.5 rounded-full bg-red-600" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            custom={0.18}
            variants={reveal}
            className="mt-12 flex"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-red-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/30"
            >
              Book a Call
            </Link>
          </motion.div>
        </div>
      </section>

      <section id="trust-layer" className="bg-gray-50 py-20 dark:bg-slate-900/60 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            custom={0}
            variants={reveal}
            className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:border-slate-800 dark:bg-slate-950 md:p-12"
          >
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-red-600 dark:border-red-500/20 dark:bg-red-500/10">
                Trust Layer
              </span>
              <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                Enterprise infrastructure built for high-stakes operations.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-500 dark:text-slate-300">
                UA Communications bridges the gap between elite talent and global tech stacks. We
                integrate directly into your existing CRM, compliance, and reporting workflows for
                a seamless, transparent partnership.
              </p>
            </div>

            <div className="relative mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div className="overflow-hidden rounded-[1.75rem] border border-gray-100 bg-gray-50 py-5 dark:border-slate-800 dark:bg-slate-900">
                <motion.div
                  className="flex w-max gap-4 px-4"
                  animate={{ x: ['0%', '-50%'] }}
                  transition={{ duration: 22, ease: 'linear', repeat: Infinity }}
                >
                  {logos.map((logo, index) => (
                    <div
                      key={`${logo}-${index}`}
                      className="flex h-16 min-w-[11rem] items-center justify-center rounded-2xl border border-gray-100 bg-white px-6 text-sm font-semibold tracking-[0.24em] text-gray-700 shadow-sm grayscale opacity-60 transition-all duration-500 hover:grayscale-0 hover:opacity-100 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200"
                    >
                      {logo}
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>

            <div className="mt-8 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                'GDPR-ready process design',
                'TCPA-conscious outreach logic',
                'Client-visible QA reviews',
                'Transparent SLA reporting',
              ].map((badge) => (
                <div
                  key={badge}
                  className="flex items-center justify-center rounded-lg border border-slate-200 bg-slate-50/50 px-4 py-2 text-center text-[10px] font-bold uppercase tracking-wider text-slate-500 transition-all duration-300 hover:border-slate-400 hover:bg-white hover:shadow-sm dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-400 dark:hover:border-slate-600 dark:hover:bg-slate-800"
                >
                  {badge}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
