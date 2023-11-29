import { AttendanceReports } from '../types/definitions';

export const attendanceReportData: AttendanceReports[] = [
  {
    reportID: '001',
    employeeID: '001',
    onTimeEntryCount: 15,
    lateEntryCount: 3,
    earlyExitCount: 2,
    presentCount: 18,
    absentCount: 2,
  },
  {
    reportID: '002',
    employeeID: '002',
    onTimeEntryCount: 20,
    lateEntryCount: 1,
    earlyExitCount: 5,
    presentCount: 24,
    absentCount: 1,
  },
  {
    reportID: '003',
    employeeID: '003',
    onTimeEntryCount: 17,
    lateEntryCount: 2,
    earlyExitCount: 3,
    presentCount: 19,
    absentCount: 1,
  },
  {
    reportID: '004',
    employeeID: '004',
    onTimeEntryCount: 19,
    lateEntryCount: 1,
    earlyExitCount: 4,
    presentCount: 22,
    absentCount: 2,
  },
  // Add more attendance reports as needed
];

// You can use the 'attendanceReports' array in your application.
