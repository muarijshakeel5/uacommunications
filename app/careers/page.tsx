'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle2, Send, HeartPulse, TrendingUp, Car } from 'lucide-react';

const reveal = {
  hidden: { opacity: 0, y: 15 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  }),
};

const perks = [
  {
    icon: HeartPulse,
    title: 'Health Coverage',
    desc: 'Structured medical support designed for long-term performance and growing teams.',
  },
  {
    icon: TrendingUp,
    title: 'Uncapped Commissions',
    desc: 'Strong operators should feel the upside. Top output gets visibly rewarded here.',
  },
  {
    icon: Car,
    title: 'Transport Allowance',
    desc: 'Night shift practicality matters, so commuting support is built into the experience.',
  },
];

const roles = [
  { role: 'BPO Support Agent', team: 'Customer Operations', shift: 'Rotational', location: 'Lahore HQ' },
  { role: 'Appointment Setter - Home Services', team: 'Lead Generation', shift: 'US Night Shift', location: 'Lahore HQ' },
  { role: 'QA Analyst - Voice Operations', team: 'Performance & QA', shift: 'US Night Shift', location: 'Lahore HQ' },
];

export default function CareersPage() {
  return (
    <main className="bg-white text-slate-900 dark:bg-slate-950 dark:text-gray-200">
      
      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden bg-slate-50/50 pb-24 pt-16 dark:bg-slate-950">
        <div className="absolute inset-x-0 top-0 -z-10 h-full bg-grid-slate-200/[0.3] [mask-image:linear-gradient(to_bottom,white_10%,transparent_100%)] dark:bg-grid-slate-800/[0.2]" />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" custom={0} variants={reveal} className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.3em] text-red-600 dark:border-red-500/20 dark:bg-red-500/10">
              Careers
            </span>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-gray-900 sm:text-6xl dark:text-white">
              Join the <span className="text-red-600">A-Team.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-500 dark:text-slate-400">
              We are seeking exceptional communicators for our Lahore HQ. If you want a premium, 
              performance-driven environment that feels closer to a modern tech company than a 
              traditional call floor, you will feel at home here.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- INTERACTIVE SCREENING (DARK SECTION) --- */}
      <section className="bg-[#0B0F19] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.1} variants={reveal}>
              <span className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.3em] text-red-400">
                The Interactive Screening
              </span>
              <h2 className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                A faster, sharper hiring flow for serious applicants.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                We use AI-assisted pre-qualification to identify strong communicators quickly, reduce 
                back-and-forth, and move top candidates into human interviews faster.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  'Pre-record applications and AI pre-screening before manual review.',
                  'Performance bonuses for consistent output, attendance, and quality.',
                  'Premium DHA Gulberg style office environment built for ambitious talent.'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-red-500/20 text-red-400">
                      <div className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-2">
                {['B2B Outbound', 'Team lead mentorship', 'Performance reviews'].map(tag => (
                  <span key={tag} className="rounded-full border border-slate-800 bg-slate-900/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* MOCK CHATBOT UI */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2} variants={reveal} className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-red-500/20 to-transparent opacity-50 blur-xl" />
              <div className="relative flex h-[400px] flex-col overflow-hidden rounded-2xl border border-slate-800 bg-[#0F1423] shadow-2xl">
                {/* Chat Header */}
                <div className="flex items-center justify-between border-b border-slate-800/80 bg-slate-900/50 px-5 py-4 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500/10 text-red-500">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-widest text-slate-500">AI Recruitment Chatbot</p>
                      <p className="text-xs font-medium text-white">UA Talent AI Screening</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2 py-1">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                    <span className="text-[8px] font-bold uppercase tracking-widest text-emerald-500">Live Demo</span>
                  </div>
                </div>
                
                {/* Chat Body */}
                <div className="flex-1 p-5">
                  <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-slate-800 p-4 text-sm leading-relaxed text-slate-200">
                    Hi! I&apos;m the UA Talent AI. Looking to join our Lahore outbound team? Let&apos;s get you pre-qualified. First, what&apos;s your current English fluency level?
                  </div>
                </div>

                {/* Chat Input */}
                <div className="border-t border-slate-800/80 bg-slate-900/50 p-4">
                  <div className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/50 p-1 pl-4">
                    <input type="text" placeholder="Type your answer..." disabled className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-500" />
                    <button className="flex h-9 items-center justify-center gap-2 rounded-lg bg-red-600 px-4 text-[10px] font-bold uppercase tracking-widest text-white transition-all hover:bg-red-500">
                      <Send className="h-3 w-3" />
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- PERKS GRID --- */}
      <section className="bg-slate-50 py-24 dark:bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.1} variants={reveal}>
             <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.3em] text-red-600 dark:border-red-500/20 dark:bg-red-500/10">
              Perks Grid
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
              A workplace built to attract and keep top-tier talent.
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {perks.map((perk, i) => (
              <motion.div key={perk.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2 + (i * 0.1)} variants={reveal} className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-950">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-600 dark:bg-red-500/10">
                  <perk.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-base font-semibold text-gray-900 dark:text-white">{perk.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-slate-400">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- OPEN ROLES TABLE (FIXED) --- */}
      <section className="bg-white py-24 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.1} variants={reveal}>
             <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.3em] text-red-600 dark:border-red-500/20 dark:bg-red-500/10">
              Open Roles
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Current opportunities at UA Communications.
            </h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2} variants={reveal} className="mt-12 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-600 dark:text-slate-300">
                <thead className="border-b border-gray-100 bg-gray-50/50 text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:border-slate-800 dark:bg-slate-950">
                  <tr>
                    <th className="px-6 py-5 font-bold">Role</th>
                    <th className="px-6 py-5 font-bold">Team</th>
                    <th className="px-6 py-5 font-bold">Shift</th>
                    <th className="px-6 py-5 font-bold">Location</th>
                    <th className="px-6 py-5 font-bold text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-slate-800">
                  {roles.map((role) => (
                    <tr key={role.role} className="transition-colors hover:bg-gray-50 dark:hover:bg-slate-800/50">
                      <td className="whitespace-nowrap px-6 py-5 font-semibold text-gray-900 dark:text-white">
                        {role.role}
                      </td>
                      <td className="whitespace-nowrap px-6 py-5">{role.team}</td>
                      <td className="whitespace-nowrap px-6 py-5">{role.shift}</td>
                      <td className="whitespace-nowrap px-6 py-5">{role.location}</td>
                      <td className="whitespace-nowrap px-6 py-5 text-right">
                        <button className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white transition-all hover:bg-red-700">
                          Apply Now
                          <ArrowRight className="h-3 w-3" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}