import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/libs/clients';
import { Prisma } from '@prisma/client';

export const GET = async (request: NextRequest) => {
  try {
    const attendanceReports = await prisma.attendance.aggregateRaw({});
    return NextResponse.json(attendanceReports);
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
};

// SELECT
// "employeeEmployeeID" AS employeeID,
// COUNT(CASE WHEN "workdayStatus" = 'Absent' THEN 1 END) AS absentCount
// FROM "Attendance"
// GROUP BY "employeeEmployeeID"
// -- COUNT(CASE WHEN "entryStatus" = 'On_Time' THEN 1 END) AS onTimeEntryCount,
// -- COUNT(CASE WHEN "entryStatus" = 'Late' THEN 1 END) AS lateEntryCount,
// -- COUNT(CASE WHEN "exitStatus" = 'Early' THEN 1 END) AS earlyExitCount,
// -- COUNT(CASE WHEN "workdayStatus" = 'Present' THEN 1 END) AS presentCount,
