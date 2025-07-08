import { useEffect, useRef, useState, type PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

export const BaseModal = ({ children }: PropsWithChildren) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.getElementById('modal-root');
    setMounted(true);
  }, []);

  return mounted && ref.current ? createPortal(children, ref.current) : null;
};
