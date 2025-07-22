import type { Metadata } from 'next';
import { Dashboard } from './Dashboard';
import { taskServerGetAll } from '@/services/tasks/task-server.service';

export const metadata: Metadata = {
  title: 'Dashboard',
};

export default async function DashboardPage() {
  const tasks = await taskServerGetAll();

  if (tasks.error) {
    return <div className='text-red-500'>Failed to load last tasks</div>;
  }

  return <Dashboard tasks={tasks.data} />;
}
