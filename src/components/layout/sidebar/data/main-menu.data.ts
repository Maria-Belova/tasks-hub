import { CalendarDays, ChartNoAxesColumn, LayoutGrid, MessageCircleMore, NotebookText, Settings, UsersRound } from 'lucide-react';
import type { IMenuItem } from '../types/menu.types';
import { DashboardPages } from '@/config/dashboard-pages';

export const MAIN_MENU: IMenuItem[] = [
  { title: 'Dashboard', icon: LayoutGrid, href: DashboardPages.DASHBOARD },
  { title: 'Messages', icon: MessageCircleMore, href: DashboardPages.MESSAGES },
  { title: 'Insights', icon: ChartNoAxesColumn, href: DashboardPages.INSIGHTS },
  { title: 'Team', icon: UsersRound, href: DashboardPages.TEAM },
  { title: 'Schedule', icon: CalendarDays, href: DashboardPages.SCHEDULE },
  { title: 'Reports', icon: NotebookText, href: DashboardPages.REPORTS },
  { title: 'Settings', icon: Settings, href: DashboardPages.SETTINGS },
];
