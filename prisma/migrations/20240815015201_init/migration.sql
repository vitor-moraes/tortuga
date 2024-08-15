-- CreateTable
CREATE TABLE "Habit" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "type" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Habit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Scheduler" (
    "id" BIGSERIAL NOT NULL,
    "recurrenceStart" TIMESTAMP(3) NOT NULL,
    "recurrenceEnd" TIMESTAMP(3) NOT NULL,
    "type" TEXT NOT NULL,
    "dayOfTheWeek" INTEGER,
    "month" INTEGER,
    "dayOfMonth" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Scheduler_pkey" PRIMARY KEY ("id")
);
