import { Badge } from '@/components/ui/badge';
import { cn } from '@/libs/utils';
import { EntryStatus, ExitStatus, WorkdayStatus } from '@prisma/client';

interface EntryProps {
  entryStatus: EntryStatus;
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
  exitStatus: ExitStatus;
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
  workdayStatus: WorkdayStatus;
}
export const WorkDayBadge = ({ workdayStatus }: WorkDayProps) => {
  const variant = workdayStatus === 'Present' ? 'bg-green-500' : 'bg-red-600';
  return (
    <Badge className={cn(variant, 'rounded-sm font-normal')}>
      {workdayStatus}
    </Badge>
  );
};
