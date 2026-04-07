'use client';

import PipelineCalculator from '@/components/features/PipelineCalculator';
import { ServiceVisual } from '@/components/features/ServiceVisual';
import { CheckIcon } from '@/components/icons';
import { ServiceBlock } from '@/types';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect } from 'react';

const serviceBlocks: ServiceBlock[] = [
  {
    id: 'A',
    eyebrow: 'Outbound Lead Gen & Appointment Setting',
    title: 'Outbound systems designed to create pipeline without sacrificing compliance.',
    description:
      'We build disciplined outbound engines for US and UK campaigns with tighter list segmentation, script engineering, CRM hygiene, and rep accountability. The result is more useful conversations, better contact rates, and cleaner handoffs.',
    bullets: [
      'TCPA-conscious outreach workflows and contact handling logic',
      'Script engineering built around objection handling',
      'Live monitoring and contact-rate optimization by campaign',
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
      'Our BPO pods are structured for responsiveness, escalation ownership, and client-visible reporting. Voice, chat, and blended workflows are managed with tight staffing control so service levels stay predictable even when volume spikes.',
    bullets: [
      '24/7 coverage models with SLA tracking and queue visibility',
      'Omnichannel support across voice, chat, ticketing, and escalation',
      'Operational playbooks for continuity and overflow resilience',
    ],
    metrics: [
      { label: 'Avg first response', value: '<1 min' },
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
      'Sentiment analysis for escalation risk and customer friction',
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

export default function ServicesPage() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-white text-slate-900 dark:bg-slate-950 dark:text-gray-200">
      
      {/* --- HERO SECTION (MAXIMUM TIGHTNESS) --- */}
      <section className="relative overflow-hidden bg-slate-50/50 pb-4 pt-8 lg:pb-6 lg:pt-10 dark:bg-slate-950">
        <div className="absolute inset-x-0 top-0 -z-10 h-full bg-grid-slate-200/[0.3] [mask-image:linear-gradient(to_bottom,white_10%,transparent_100%)] dark:bg-grid-slate-800/[0.2]" />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" custom={0} variants={reveal} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.3em] text-red-600 dark:border-red-500/20 dark:bg-red-500/10">
              Services
            </span>
            <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-gray-900 sm:text-6xl dark:text-white">
              Architects of <br/>
              <span className="text-red-600">Outbound Revenue.</span>
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-gray-600 dark:text-slate-300">
              Precision lead generation and BPO support engineered for US & UK markets.
            </p>
            
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-red-600 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white shadow-md shadow-red-500/10 transition-all hover:bg-red-700"
              >
                Book Discovery
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-3 text-xs font-bold uppercase tracking-widest text-slate-600 transition-all hover:border-slate-900 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
              >
                Explore ROI
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SERVICES LIST (REDUCED TOP PADDING) --- */}
      <section className="bg-white pb-12 pt-4 lg:pb-16 lg:pt-6 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl space-y-16 lg:space-y-24 px-6 lg:px-8">
          {serviceBlocks.map((block, index) => {
            const visualFirst = index % 2 === 1;

            return (
              <motion.section
                key={block.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={0.1}
                variants={reveal}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12"
              >
                <div className={visualFirst ? 'lg:order-2' : ''}>
                  <div className="flex items-center justify-between gap-4">
                    <span className="inline-flex rounded-full border border-red-200 bg-red-50 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.3em] text-red-600 dark:border-red-500/20 dark:bg-red-500/10">
                      {block.eyebrow}
                    </span>
                    <span className="text-[10px] font-bold tracking-widest text-slate-300 dark:text-slate-700">0{index + 1}</span>
                  </div>

                  <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {block.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-slate-400">
                    {block.description}
                  </p>

                  <div className="mt-6 space-y-3">
                    {block.bullets.map((bullet) => (
                      <div key={bullet} className="flex gap-3">
                        <div className="mt-0.5 text-red-600">
                          <CheckIcon />
                        </div>
                        <p className="text-[13px] leading-relaxed text-gray-700 dark:text-slate-300">
                          {bullet}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    {block.metrics.map((metric) => (
                      <div key={metric.label} className="rounded-xl border border-gray-100 bg-slate-50/50 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
                        <p className="text-[8px] font-bold uppercase tracking-widest text-slate-400">
                          {metric.label}
                        </p>
                        <p className="mt-1.5 text-2xl font-bold tracking-tight text-red-600">{metric.value}</p>
                      </div>
                    ))}
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

      {/* --- PIPELINE CALCULATOR CTA --- */}
      <section className="bg-slate-50/50 py-12 lg:py-16 dark:bg-slate-900/20 border-t border-gray-100 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.1}
            variants={reveal}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.3em] text-red-600 dark:border-red-500/20 dark:bg-red-500/10">
              Revenue Modeling
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Quantify the upside before you scale the team.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-500 dark:text-slate-400">
              Use the calculator below to model conservative monthly revenue impact based on
              your lead flow, deal size, and current conversion performance.
            </p>
          </motion.div>

          <div className="mt-10">
            <PipelineCalculator />
          </div>
        </div>
      </section>
    </main>
  );
}