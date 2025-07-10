'use client';

import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { AuthSchema } from '@/zod-schemes/auth.zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { observer } from 'mobx-react-lite';
import { DashboardPages } from '@/config/dashboard-pages';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { authStore } from '@/stores/auth.store';

interface IAuthForm {
  type: 'login' | 'register' | 'forgot-password' | 'reset-password';
}

export const AuthForm = observer(({ type }: IAuthForm) => {
  const isLogin = type === 'login';

  const router = useRouter();

  const form = useForm<z.infer<typeof AuthSchema>>({
    resolver: zodResolver(AuthSchema),
  });

  function onSubmit(data: z.infer<typeof AuthSchema>) {
    authStore.login();
    form.reset();
    if (authStore.isLoggedIn) {
      toast.success(isLogin ? 'Successfylly login!' : 'Registered successfylly!');
      router.replace(DashboardPages.DASHBOARD);
    }
  }

  return (
    <div className='bg-[#f6f4ff] flex items-center justify-center h-screen'>
      <div className='bg-white rounded-2xl shadow-sm p-10 w-lg'>
        <div className='relative border-neutral-300 rounded-2xl p-4 shadow border my-10 w-fit mx-auto'>
          <div className='absolute -top-3 -right-3 bg-[#D2B4FF] text-white text-sm rounded-full h-6 w-6 flex items-center justify-center border border-white'>
            3
          </div>
          <Image src='/images/favicon.svg' alt='logo' width={50} height={50} />
        </div>

        <div className='flex flex-col items-center gap-1'>
          <div className='text-3xl font-semibold'>Welcome back</div>
          <div>Please enter your details to sign in</div>
        </div>

        <div className='mt-10'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email address</FormLabel>
                    <FormControl>
                      <Input className='h-12' type='email' placeholder='Enter email' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input className='h-12' type='password' placeholder='Enter password' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type='submit' className='cursor-pointer w-full h-13 text-lg'>
                Sign in
              </Button>
            </form>
          </Form>

          <div className='flex items-center justify-center gap-2 w-full mt-5'>
            <div>Don't have an account?</div>
            <div className='cursor-pointer text-primary'>Create account</div>
          </div>
        </div>
      </div>
    </div>
  );
});
