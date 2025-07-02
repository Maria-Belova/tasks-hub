interface ITeamMember {
  id: number;
  name: string;
  avatar?: string;
}

export interface ILastTask {
  id: number;
  label: string;
  dueTime: number;
  completionPercentage: number;
  messageCount: number;
  imageCount: number;
  attachmentCount: number;
  teamMembers: ITeamMember[];
}

export type TTaskSortBy = 'asc' | 'desc';
