/*
  Warnings:

  - You are about to drop the `Scheduler` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[scheduleId]` on the table `Habit` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `scheduleId` to the `Habit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Habit" ADD COLUMN     "scheduleId" BIGINT NOT NULL;

-- DropTable
DROP TABLE "Scheduler";

-- CreateTable
CREATE TABLE "Schedule" (
    "id" BIGSERIAL NOT NULL,
    "recurrenceStart" TIMESTAMP(3) NOT NULL,
    "recurrenceEnd" TIMESTAMP(3) NOT NULL,
    "type" TEXT NOT NULL,
    "dayOfTheWeek" INTEGER,
    "month" INTEGER,
    "dayOfMonth" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Schedule_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Habit_scheduleId_key" ON "Habit"("scheduleId");

-- AddForeignKey
ALTER TABLE "Habit" ADD CONSTRAINT "Habit_scheduleId_fkey" FOREIGN KEY ("scheduleId") REFERENCES "Schedule"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
