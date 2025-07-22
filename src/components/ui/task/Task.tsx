import { useMemo, useState } from 'react';
import { Image, Link, MessageCircleMore, Pencil, Plus } from 'lucide-react';
import { ActionButton } from './task-actions/ActionButton';
import { AttachmentItem } from './task-actions/AttachmentItem';
import { ProgressBar } from '../ProgressBar';
import { TaskModal } from './TaskModal';
import { ICON_MAP } from '@/utils/icon-mapper';
import { SubTaskModal } from './sub-task/SubTaskModal';
import { format, isToday } from 'date-fns';
import { cn } from '@/lib/utils';
import type { TTask } from '@/types/tasks.types';

interface ITaskProps {
  task: TTask;
  isColor?: boolean;
  isMinimal?: boolean;
}

export const Task = ({ task, isColor, isMinimal }: ITaskProps) => {
  const [isOpenTaskModal, setIsOpenTaskModal] = useState(false);
  const [isOpenSubtaskModal, setIsOpenSubtaskModal] = useState(false);

  const Icon = ICON_MAP[task.icon as keyof typeof ICON_MAP];

  let completionPercentage = 0;
  if (task && task.subtask && task.subtask.length > 0) {
    completionPercentage = Math.round((task.subtask.filter((task) => task.is_completed).length * 100) / task.subtask.length);
  }

  const dueDate = useMemo(
    () => (isToday(task.due_date) ? 'Today' : Math.ceil((+task.due_date - Date.now()) / (1000 * 60 * 60 * 24)) + ' days'),
    [task.due_date],
  );

  return (
    <div className={cn('bg-white dark:bg-neutral-700 rounded-2xl p-4', isMinimal && 'p-5', isColor && task.color, isColor && 'text-white', isMinimal && `dark:${task.color}`)}>
      <div className={cn('flex justify-between items-start', isMinimal && 'flex-col')}>
        <div className='flex items-start'>
          <div className='text-primary dark:text-white bg-[#f6f4ff] dark:bg-primary p-4 flex items-center justify-center rounded-full'>
            <Icon />
          </div>
          <div className='ml-4'>
            <div className='font-medium'>{task.title}</div>
            <div className={cn('text-[#A1A1A1] mt-2', isColor && 'text-white')}>
              {isMinimal ? (
                <>
                  {format(task.start_time!, 'h.m a').toLocaleLowerCase()} - {format(task.end_time!, 'h.m a').toLocaleLowerCase()}
                </>
              ) : (
                <>Due: {dueDate}</>
              )}
            </div>
          </div>
        </div>
        <div className={cn('flex -space-x-3.5', isMinimal && 'mt-5')}>
          {/* {task.users?.map((user) => {
            return (
              <div key={user.id} className='w-10 h-10 border border-white bg-[#f6f4ff] rounded-full flex items-center justify-center text-2xl'>
                {user.avatar}
              </div>
            );
          })} */}
        </div>
      </div>
      {!isMinimal && (
        <div>
          <div className='my-4'>
            <ProgressBar completionPercentage={completionPercentage} />
          </div>

          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
              <AttachmentItem content={{ title: 'Messages', icon: MessageCircleMore }} count={1} />
              <AttachmentItem content={{ title: 'Images', icon: Image }} count={2} />
              <AttachmentItem content={{ title: 'Attachments', icon: Link }} count={task?.subtask?.length || 0} />
            </div>
            <div className='flex items-center gap-2'>
              <ActionButton style='filled' content={{ icon: Plus, title: 'Add content' }} onClick={() => setIsOpenSubtaskModal(true)} />
              <ActionButton style='outlined' content={{ icon: Pencil, title: 'Edit task' }} onClick={() => setIsOpenTaskModal(true)} />
            </div>
          </div>
        </div>
      )}

      {isOpenTaskModal && <TaskModal taskId={task.id} closeModal={() => setIsOpenTaskModal(false)} />}
      {isOpenSubtaskModal && <SubTaskModal taskId={task.id} closeModal={() => setIsOpenSubtaskModal(false)} />}
    </div>
  );
};
