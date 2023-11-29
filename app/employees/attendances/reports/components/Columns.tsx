'use client';

import { AttendanceReports } from '@/app/types/definitions';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';
export const columns: ColumnDef<AttendanceReports>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'employeeID',
    header: 'Employee ID',
    cell: ({ row }) => {
      const id = row.getValue('employeeID');
      return <span>{`Emp-${id}`}</span>;
    },
  },
  {
    accessorKey: 'onTimeEntryCount',
    header: ({ column }) => {
      return (
        <Button
          className='px-1'
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          On Time
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    // cell: ({ row }) => {
    //   const time: Date = row.getValue('entryTime');
    //   return `${time.toLocaleTimeString()}`;
    // },
  },
  {
    accessorKey: 'lateEntryCount',
    header: ({ column }) => {
      return (
        <Button
          className='px-1'
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Late
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    // cell: ({ row }) => {
    //   return <EntryBadge entryStatus={row.getValue('entryStatus')} />;
    // },
  },
  {
    accessorKey: 'earlyExitCount',
    header: ({ column }) => {
      return (
        <Button
          className='px-1'
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Early
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    // cell: ({ row }) => {
    //   const time: Date = row.getValue('exitTime');
    //   return `${time.toLocaleTimeString()}`;
    // },
  },
  {
    accessorKey: 'absentCount',
    header: ({ column }) => {
      return (
        <Button
          className='px-1'
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Absent
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    // cell: ({ row }) => {
    //   return <ExitBadge exitStatus={row.getValue('exitStatus')} />;
    // },
  },
  {
    accessorKey: 'presentCount',
    header: ({ column }) => {
      return (
        <Button
          className='px-1'
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Present
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    // cell: ({ row }) => {
    //   return <WorkDayBadge workdayStatus={row.getValue('workdayStatus')} />;
    // },
  },

  //   {
  //     id: 'actions',
  //     cell: ({ row }) => {
  //       return <ProductActions product={row.original} />;
  //     },
  //   },
];
