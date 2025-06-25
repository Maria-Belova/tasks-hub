'use client';

import dynamic from 'next/dynamic';
import { Header } from '@/components/ui/Header';
import { SearchField } from '@/components/ui/search-field/SearchField';
import { StatisticList } from './statistics/StatisticList';

const DynamicThemeToggle = dynamic(() => import('@/components/ui/theme-toggle/ThemeToggle').then((mod) => mod.ThemeToggle), { ssr: false });

export const Dashboard = () => {
  return (
    <div className='grid grid-cols-[3fr_1fr] h-screen'>
      <div className='p-5'>
        <div className='flex justify-between mb-5'>
          <Header>Dashboard</Header>
          <div className='flex items-center gap-2'>
            <SearchField value='' onChange={() => console.log('d')} />
            <DynamicThemeToggle />
          </div>
        </div>
        <div className='grid grid-cols-[25%_75%]'>
          <StatisticList />
          <div></div>
        </div>
      </div>
      <div className='bg-violet-200 p-5'>CHAT</div>
    </div>
  );
};
