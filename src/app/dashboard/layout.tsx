import type { PropsWithChildren } from 'react';
import { Sidebar } from '@/components/layout/sidebar/Sidebar';
import { getServerAuth } from '@/utils/supabase/get-server-auth';

export default async function DashboardLayout({ children }: PropsWithChildren) {
  await getServerAuth(true);

  return (
    <div className='grid grid-cols-[250px_1fr] min-h-screen'>
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}
