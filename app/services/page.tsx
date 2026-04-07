'use client';

import PipelineCalculator from '@/components/PipelineCalculator';
import { motion } from 'framer-motion';
import Link from 'next/link';

type ServiceBlock = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  bullets: string[];
  metrics: { label: string; value: string }[];
};

const serviceBlocks: ServiceBlock[] = [
  {
    id: 'A',
    eyebrow: 'Outbound Lead Generation & Appointment Setting',
    title: 'Outbound systems designed to create pipeline without sacrificing compliance.',
    description:
      'We build disciplined outbound engines for US and UK campaigns with tighter list segmentation, script engineering, CRM hygiene, and rep accountability. The result is more useful conversations, better contact rates, and cleaner handoffs into your sales team.',
    bullets: [
      'TCPA-conscious outreach workflows and contact handling logic',
      'Script engineering built around objection handling and qualification depth',
      'Live monitoring, coaching, and contact-rate optimization by campaign',
    ],
    metrics: [
      { label: 'Contact rate lift', value: '+2.4x' },
      { label: 'Booked meetings', value: '186' },
      { label: 'CRM data hygiene', value: '99%' },
    ],
  },
  {
    id: 'B',
    eyebrow: 'Customer Experience & BPO',
    title: '24/7 support operations built around SLA discipline and omnichannel consistency.',
    description:
      'Our BPO pods are structured for responsiveness, escalation ownership, and client-visible reporting. Voice, chat, email, and blended workflows are managed with tight staffing control so service levels stay predictable even when volume spikes.',
    bullets: [
      '24/7 coverage models with SLA tracking and queue visibility',
      'Omnichannel support across voice, chat, ticketing, and escalation handling',
      'Operational playbooks for continuity, overflow, and after-hours resilience',
    ],
    metrics: [
      { label: 'Average first response', value: '<1 min' },
      { label: 'SLA adherence', value: '98.2%' },
      { label: 'Channel coverage', value: '4x' },
    ],
  },
  {
    id: 'C',
    eyebrow: 'AI-Enhanced QA',
    title: 'Performance oversight accelerated by automated transcript review and sentiment signals.',
    description:
      'QA should move faster than the problems it is trying to fix. We combine manual coaching standards with automated transcript review, keyword detection, and sentiment analysis so quality issues surface early and improvement loops stay tight.',
    bullets: [
      'Automated transcript review across large call volumes',
      'Sentiment analysis for escalation risk and customer friction detection',
      'Rep scorecards with coaching flags delivered in near real time',
    ],
    metrics: [
      { label: 'Calls monitored', value: '94%' },
      { label: 'Coaching alerts', value: 'Real-time' },
      { label: 'Review cycle time', value: '-63%' },
    ],
  },
];

