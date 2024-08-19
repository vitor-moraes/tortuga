import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { HabitsModule } from './habits/habits.module';

@Module({
  imports: [PrismaModule, HabitsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
