import { Image, Link, MessageCircleMore, Pencil, Plane, Plus } from 'lucide-react';
import type { ILastTask } from './last-tasks.types';
import { ActionButton } from './task-actions/ActionButton';
import { AttachmentItem } from './task-actions/AttachmentItem';

interface ILastTaskItem {
  task: ILastTask;
}

export const LastTaskItem = ({ task }: ILastTaskItem) => {
  return (
    <div className='bg-white dark:bg-neutral-700 rounded-2xl w-[25%] p-4 cursor-pointer'>
      <div className='flex justify-between items-start'>
        <div className='flex items-start'>
          <div className='text-primary dark:text-white bg-[#f6f4ff] dark:bg-primary p-4 flex items-center justify-center rounded-full'>
            <Plane size={20} />
          </div>
          <div className='ml-4'>
            <div className='font-medium'>{task.label}</div>
            <div className='text-[#A1A1A1] mt-2'>{`Due: ${task.dueTime}${task.dueTime === 1 ? 'day' : 'days'}`}</div>
          </div>
        </div>
        <div className='flex'>
          {task.teamMembers?.map((member) => {
            return (
              <div key={member.id} className='w-10 h-10 bg-[#f6f4ff] rounded-full flex items-center justify-center text-primary'>
                {member.id}
              </div>
            );
          })}
        </div>
      </div>
      <div className='my-4'>{task.completionPercentage}%</div>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <AttachmentItem content={{ title: 'Messages', icon: MessageCircleMore }} count={task.messageCount} />
          <AttachmentItem content={{ title: 'Images', icon: Image }} count={task.imageCount} />
          <AttachmentItem content={{ title: 'Attachments', icon: Link }} count={task.attachmentCount} />
        </div>
        <div className='flex items-center gap-2'>
          <ActionButton style='filled' content={{ icon: Plus, title: 'Add content' }} onClick={() => console.log('plus')} />
          <ActionButton style='outlined' content={{ icon: Pencil, title: 'Edit task' }} onClick={() => console.log('pensil')} />
        </div>
      </div>
    </div>
  );
};
