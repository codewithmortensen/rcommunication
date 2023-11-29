'use client';

import React from 'react';
import AttendanceTable from './components/AttendanceTable';
import { columns } from './components/Columns';
import attendanceRecords from '@/app/data/attendances';
import { CalendarDateRangePicker } from './components/DateRangePicker';
import { DateRange } from 'react-day-picker';
import { addDays } from 'date-fns';
import AttendanceTabs from './components/AttendaceTabs';

const AttendancesPage = () => {
  const [selectedDateRange, setSelectedDateRange] = React.useState<
    DateRange | undefined
  >({
    from: new Date(),
    to: addDays(new Date(), 0),
  });

  const handleDateSelect = (selectedDate: DateRange) => {
    console.log('Selected Date Range:', selectedDate);
    setSelectedDateRange(selectedDate);
  };
  return (
    <div className='mt-10 mx-20'>
      {/* <CalendarDateRangePicker
        selectedDateRange={undefined}
        onDateSelect={function (selectedDate: DateRange): void {
          throw new Error('Function not implemented.');
        }}
      /> */}

      {/* <AttendanceTable columns={columns} data={attendanceRecords} /> */}
      <AttendanceTabs />
    </div>
  );
};

export default AttendancesPage;
