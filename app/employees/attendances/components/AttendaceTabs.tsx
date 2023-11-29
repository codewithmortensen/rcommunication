import { attendanceReportData } from '@/app/data/attendanceReport';
import attendanceRecords from '@/app/data/attendances';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { columns as reportColumns } from '../reports/components/Columns';
import ReportTable from '../reports/components/ReportTable';
import AttendanceTable from './AttendanceTable';
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
        <TabsContent value='Reports'>
          <ReportTable columns={reportColumns} data={attendanceReportData} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AttendanceTabs;
