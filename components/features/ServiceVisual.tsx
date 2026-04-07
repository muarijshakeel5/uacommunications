'use client';

import { CheckIcon, PulseIcon } from '@/components/icons';

export function ServiceVisual({ blockId }: { blockId: string }) {
  if (blockId === 'A') {
    return (
      <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-slate-50/50 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-red-600">Contact Intelligence</p>
            <h3 className="mt-1 text-base font-semibold text-gray-900 dark:text-white">Script + list alignment</h3>
          </div>
          <div className="rounded-full border border-red-200 bg-red-50 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest text-red-600 dark:border-red-500/20 dark:bg-red-500/10">
            TCPA Aware
          </div>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {[
            { label: 'Answer rate', value: '31%' },
            { label: 'Qualified leads', value: '118' },
            { label: 'Show rate', value: '72%' },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-950">
              <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400">{item.label}</p>
              <p className="mt-2 text-xl font-bold text-gray-900 dark:text-white">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <div className="flex items-center justify-between border-b border-gray-50 pb-3 dark:border-slate-800/50">
            <p className="text-xs font-semibold text-gray-900 dark:text-white">Script performance</p>
            <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Top Variants</span>
          </div>
          <div className="mt-4 space-y-4">
            {[
              { label: 'Seller pain opener', width: '88%' },
              { label: 'Speed-to-close opener', width: '76%' },
              { label: 'Referral reactivation', width: '64%' },
            ].map((item) => (
              <div key={item.label}>
                <div className="mb-1.5 flex items-center justify-between text-[11px] font-medium text-slate-600 dark:text-slate-300">
                  <span>{item.label}</span>
                  <span>{item.width}</span>
                </div>
                <div className="h-1.5 rounded-full bg-slate-100 dark:bg-slate-800">
                  <div className="h-1.5 rounded-full bg-red-600" style={{ width: item.width }} />
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
      <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-slate-50/50 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
        <div className="grid gap-4 sm:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-center rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <div className="flex items-center gap-2 text-red-600">
              <PulseIcon />
              <span className="text-[9px] font-bold uppercase tracking-[0.2em]">SLA Monitor</span>
            </div>
            <p className="mt-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">98.2%</p>
            <p className="mt-2 text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">
              Live adherence across email, chat, and voice queues.
            </p>
          </div>

          <div className="space-y-3">
            {[
              { channel: 'Voice support', load: '74 active', tint: 'bg-red-600' },
              { channel: 'Chat support', load: '22 active', tint: 'bg-red-400' },
              { channel: 'Email queue', load: '13 pending', tint: 'bg-slate-800 dark:bg-slate-600' },
            ].map((item) => (
              <div key={item.channel} className="rounded-xl border border-gray-200 bg-white p-3.5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                <div className="flex items-center justify-between">
                  <p className="text-[11px] font-semibold text-gray-900 dark:text-white">{item.channel}</p>
                  <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400">{item.load}</span>
                </div>
                <div className="mt-2.5 h-1.5 rounded-full bg-slate-100 dark:bg-slate-800">
                  <div className={`h-1.5 rounded-full ${item.tint}`} style={{ width: item.channel === 'Voice support' ? '82%' : item.channel === 'Chat support' ? '65%' : '46%' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {['24/7 staffed', 'Omnichannel ready', 'Escalation-owned'].map((item) => (
            <div key={item} className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
              {item}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-slate-50/50 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-red-600">QA Intelligence</p>
          <h3 className="mt-1 text-base font-semibold text-gray-900 dark:text-white">Transcript + sentiment engine</h3>
        </div>
        <div className="rounded-full bg-slate-900 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest text-white dark:bg-slate-800">
          Auto Review
        </div>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <div className="flex items-center justify-between border-b border-gray-50 pb-3 dark:border-slate-800/50">
            <p className="text-xs font-semibold text-gray-900 dark:text-white">Sentiment markers</p>
            <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">7 Days</span>
          </div>
          <div className="mt-4 space-y-4">
            {[
              { label: 'Positive', width: '72%' },
              { label: 'Neutral', width: '19%' },
              { label: 'Escalation risk', width: '9%' },
            ].map((item) => (
              <div key={item.label}>
                <div className="mb-1.5 flex items-center justify-between text-[11px] font-medium text-slate-600 dark:text-slate-300">
                  <span>{item.label}</span>
                  <span>{item.width}</span>
                </div>
                <div className="h-1.5 rounded-full bg-slate-100 dark:bg-slate-800">
                  <div className="h-1.5 rounded-full bg-red-600" style={{ width: item.width }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {[
            'Keyword alert: compliance disclaimer missed',
            'Sentiment dip detected after billing objection',
            'Coaching note issued for interruption rate',
          ].map((item) => (
            <div key={item} className="rounded-xl border border-gray-200 bg-white p-3.5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
              <div className="flex items-start gap-2.5">
                <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-red-600" />
                <p className="text-[11px] leading-relaxed text-slate-700 dark:text-slate-200">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
