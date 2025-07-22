import { redirect } from 'next/navigation';
import { createClientFromServer } from './server';
import { PublicPages } from '@/config/public-pages';

export async function getServerAuth(isNeedRedirect: boolean = false) {
  const supabase = await createClientFromServer();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    return isNeedRedirect ? redirect(PublicPages.LOGIN) : null;
  }

  return data.user;
}
