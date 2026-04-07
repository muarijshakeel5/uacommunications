'use client';

import { ContactChannel } from '@/types';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, Mail, MapPin, Phone, ShieldCheck 
} from 'lucide-react';
import { useEffect } from 'react';

const reveal = {
  hidden: { opacity: 0, y: 0 }, 
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

const channels: ContactChannel[] = [
  { icon: Mail, label: 'Partnerships', val: 'partnerships@uacommunications.co' },
  { icon: Phone, label: 'Direct Phone', val: '+92 300 0000000' },
  { icon: MapPin, label: 'Lahore HQ', val: 'DHA · Lahore, PK' }
];

export default function ContactPage() {
  
  // --- HARD RESET SCROLL ---
  // This ensures the page starts at (0,0) even if Next.js tries to restore scroll position
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-white text-slate-900 dark:bg-slate-950 dark:text-gray-200">
      
      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden bg-slate-50/50 pb-40 pt-10 dark:bg-slate-950">
        <div className="absolute inset-x-0 top-0 -z-10 h-full bg-grid-slate-200/[0.3] [mask-image:linear-gradient(to_bottom,white_10%,transparent_100%)] dark:bg-grid-slate-800/[0.2]" />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={reveal}
            className="max-w-xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.3em] text-red-600 dark:border-red-500/20 dark:bg-red-500/10">
              Contact Infrastructure
            </span>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-gray-900 sm:text-5xl dark:text-white">
              Let&apos;s build your <br />
              <span className="text-red-600">outbound engine.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* --- CONTENT GRID --- */}
      <section className="relative z-10 mx-auto -mt-32 max-w-7xl px-6 pb-20 lg:px-8">
        <div className="grid items-start gap-6 lg:grid-cols-12">
          
          {/* THE FORM */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={reveal}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xl lg:col-span-7 lg:p-10 dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">Submit Inquiry</h2>
                <p className="text-[11px] text-gray-400 dark:text-slate-500">Strategic triage response: ~90 mins.</p>
              </div>
              <ShieldCheck className="h-5 w-5 text-slate-200 dark:text-slate-700" />
            </div>

            <form className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1">
                  <label className="ml-1 text-[9px] font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                  <input type="text" placeholder="John Doe" className="h-10 w-full rounded-lg border border-gray-100 bg-slate-50/50 px-3 text-sm outline-none transition-all focus:border-red-500 focus:bg-white dark:border-slate-800 dark:bg-slate-950" />
                </div>
                <div className="space-y-1">
                  <label className="ml-1 text-[9px] font-bold uppercase tracking-widest text-gray-400">Work Email</label>
                  <input type="email" placeholder="john@company.com" className="h-10 w-full rounded-lg border border-gray-100 bg-slate-50/50 px-3 text-sm outline-none transition-all focus:border-red-500 focus:bg-white dark:border-slate-800 dark:bg-slate-950" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="ml-1 text-[9px] font-bold uppercase tracking-widest text-gray-400">Message</label>
                <textarea rows={4} placeholder="Describe bottlenecks or goals..." className="w-full rounded-lg border border-gray-100 bg-slate-50/50 px-3 py-2 text-sm outline-none focus:border-red-500 focus:bg-white dark:border-slate-800 dark:bg-slate-950" />
              </div>

              <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-red-700">
                Deploy Inquiry
                <CheckCircle2 className="h-3.5 w-3.5" />
              </button>
            </form>
          </motion.div>

          {/* SIDEBAR */}
          <div className="lg:col-span-5">
            <motion.aside
              initial="hidden"
              animate="visible"
              custom={0.2}
              variants={reveal}
              className="rounded-2xl border border-gray-200 bg-white p-6 lg:p-8 dark:border-slate-800 dark:bg-slate-950"
            >
              <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Direct Channels</h3>
              <div className="mt-8 space-y-6">
                {channels.map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600 dark:bg-red-500/10">
                      <item.icon className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <p className="text-[8px] font-black uppercase tracking-widest text-slate-400">{item.label}</p>
                      <p className="text-sm font-medium dark:text-white">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 border-t border-gray-50 pt-8 dark:border-slate-800/50">
                <p className="text-[10px] leading-relaxed text-slate-400 italic">
                  Inquiries sent via this infrastructure are encrypted and routed directly to our strategy lead.
                </p>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </main>
  );
}