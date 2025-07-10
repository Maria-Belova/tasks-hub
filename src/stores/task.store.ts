import { makeAutoObservable } from 'mobx';
import { TASKS } from '@/app/dashboard/statistics/last-tasks/tasks.data';
import { STATUS, type Status } from '@/types/status-tabs.types';
import type { ITask, ITaskWithTime, TSubTaskFormData, TTaskFormData, TTaskSortBy } from '@/types/tasks.types';
import { isToday } from 'date-fns';

class TaskStore {
  tasks: ITask[] = TASKS;
  status: Status = STATUS.ALL;
  sortByDueDate: TTaskSortBy = 'asc';

  constructor() {
    makeAutoObservable(this);
  }

  getTaskById(id: string): ITask | undefined {
    return this.tasks.find((task) => task.id === id);
  }

  updateTask(id: string, updatedTask: TTaskFormData): void {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);

    if (taskIndex !== -1) {
      this.tasks[taskIndex] = { ...this.tasks[taskIndex], ...updatedTask };
    }
  }

  addSubTask(taskId: string, subTask: TSubTaskFormData): void {
    const task = this.getTaskById(taskId);
    if (!task) {
      return;
    }

    if (!task.subTasks) {
      task.subTasks = [];
    }

    task.subTasks.push({
      id: crypto.randomUUID(),
      title: subTask.title,
      isCompleted: false,
    });
  }

  setStatus(status: Status): void {
    this.status = status;
  }

  setSortByDueDate(sortBy: TTaskSortBy): void {
    this.sortByDueDate = sortBy;
  }

  get filteredTasks(): ITask[] {
    let filtered = this.tasks;

    filtered = filtered.filter((task) => {
      switch (this.status) {
        case STATUS.ACTIVE:
          return task.subTasks.some((subTask) => !subTask.isCompleted);
        case STATUS.COMPLETED:
          return task.subTasks.every((subTask) => subTask.isCompleted);
        default:
          return true;
      }
    });

    return filtered?.slice().sort((a, b) => {
      const dateA = new Date(a.dueDate.date).getTime();
      const dateB = new Date(b.dueDate.date).getTime();

      if (this.sortByDueDate === 'asc') {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });
  }

    get todayTasks() {
    return this.tasks.filter((task) => {
      const taskDate = new Date(task.dueDate.date);
      return isToday(taskDate) && task.dueDate.startTime && task.dueDate.endTime;
    }) as ITaskWithTime[];
  }
}

export const taskStore = new TaskStore();
