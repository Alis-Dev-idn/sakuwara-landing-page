import {
  ArrowLeftRight,
  BarChart3,
  CalendarCheck,
  FileSpreadsheet,
  Gauge,
  Landmark,
  LayoutDashboard,
  Lightbulb,
  PiggyBank,
  Receipt,
  ShieldCheck,
  Tags,
  TrendingUp,
  Wallet,
  type LucideIcon,
} from 'lucide-react';
import type { FeatureIconKey, PillarIconKey } from '@/config';

const ICON_MAP: Record<FeatureIconKey | PillarIconKey, LucideIcon> = {
  'layout-dashboard': LayoutDashboard,
  'arrow-left-right': ArrowLeftRight,
  wallet: Wallet,
  'piggy-bank': PiggyBank,
  gauge: Gauge,
  receipt: Receipt,
  'calendar-check': CalendarCheck,
  landmark: Landmark,
  'bar-chart-3': BarChart3,
  tags: Tags,
  lightbulb: Lightbulb,
  'trending-up': TrendingUp,
  'shield-check': ShieldCheck,
  'file-spreadsheet': FileSpreadsheet,
};

export interface FeatureIconProps {
  name: FeatureIconKey | PillarIconKey;
  className?: string;
}

/**
 * Pemetaan seragam ikon Lucide berdasarkan key konfigurasi.
 */
export function FeatureIcon({ name, className = 'h-5 w-5' }: FeatureIconProps) {
  const IconComponent = ICON_MAP[name];
  return <IconComponent className={className} aria-hidden="true" />;
}
