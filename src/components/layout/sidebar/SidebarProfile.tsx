import { LogOut } from 'lucide-react';
import { PROFILE } from './data/profile.data';
import { useRouter } from 'next/navigation';
import { PublicPages } from '@/config/public-pages';
import { createClient } from '@/utils/supabase/client';

export const SidebarProfile = () => {
  const router = useRouter();

  const signOut = async () => {
    const { error } = await createClient().auth.signOut();

    if (!error) {
      router.push(PublicPages.LOGIN);
    }
  };

  return (
    <div className='mb-10 bg-[#F6F6F6] dark:bg-neutral-700 py-1 px-2 rounded-full'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <div className='rounded-full w-8 h-8 bg-primary mr-2'></div>
          <div>
            <div className='font-medium'>{PROFILE.name}</div>
            <div className='text-xs font-medium opacity-60'>{PROFILE.email}</div>
          </div>
        </div>
        <div>
          <LogOut onClick={signOut} size={16} className='opacity-60 cursor-pointer' />
        </div>
      </div>
    </div>
  );
};
