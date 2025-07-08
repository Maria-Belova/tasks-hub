import { ArrowUp01, ArrowUp10 } from 'lucide-react';
import type { TTaskSortBy } from '../../../../../types/tasks.types';

interface ITaskDueDateSortButton {
  sortByDueDate: TTaskSortBy;
  setSortByDueDate: (value: TTaskSortBy) => void;
}

export const TaskDueDateSortButton = ({ sortByDueDate, setSortByDueDate }: ITaskDueDateSortButton) => {
  return (
    <div
      onClick={() => setSortByDueDate(sortByDueDate === 'asc' ? 'desc' : 'asc')}
      className='h-8 px-2 flex items-center justify-center rounded-sm bg-primary/10 cursor-pointer'
    >
      {sortByDueDate === 'asc' ? <ArrowUp01 size={20} /> : <ArrowUp10 size={20} />}
    </div>
  );
};
