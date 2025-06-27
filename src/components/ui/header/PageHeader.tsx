import type { PropsWithChildren } from 'react';

export const PageHeader = ({ children }: PropsWithChildren) => {
  return <div className='text-3xl font-medium'>{children}</div>;
};
