'use client';

import { useEffect } from 'react'; // Added useEffect import
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ShieldCheck, Zap, BarChart3, Users2, Shield } from 'lucide-react';

const reveal = {
  hidden: { opacity: 0, y: 15 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const pillars = [
  {
    icon: ShieldCheck,
    title: 'SLA-Driven Precision',
    description: 'We treat operational metrics as a hard science, ensuring performance is never a guessing game.',
  },
  {
    icon: Zap,
    title: 'Tech-First Operations',
    description: 'Leveraging AI-screening and real-time monitoring to stay ahead of traditional BPO models.',
  },
  {
    icon: BarChart3,
    title: 'Transparent Reporting',
    description: 'Real-time dashboards keep you connected to every dial, transcript, and conversion metric.',
  },
  {
    icon: Users2,
    title: 'Talent Density',
    description: 'We hire for curiosity and communication, ensuring higher conversion for our global partners.',
  },
];

const coreValues = [
  {
    title: 'Relentless QA',
    description:
      'We do not wait for quality problems to become account problems. Monitoring, coaching, and scorecards are embedded from day one.',
  },
  {
    title: 'Data-Driven Empathy',
    description:
      'Great communication is measurable. We balance customer care with operational data so every interaction adds value.',
  },
  {
    title: 'Pipeline Velocity',
    description:
      'Every program is built for speed without chaos. Cleaner handoffs and better reporting keep your momentum intact.',
  },
];

export default function AboutPage() {
  
  // --- HARD RESET SCROLL ---
  // This prevents the page from loading halfway down when navigating from other pages.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-white text-slate-900 dark:bg-slate-950 dark:text-gray-200">
      
      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden bg-slate-50/50 pb-12 pt-16 lg:pb-14 lg:pt-20 dark:bg-slate-950">
        <div className="absolute inset-x-0 top-0 -z-10 h-full bg-grid-slate-200/[0.3] [mask-image:linear-gradient(to_bottom,white_10%,transparent_100%)] dark:bg-grid-slate-800/[0.2]" />
        <div className="absolute left-[-4rem] top-12 -z-10 h-64 w-64 rounded-full bg-red-600/10 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" custom={0} variants={reveal} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.3em] text-red-600 dark:border-red-500/20 dark:bg-red-500/10">
              About UA Communications
            </span>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-gray-900 sm:text-6xl dark:text-white">
              Built to Scale. <br />
              <span className="text-red-600">Managed to Perfection.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-slate-400">
              UA Communications exists to give ambitious brands something better than outsourced
              labor: a tightly managed operational partner with the energy of a high-performing
              sales floor and the reporting standards of a modern SaaS operator.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- CORE PILLARS --- */}
      <section className="bg-white py-12 lg:py-16 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.1}
                variants={reveal}
                className="group relative rounded-2xl border border-gray-100 bg-slate-50/40 p-6 transition-all hover:border-red-200 hover:bg-white dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-red-500/30"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-red-600 shadow-sm ring-1 ring-gray-200 group-hover:bg-red-600 group-hover:text-white dark:bg-slate-800 dark:ring-slate-700">
                  <pillar.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-[10px] font-bold uppercase tracking-widest text-gray-900 dark:text-white">{pillar.title}</h3>
                <p className="mt-2 text-[11px] leading-relaxed text-gray-500 dark:text-slate-400">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- THE MISSION --- */}
      <section className="bg-slate-50/50 py-16 lg:py-20 dark:bg-slate-900/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.1}
              variants={reveal}
              className="lg:col-span-5"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.3em] text-red-600 dark:border-red-500/20 dark:bg-red-500/10">
                The Mission
              </span>
              <h2 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                From traditional call center roots to a <span className="text-red-600">tech-enabled</span> firm in Lahore.
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.2}
              variants={reveal}
              className="space-y-6 lg:col-span-7"
            >
              <p className="text-sm leading-relaxed text-gray-600 dark:text-slate-400">
                We started with the practical realities of voice operations: hiring, attendance,
                supervision, escalation handling, and the need to deliver consistently under pressure.
                That foundation matters. It taught us how to run teams, not just pitch them.
              </p>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-slate-400">
                But the market moved. Clients no longer want anonymous seats. They want visibility, speed, 
                and better control over quality. UA Communications evolved into a systems-led firm that 
                blends human talent with tighter workflows, performance dashboards, and QA intelligence.
              </p>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-slate-400 italic">
                Our Lahore base gives us the talent density to serve US and UK clients with more precision. 
                The wrapper is sharper: more data, more accountability, and a more premium experience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- CORE VALUES --- */}
      <section className="bg-white py-16 lg:py-20 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.1} variants={reveal} className="max-w-3xl">
             <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.3em] text-red-600 dark:border-red-500/20 dark:bg-red-500/10">
              Core Values
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Operational values that shape every campaign.
            </h2>
          </motion.div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {coreValues.map((value, index) => (
              <motion.article
                key={value.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.2 + index * 0.1}
                variants={reveal}
                className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-600 dark:bg-red-500/10">
                  <Shield className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-gray-900 dark:text-white">{value.title}</h3>
                <p className="mt-3 text-[13px] leading-relaxed text-gray-600 dark:text-slate-400">{value.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION: Refined Light Version --- */}
      <section className="bg-white border-t border-gray-100 py-16 lg:py-24 dark:bg-slate-950 dark:border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          
          <div className="max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-red-600">
              Build With UA
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Shaping the next version of <br />
              <span className="text-red-600">premium communications</span> delivery.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              Whether you want to hire a high-discipline operating partner or join our elite outbound team, 
              the infrastructure is ready.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/careers"
              className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-3 text-xs font-bold uppercase tracking-widest text-slate-600 transition-all hover:border-slate-900 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
            >
              View Open Roles
            </Link>
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