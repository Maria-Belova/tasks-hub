import { observer } from 'mobx-react-lite';
import { taskStore } from '@/stores/task.store';
import { SectionHeader } from '../ui/header/SectionHeader';
import { getHours, getMinutes } from 'date-fns';
import { Task } from '../ui/task/Task';

const HOURS = Array.from({ length: 9 }, (_, i) => i + 9);

interface ITasksTasksTimeline {}

export const TasksTimeline = observer(({}: ITasksTasksTimeline) => {
  const tasks = taskStore.todayTasks;
  const users = [...new Set(tasks.map((task) => task.users).flat())];

  return (
    <div className='bg-white dark:bg-neutral-700 rounded-2xl p-5'>
      <div className='flex mb-3 items-center justify-between'>
        <SectionHeader>Today Tasks</SectionHeader>
        <div className='flex -space-x-3.5'>
          {users.map((user) => {
            return (
              <div key={user.id} className='w-10 h-10 border border-white bg-[#f6f4ff] rounded-full flex items-center justify-center text-2xl'>
                {user.avatar}
              </div>
            );
          })}
        </div>
      </div>

      <div className='w-full overflow-x-auto p-3'>
        <div className='grid grid-cols-9'>
          {HOURS.map((hour) => (
            <div key={hour} className='text-left text-sm font-medium opacity-50'>
              {hour > 12 ? `${hour - 12} pm` : `${hour} am`}
            </div>
          ))}
        </div>

        <div className='relative h-72'>
          {tasks.map((task) => {
            const start = getHours(task.dueDate.startTime);
            const end = getHours(task.dueDate.endTime);

            const startMinutes = getMinutes(task.dueDate.startTime);
            const endMinutes = getMinutes(task.dueDate.endTime);

            const startPercent = (((start - 9) * 60 + startMinutes) / ((17 - 9) * 60)) * 100;
            const endPercent = (((end - 9) * 60 + endMinutes) / ((17 - 9) * 60)) * 100;
            const widthPercent = endPercent - startPercent;

            return (
              <div key={task.id} className='absolute top-8' style={{ left: `${startPercent}%`, width: `${widthPercent}%` }}>
                <Task task={task} isColor isMinimal />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
});
