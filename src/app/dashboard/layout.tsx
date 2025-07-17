import type { PropsWithChildren } from 'react';
import { Sidebar } from '@/components/layout/sidebar/Sidebar';
import { getServerAuth } from '@/utils/supabase/get-server-auth';
import { PublicPages } from '@/config/public-pages';
import { redirect } from 'next/navigation';

export default async function DashboardLayout({ children }: PropsWithChildren) {
  const user = await getServerAuth();

  if (!user) {
    redirect(PublicPages.LOGIN);
  }

  return (
    <div className='grid grid-cols-[250px_1fr] min-h-screen'>
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}
