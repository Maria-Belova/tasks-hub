import type { LucideIcon } from 'lucide-react';

interface IAttachmentItem {
  content: { title: string; icon: LucideIcon };
  count: number;
}

export const AttachmentItem = ({ content, count }: IAttachmentItem) => {
  return (
    <div className='flex gap-1 items-center'>
      <content.icon size={16} className='text-[#A1A1A1]'/>
      <div>{count}</div>
    </div>
  );
};
