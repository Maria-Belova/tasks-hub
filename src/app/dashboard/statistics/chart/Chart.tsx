import { Area, AreaChart, CartesianGrid, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { PROJECTS_STATISTICS_DATA } from './chart.data';
import { useTheme } from 'next-themes';
import { CustomTooltip } from './CustomTooltip';
import { SectionHeader } from '@/components/ui/header/SectionHeader';

export const Chart = () => {
  const { resolvedTheme } = useTheme();

  const isDark = resolvedTheme === 'dark';

  const axisColor = isDark ? '#FFFFFF' : '#A1A1A1';
  const gridColor = isDark ? '#374151' : '#E5E7EB';
  const lineColor = '#7C3AED';

  return (
    <div className='w-full h-full rounded-2xl pt-4 pr-4 shadow bg-white dark:bg-neutral-700'>
      <div className='ml-4 mb-3'>
        <SectionHeader>Projects Statistic</SectionHeader>
      </div>
      <div style={{ height: 'calc(100% - 64px)' }}>
        <ResponsiveContainer width='100%' height='100%'>
          <AreaChart data={PROJECTS_STATISTICS_DATA} margin={{ top: 20, right: 20, left: 0, bottom: 10 }}>
            <defs>
              <linearGradient id='gradientPurple' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='0%' stopColor={lineColor} stopOpacity={0.4} />
                <stop offset='100%' stopColor={lineColor} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke={gridColor} vertical={false} />
            <XAxis dataKey='name' stroke={axisColor} fontSize={14} tickMargin={14} fontWeight={600} tickLine={false} axisLine={false} />
            <YAxis stroke={axisColor} tickLine={false} tickMargin={20} axisLine={false} fontSize={14} fontWeight={600} />
            <Tooltip content={<CustomTooltip />} />
            <Area type='monotone' dataKey='projectsCount' stroke='none' fill='url(#gradientPurple)' />
            <Line
              type='monotone'
              dataKey='projectsCount'
              stroke={lineColor}
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 7, stroke: lineColor, strokeWidth: 2, fill: '#FFFFFF' }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
