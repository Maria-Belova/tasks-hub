import { DashboardPages } from '@/config/dashboard-pages';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <Link href={DashboardPages.DASHBOARD}>
      <div className='flex gap-2'>
        <ArrowLeft size={20} />
        <div>Back to Dashboard</div>
      </div>
    </Link>
  );
}
