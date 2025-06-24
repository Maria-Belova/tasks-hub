'use client';

import { Header } from '@/components/ui/Header';
import { SearchField } from '@/components/ui/search-field/SearchField';
import dynamic from 'next/dynamic';

const DynamicThemeToggle = dynamic(() => import('@/components/ui/theme-toggle/ThemeToggle').then((mod) => mod.ThemeToggle), { ssr: false });

export const Dashboard = () => {
  return (
    <div className='flex justify-between'>
      <Header>Dashboard</Header>
      <div className='flex items-center gap-2'>
        <SearchField value='' onChange={() => console.log('d')} />
        <DynamicThemeToggle />
      </div>
    </div>
  );
};
