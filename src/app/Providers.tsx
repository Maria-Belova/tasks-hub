'use client';

import { type PropsWithChildren } from 'react';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
      {children}
      <div id='modal-root'></div>
      <Toaster richColors closeButton />
    </ThemeProvider>
  );
};
