import type { IStatisticCard } from './statistic.types';

export const STATISTICS: IStatisticCard[] = [
  {
    id: 1,
    title: 'Active Projects',
    value: 92,
    valueType: 'count',
    logo: '/images/statistics/active-projects.svg',
    bgColor: 'bg-[#E1CDFF]'
  },
  {
    id: 2,
    title: 'On Going Projects',
    value: 35,
    valueType: 'count',
    logo: '/images/statistics/ongoing-projects.svg',
    bgColor: 'bg-[#FEE253]'
  },
  {
    id: 3,
    title: 'Working hours',
    value: 1149,
    valueType: 'time',
    logo: '/images/statistics/working-hours.svg',
    bgColor: 'bg-[#FDC2F6]'
  },
];
