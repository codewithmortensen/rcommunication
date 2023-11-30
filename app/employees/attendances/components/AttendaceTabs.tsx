'use client';
import DateRangerPicker from '@/app/components/DateRangePicker';
import { attendanceReportData } from '@/app/data/attendanceReport';
import useAttendances from '@/app/hooks/useAttendances';
import { DatePickerData } from '@/app/types/definitions';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Attendance } from '@prisma/client';
import { useEffect, useState } from 'react';
import { columns as reportColumns } from '../reports/components/Columns';
import ReportTable from '../reports/components/ReportTable';
import AttendanceTable from './AttendanceTable';
import { columns } from './Columns';

const AttendanceTabs = () => {
  const { data } = useAttendances();
  const [initialData, setInitialData] = useState<Attendance[]>([]);

  useEffect(() => {
    if (data !== undefined) {
      setInitialData(data);
    }
  }, [data]);

  const handleSubmit = (formData: DatePickerData) => {
    if (data !== undefined) {
      const { to, from } = formData.range;

      const filteredRecords = data.filter((record) => {
        // const current = new Date(record.currentDate);
        // current >= from && current <= to;
        console.log(record.currentDate <= from);
      });
      // setInitialData(filteredRecords);
    }
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
