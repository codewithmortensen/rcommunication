import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface EntryProps {
  entryStatus: 'On Time' | 'Late';
}

export const EntryBadge = ({ entryStatus }: EntryProps) => {
  const variant = entryStatus === 'On Time' ? 'bg-green-500' : 'bg-red-600';
  return (
    <Badge className={cn(variant, 'rounded-sm text-xs font-normal')}>
      {entryStatus}
    </Badge>
  );
};

interface ExitProps {
  exitStatus: 'Early' | 'On Time';
}

export const ExitBadge = ({ exitStatus }: ExitProps) => {
  const variant = exitStatus === 'On Time' ? 'bg-green-500' : 'bg-red-600';
  return (
    <Badge className={cn(variant, 'rounded-sm font-normal')}>
      {exitStatus}
    </Badge>
  );
};

interface WorkDayProps {
  workdayStatus: 'Present' | 'Absent';
}
export const WorkDayBadge = ({ workdayStatus }: WorkDayProps) => {
  const variant = workdayStatus === 'Present' ? 'bg-green-500' : 'bg-red-600';
  return (
    <Badge className={cn(variant, 'rounded-sm font-normal')}>
      {workdayStatus}
    </Badge>
  );
};
