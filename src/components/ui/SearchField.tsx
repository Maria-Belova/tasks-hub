'use client';

import { Search } from 'lucide-react';
import { type FC } from 'react';

interface ISearchField {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

export const SearchField: FC<ISearchField> = ({ placeholder = 'Search something...', value, onChange }: ISearchField) => {
  return (
    <div className='flex items-center w-xs px-4 py-2 rounded-full bg-white dark:bg-neutral-700 shadow-sm'>
      <Search size={20} className='text-neutual-500 mr-2' />
      <input
        className='w-full bg-transparent focus:outline-none text-sm placeholder:text-neutral-400 text-neutral-800 dark:text-white'
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
