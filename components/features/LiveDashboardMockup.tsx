'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import ActivityFeed from './ActivityFeed';

const dashboardChannels = [
  { label: 'Outbound Penetration', baseWidth: 92 },
  { label: 'Email Engagement', baseWidth: 76 },
  { label: 'Lead Reactivation', baseWidth: 68 },
];

export function LiveDashboardMockup() {
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
      <div className="absolute right-4 top-6 flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50/50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-300 md:right-6">
        <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
        Active Sync
      </div>

      <div className="border-b border-gray-100 pb-5 pr-20 dark:border-slate-800 md:pr-40">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-red-600 md:text-xs">
            Real-Time Lead Dashboard
          </p>
          <h2 className="mt-3 font-display text-xl font-semibold text-gray-900 dark:text-white md:text-2xl">
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
