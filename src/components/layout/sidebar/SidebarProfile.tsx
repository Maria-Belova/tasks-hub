import { ChevronDown } from 'lucide-react';
import { PROFILE } from './data/profile.data';

export const SidebarProfile = () => {
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
            <ChevronDown size={16} className='opacity-60' />
          </div>
      </div>
    </div>
  );
};
