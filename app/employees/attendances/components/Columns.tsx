'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';
import { EntryBadge, ExitBadge, WorkDayBadge } from './AttendanceStatus';
import { Attendances } from '@/app/types/definitions';
export const columns: ColumnDef<Attendances>[] = [
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
    accessorKey: 'employeeEmployeeID',
    header: 'Employee ID',
    cell: ({ row }) => {
      const id = row.getValue('employeeEmployeeID');
      return <span>{`${id}`}</span>;
    },
  },
  {
    accessorKey: 'entryTime',
    header: ({ column }) => {
      return (
        <Button
          className='px-1'
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Entry Time
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => {
      const dateTime: Date = row.getValue('entryTime');
      return `${new Date(dateTime).toLocaleTimeString()}`;
    },
  },
  {
    accessorKey: 'entryStatus',
    header: ({ column }) => {
      return (
        <Button
          className='px-1'
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Entry Status
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <EntryBadge entryStatus={row.getValue('entryStatus')} />;
    },
  },
  {
    accessorKey: 'exitTime',
    header: ({ column }) => {
      return (
        <Button
          className='px-1'
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Exit Time
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => {
      const dateTime: Date = row.getValue('exitTime');
      return `${new Date(dateTime).toLocaleTimeString()}`;
    },
  },
  {
    accessorKey: 'exitStatus',
    header: ({ column }) => {
      return (
        <Button
          className='px-1'
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Exit Status
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <ExitBadge exitStatus={row.getValue('exitStatus')} />;
    },
  },
  {
    accessorKey: 'workdayStatus',
    header: ({ column }) => {
      return (
        <Button
          className='px-1'
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          workday Status
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <WorkDayBadge workdayStatus={row.getValue('workdayStatus')} />;
    },
  },

  //   {
  //     id: 'actions',
  //     cell: ({ row }) => {
  //       return <ProductActions product={row.original} />;
  //     },
  //   },
];
