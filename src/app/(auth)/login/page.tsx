import { NO_INDEX_PAGE } from '@/constants/seo.constants';
import type { Metadata } from 'next';
import React from 'react';
import { AuthForm } from '../AuthForm';

export const metadata: Metadata = {
  title: 'Login',
  ...NO_INDEX_PAGE,
};

export default function Page() {
  return (
    <div>
      <AuthForm type='login' />
    </div>
  );
}
