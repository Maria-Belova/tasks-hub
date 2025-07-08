import React, { useEffect } from 'react';
import { Calendar as CalendarIcon, X } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { TaskSchema } from '@/zod-schemes/task.zod';
import { Controller, useForm } from 'react-hook-form';
import { BaseModal } from '@/components/modals/BaseModal';
import type { TTaskFormData } from '../../../types/tasks.types';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { LAST_TASKS } from '@/app/dashboard/statistics/last-tasks/last-tasks.data';
import { ICON_MAP, ICON_NAMES } from '@/utils/icon-mapper';

interface IEditTaskModal {
  taskId: number;
  onClose: () => void;
}

export const EditTaskModal = ({ taskId, onClose }: IEditTaskModal) => {
  const form = useForm<TTaskFormData>({
    resolver: zodResolver(TaskSchema),
  });

  function onSubmit(data: TTaskFormData) {
    console.log(data);
  }

  useEffect(() => {
    form.reset(LAST_TASKS.find((task) => task.id === taskId) || {});
  }, [taskId]);
  return (
    <BaseModal>
      <div className='fixed inset-0 z-40 flex items-center justify-center bg-white/10 backdrop-blur-xs'>
        <div className='relative z-70 w-full max-w-md rounded-xl bg-white/90 dark:bg-neutral-800 dark:text-white backdrop-blur-md border border-white/20 p-6 shadow-2xl text-neutral-700'>
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
              <Controller
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

              <Controller
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
              <Button type='submit'>Save</Button>
            </form>
          </Form>
          <X
            className='absolute right-6 top-6 text-gray-400 hover:text-gray-600 cursor-pointer'
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
          />
        </div>
      </div>
    </BaseModal>
  );
};
