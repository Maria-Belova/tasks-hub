import type { IconName } from '@/utils/icon-mapper';

interface ITeamMember {
  id: number;
  name: string;
  avatar?: string;
}

interface ISubTask {
  id: number;
  title: string;
  isCompleted: boolean;
}

export interface ITask {
  id: number;
  icon: IconName;
  label: string;
  dueDate: Date;
  completionPercentage: number;
  comments: string[];
  resources: string[];
  teamMembers: ITeamMember[];
  subTusks: ISubTask[];
}

export type TTaskSortBy = 'asc' | 'desc';

export type TTaskFormData = Pick<ITask, 'label' | 'icon' | 'dueDate'>;
