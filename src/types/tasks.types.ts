import type { IconName } from '@/utils/icon-mapper';
import type {Database} from './db.types';

interface ITeamMember {
  id: string;
  name: string;
  avatar?: string;
}

export type TSubTask = Database['public']['Tables']['subtask']['Row'];
export type TTask = Database['public']['Tables']['task']['Row'] & {
  subtask?: TSubTask[]};

export type TTaskSortBy = 'asc' | 'desc';

export type TTaskFormData = Pick<TTask, 'title' | 'icon' | 'due_date'>;
export type TSubTaskFormData = Pick<TSubTask, 'title'>;
