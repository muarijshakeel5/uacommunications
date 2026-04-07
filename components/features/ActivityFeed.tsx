'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';

type EventCategory = 'Sales' | 'Support' | 'Tech' | 'Compliance';

type EventPoolItem = {
  id: string;
  text: string;
  category: EventCategory;
};

type ActiveEvent = EventPoolItem & {
  instanceId: string;
  time: number;
};

export const EVENT_POOL: EventPoolItem[] = [
  {
    id: 'sales-enterprise-demo',
    text: '2 high-intent demo requests secured for Enterprise SaaS Pod',
    category: 'Sales',
  },
  {
    id: 'sales-est-penetration',
    text: 'Outbound Penetration: 500+ successful dials in EST window',
    category: 'Sales',
  },
  {
    id: 'sales-contract-value',
    text: 'Pipeline Velocity: $45k in new contract value identified',
    category: 'Sales',
  },
  {
    id: 'sales-reactivation',
    text: 'Lead Reactivation: 8 dormant accounts re-engaged via multi-channel sync',
    category: 'Sales',
  },
  {
    id: 'sales-fortune-500',
    text: 'Discovery Call: Fortune 500 stakeholder qualified for US Sales',
    category: 'Sales',
  },
  {
    id: 'sales-uk-territory',
    text: 'Market Expansion: First 100 leads qualified in new UK territory',
    category: 'Sales',
  },
  {
    id: 'sales-cold-to-sold',
    text: 'Closing Assist: Cold-to-Sold transition completed for Real Estate client',
    category: 'Sales',
  },
  {
    id: 'support-sla',
    text: 'SLA Compliance: Critical inbound inquiry resolved in < 45 seconds',
    category: 'Support',
  },
  {
    id: 'support-csat',
    text: 'CSAT Peak: 98% positive sentiment recorded across active tickets',
    category: 'Support',
  },
  {
    id: 'support-fcr',
    text: 'First-Call Resolution: Complex technical escalation cleared in Tier 1',
    category: 'Support',
  },
  {
    id: 'support-volume-spike',
    text: 'Volume Spike: Support floor managed 200% traffic surge',
    category: 'Support',
  },
  {
    id: 'support-omnichannel',
    text: 'Omnichannel Sync: Live chat transition to voice in < 10 seconds',
    category: 'Support',
  },
  {
    id: 'support-queue-clearance',
    text: 'Queue Clearance: Zero wait-time achieved for Premium tier',
    category: 'Support',
  },
  {
    id: 'tech-sentiment-audit',
    text: 'AI-Sentiment Audit: Optimized objection handling for outbound campaign',
    category: 'Tech',
  },
  {
    id: 'tech-transcript-review',
    text: 'Transcript Review: New top-performer script variation deployed',
    category: 'Tech',
  },
  {
    id: 'tech-speech-analytics',
    text: 'Speech Analytics: Automated QA flagged high-performance tone shift',
    category: 'Tech',
  },
  {
    id: 'tech-crm-sync',
    text: 'CRM Auto-Sync: 1,200 data points updated via real-time API bridge',
    category: 'Tech',
  },
  {
    id: 'tech-dialer-optimization',
    text: 'Predictive Dialer: Optimization reduced agent idle time by 14%',
    category: 'Tech',
  },
  {
    id: 'tech-noise-cancellation',
    text: 'Noise Cancellation: AI-filter active for 100% of floor audio',
    category: 'Tech',
  },
  {
    id: 'tech-system-pulse',
    text: 'System Pulse: All cloud-dialing nodes operating at 99.99% uptime',
    category: 'Tech',
  },
  {
    id: 'compliance-tcpa',
    text: 'Compliance Guard: TCPA-filter updated for 14,000 leads',
    category: 'Compliance',
  },
  {
    id: 'compliance-gdpr',
    text: 'GDPR Audit: Weekly data-scrubbing protocol completed',
    category: 'Compliance',
  },
  {
    id: 'compliance-floor-leadership',
    text: 'Floor Leadership: Live coaching session initiated for Mid-Market pod',
    category: 'Compliance',
  },
  {
    id: 'compliance-shift-handoff',
    text: 'Shift Handoff: Night-shift floor active for US West Coast window',
    category: 'Compliance',
  },
  {
    id: 'compliance-audit-ready',
    text: 'Audit-Ready: Compliance logs synced to client-facing secure portal',
    category: 'Compliance',
  },
];

