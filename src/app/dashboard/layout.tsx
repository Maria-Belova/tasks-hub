import type { PropsWithChildren } from 'react';
import { Sidebar } from '@/components/layout/sidebar/Sidebar';

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className='grid grid-cols-[250px_1fr] min-h-screen'>
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}
