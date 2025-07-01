import { SectionHeader } from '@/components/ui/header/SectionHeader';
import { LAST_TASKS } from './last-tasks.data';
import { LastTaskItem } from './LastTaskItem';
import { useState } from 'react';
import { STATUSES, type Status } from './status-tabs.types';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AnimatePresence, motion } from 'framer-motion';

export const LastTasks = () => {
  const [status, setStatus] = useState<Status>(STATUSES.ALL);

  const filteredTasks = LAST_TASKS.filter((task) =>
    status === STATUSES.ALL ? true : status === STATUSES.COMPLETED ? task.completionPercentage === 100 : task.completionPercentage < 100,
  );

  if (filteredTasks.length < 1) {
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
          <TabsList className='bg-primary/10 rounded-lg grid grid-cols-3'>
            {Object.values(STATUSES).map((tab) => {
              return (
                <TabsTrigger key={tab} className='cursor-pointer' value={tab}>
                  {tab}
                </TabsTrigger>
              );
            })}
          </TabsList>
        </div>
        <TabsContent value={status} className='flex w-full items-start gap-4'>
          <AnimatePresence mode='wait'>
            {filteredTasks.map((task) => (
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
