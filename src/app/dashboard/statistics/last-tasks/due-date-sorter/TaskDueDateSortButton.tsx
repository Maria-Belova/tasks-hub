import { ArrowUp01, ArrowUp10 } from 'lucide-react';
import { observer } from 'mobx-react-lite';
import { taskStore } from '@/stores/task.store';

export const TaskDueDateSortButton = observer(() => {
  const sortByDueDate = taskStore.sortByDueDate;

  return (
    <div
      onClick={() => taskStore.setSortByDueDate(sortByDueDate === 'asc' ? 'desc' : 'asc')}
      className='h-8 px-2 flex items-center justify-center rounded-sm bg-primary/10 cursor-pointer'
    >
      {sortByDueDate === 'asc' ? <ArrowUp01 size={20} /> : <ArrowUp10 size={20} />}
    </div>
  );
});
