import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/libs/clients';

export const GET = async (request: NextRequest) => {
  const attendances = await prisma.attendance.findMany();
  return NextResponse.json(attendances);
};
