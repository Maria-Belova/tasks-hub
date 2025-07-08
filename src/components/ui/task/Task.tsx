import { useState } from 'react';
import { Icon, Image, Link, MessageCircleMore, Pencil, Plane, Plus } from 'lucide-react';
import type { ITask } from '../../../types/tasks.types';
import { ActionButton } from './task-actions/ActionButton';
import { AttachmentItem } from './task-actions/AttachmentItem';
import { ProgressBar } from '../ProgressBar';
import { EditTaskModal } from './EditTaskModal';
import { ICON_MAP } from '@/utils/icon-mapper';

interface ITaskProps {
  task: ITask;
}
export const Task = ({ task }: ITaskProps) => {
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const Icon = ICON_MAP[task.icon];

  return (
    <div className='bg-white dark:bg-neutral-700 rounded-2xl p-4'>
      <div className='flex justify-between items-start'>
        <div className='flex items-start'>
          <div className='text-primary dark:text-white bg-[#f6f4ff] dark:bg-primary p-4 flex items-center justify-center rounded-full'>
            <Icon />
          </div>
          <div className='ml-4'>
            <div className='font-medium'>{task.label}</div>
            <div className='text-[#A1A1A1] mt-2'>{`Due: ${task.dueDate.getDay()}${1 ? 'day' : 'days'}`}</div>
          </div>
        </div>
        <div className='flex -space-x-3.5'>
          {task.teamMembers?.map((member) => {
            return (
              <div key={member.id} className='w-10 h-10 border border-white bg-[#f6f4ff] rounded-full flex items-center justify-center text-2xl'>
                {member.avatar}
              </div>
            );
          })}
        </div>
      </div>
      <div className='my-4'>
        <ProgressBar completionPercentage={task.completionPercentage} />
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <AttachmentItem content={{ title: 'Messages', icon: MessageCircleMore }} count={task.comments.length} />
          <AttachmentItem content={{ title: 'Images', icon: Image }} count={task.resources.length} />
          <AttachmentItem content={{ title: 'Attachments', icon: Link }} count={task.subTusks.length} />
        </div>
        <div className='flex items-center gap-2'>
          <ActionButton style='filled' content={{ icon: Plus, title: 'Add content' }} onClick={() => console.log('plus')} />
          <ActionButton style='outlined' content={{ icon: Pencil, title: 'Edit task' }} onClick={() => setIsOpenEditModal(true)} />
        </div>
      </div>

      {isOpenEditModal && <EditTaskModal taskId={task.id} onClose={() => setIsOpenEditModal(false)} />}
    </div>
  );
};
