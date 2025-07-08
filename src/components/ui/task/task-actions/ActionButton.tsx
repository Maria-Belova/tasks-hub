import type { LucideIcon } from 'lucide-react';
import cn from 'clsx';

type TActionButtonStyle = 'filled' | 'outlined';

interface IActionButton {
  content: { icon: LucideIcon; title: string };
  style: TActionButtonStyle;
  onClick: () => void;
}

export const ActionButton = ({ content, style, onClick }: IActionButton) => {
  const classByStyle = style === 'filled' ? 'bg-primary text-white' : 'bg-white text-primary';

  return (
    <div className={cn('rounded-full p-2 border-2 border-primary cursor-pointer hover:shadow-lg', classByStyle)} onClick={onClick}>
      <content.icon size={20} />
    </div>
  );
};
