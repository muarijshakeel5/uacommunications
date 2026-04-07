'use client';

import { motion } from 'framer-motion';

type Integration = {
  name: string;
  detail: string;
};

type Capability = {
  title: string;
  description: string;
  note: string;
};

type TrustItem = {
  title: string;
  description: string;
};

const integrations: Integration[] = [
  {
    name: 'Salesforce',
    detail: 'Opportunity visibility, lead status discipline, and cleaner reporting handoffs.',
  },
  {
    name: 'HubSpot',
    detail: 'Lifecycle tracking, lead enrichment, and marketing-to-SDR alignment.',
  },
  {
    name: 'Close',
    detail: 'Fast outbound execution with clearer rep workflows and cleaner follow-up states.',
  },
  {
    name: 'RingCentral',
    detail: 'Reliable voice infrastructure with routing control and QA-friendly visibility.',
  },
];

const capabilities: Capability[] = [
  {
    title: 'Automated Sentiment Analysis',
    description:
      'We use NLP-led sentiment signals to gauge prospect warmth, escalation friction, and conversational risk before those issues become revenue leaks.',
    note: 'Prospect warmth visibility',
  },
  {
    title: 'AI-Driven Call Scoring',
    description:
      'Relentless, unbiased QA on every agent is easier when scorecards are reinforced by automated transcript review, keyword alerts, and repeatable coaching logic.',
    note: 'Consistent QA at scale',
  },
  {
    title: 'Dynamic Lead Routing',
    description:
      'Lead flow is routed toward the fastest and most appropriate rep path so speed-to-lead improves without turning distribution into chaos.',
    note: 'Faster speed-to-lead',
  },
];

const trustItems: TrustItem[] = [
  {
    title: 'TCPA Adherence',
    description:
      'Our outbound workflows are structured around strict adherence to TCPA guidelines, with dialing logic and contact handling designed to reduce compliance risk.',
  },
  {
    title: 'Secure Data Handling',
    description:
      'Sensitive customer and prospect data is handled through controlled access, disciplined workflow design, and operational safeguards that support client trust.',
  },
  {
    title: 'GDPR Compliance',
    description:
      'We maintain GDPR-conscious process design across data capture, communication, and reporting so cross-border operations stay commercially viable and responsible.',
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

function ChipIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      className="h-5 w-5"
    >
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <path d="M9 3.75v3.25M15 3.75v3.25M9 17v3.25M15 17v3.25M20.25 9H17M20.25 15H17M7 9H3.75M7 15H3.75" strokeLinecap="round" />
    </svg>
  );
}

function ShieldIcon() {
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
        d="M12 3.75 19.5 6.75V12c0 4.05-2.72 7.45-7.5 8.25C7.22 19.45 4.5 16.05 4.5 12V6.75L12 3.75Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="m9.5 12 1.75 1.75L14.75 10.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function TechPage() {
  return (
    <main className="bg-white text-slate-900 dark:bg-slate-950 dark:text-gray-200">
      <section className="relative overflow-hidden bg-white dark:bg-slate-950">
        <div className="absolute inset-x-0 top-0 -z-10 h-[30rem] bg-grid-slate-100 bg-[size:28px_28px] [mask-image:linear-gradient(to_bottom,white_55%,transparent_100%)] dark:bg-grid-slate-800 dark:[mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]" />
        <div className="absolute left-[-3rem] top-12 -z-10 h-64 w-64 rounded-full bg-red-600/10 blur-3xl dark:bg-red-600/18" />

        <div className="mx-auto max-w-7xl px-6 pb-20 pt-12 lg:px-8 lg:pb-24 lg:pt-16">
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={reveal}
            className="max-w-3xl"
          >
            <span className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-red-600 dark:border-red-500/20 dark:bg-red-500/10">
              Technology
            </span>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
              The Engine Behind the Output.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-slate-300">
              We pair elite human talent with AI-driven infrastructure and deep CRM integrations.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-50 py-24 dark:bg-slate-900/55">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            custom={0}
            variants={reveal}
            className="max-w-3xl"
          >
            <span className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-red-600 dark:border-red-500/20 dark:bg-red-500/10">
              Integration Ecosystem
            </span>
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Seamless handoffs between outreach, support, reporting, and revenue systems.
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {integrations.map((integration, index) => (
              <motion.article
                key={integration.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                custom={0.08 + index * 0.08}
                variants={reveal}
                className="rounded-[1.75rem] border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-600 dark:bg-red-500/10">
                  <ChipIcon />
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-gray-900 dark:text-white">
                  {integration.name}
                </h3>
                <p className="mt-4 text-base leading-7 text-gray-600 dark:text-slate-300">
                  {integration.detail}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            custom={0}
            variants={reveal}
            className="rounded-[2rem] border border-gray-200 bg-white/80 p-8 shadow-xl backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/60"
          >
            <span className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-red-600 dark:border-red-500/20 dark:bg-red-500/10">
              AI & NLP Infrastructure
            </span>
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Human execution made sharper by consistent machine visibility.
            </h2>
            <p className="mt-5 text-base leading-8 text-gray-600 dark:text-slate-300">
              Our operational edge comes from giving managers and clients more signal, faster. AI
              is not used as decoration here. It is used to tighten oversight, reduce blind spots,
              and increase the speed of response across sales and support environments.
            </p>

            <div className="mt-8 rounded-[1.75rem] border border-gray-200 bg-gray-50/90 p-5 dark:border-slate-800 dark:bg-slate-950/70">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900 dark:text-white">Signal layer</p>
                <span className="text-xs text-gray-500 dark:text-slate-400">Live visibility</span>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {[
                  { label: 'Warmth detection', value: 'NLP-led' },
                  { label: 'Call scoring', value: 'Every agent' },
                  { label: 'Lead routing', value: 'Dynamic' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-gray-200 bg-white/90 p-4 shadow-md dark:border-slate-800 dark:bg-slate-900"
                  >
                    <p className="text-xs uppercase tracking-[0.18em] text-gray-500 dark:text-slate-400">
                      {item.label}
                    </p>
                    <p className="mt-3 text-2xl font-semibold text-red-600">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            {capabilities.map((capability, index) => (
              <motion.article
                key={capability.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                custom={0.08 + index * 0.08}
                variants={reveal}
                className="rounded-[1.75rem] border border-gray-200 bg-white p-6 shadow-md dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-600 dark:bg-red-500/10">
                    <ChipIcon />
                  </div>
                  <span className="text-sm font-medium text-red-600">{capability.note}</span>
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-gray-900 dark:text-white">
                  {capability.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-gray-600 dark:text-slate-300">
                  {capability.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-24 dark:bg-slate-900/55">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            custom={0}
            variants={reveal}
            className="max-w-3xl"
          >
            <span className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-red-600 dark:border-red-500/20 dark:bg-red-500/10">
              Security & Compliance
            </span>
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Trust is built through process discipline, not just positioning.
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {trustItems.map((item, index) => (
              <motion.article
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                custom={0.08 + index * 0.08}
                variants={reveal}
                className="rounded-[1.75rem] border border-gray-200 bg-white p-7 shadow-md dark:border-slate-800 dark:bg-slate-950"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-600 dark:bg-red-500/10">
                  <ShieldIcon />
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-gray-600 dark:text-slate-300">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
