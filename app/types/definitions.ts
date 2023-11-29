export type Product = {
  productID: string;
  name: string;
  slug: string;
  price: number;
  stock: number;
  createdAt: Date;
  lastUpdate: Date;
  collection: string;
};

export type Collection = {
  collectionId: string;
  name: string;
  slug: string;
};

export type Employee = {
  employeeID: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  gender: 'Male' | 'Female';
  phone: string;
  address: string;
  jobTitle: string;
  status: string;
  salary: number;
};

// dayOff
// startTime
// endTime
// todo catch the employee email address

export type Attendances = {
  attendanceID: string;
  employeeId: string;
  entryTime: Date;
  exitTime: Date;
  entryStatus: 'On Time' | 'Late';
  exitStatus: 'Early' | 'On Time';
  workdayStatus: 'Present' | 'Absent';
  currentDate: Date;
};

export type AttendanceReports = {
  reportID: string;
  employeeID: string;
  onTimeEntryCount: number;
  lateEntryCount: number;
  earlyExitCount: number;
  presentCount: number;
  absentCount: number;
};
