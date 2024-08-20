import { Injectable } from '@nestjs/common';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class HabitsService {
  constructor(private prisma: PrismaService) {}

  private transformBigInt(obj: any) {
      return JSON.parse(JSON.stringify(obj, (key, value) =>
        typeof value === 'bigint' ? value.toString() : value
      ))
  }

  async create(createHabitDto: CreateHabitDto) {
    const { name, description, type, schedule_info } = createHabitDto;
    const habitData: Prisma.HabitCreateInput = {
      name,
      description,
      type,
      schedule: {
          create: {
            recurrenceStart: schedule_info.recurrenceStart,
            recurrenceEnd: schedule_info.recurrenceEnd,
            type: schedule_info.type,
            dayOfTheWeek: schedule_info.dayOfTheWeek,
            month: schedule_info.month,
            dayOfMonth: schedule_info.dayOfMonth,
          },
        },
    };
  return this.transformBigInt(await this.prisma.habit.create({ data: habitData }));
}
  
  async findAll() {
    const habits = await this.prisma.habit.findMany({
      include: {
        schedule: true,
      },
    });
    return this.transformBigInt(habits);
  }

  async findOne(id: number) {
    const habit = await this.prisma.habit.findUnique({where: {id}, include:{schedule: true,}});
    return this.transformBigInt(habit); 
  }

  update(id: number, updateHabitDto: UpdateHabitDto) {
    return `This action updates a #${id} habit`;
  }

  remove(id: number) {
    return `This action removes a #${id} habit`;
  }
}
