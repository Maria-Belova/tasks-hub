import cn from 'clsx';
import type { IStatisticCard } from './statistic.types';
import Image from 'next/image';
import { formatMinutes } from '@/utils/time-formatter';

interface IStatisticCardProps {
  statistic: IStatisticCard;
}
export const StatisticCard = ({ statistic }: IStatisticCardProps) => {
  return (
    <div className={cn('w-full rounded-3xl flex items-center justify-between p-5', statistic.bgColor)}>
      <div>
        <div className='text-4xl font-medium mb-2 dark:text-neutral-800'>{statistic.valueType === 'time' ? formatMinutes(statistic.value) : statistic.value}</div>
        <div className='text-sm dark:text-neutral-800'>{statistic.title}</div>
      </div>
      <Image src={statistic.logo} alt={statistic.title} width={100} height={100} />
    </div>
  );
};
