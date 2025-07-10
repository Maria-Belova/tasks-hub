'use client';

import { useEffect } from 'react';
import { Calendar as CalendarIcon, X } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { TaskSchema } from '@/zod-schemes/task.zod';
import { useForm } from 'react-hook-form';
import { format } from 'date-fns';
import { observer } from 'mobx-react-lite';
import { toast } from 'sonner';
import { BaseModal } from '@/components/modals/BaseModal';
import type { TTaskFormData } from '../../../types/tasks.types';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { ICON_MAP, ICON_NAMES } from '@/utils/icon-mapper';
import { taskStore } from '@/stores/task.store';

interface ITaskModal {
  taskId: string;
  closeModal: () => void;
}

export const TaskModal = observer(({ taskId, closeModal }: ITaskModal) => {
  const form = useForm<TTaskFormData>({
    resolver: zodResolver(TaskSchema),
  });

  function onSubmit(data: TTaskFormData) {
    taskStore.updateTask(taskId, data);
    toast.success('Task update successfylly!');
    closeModal();
  }

  useEffect(() => {
    const task = taskStore.getTaskById(taskId);

    if (!task) {
      return;
    }

    form.reset({
      label: task.label,
      dueDate: { date: new Date(task.dueDate.date), startTime: new Date(), endTime: new Date() },
      icon: task.icon,
    });
  }, [taskId]);

  return (
    <BaseModal>
      <h2 className='mb-4 text-lg font-bold'>Edit Project</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <FormField
            control={form.control}
            name='label'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder='Enter title' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='dueDate'
            render={({ field: { onChange, value } }) => (
              <FormItem>
                <FormLabel>Due date</FormLabel>
                <FormControl>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant='outline'
                        data-empty={value}
                        className='data-[empty=true]:text-muted-foreground w-full justify-start text-left font-normal'
                      >
                        <CalendarIcon />
                        {value ? format(value, 'PPP') : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className='w-auto p-0'>
                      <Calendar mode='single' selected={value} onSelect={onChange} />
                    </PopoverContent>
                  </Popover>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='icon'
            render={({ field: { onChange, value } }) => (
              <FormItem>
                <FormLabel>Icon</FormLabel>
                <FormControl>
                  <div className='flex flex-wrap gap-2'>
                    {ICON_NAMES.map((name) => {
                      const Icon = ICON_MAP[name];
                      return (
                        <Button
                          key={name}
                          type='button'
                          variant={value === name ? 'default' : 'outline'}
                          onClick={() => onChange(name)}
                          className='cursor-pointer'
                        >
                          <Icon size={16} />
                        </Button>
                      );
                    })}
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
          <Button type='submit' className='cursor-pointer'>
            Save
          </Button>
        </form>
      </Form>
      <X
        className='absolute right-6 top-6 text-gray-400 hover:text-gray-600 cursor-pointer'
        onClick={(e) => {
          e.stopPropagation();
          closeModal();
        }}
      />
    </BaseModal>
  );
});
