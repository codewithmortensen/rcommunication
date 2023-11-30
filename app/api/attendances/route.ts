import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/libs/clients';

interface attendanceProps {
  searchParams: { start: Date };
}

export const GET = async (
  request: NextRequest,
  { searchParams }: attendanceProps
) => {
  const attendances = await prisma.attendance.findMany();
  return NextResponse.json(attendances, { status: 200 });
};
