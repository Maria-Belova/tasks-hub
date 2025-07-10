import { useEffect, useRef, useState, type PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

export const BaseModal = ({ children }: PropsWithChildren) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.getElementById('modal-root');
    setMounted(true);
  }, []);

  return mounted && ref.current
    ? createPortal(
        <div className='fixed inset-0 z-40 flex items-center justify-center bg-white/10 backdrop-blur-xs'>
          <div className='relative z-70 w-full max-w-md rounded-2xl bg-white/80 dark:bg-neutral-800 dark:text-white backdrop-blur-md border border-white/20 p-6 shadow-2xl text-neutral-700'>
            {children}
          </div>
        </div>,
        ref.current,
      )
    : null;
};
