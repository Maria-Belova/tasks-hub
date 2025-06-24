import Link from 'next/link';
import { MAIN_MENU } from './data/main-menu.data';

const SidebarMainMenu = () => {
  return (
    <nav className='mb-10 mt-3'>
      <ul className='space-y-4'>
        {MAIN_MENU.map((menuItem) => {
          return (
            <li key={menuItem.title}>
              <Link href={menuItem.href} className='flex justify-between text-neutral-500 dark:text-white items-center hover:text-neutral-900 hover:dark:text-primary transition-colors pl-2'>
                <div className='flex items-center'>
                  <menuItem.icon size={20} />
                  <div className='ml-3'>{menuItem.title}</div>
                </div>

                {menuItem.title === 'Messages' && <div className='text-primary bg-[#D9DDFF] rounded-lg px-2 text-xs font-medium'>4</div>}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SidebarMainMenu;
