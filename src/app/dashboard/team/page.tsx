import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/header/PageHeader';

export const metadata: Metadata = {
  title: 'Team',
};

export default function Team() {
  return <PageHeader>Team Page</PageHeader>;
}
