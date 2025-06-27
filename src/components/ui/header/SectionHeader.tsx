import type { PropsWithChildren } from 'react';

export const SectionHeader = ({ children }: PropsWithChildren) => {
  return <div className='text-2xl font-medium'>{children}</div>;
};
