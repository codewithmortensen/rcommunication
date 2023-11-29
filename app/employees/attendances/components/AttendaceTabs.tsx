import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import React from 'react';
import AttendanceTable from './AttendanceTable';
import attendanceRecords from '@/app/data/attendances';
import { columns } from './Columns';

const AttendanceTabs = () => {
  return (
    <div>
      <Tabs defaultValue='Overview'>
        <TabsList>
          <TabsTrigger value='Overview'>Overview</TabsTrigger>
          <TabsTrigger value='Reports'>Reports</TabsTrigger>
        </TabsList>
        <TabsContent value='Overview'>
          <AttendanceTable columns={columns} data={attendanceRecords} />
        </TabsContent>
        <TabsContent value='Reports'>Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};

export default AttendanceTabs;