let instanceSequence = 0;

function nextInstanceId(baseId: string) {
  instanceSequence += 1;
  return `${baseId}-${instanceSequence}`;
}

function toActiveEvent(event: EventPoolItem, time: number) {
  return {
    ...event,
    instanceId: nextInstanceId(event.id),
    time,
  };
}

function shuffle<T>(items: T[]) {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }

  return copy;
}

function buildInitialEvents() {
  for (let attempt = 0; attempt < 30; attempt += 1) {
    const selection = shuffle(EVENT_POOL).slice(0, 3);
    const categories = new Set(selection.map((event) => event.category));

    if (categories.size >= 2) {
      return selection.map((event, index) => toActiveEvent(event, index));
    }
  }

  return EVENT_POOL.slice(0, 3).map((event, index) => toActiveEvent(event, index));
}

function formatRelativeTime(minutes: number) {
  if (minutes <= 0) {
    return 'Just now';
  }

  if (minutes === 1) {
    return '1 min ago';
  }

  return `${minutes} min ago`;
}

function FeedSkeleton() {
  return (
    <div className="space-y-4 pt-2">
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={`activity-skeleton-${index}`} className="flex gap-3">
          <div className="mt-1.5 h-2.5 w-2.5 rounded-full bg-red-600" />
          <div className="flex-1 space-y-2">
            <div className="h-4 w-full rounded-full bg-white/10" />
            <div className="h-3 w-20 rounded-full bg-white/5" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ActivityFeed() {
  const [events, setEvents] = useState<ActiveEvent[]>([]);
  const [mounted, setMounted] = useState(false);

  const renderedEvents = useMemo(
    () =>
      events.map((event) => ({
        ...event,
        relativeTime: formatRelativeTime(event.time),
      })),
    [events],
  );

  useEffect(() => {
    setMounted(true);
    setEvents(buildInitialEvents());
  }, []);

  useEffect(() => {
    if (!mounted || events.length === 0) {
      return;
    }

    const pulseInterval = window.setInterval(() => {
      setEvents((current) => {
        const availableEvents = EVENT_POOL.filter(
          (event) => !current.some((activeEvent) => activeEvent.id === event.id),
        );
        const sourcePool = availableEvents.length > 0 ? availableEvents : EVENT_POOL;
        const nextEvent = sourcePool[Math.floor(Math.random() * sourcePool.length)];

        return [toActiveEvent(nextEvent, 0), ...current.slice(0, 2)];
      });
    }, 15_000);

    return () => {
      window.clearInterval(pulseInterval);
    };
  }, [mounted, events.length]);

  useEffect(() => {
    if (!mounted || events.length === 0) {
      return;
    }

    const timeInterval = window.setInterval(() => {
      setEvents((current) =>
        current.map((event) => ({
          ...event,
          time: event.time + 1,
        })),
      );
    }, 60_000);

    return () => {
      window.clearInterval(timeInterval);
    };
  }, [mounted, events.length]);

  return (
    <div className="flex h-[380px] flex-col overflow-hidden rounded-3xl border border-gray-100 bg-gray-900 p-5 text-white shadow-lg dark:border-slate-700 dark:bg-slate-950">
      <div className="mb-6 flex w-full items-center">
        <p className="whitespace-nowrap text-sm font-bold text-slate-100">Operational Feed</p>
      </div>

      <div
        className="relative flex-1 space-y-4 overflow-hidden pt-2"
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
        }}
      >
        {!mounted || renderedEvents.length === 0 ? (
          <FeedSkeleton />
        ) : (
          <AnimatePresence initial={false}>
            {renderedEvents.map((event) => (
              <motion.div
                key={event.instanceId}
                layout
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="flex gap-3"
              >
                <div className="mt-1.5 h-2.5 w-2.5 rounded-full bg-red-600" />
                <div>
                  <p className="text-sm text-white/90">{event.text}</p>
                  <p className="mt-1 text-xs text-white/55">{event.relativeTime}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}
