import { SectionHeader } from '@/components/ui/header/SectionHeader';
import { LAST_TASKS } from './last-tasks.data';
import { LastTaskItem } from './LastTaskItem';

export const LastTasks = () => {
  if (LAST_TASKS.length < 1) {
    return null;
  }

  return (
    <div>
      <div className='flex items-center mb-5'>
        <SectionHeader>Last Tasks</SectionHeader>
        <div className='ml-2.5 text-2xl text-[#A1A1A1] opacity-40'>{`(${LAST_TASKS.length})`}</div>
      </div>

      <div className='flex w-full items-start gap-4'>
        {LAST_TASKS.map((task) => {
          return <LastTaskItem key={task.id} task={task} />;
        })}
      </div>
    </div>
  );
};
