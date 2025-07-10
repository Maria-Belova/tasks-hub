import type { IconName } from '@/utils/icon-mapper';

interface ITeamMember {
  id: string;
  name: string;
  avatar?: string;
}

export interface ISubTask {
  id: string;
  title: string;
  isCompleted: boolean;
}

export interface ITask {
  id: string;
  icon: IconName;
  color: 'bg-[#B7A5F6]' | 'bg-[#FEE253]' | 'bg-[#FDC2F6]',
  label: string;
  dueDate: {
    date: Date;
    startTime?: Date;
    endTime?: Date;
  };
  comments: string[];
  resources: string[];
  users: ITeamMember[];
  subTasks: ISubTask[];
}

export interface ITaskWithTime extends ITask {
  dueDate: {
    date: Date;
    startTime: Date;
    endTime: Date;
  };
}

export type TTaskSortBy = 'asc' | 'desc';

export type TTaskFormData = Pick<ITask, 'label' | 'icon' | 'dueDate'>;
export type TSubTaskFormData = Pick<ISubTask, 'title'>;
