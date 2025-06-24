import { CalendarDays, ChartNoAxesColumn, LayoutGrid, MessageCircleMore, NotebookText, Settings, UsersRound } from 'lucide-react';
import type { IMenuItem } from '../types/menu.types';
import { Pages } from '@/config/pages';

export const MAIN_MENU: IMenuItem[] = [
  { title: 'Dashboard', icon: LayoutGrid, href: Pages.DASHBOARD },
  { title: 'Messages', icon: MessageCircleMore, href: Pages.MESSAGES },
  { title: 'Insights', icon: ChartNoAxesColumn, href: Pages.INSIGHTS },
  { title: 'Team', icon: UsersRound, href: Pages.TEAM },
  { title: 'Schedule', icon: CalendarDays, href: Pages.SCHEDULE },
  { title: 'Reports', icon: NotebookText, href: Pages.REPORTS },
  { title: 'Settings', icon: Settings, href: Pages.SETTINGS },
];
