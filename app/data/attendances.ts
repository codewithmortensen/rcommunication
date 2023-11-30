import { Attendances } from '../types/definitions';

const attendanceRecords: Attendances[] = [
  {
    attendanceID: '001',
    employeeId: '001',
    entryTime: new Date('2023-11-28T08:00:00'),
    exitTime: new Date('2023-11-28T17:00:00'),
    entryStatus: 'On_Time',
    exitStatus: 'On_Time',
    workdayStatus: 'Present',
    currentDate: new Date('2023-11-29'),
  },
];

// You can use the 'attendanceRecords' array in your application.
export default attendanceRecords;
