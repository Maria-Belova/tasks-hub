import type { Database } from '@/types/db.types';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export async function createClientFromServer() {
  const cookieStore = await cookies();

  console.log('test', process.env.NEXT_PUBLIC_SUPABASE_URL);

  return createServerClient<Database>(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_API_KEY!, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options));
        } catch {}
      },
    },
  });
}
