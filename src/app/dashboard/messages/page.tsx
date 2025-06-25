import { Header } from '@/components/ui/Header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Messages',
};

export default function Messages() {
  return <Header>Messages Page</Header>;
}
