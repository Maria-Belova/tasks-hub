import type { Database } from '@/types/db.types';
import { createBrowserClient } from '@supabase/ssr';

export function createClient() {
  return createBrowserClient<Database>(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_API_KEY!);
}
