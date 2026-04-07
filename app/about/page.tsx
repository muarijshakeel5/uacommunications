'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

type ValueCard = {
  title: string;
  description: string;
};

const coreValues: ValueCard[] = [
  {
    title: 'Relentless QA',
    description:
      'We do not wait for quality problems to become account problems. Monitoring, coaching, and scorecards are embedded into delivery from day one.',
  },
  {
    title: 'Data-Driven Empathy',
    description:
      'Great communication is not just warm, it is measurable. We balance customer care with real operational data so every interaction becomes more useful.',
  },
  {
    title: 'Pipeline Velocity',
    description:
      'Every program is built to move faster without becoming chaotic. Cleaner handoffs, faster follow-up, and better reporting keep momentum intact.',
  },
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

function ValueIcon() {
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
        d="M12 3.75 19.5 7.5v9L12 20.25 4.5 16.5v-9L12 3.75Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <main className="bg-white text-slate-900 dark:bg-slate-950 dark:text-gray-200">
      <section className="relative overflow-hidden bg-white dark:bg-slate-950">
        <div className="absolute inset-x-0 top-0 -z-10 h-[30rem] bg-grid-slate-100 bg-[size:28px_28px] [mask-image:linear-gradient(to_bottom,white_55%,transparent_100%)] dark:bg-grid-slate-800 dark:[mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]" />
        <div className="absolute left-[-4rem] top-12 -z-10 h-64 w-64 rounded-full bg-red-600/10 blur-3xl dark:bg-red-600/16" />

        <div className="mx-auto max-w-7xl px-6 pb-20 pt-12 lg:px-8 lg:pb-24 lg:pt-16">
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={reveal}
            className="max-w-3xl"
          >
            <span className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-red-600 dark:border-red-500/20 dark:bg-red-500/10">
              About UA Communications
            </span>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
              Built to Scale. Managed to Perfection.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-slate-300">
              UA Communications exists to give ambitious brands something better than outsourced
              labor: a tightly managed operational partner with the energy of a high-performing
              sales floor and the reporting standards of a modern SaaS operator.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            custom={0}
            variants={reveal}
          >
            <span className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-red-600 dark:border-red-500/20 dark:bg-red-500/10">
              The Mission
            </span>
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              From traditional call center roots to a tech-enabled communications firm in Lahore.
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            custom={0.1}
            variants={reveal}
            className="space-y-6"
          >
            <p className="text-base leading-8 text-gray-600 dark:text-slate-300">
              We started with the practical realities of voice operations: hiring, attendance,
              supervision, escalation handling, and the need to deliver consistently under pressure.
              That foundation matters. It taught us how to run teams, not just pitch them.
            </p>
            <p className="text-base leading-8 text-gray-600 dark:text-slate-300">
              But the market moved. Clients no longer want anonymous seats and generic promises.
              They want visibility, speed, compliance awareness, and better control over quality.
              So UA Communications evolved into a systems-led communications firm that blends human
              talent with tighter workflows, performance dashboards, QA intelligence, and cleaner
              revenue reporting.
            </p>
            <p className="text-base leading-8 text-gray-600 dark:text-slate-300">
              Today, our Lahore base gives us the talent density and operating discipline to serve
              US and UK clients with more precision. We are still grounded in execution, but the
              wrapper is sharper: more data, more accountability, and a more premium experience for
              both clients and the people who work here.
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
              Leadership / Core Values
            </span>
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Operational values that shape every campaign and client relationship.
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {coreValues.map((value, index) => (
              <motion.article
                key={value.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                custom={0.08 + index * 0.1}
                variants={reveal}
                className="rounded-[1.75rem] border border-gray-200 bg-white p-7 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-600 dark:bg-red-500/10">
                  <ValueIcon />
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-gray-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-gray-600 dark:text-slate-300">
                  {value.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-400">
              Build With UA
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Join the team shaping the next version of premium communications delivery.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Whether you want to hire a high-discipline operating partner or join one, the next
              step is here.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/careers"
              className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-red-500 hover:text-red-300"
            >
              View Open Roles
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-red-600 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/30"
            >
              Book a Discovery Call
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
