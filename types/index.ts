import { LucideIcon } from 'lucide-react';

export interface Stat {
  value: string;
  label: string;
  detail: string;
}

export interface Offer {
  title: string;
  description: string;
  metrics: string[];
}

export interface ServiceBlock {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  bullets: string[];
  metrics: { label: string; value: string }[];
}

export interface CaseStudy {
  client: string;
  sector: string;
  title: string;
  metric: string;
  metricLabel: string;
  summary: string;
  highlights: string[];
}

export interface Integration {
  name: string;
  icon: LucideIcon;
  detail: string;
}

export interface TrustItem {
  title: string;
  icon: LucideIcon;
  description: string;
}

export interface Role {
  role: string;
  team: string;
  shift: string;
  location: string;
}

export interface Perk {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface Pillar {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface CoreValue {
  title: string;
  description: string;
}

export interface ContactChannel {
  icon: LucideIcon;
  label: string;
  val: string;
}
