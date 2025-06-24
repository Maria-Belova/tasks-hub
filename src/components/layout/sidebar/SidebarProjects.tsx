import { PROJECTS } from './data/projects.data';
import cn from 'clsx';

const SidebarProjects = () => {
  return (
    <div>
      <ul className='space-y-3 pl-4 mt-3'>
        {PROJECTS.map((project) => {
          return (
            <li key={project.name} className='flex items-center'>
              <div className={cn(project.color, 'w-3 h-3 mr-3')}></div>
              <div className='text-neutral-500 dark:text-white'>{project.name}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SidebarProjects;
