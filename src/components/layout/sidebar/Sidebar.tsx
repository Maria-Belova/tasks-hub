'use client'

import { observer } from 'mobx-react-lite';
import { SidebarHeader } from './SidebarHeader';
import SidebarMainMenu from './SidebarMainMenu';
import { SidebarProfile } from './SidebarProfile';
import SidebarProjects from './SidebarProjects';
import { authStore } from '@/stores/auth.store';

export const Sidebar = observer(() => {
  return (
    <aside className='p-5 bg-white dark:bg-neutral-800'>
      {authStore.isLoggedIn && (
        <>
          <SidebarHeader title='Account' />
          <SidebarProfile />
        </>
      )}
      <SidebarHeader title='Main Menu' />
      <SidebarMainMenu />
      <SidebarHeader title='Projects' />
      <SidebarProjects />
    </aside>
  );
});
