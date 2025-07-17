'use client';

import { DashboardPages } from '@/config/dashboard-pages';
import { PublicPages } from '@/config/public-pages';
import { createClient } from '@/utils/supabase/client';
import { AtSign } from 'lucide-react';
import { redirect, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

export const ConfirmPage = () => {
  const params = useSearchParams();
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const verifyToken = async () => {
      const tokenHash = params.get('token_hash');
      if (!tokenHash) {
        redirect(PublicPages.LOGIN);
      }

      const { error } = await supabase.auth.verifyOtp({
        token_hash: tokenHash,
        type: 'email',
      });

      if (error) {
        return router.replace(PublicPages.LOGIN);
      }

      return router.replace(DashboardPages.BASE);
    };

    verifyToken();
  }, [params, router, supabase]);

  return (
    <div className='flex w-full h-screen justify-center items-center'>
      <div className='relative flex flex-col items-center rounded-2xl shadow-sm bg-white p-10'>
        <div className='text-4xl font-medium'>Please wait</div>
        <div className='text-lg mt-5'>Verifying your email...</div>
        <div className='absolute -top-3 -right-3 bg-[#D2B4FF] animate-pulse opacity-85 animate-slow text-white rounded-full h-10 w-10 flex items-center justify-center border border-white'>
          <AtSign size={25} />
        </div>
      </div>
    </div>
  );
};
