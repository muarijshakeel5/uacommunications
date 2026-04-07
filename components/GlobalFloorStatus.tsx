'use client';

import { useEffect, useState } from 'react';

type FloorClock = {
  label: string;
  timeZone: string;
  value: string;
};

const clockDefinitions = [
  { label: 'EST', timeZone: 'America/New_York' },
  { label: 'CST', timeZone: 'America/Chicago' },
  { label: 'PST', timeZone: 'America/Los_Angeles' },
  { label: 'UK', timeZone: 'Europe/London' },
  { label: 'PKT', timeZone: 'Asia/Karachi' },
];

function formatTime(timeZone: string) {
  return new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    timeZone,
  }).format(new Date());
}

function buildClockState(): FloorClock[] {
  return clockDefinitions.map((clock) => ({
    ...clock,
    value: formatTime(clock.timeZone),
  }));
}

function ClockSkeleton() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 leading-none lg:gap-6">
      {clockDefinitions.map((clock) => (
        <div key={clock.label} className="h-3 w-16 rounded-full bg-slate-200 dark:bg-slate-800" />
      ))}
    </div>
  );
}

export default function GlobalFloorStatus() {
  const [mounted, setMounted] = useState(false);
  const [clocks, setClocks] = useState<FloorClock[]>([]);

  useEffect(() => {
    setMounted(true);
    setClocks(buildClockState());

    const interval = window.setInterval(() => {
      setClocks(buildClockState());
    }, 60_000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative flex w-full items-center justify-center border-b border-slate-200/60 bg-slate-50/95 px-6 py-1.5 backdrop-blur-md dark:border-slate-800/60 dark:bg-slate-950/95">
      <div className="min-h-[16px]">
        {!mounted ? (
          <ClockSkeleton />
        ) : (
          <div className="flex flex-wrap items-center justify-center gap-3 leading-none md:flex-nowrap md:gap-3 lg:gap-6">
            {clocks.map((clock) => (
              <div key={clock.label} className="flex items-center gap-1.5 leading-none">
                <span className="text-xs uppercase text-slate-400 dark:text-slate-500">
                  {clock.label}:
                </span>
                <span className="text-xs font-medium tabular-nums text-slate-600 dark:text-slate-300">
                  {clock.value}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
