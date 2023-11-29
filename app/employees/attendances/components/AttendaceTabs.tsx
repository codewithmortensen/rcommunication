import DateRangerPicker from '@/app/components/DateRangePicker';
import { attendanceReportData } from '@/app/data/attendanceReport';
import attendanceRecords from '@/app/data/attendances';
import { Attendances, DatePickerData } from '@/app/types/definitions';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';
import { columns as reportColumns } from '../reports/components/Columns';
import ReportTable from '../reports/components/ReportTable';
import AttendanceTable from './AttendanceTable';
import { columns } from './Columns';

const AttendanceTabs = () => {
  const [initialData, setInitialData] =
    useState<Attendances[]>(attendanceRecords);

  const handleSubmit = (data: DatePickerData) => {
    setInitialData(
      attendanceRecords.filter((records) => {
        const currentDate = records.currentDate;
        return currentDate == new Date(data.range.from);
      })
    );
  };

  return (
    <div>
      <Tabs defaultValue='Overview'>
        <div className='flex justify-between items-center gap-5'>
          <TabsList>
            <TabsTrigger value='Overview'>Overview</TabsTrigger>
            <TabsTrigger value='Reports'>Reports</TabsTrigger>
          </TabsList>
          <DateRangerPicker onSubmitForm={handleSubmit} />
        </div>
        <TabsContent value='Overview'>
          <AttendanceTable columns={columns} data={initialData} />
        </TabsContent>
        <TabsContent value='Reports'>
          <ReportTable columns={reportColumns} data={attendanceReportData} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AttendanceTabs;
