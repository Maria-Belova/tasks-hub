import { SidebarHeader } from './SidebarHeader';
import SidebarMainMenu from './SidebarMainMenu';
import { SidebarProfile } from './SidebarProfile';
import SidebarProjects from './SidebarProjects';

export const Sidebar = () => {
  return (
    <aside className='p-5 bg-white dark:bg-neutral-800'>
      <SidebarHeader title='Account' />
      <SidebarProfile />
      <SidebarHeader title='Main Menu' />
      <SidebarMainMenu />
      <SidebarHeader title='Projects' />
      <SidebarProjects />
    </aside>
  );
};
