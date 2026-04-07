'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useMemo, useState } from 'react';

type SliderFieldProps = {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  suffix?: string;
  prefix?: string;
  description: string;
  onChange: (value: number) => void;
};

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

function formatCompactCurrency(value: number) {
  return currencyFormatter.format(value);
}

function SliderField({
  label,
  value,
  min,
  max,
  step = 1,
  suffix = '',
  prefix = '',
  description,
  onChange,
}: SliderFieldProps) {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="rounded-3xl border border-gray-200/80 bg-white/80 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950/70">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-gray-900 dark:text-white">{label}</p>
          <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-slate-300">{description}</p>
        </div>
        <div className="shrink-0 rounded-2xl border border-red-100 bg-red-50 px-3 py-2 text-sm font-semibold text-red-600 dark:border-red-500/20 dark:bg-red-500/10">
          {prefix}
          {value.toLocaleString()}
          {suffix}
        </div>
      </div>

      <div className="mt-5">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(event) => onChange(Number(event.target.value))}
          className="h-2.5 w-full cursor-pointer appearance-none rounded-full bg-transparent accent-red-600"
          style={{
            background: `linear-gradient(to right, #dc2626 0%, #dc2626 ${percentage}%, #e5e7eb ${percentage}%, #e5e7eb 100%)`,
          }}
          aria-label={label}
        />
        <div className="mt-2 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-gray-400 dark:text-slate-500">
          <span>
            {prefix}
            {min.toLocaleString()}
            {suffix}
          </span>
          <span>
            {prefix}
            {max.toLocaleString()}
            {suffix}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function PipelineCalculator() {
  const [monthlyLeadVolume, setMonthlyLeadVolume] = useState(1000);
  const [averageDealSize, setAverageDealSize] = useState(5000);
  const [closeRate, setCloseRate] = useState(10);

  const projectedAdditionalRevenue = useMemo(() => {
    return monthlyLeadVolume * (closeRate / 100) * averageDealSize * 0.25;
  }, [averageDealSize, closeRate, monthlyLeadVolume]);

  const projectedMeetings = useMemo(() => {
    return Math.round(monthlyLeadVolume * (closeRate / 100) * 0.35);
  }, [closeRate, monthlyLeadVolume]);

  const channelLift = useMemo(() => {
    return Math.min(89, Math.round(48 + closeRate * 0.9));
  }, [closeRate]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="overflow-hidden rounded-[2rem] border border-gray-200 bg-white/50 shadow-xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/50"
    >
      <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="border-b border-gray-200/80 p-6 dark:border-slate-800 lg:border-b-0 lg:border-r">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-600">
              Interactive Pipeline Calculator
            </p>
            <h3 className="mt-3 text-3xl font-semibold leading-tight text-gray-900 dark:text-white">
              Model the revenue lift from a more disciplined outbound engine.
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600 dark:text-slate-300">
              Adjust your monthly lead volume, deal size, and close rate to see how much
              incremental revenue UA Communications can help unlock through better list
              hygiene, tighter scripts, and more reliable conversion pressure.
            </p>
          </div>

          <div className="mt-8 space-y-5">
            <SliderField
              label="Monthly Lead Volume"
              value={monthlyLeadVolume}
              min={100}
              max={10000}
              step={100}
              description="How many net-new prospects are entering your pipeline each month?"
              onChange={setMonthlyLeadVolume}
            />

            <SliderField
              label="Average Deal Size ($)"
              value={averageDealSize}
              min={500}
              max={50000}
              step={500}
              prefix="$"
              description="Use your average closed-won value to estimate the downstream impact."
              onChange={setAverageDealSize}
            />

            <SliderField
              label="Current Close Rate (%)"
              value={closeRate}
              min={1}
              max={50}
              suffix="%"
              description="A conservative model based on existing conversion performance."
              onChange={setCloseRate}
            />
          </div>
        </div>

        <div className="relative p-6 lg:p-8">
          <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-red-600/10 blur-3xl dark:bg-red-600/15" />

          <div className="relative rounded-[1.75rem] border border-gray-200/80 bg-white/85 p-6 shadow-lg dark:border-slate-800 dark:bg-slate-950/80">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-red-600">
                  Revenue Projection
                </p>
                <h4 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">
                  Projected Additional Monthly Revenue
                </h4>
              </div>
              <div className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-300">
                Conservative 25% lift
              </div>
            </div>

            <div className="mt-8">
              <motion.div
                key={projectedAdditionalRevenue}
                initial={{ scale: 0.94, opacity: 0.8 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl font-semibold tracking-tight text-red-600 sm:text-5xl lg:text-6xl"
              >
                {formatCompactCurrency(projectedAdditionalRevenue)}
              </motion.div>
              <p className="mt-3 max-w-md text-sm leading-6 text-gray-600 dark:text-slate-300">
                Based on a conservative 25% gain in pipeline generation driven by cleaner
                outreach execution, faster follow-up, and stronger conversion discipline.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-gray-200 bg-gray-50/90 p-4 dark:border-slate-800 dark:bg-slate-900/70">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-slate-400">
                  Additional qualified meetings
                </p>
                <p className="mt-3 text-3xl font-semibold text-gray-900 dark:text-white">
                  {projectedMeetings.toLocaleString()}
                </p>
              </div>

              <div className="rounded-3xl border border-gray-200 bg-gray-50/90 p-4 dark:border-slate-800 dark:bg-slate-900/70">
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-slate-400">
                    Channel performance lift
                  </p>
                  <span className="text-sm font-medium text-red-600">{channelLift}%</span>
                </div>
                <div className="mt-4 h-2.5 rounded-full bg-gray-200 dark:bg-slate-800">
                  <div
                    className="h-2.5 rounded-full bg-gradient-to-r from-red-600 to-slate-900 transition-all duration-500 dark:to-slate-200"
                    style={{ width: `${channelLift}%` }}
                  />
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-red-600 px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/25"
            >
              Unlock this Revenue -&gt;
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
