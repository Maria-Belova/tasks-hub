import { useMemo } from 'react';
import { CircleCheck } from 'lucide-react';
import cn from 'clsx';

interface IProgressBar {
  completionPercentage: number;
}

export const ProgressBar = ({ completionPercentage }: IProgressBar) => {
  const clamped = Math.min(100, Math.max(0, completionPercentage));

  const progressText = useMemo(() => {
    if (clamped >= 100) {
      return (
        <div className='flex items-center gap-1.5 text-white'>
          <CircleCheck size={16} /> Done
        </div>
      );
    }

    return `${completionPercentage}%`;
  }, [clamped]);

  const colorProgressBar = useMemo(() => {
    if (clamped >= 100) return 'bg-green-300';
    if (clamped >= 75) return 'bg-yellow-300';
    if (clamped >= 50) return 'bg-primary/60';
    if (clamped >= 25) return 'bg-rose-400';
    return 'bg-neutral-300';
  }, [clamped]);

  return (
    <div className='h-12 w-full rounded-full bg-[#f6f4ff] overflow-hidden relative'>
      <div
        className={cn(
          colorProgressBar,
          'h-full bg-gre rounded-full bg-[length:56px_56px] text-white font-medium flex items-center justify-center animate-stripes cursor-default',
        )}
        style={{
          width: `${clamped}%`,
          backgroundImage:
            'repeating-linear-gradient(45deg, rgba(255,255,255,0.15) 0, rgba(255,255,255,0.15) 20px, transparent 20px, transparent 40px',
        }}
      >
        {progressText}
      </div>
    </div>
  );
};
