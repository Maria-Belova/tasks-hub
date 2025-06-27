import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/header/PageHeader';

export const metadata: Metadata = {
  title: 'Messages',
};

export default function Messages() {
  return <PageHeader>Messages Page</PageHeader>;
}
