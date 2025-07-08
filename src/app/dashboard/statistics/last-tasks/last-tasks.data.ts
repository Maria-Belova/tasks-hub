import { LayoutDashboard, Plane, SearchCode } from 'lucide-react';
import type { ITask } from '../../../../types/tasks.types';

export const LAST_TASKS: ITask[] = [
  {
    id: 1,
    icon: 'Plane',
    label: 'Travel App User Flow',
    dueDate: new Date(),
    completionPercentage: 43,
    comments: ['test'],
    resources: ['test'],
    teamMembers: [
      { id: 1, name: 'Mary Gray', avatar: '👩‍🎨' },
      { id: 2, name: 'Jhon Doy', avatar: '👨‍🔬' },
    ],
    subTusks: [{ id: 1, title: '1 subtask', isCompleted: false }],
  },
  {
    id: 2,
    icon: 'LayoutDashboard',
    label: 'Create Dasboard',
    dueDate: new Date(),
    completionPercentage: 100,
    comments: ['test'],
    resources: ['test'],
    teamMembers: [
      { id: 1, name: 'Mary Gray', avatar: '👮' },
      { id: 2, name: 'Jhon Doy', avatar: '👨‍💻' },
    ],
    subTusks: [{ id: 1, title: '1 subtask', isCompleted: false }],
  },
  {
    id: 3,
    icon: 'Briefcase',
    label: 'Sky-Track Review',
    dueDate: new Date(),
    completionPercentage: 82,
    comments: ['test'],
    resources: ['test'],
    teamMembers: [
      { id: 1, name: 'Mary Gray', avatar: '👩‍💻' },
      { id: 2, name: 'Jhon Doy', avatar: '🤵' },
      { id: 3, name: 'Max Red', avatar: '👨‍🎓' },
    ],
    subTusks: [{ id: 1, title: '1 subtask', isCompleted: false }],
  },
];
