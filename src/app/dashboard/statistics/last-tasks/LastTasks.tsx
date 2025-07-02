import { SectionHeader } from '@/components/ui/header/SectionHeader';
import { LAST_TASKS } from './last-tasks.data';
import { LastTaskItem } from './LastTaskItem';
import { useState } from 'react';
import { STATUSES, type Status } from './status-tabs.types';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/animate-ui/base/tabs';
import { AnimatePresence, motion } from 'framer-motion';
import { TaskDueDateSortButton } from './due-date-sorter/TaskDueDateSortButton';
import type { TTaskSortBy } from './last-tasks.types';

export const LastTasks = () => {
  const [status, setStatus] = useState<Status>(STATUSES.ALL);
  const [sortType, setSortType] = useState<TTaskSortBy>('asc');

  const filteredTasks = LAST_TASKS.filter((task) =>
    status === STATUSES.ALL ? true : status === STATUSES.COMPLETED ? task.completionPercentage === 100 : task.completionPercentage < 100,
  );

  const sorteredTasks = filteredTasks?.sort((a, b) => {
    const dateA = new Date(a.dueTime).getTime();
    const dateB = new Date(b.dueTime).getTime();

    if (sortType === 'asc') {
      return dateA - dateB;
    } else {
      return dateB - dateA;
    }
  });

  if (sorteredTasks.length < 1) {
    return null;
  }

  return (
    <div>
      <Tabs value={status} onValueChange={(value) => setStatus(value as Status)} className='w-full'>
        <div className='flex items-center justify-between mb-5'>
          <div className='flex items-center'>
            <SectionHeader>Last Tasks</SectionHeader>
            <div className='ml-2.5 text-2xl text-[#A1A1A1] opacity-40'>{`(${LAST_TASKS.length})`}</div>
          </div>
          <div className='flex items-center gap-4'>
            <TabsList className='bg-primary/10 rounded-lg grid grid-cols-3'>
              {Object.values(STATUSES).map((tab) => {
                return (
                  <TabsTrigger key={tab} className='cursor-pointer' value={tab}>
                    {tab}
                  </TabsTrigger>
                );
              })}
            </TabsList>
            <TaskDueDateSortButton setSortByDueDate={setSortType} sortByDueDate={sortType} />
          </div>
        </div>
        <TabsContent value={status} className='flex w-full items-start gap-4'>
          <AnimatePresence mode='wait'>
            {sorteredTasks.map((task) => (
              <motion.div
                key={task.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className='w-[25%]'
              >
                <div>
                  <LastTaskItem key={task.id} task={task} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </TabsContent>
      </Tabs>
    </div>
  );
};
