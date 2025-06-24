'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div
      className='rounded-full bg-white dark:bg-neutral-700 p-2 flex items-center justify-center cursor-pointer text-neutral-600 dark:text-white shadow-sm hover:shadow-md'
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </div>
  );
};
