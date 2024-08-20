import { ApiProperty, ApiExtraModels } from '@nestjs/swagger'

export class ScheduleDTO {
  @ApiProperty({description: 'The start date of the recurrence schedule.',
    example: '2024-08-01T00:00:00Z'})
  recurrenceStart: Date;
  
  @ApiProperty({ description: 'The end date of the recurrence schedule.',
    example: '2024-12-31T23:59:59Z',})
  recurrenceEnd: Date;

  @ApiProperty({description: 'The type of recurrence, such as "daily", "weekly", "monthly", etc.',
    example: 'weekly',})
  type: string;

  @ApiProperty({required: false, description: 'The day of the week for weekly recurrence. 0 for Sunday, 1 for Monday, etc.',
    example: 1  // Monday
    })
  dayOfTheWeek?: number;

  @ApiProperty({
    description: 'The month for monthly recurrence. 1 for January, 2 for February, etc.',
    example: 5,  // May
    required: false,
  })
  month?: number;

  @ApiProperty({
    description: 'The specific day of the month for monthly recurrence. 1 for the first day of the month, 2 for the second day, etc.',
    example: 15,  // 15th day of the month
    required: false,
  })
  dayOfMonth?: number; 

}