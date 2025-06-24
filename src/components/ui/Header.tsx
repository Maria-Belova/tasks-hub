import type { FC, ReactNode } from 'react';

interface IHeader {
  children: ReactNode;
}
export const Header: FC<IHeader> = ({ children }: IHeader) => {
  return <div className='text-3xl font-medium'>{children}</div>;
};
