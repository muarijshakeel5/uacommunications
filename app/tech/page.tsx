'use client';

import { Integration, TrustItem } from '@/types';
import { motion } from 'framer-motion';
import { 
  Cloud, FileKey2, LayoutDashboard, Lock, PhoneCall, Share2, 
  ShieldCheck 
} from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';

const reveal = {
  hidden: { opacity: 0, y: 15 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.4, // Sped up the animation slightly for a "snappier" feel
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const integrations: Integration[] = [
  {
    name: 'Salesforce',
    icon: Cloud,
    detail: 'Opportunity visibility, lead status discipline, and cleaner reporting handoffs.',
  },
  {
    name: 'HubSpot',
    icon: Share2,
    detail: 'Lifecycle tracking, lead enrichment, and marketing-to-SDR alignment.',
  },
  {
    name: 'Close',
    icon: LayoutDashboard,
    detail: 'Fast outbound execution with clearer rep workflows and cleaner follow-up states.',
  },
  {
    name: 'RingCentral',
    icon: PhoneCall,
    detail: 'Reliable voice infrastructure with routing control and QA-friendly visibility.',
  },
];

const trustItems: TrustItem[] = [
  {
    title: 'TCPA Adherence',
    icon: ShieldCheck,
    description: 'Our outbound workflows are structured around strict adherence to TCPA guidelines, with dialing logic and contact handling designed to reduce compliance risk.',
  },
  {
    title: 'Secure Data Handling',
    icon: Lock,
    description: 'Sensitive customer and prospect data is handled through controlled access, disciplined workflow design, and operational safeguards that support client trust.',
  },
  {
    title: 'GDPR Compliance',
    icon: FileKey2,
    description: 'We maintain GDPR-conscious process design across data capture, communication, and reporting so cross-border operations stay commercially viable and responsible.',
  },
];

export default function TechPage() {

  // --- HARD RESET SCROLL ---
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-white text-slate-900 dark:bg-slate-950 dark:text-gray-200">
      
      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden bg-slate-50/50 pb-10 pt-10 lg:pb-12 lg:pt-14 dark:bg-slate-950">
        <div className="absolute inset-x-0 top-0 -z-10 h-[30rem] bg-grid-slate-200/[0.3] [mask-image:linear-gradient(to_bottom,white_10%,transparent_100%)] dark:bg-grid-slate-800/[0.2]" />
        <div className="absolute left-[-3rem] top-12 -z-10 h-64 w-64 rounded-full bg-red-600/10 blur-3xl dark:bg-red-600/18" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" custom={0} variants={reveal} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.3em] text-red-600 dark:border-red-500/20 dark:bg-red-500/10">
              Technology
            </span>
            <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-gray-900 sm:text-6xl dark:text-white">
              The Engine Behind <br/>
              <span className="text-red-600">the Output.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-slate-300">
              We pair elite human talent with robust infrastructure and deep CRM integrations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- INTEGRATION ECOSYSTEM --- */}
      <section className="bg-white py-12 lg:py-16 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.1} variants={reveal} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.3em] text-red-600 dark:border-red-500/20 dark:bg-red-500/10">
              Integration Ecosystem
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Seamless handoffs between outreach, support, reporting, and revenue systems.
            </h2>
          </motion.div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {integrations.map((integration, index) => (
              <motion.article
                key={integration.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.2 + index * 0.1}
                variants={reveal}
                className="group rounded-2xl border border-gray-100 bg-slate-50/40 p-6 transition-all duration-300 hover:border-red-200 hover:bg-white hover:shadow-sm dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-red-500/30"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-600 dark:bg-red-500/10">
                  <integration.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-base font-semibold text-gray-900 dark:text-white">
                  {integration.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-slate-400">
                  {integration.detail}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECURITY & COMPLIANCE --- */}
      <section className="bg-slate-50/50 py-12 lg:py-16 dark:bg-slate-900/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.1} variants={reveal} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.3em] text-red-600 dark:border-red-500/20 dark:bg-red-500/10">
              Security & Compliance
            </span>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Trust is built through process discipline, not just positioning.
            </h2>
          </motion.div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {trustItems.map((item, index) => (
              <motion.article
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.2 + index * 0.1}
                variants={reveal}
                className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-600 dark:bg-red-500/10">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-base font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-gray-600 dark:text-slate-400">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="bg-white border-t border-gray-100 py-12 lg:py-16 dark:bg-slate-950 dark:border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          
          <div className="max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-red-600">
              Build With UA
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Shaping the next version of <br />
              <span className="text-red-600">premium communications</span> delivery.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
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