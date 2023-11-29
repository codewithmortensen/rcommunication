-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('Male', 'Female');

-- CreateEnum
CREATE TYPE "DayOff" AS ENUM ('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');

-- CreateEnum
CREATE TYPE "EntryStatus" AS ENUM ('On_Time', 'Late');

-- CreateEnum
CREATE TYPE "ExitStatus" AS ENUM ('Early', 'On_Time');

-- CreateEnum
CREATE TYPE "WorkdayStatus" AS ENUM ('Present', 'Absent');

-- CreateTable
CREATE TABLE "Employee" (
    "employeeID" CHAR(50) NOT NULL,
    "firstName" CHAR(50) NOT NULL,
    "lastName" CHAR(50) NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "gender" "Gender" NOT NULL,
    "phone" CHAR(50) NOT NULL,
    "email" CHAR(50) NOT NULL,
    "address" CHAR(100) NOT NULL,
    "jobTile" CHAR(50) NOT NULL,
    "status" TEXT NOT NULL,
    "salary" DOUBLE PRECISION NOT NULL,
    "dayOff" "DayOff",
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("employeeID")
);

-- CreateTable
CREATE TABLE "Attendance" (
    "attendanceID" TEXT NOT NULL,
    "employeeEmployeeID" CHAR(50) NOT NULL,
    "entryTime" TIMESTAMP(3) NOT NULL,
    "exitTime" TIMESTAMP(3),
    "entryStatus" "EntryStatus" NOT NULL,
    "exitStatus" "ExitStatus",
    "workdayStatus" "WorkdayStatus",
    "currentDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Attendance_pkey" PRIMARY KEY ("attendanceID")
);

-- CreateIndex
CREATE UNIQUE INDEX "Employee_employeeID_key" ON "Employee"("employeeID");

-- CreateIndex
CREATE UNIQUE INDEX "Attendance_attendanceID_key" ON "Attendance"("attendanceID");

-- AddForeignKey
ALTER TABLE "Attendance" ADD CONSTRAINT "Attendance_employeeEmployeeID_fkey" FOREIGN KEY ("employeeEmployeeID") REFERENCES "Employee"("employeeID") ON DELETE RESTRICT ON UPDATE CASCADE;
