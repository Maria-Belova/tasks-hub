import { AnimatePresence, motion } from 'framer-motion';
import { observer } from 'mobx-react-lite';
import { SectionHeader } from '@/components/ui/header/SectionHeader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/animate-ui/base/tabs';
import { TASKS } from './tasks.data';
import { STATUS, type Status } from '../../../../types/status-tabs.types';
import { TaskDueDateSortButton } from './due-date-sorter/TaskDueDateSortButton';
import { Task } from '@/components/ui/task/Task';
import { taskStore } from '@/stores/task.store';

export const LastTasks = observer(() => {
  const filteredTasks = taskStore.filteredTasks;

  return (
    <div>
      <Tabs value={taskStore.status} onValueChange={(value) => taskStore.setStatus(value as Status)} className='w-full'>
        <div className='flex items-center justify-between mb-5'>
          <div className='flex items-center'>
            <SectionHeader>Last Tasks</SectionHeader>
            <div className='ml-2.5 text-2xl text-[#A1A1A1] opacity-40'>{`(${TASKS.length})`}</div>
          </div>
          <div className='flex items-center gap-4'>
            <TabsList className='bg-primary/10 rounded-lg grid grid-cols-3'>
              {Object.values(STATUS).map((tab) => {
                return (
                  <TabsTrigger key={tab} className='cursor-pointer' value={tab}>
                    {tab}
                  </TabsTrigger>
                );
              })}
            </TabsList>
            <TaskDueDateSortButton />
          </div>
        </div>
        <TabsContent value={taskStore.status} className='flex w-full items-start gap-4'>
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
                  <Task key={task.id} task={task} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </TabsContent>
      </Tabs>
    </div>
  );
});
