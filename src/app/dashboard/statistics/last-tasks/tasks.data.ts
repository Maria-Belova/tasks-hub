import { setHours, setMinutes } from 'date-fns';
import type { ITask } from '../../../../types/tasks.types';

export const TASKS: ITask[] = [
  {
    id: '1nijneifn',
    icon: 'Plane',
    color: 'bg-[#B7A5F6]',
    label: 'Travel App User Flow',
    dueDate: {
      date: new Date(),
      startTime: setMinutes(setHours(new Date(), 9), 50),
      endTime: setMinutes(setHours(new Date(), 12), 10),
    },
    comments: ['test'],
    resources: ['test'],
    users: [
      { id: '1wed', name: 'Mary Gray', avatar: '👩‍🎨' },
      { id: '2dwdewd', name: 'Jhon Doy', avatar: '👨‍🔬' },
    ],
    subTasks: [{ id: '1', title: '1 subtask', isCompleted: true }],
  },
  {
    id: '2erfefe',
    icon: 'LayoutDashboard',
    color: 'bg-[#FDC2F6]',
    label: 'Create Dasboard',
    dueDate: {
      date: new Date(),
      startTime: setMinutes(setHours(new Date(), 13), 10),
      endTime: setMinutes(setHours(new Date(), 15), 30),
    },
    comments: ['test'],
    resources: ['test'],
    users: [
      { id: '1wec', name: 'Mary Gray', avatar: '👮' },
      { id: '2cwa', name: 'Jhon Doy', avatar: '👨‍💻' },
    ],
    subTasks: [{ id: '1', title: '1 subtask', isCompleted: true }],
  },
  {
    id: '3erfef',
    icon: 'Briefcase',
    color: 'bg-[#FEE253]',
    label: 'Sky-Track Review',
    dueDate: {
      date: new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000),
    },
    comments: ['test'],
    resources: ['test'],
    users: [
      { id: '1erf', name: 'Mary Gray', avatar: '👩‍💻' },
      { id: '2erfef', name: 'Jhon Doy', avatar: '🤵' },
      { id: '3ce', name: 'Max Red', avatar: '👨‍🎓' },
    ],
    subTasks: [{ id: '1', title: '1 subtask', isCompleted: true }],
  },
];
