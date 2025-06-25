import { STATISTICS } from './statistic.data';
import { StatisticCard } from './StatisticCard';

export const StatisticList = () => {
  return (
    <div className='flex flex-col gap-4'>
      {STATISTICS.map((statistic) => {
        return <StatisticCard key={statistic.id} statistic={statistic} />;
      })}
    </div>
  );
};
