import type { ILastTask } from './last-tasks.types';

export const LAST_TASKS: ILastTask[] = [
  {
    id: 1,
    label: 'Travel App User Flow',
    dueTime: 5,
    completionPercentage: 43,
    messageCount: 3,
    imageCount: 6,
    attachmentCount: 2,
    teamMembers: [
      { id: 1, name: 'Mary Gray', avatar: '👩‍🎨' },
      { id: 2, name: 'Jhon Doy', avatar: '👨‍🔬' },
    ],
  },
  {
    id: 2,
    label: 'Create Dasboard',
    dueTime: 1,
    completionPercentage: 100,
    messageCount: 5,
    imageCount: 4,
    attachmentCount: 1,
    teamMembers: [
      { id: 1, name: 'Mary Gray', avatar: '👮' },
      { id: 2, name: 'Jhon Doy', avatar: '👨‍💻' },
    ],
  },
  {
    id: 3,
    label: 'Sky-Track Review',
    dueTime: 3,
    completionPercentage: 82,
    messageCount: 7,
    imageCount: 2,
    attachmentCount: 4,
    teamMembers: [
      { id: 1, name: 'Mary Gray', avatar: '👩‍💻' },
      { id: 2, name: 'Jhon Doy', avatar: '🤵' },
      { id: 3, name: 'Max Red', avatar: '👨‍🎓' },
    ],
  },
];
