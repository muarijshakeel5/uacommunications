'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import RecruitmentChatbot from '@/components/RecruitmentChatbot';

type Perk = {
  title: string;
  description: string;
};

type Role = {
  title: string;
  team: string;
  shift: string;
  location: string;
};

const perks: Perk[] = [
  {
    title: 'Health Coverage',
    description: 'Structured medical support designed for long-term performers and growing teams.',
  },
  {
    title: 'Uncapped Commissions',
    description: 'Strong operators should feel the upside. Top output gets visibly rewarded here.',
  },
  {
    title: 'Transport Allowance',
    description: 'Night-shift practicality matters, so commuting support is built into the experience.',
  },
];

const roles: Role[] = [
  {
    title: 'SDR - US Real Estate',
    team: 'Outbound Sales',
    shift: 'US Night Shift',
    location: 'Lahore HQ',
  },
  {
    title: 'BPO Support Agent',
    team: 'Customer Experience',
    shift: 'Rotational',
    location: 'Lahore HQ',
  },
  {
    title: 'Appointment Setter - Home Services',
    team: 'Lead Generation',
    shift: 'US Night Shift',
    location: 'Lahore HQ',
  },
  {
    title: 'QA Analyst - Voice Operations',
    team: 'Performance & QA',
    shift: 'US Night Shift',
    location: 'Lahore HQ',
  },
];

const processPoints = [
  'Fast-tracked applications with AI pre-screening before manual review',
  'Performance bonuses for consistent output, attendance, and quality',
  'Premium DHA / Gulberg-style office environment built for ambitious talent',
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

function PerkIcon() {
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
        d="M12 3.75 14.55 8.92l5.7.83-4.12 4.01.97 5.67L12 16.76l-5.1 2.67.97-5.67-4.12-4.01 5.7-.83L12 3.75Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function CareersPage() {
  return (
    <main className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      <section className="relative overflow-hidden bg-white dark:bg-slate-950">
        <div className="absolute inset-x-0 top-0 -z-10 h-[32rem] bg-grid-slate-100 bg-[size:28px_28px] [mask-image:linear-gradient(to_bottom,white_50%,transparent_100%)] dark:bg-grid-slate-800 dark:[mask-image:linear-gradient(to_bottom,black_55%,transparent_100%)]" />
        <div className="absolute left-[-5rem] top-12 -z-10 h-64 w-64 rounded-full bg-red-600/10 blur-3xl dark:bg-red-600/20" />

        <div className="mx-auto max-w-7xl px-6 pb-20 pt-12 lg:px-8 lg:pb-24 lg:pt-16">
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={reveal}
            className="max-w-3xl"
          >
            <span className="inline-flex rounded-full border border-red-200 bg-red-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-red-600 dark:border-red-500/20 dark:bg-red-500/10">
              Careers
            </span>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
              Join the A-Team.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-slate-300">
              We are seeking exceptional communicators for our Lahore HQ. If you want a premium,
              performance-led environment that feels closer to a modern tech company than a
              traditional call floor, you will feel at home here.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-slate-950 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            custom={0}
            variants={reveal}
            className="max-w-xl"
          >
            <span className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-red-400">
              The Interactive Screening
            </span>
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              A faster, sharper hiring flow for serious applicants.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-300">
              We use AI-assisted pre-qualification to identify strong communicators quickly, reduce
              back-and-forth, and move top candidates into human interviews faster.
            </p>

            <div className="mt-8 space-y-4">
              {processPoints.map((point) => (
                <div
                  key={point}
                  className="flex gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-4"
                >
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-red-500" />
                  <p className="text-sm leading-6 text-slate-200">{point}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {['In-house training', 'Team lead mentorship', 'Performance reviews'].map((badge) => (
                <div
                  key={badge}
                  className="rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-sm text-slate-300"
                >
                  {badge}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.12}
            variants={reveal}
            className="relative"
          >
            <div className="absolute inset-4 -z-10 rounded-[2rem] bg-red-600/20 blur-3xl" />
            <div className="shadow-2xl">
              <RecruitmentChatbot />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-24 dark:bg-slate-950">
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
              Perks Grid
            </span>
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              A workplace built to attract and keep top-tier talent.
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {perks.map((perk, index) => (
              <motion.article
                key={perk.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                custom={0.08 + index * 0.1}
                variants={reveal}
                className="rounded-[1.75rem] border border-gray-100 bg-white p-7 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-600 dark:bg-red-500/10">
                  <PerkIcon />
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-gray-900 dark:text-white">
                  {perk.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-gray-600 dark:text-slate-300">
                  {perk.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-24 dark:bg-slate-900/60">
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
              Open Roles
            </span>
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Current opportunities at UA Communications.
            </h2>
          </motion.div>

          <div className="mt-12 overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-md dark:border-slate-800 dark:bg-slate-950">
            <div className="hidden grid-cols-[1.3fr_0.9fr_0.8fr_0.8fr_0.8fr] gap-4 border-b border-gray-100 px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:border-slate-800 dark:text-slate-400 md:grid">
              <div>Role</div>
              <div>Team</div>
              <div>Shift</div>
              <div>Location</div>
              <div className="text-right">Action</div>
            </div>

            <div className="divide-y divide-gray-100 dark:divide-slate-800">
              {roles.map((role) => {
                return (
                  <div
                    key={role.title}
                    className="grid gap-5 px-6 py-6 md:grid-cols-[1.3fr_0.9fr_0.8fr_0.8fr_0.8fr] md:items-center"
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {role.title}
                      </h3>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-slate-300">{role.team}</div>
                    <div className="text-sm text-gray-600 dark:text-slate-300">{role.shift}</div>
                    <div className="text-sm text-gray-600 dark:text-slate-300">{role.location}</div>
                    <div className="flex md:justify-end">
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-md bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/30"
                      >
                        Apply Now
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
