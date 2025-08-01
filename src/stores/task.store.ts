import { makeAutoObservable } from 'mobx';
import { TASKS } from '@/app/dashboard/statistics/last-tasks/tasks.data';
import { STATUS, type Status } from '@/types/status-tabs.types';
import type { TSubTask, TTask, TTaskFormData, TTaskSortBy } from '@/types/tasks.types';
import { isToday } from 'date-fns';

class TaskStore {
  tasks: TTask[] = TASKS;
  status: Status = STATUS.ALL;
  sortByDueDate: TTaskSortBy = 'asc';

  constructor() {
    makeAutoObservable(this);
  }

  loadStoreFormServer(tasks: TTask[]): void {
    this.tasks = tasks;
  }

  getTaskById(id: string): TTask | undefined {
    return this.tasks.find((task) => task.id === id);
  }

  updateTask(id: string, updatedTask: TTaskFormData): void {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);

    if (taskIndex !== -1) {
      this.tasks[taskIndex] = { ...this.tasks[taskIndex], ...updatedTask };
    }
  }

  addSubTask(taskId: string, subTask: TSubTask): void {
    const task = this.getTaskById(taskId);
    if (!task) {
      return;
    }

    if (!task.subtask) {
      task.subtask = [];
    }

    // task.sub_task.push({
    //   id: crypto.randomUUID(),
    //   title: subTask.title,
    //   is_completed: false,
    // });
  }

  setStatus(status: Status): void {
    this.status = status;
  }

  setSortByDueDate(sortBy: TTaskSortBy): void {
    this.sortByDueDate = sortBy;
  }

  get filteredTasks(): TTask[] {
    let filtered = this.tasks;

    filtered = filtered.filter((task) => {
      switch (this.status) {
        case STATUS.ACTIVE:
          return task?.subtask?.some((subTask) => !subTask.is_completed);
        case STATUS.COMPLETED:
          return task?.subtask?.every((subTask) => subTask.is_completed);
        default:
          return true;
      }
    });

    return filtered?.slice().sort((a, b) => {
      const dateA = new Date(a.due_date).getTime();
      const dateB = new Date(b.due_date).getTime();

      if (this.sortByDueDate === 'asc') {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });
  }

  get todayTasks() {
    return this.tasks.filter((task) => {
      const taskDate = new Date(task.due_date);
      return isToday(taskDate) && task.start_time && task.end_time;
    }) as TTask[];
  }
}

export const taskStore = new TaskStore();
