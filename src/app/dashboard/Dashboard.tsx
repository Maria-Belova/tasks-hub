'use client';

import dynamic from 'next/dynamic';
import { PageHeader } from '@/components/ui/header/PageHeader';
import { SearchField } from '@/components/ui/SearchField';
import { StatisticList } from './statistics/StatisticList';
import { Chart } from './statistics/chart/Chart';
import { LastTasks } from './statistics/last-tasks/LastTasks';

const DynamicThemeToggle = dynamic(() => import('@/components/ui/ThemeToggle').then((mod) => mod.ThemeToggle), { ssr: false });

export const Dashboard = () => {
  return (
    <div className='grid grid-cols-[3fr_1fr] h-screen'>
      <div className='p-5'>
        <div className='flex justify-between mb-5'>
          <PageHeader>Dashboard</PageHeader>
          <div className='flex items-center gap-2'>
            <SearchField value='' onChange={() => console.log('d')} />
            <DynamicThemeToggle />
          </div>
        </div>
        <div className='grid grid-cols-[25%_75%] gap-4'>
          <StatisticList />
          <div className='pr-5'>
            <Chart />
          </div>
        </div>
        <div className='mt-6'>
          <LastTasks />
        </div>
      </div>
      <div className='bg-violet-200 p-5'>CHAT</div>
    </div>
  );
};