const reveal = {
  hidden: { opacity: 0, y: 26 },
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

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-5 w-5"
    >
      <path d="m5 12 4.25 4.25L19 6.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PulseIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      className="h-5 w-5"
    >
      <path
        d="M3 12h4l2.5-5 4 10 2.5-5H21"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ServiceVisual({ blockId }: { blockId: string }) {
  if (blockId === 'A') {
    return (
      <div className="relative overflow-hidden rounded-[2rem] border border-gray-200/80 bg-white/70 p-6 shadow-xl backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/60">
        <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-red-600/12 blur-3xl dark:bg-red-600/18" />
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-600">
              Contact Intelligence
            </p>
            <h3 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white">
              Script + list alignment
            </h3>
          </div>
          <div className="rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-medium text-red-600 dark:border-red-500/20 dark:bg-red-500/10">
            TCPA aware
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            { label: 'Answer rate', value: '31%' },
            { label: 'Qualified leads', value: '118' },
            { label: 'Show rate', value: '72%' },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-gray-200 bg-white/85 p-4 shadow-md dark:border-slate-800 dark:bg-slate-950/80"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-gray-500 dark:text-slate-400">
                {item.label}
              </p>
              <p className="mt-3 text-2xl font-semibold text-gray-900 dark:text-white">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-3xl border border-gray-200 bg-gray-50/90 p-5 dark:border-slate-800 dark:bg-slate-950/70">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-900 dark:text-white">Script performance</p>
            <span className="text-xs text-gray-500 dark:text-slate-400">Top opener variants</span>
          </div>
          <div className="mt-5 space-y-4">
            {[
              { label: 'Seller pain opener', width: '88%' },
              { label: 'Speed-to-close opener', width: '76%' },
              { label: 'Referral reactivation', width: '64%' },
            ].map((item) => (
              <div key={item.label}>
                <div className="mb-2 flex items-center justify-between text-sm text-gray-600 dark:text-slate-300">
                  <span>{item.label}</span>
                  <span>{item.width}</span>
                </div>
                <div className="h-2.5 rounded-full bg-gray-200 dark:bg-slate-800">
                  <div className="h-2.5 rounded-full bg-gradient-to-r from-red-600 to-slate-900 dark:to-slate-200" style={{ width: item.width }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (blockId === 'B') {
    return (
      <div className="relative overflow-hidden rounded-[2rem] border border-gray-200/80 bg-white/70 p-6 shadow-xl backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/60">
        <div className="absolute left-0 top-0 h-32 w-32 rounded-full bg-red-600/12 blur-3xl dark:bg-red-600/18" />
        <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-gray-200 bg-gray-50/90 p-5 dark:border-slate-800 dark:bg-slate-950/75">
            <div className="flex items-center gap-3 text-red-600">
              <PulseIcon />
              <span className="text-sm font-semibold uppercase tracking-[0.22em]">SLA Monitor</span>
            </div>
            <p className="mt-5 text-5xl font-semibold tracking-tight text-gray-900 dark:text-white">
              98.2%
            </p>
            <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-slate-300">
              Live adherence across email, chat, and voice queues with escalation visibility.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { channel: 'Voice support', load: '74 active', tint: 'bg-red-600' },
              { channel: 'Chat support', load: '22 active', tint: 'bg-red-500' },
              { channel: 'Email queue', load: '13 pending', tint: 'bg-slate-900 dark:bg-slate-200' },
            ].map((item) => (
              <div
                key={item.channel}
                className="rounded-3xl border border-gray-200 bg-white/85 p-4 shadow-md dark:border-slate-800 dark:bg-slate-950/80"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{item.channel}</p>
                  <span className="text-sm text-gray-500 dark:text-slate-400">{item.load}</span>
                </div>
                <div className="mt-4 h-2.5 rounded-full bg-gray-200 dark:bg-slate-800">
                  <div className={`h-2.5 rounded-full ${item.tint}`} style={{ width: item.channel === 'Voice support' ? '82%' : item.channel === 'Chat support' ? '65%' : '46%' }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {['24/7 staffed', 'Omnichannel ready', 'Escalation-owned'].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-gray-200 bg-white/85 px-4 py-4 text-sm font-medium text-gray-700 shadow-md dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-200"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-gray-200/80 bg-white/70 p-6 shadow-xl backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/60">
      <div className="absolute right-10 top-10 h-28 w-28 rounded-full bg-red-600/10 blur-3xl dark:bg-red-600/16" />
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-600">
            QA Intelligence
          </p>
          <h3 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white">
            Transcript + sentiment engine
          </h3>
        </div>
        <div className="rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white dark:bg-slate-800">
          Automated review
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-3xl border border-gray-200 bg-gray-50/90 p-5 dark:border-slate-800 dark:bg-slate-950/75">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-900 dark:text-white">Sentiment markers</p>
            <span className="text-xs text-gray-500 dark:text-slate-400">Rolling 7 days</span>
          </div>
          <div className="mt-5 space-y-4">
            {[
              { label: 'Positive', width: '72%' },
              { label: 'Neutral', width: '19%' },
              { label: 'Escalation risk', width: '9%' },
            ].map((item) => (
              <div key={item.label}>
                <div className="mb-2 flex items-center justify-between text-sm text-gray-600 dark:text-slate-300">
                  <span>{item.label}</span>
                  <span>{item.width}</span>
                </div>
                <div className="h-2.5 rounded-full bg-gray-200 dark:bg-slate-800">
                  <div className="h-2.5 rounded-full bg-red-600" style={{ width: item.width }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {[
            'Keyword alert: compliance disclaimer missed',
            'Sentiment dip detected after billing objection',
            'Coaching note issued for interruption rate',
          ].map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-gray-200 bg-white/85 p-4 shadow-md dark:border-slate-800 dark:bg-slate-950/80"
            >
              <div className="flex gap-3">
                <div className="mt-1 h-2.5 w-2.5 rounded-full bg-red-600" />
                <p className="text-sm leading-6 text-gray-700 dark:text-slate-200">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {['Automated transcripts', 'Sentiment analysis', 'Rep scorecards'].map((item) => (
          <div
            key={item}
            className="rounded-full border border-gray-200 bg-white/85 px-4 py-2 text-sm text-gray-600 shadow-sm dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-300"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <main className="bg-white text-slate-900 dark:bg-slate-950 dark:text-gray-200">
      <section className="relative overflow-hidden bg-white dark:bg-slate-950">
        <div className="absolute inset-x-0 top-0 -z-10 h-[32rem] bg-grid-slate-100 bg-[size:28px_28px] [mask-image:linear-gradient(to_bottom,white_55%,transparent_100%)] dark:bg-grid-slate-800 dark:[mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]" />
        <div className="absolute right-0 top-10 -z-10 h-64 w-64 rounded-full bg-red-600/10 blur-3xl dark:bg-red-600/16" />

        <div className="mx-auto max-w-7xl px-6 pb-20 pt-12 lg:px-8 lg:pb-24 lg:pt-16">
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={reveal}
            className="max-w-3xl"
          >
            <span className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-red-600 dark:border-red-500/20 dark:bg-red-500/10">
              Services
            </span>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
              Architects of Outbound Revenue.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-slate-300">
              Precision lead generation and BPO support engineered for US & UK markets.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-red-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/30"
              >
                Book a Discovery Call
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-6 py-3.5 text-sm font-semibold text-gray-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:text-white"
              >
                Explore Proof of ROI
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-50 py-24 dark:bg-slate-900/50">
        <div className="mx-auto max-w-7xl space-y-16 px-6 lg:px-8">
          {serviceBlocks.map((block, index) => {
            const visualFirst = index % 2 === 1;

            return (
              <motion.section
                key={block.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index * 0.08}
                variants={reveal}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12"
              >
                <div className={visualFirst ? 'lg:order-2' : ''}>
                  <div className="rounded-[2rem] border border-gray-200/80 bg-white/70 p-8 shadow-xl backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/60">
                    <div className="flex items-center justify-between gap-4">
                      <span className="inline-flex rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-red-600 dark:border-red-500/20 dark:bg-red-500/10">
                        {block.eyebrow}
                      </span>
                      <span className="text-sm font-semibold text-red-600">0{index + 1}</span>
                    </div>

                    <h2 className="mt-6 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {block.title}
                    </h2>
                    <p className="mt-5 text-base leading-7 text-gray-600 dark:text-slate-300">
                      {block.description}
                    </p>

                    <div className="mt-8 space-y-4">
                      {block.bullets.map((bullet) => (
                        <div key={bullet} className="flex gap-3">
                          <div className="mt-1 text-red-600">
                            <CheckIcon />
                          </div>
                          <p className="text-sm leading-6 text-gray-700 dark:text-slate-200">
                            {bullet}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 grid gap-4 sm:grid-cols-3">
                      {block.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="rounded-2xl border border-gray-200 bg-white/85 p-4 shadow-md dark:border-slate-800 dark:bg-slate-950/70"
                        >
                          <p className="text-xs uppercase tracking-[0.18em] text-gray-500 dark:text-slate-400">
                            {metric.label}
                          </p>
                          <p className="mt-3 text-2xl font-semibold text-red-600">{metric.value}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8">
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-md bg-red-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/30"
                      >
                        Talk to our team
                      </Link>
                    </div>
                  </div>
                </div>

                <div className={visualFirst ? 'lg:order-1' : ''}>
                  <ServiceVisual blockId={block.id} />
                </div>
              </motion.section>
            );
          })}
        </div>
      </section>

      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.08}
            variants={reveal}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-red-600 dark:border-red-500/20 dark:bg-red-500/10">
              Revenue Modeling
            </span>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Quantify the upside before you scale the team.
            </h2>
            <p className="mt-5 text-base leading-7 text-gray-600 dark:text-slate-300">
              Use the calculator below to model conservative monthly revenue impact based on
              your lead flow, deal size, and current conversion performance.
            </p>
          </motion.div>

          <div className="mt-12">
            <PipelineCalculator />
          </div>
        </div>
      </section>
    </main>
  );
}
