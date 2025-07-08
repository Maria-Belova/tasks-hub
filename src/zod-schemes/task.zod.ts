import { z } from 'zod';
import { ICON_NAMES } from '@/utils/icon-mapper';

export const TaskSchema = z.object({
  label: z.string().min(1, 'Title is required'),
  icon: z.enum(ICON_NAMES, {
    errorMap: () => ({
      message: 'Invalid icon selected',
    }),
  }),
  dueDate: z.date().min(new Date(), 'Due date munst be in a future'),
});
