'use server'

import { createClientFromServer } from '@/utils/supabase/server';

export async function taskServerGetAll() {
  return (await createClientFromServer())
  .from('task')
  .select(`*, subtask(*)`);
}

//   update(task: TTaskFormData) {}