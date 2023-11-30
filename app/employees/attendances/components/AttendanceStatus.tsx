import { Badge } from '@/components/ui/badge';
import { cn } from '@/libs/utils';

interface EntryProps {
  entryStatus: 'On_Time' | 'Late';
}
export const EntryBadge = ({ entryStatus }: EntryProps) => {
  const variant = entryStatus === 'On_Time' ? 'bg-green-500' : 'bg-red-600';
  return (
    <Badge className={cn(variant, 'rounded-sm text-xs font-normal')}>
      {entryStatus === 'On_Time' ? 'On Time' : entryStatus}
    </Badge>
  );
};

interface ExitProps {
  exitStatus: 'Early' | 'On_Time';
}

export const ExitBadge = ({ exitStatus }: ExitProps) => {
  const variant = exitStatus === 'On_Time' ? 'bg-green-500' : 'bg-red-600';
  return (
    <Badge className={cn(variant, 'rounded-sm font-normal')}>
      {exitStatus === 'On_Time' ? 'On Time' : exitStatus}
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
