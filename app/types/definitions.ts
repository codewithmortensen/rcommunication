import { z } from 'zod';
import { datePickerSchema } from './schema';

export type InventoryProductStatus = {
  status: '';
};

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
  employee_id: string;
  first_name: string;
  last_name: string;
  birth_date: Date;
  gender: 'Male' | 'Female';
  phone: string;
  email: string;
  address: string;
  job_title: string;
  status: string;
  salary: number;
  dey_off:
    | 'Monday'
    | 'Tuesday'
    | 'Wednesday'
    | 'Thursday'
    | 'Friday'
    | 'Saturday'
    | 'Sunday';
  start_time: Date;
  end_time: Date;
};

export type Attendances = {
  attendanceID: string;
  employeeId: string;
  entryTime: Date;
  exitTime: Date;
  entryStatus: 'On_Time' | 'Late';
  exitStatus: 'Early' | 'On_Time';
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

export type DatePickerData = z.infer<typeof datePickerSchema>;
