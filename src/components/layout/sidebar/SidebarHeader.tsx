import type { FC } from 'react';

interface ISidebarHeader {
  title: string;
}

export const SidebarHeader: FC<ISidebarHeader> = ({ title }: ISidebarHeader) => {
  return <div className='mb-1.5 font-base text-neutral-400 opacity-70'>{title}</div>;
};
