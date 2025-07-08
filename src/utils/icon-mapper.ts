import { type LucideIcon, Plane, ShoppingBasket, LayoutDashboard, TabletSmartphone, Bug, Briefcase, Hammer } from 'lucide-react';

export const ICON_NAMES = ['Plane', 'ShoppingBasket', 'LayoutDashboard', 'TabletSmartphone', 'Bug', 'Hammer', 'Briefcase'] as const;

export type IconName = typeof ICON_NAMES[number];

export const ICON_MAP: Record<IconName, LucideIcon> = {
  Plane,
  ShoppingBasket,
  LayoutDashboard,
  TabletSmartphone,
  Bug,
  Briefcase,
  Hammer,
};
