import { Attendances } from '../types/definitions';

const attendanceRecords: Attendances[] = [
  {
    attendanceID: '001',
    employeeId: '001',
    entryTime: new Date('2023-11-28T08:00:00'),
    exitTime: new Date('2023-11-28T17:00:00'),
    entryStatus: 'On Time',
    exitStatus: 'On Time',
    workdayStatus: 'Present',
    currentDate: new Date('2023-11-28'),
  },
  {
    attendanceID: '002',
    employeeId: '002',
    entryTime: new Date('2023-11-28T09:15:00'),
    exitTime: new Date('2023-11-28T18:30:00'),
    entryStatus: 'Late',
    exitStatus: 'On Time',
    workdayStatus: 'Present',
    currentDate: new Date('2023-11-28'),
  },
  {
    attendanceID: '003',
    employeeId: '003',
    entryTime: new Date('2023-11-28T08:30:00'),
    exitTime: new Date('2023-11-28T16:45:00'),
    entryStatus: 'On Time',
    exitStatus: 'Early',
    workdayStatus: 'Present',
    currentDate: new Date('2023-11-28'),
  },
  {
    attendanceID: '004',
    employeeId: '001',
    entryTime: new Date('2023-11-29T08:15:00'),
    exitTime: new Date('2023-11-29T17:30:00'),
    entryStatus: 'On Time',
    exitStatus: 'On Time',
    workdayStatus: 'Present',
    currentDate: new Date('2023-11-29'),
  },
  {
    attendanceID: '005',
    employeeId: '002',
    entryTime: new Date('2023-11-29T08:00:00'),
    exitTime: new Date('2023-11-29T18:00:00'),
    entryStatus: 'On Time',
    exitStatus: 'On Time',
    workdayStatus: 'Present',
    currentDate: new Date('2023-11-29'),
  },
  {
    attendanceID: '006',
    employeeId: '003',
    entryTime: new Date('2023-11-29T09:00:00'),
    exitTime: new Date('2023-11-29T17:15:00'),
    entryStatus: 'Late',
    exitStatus: 'Early',
    workdayStatus: 'Present',
    currentDate: new Date('2023-11-29'),
  },
  {
    attendanceID: '007',
    employeeId: '001',
    entryTime: new Date('2023-12-01T08:30:00'),
    exitTime: new Date('2023-12-01T17:45:00'),
    entryStatus: 'On Time',
    exitStatus: 'On Time',
    workdayStatus: 'Present',
    currentDate: new Date('2023-12-01'),
  },
  {
    attendanceID: '008',
    employeeId: '002',
    entryTime: new Date('2023-12-01T09:00:00'),
    exitTime: new Date('2023-12-01T18:15:00'),
    entryStatus: 'On Time',
    exitStatus: 'On Time',
    workdayStatus: 'Present',
    currentDate: new Date('2023-12-01'),
  },
  {
    attendanceID: '009',
    employeeId: '003',
    entryTime: new Date('2023-12-01T08:45:00'),
    exitTime: new Date('2023-12-01T16:30:00'),
    entryStatus: 'On Time',
    exitStatus: 'Early',
    workdayStatus: 'Present',
    currentDate: new Date('2023-12-01'),
  },
  {
    attendanceID: '010',
    employeeId: '001',
    entryTime: new Date('2023-12-02T08:15:00'),
    exitTime: new Date('2023-12-02T17:30:00'),
    entryStatus: 'On Time',
    exitStatus: 'On Time',
    workdayStatus: 'Present',
    currentDate: new Date('2023-12-02'),
  },
  {
    attendanceID: '011',
    employeeId: '002',
    entryTime: new Date('2023-12-02T08:00:00'),
    exitTime: new Date('2023-12-02T18:00:00'),
    entryStatus: 'On Time',
    exitStatus: 'On Time',
    workdayStatus: 'Present',
    currentDate: new Date('2023-12-02'),
  },
  {
    attendanceID: '012',
    employeeId: '003',
    entryTime: new Date('2023-12-02T09:00:00'),
    exitTime: new Date('2023-12-02T17:15:00'),
    entryStatus: 'Late',
    exitStatus: 'Early',
    workdayStatus: 'Present',
    currentDate: new Date('2023-12-02'),
  },
];

// You can use the 'attendanceRecords' array in your application.
export default attendanceRecords;
