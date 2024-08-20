import { ApiProperty, ApiExtraModels } from '@nestjs/swagger'
import { ScheduleDTO } from './schedule-dto';

@ApiExtraModels(ScheduleDTO)
 export class CreateHabitDto {
  @ApiProperty({example: 'Exercise', description: 'The name of the habit'}) 
  name: string;

  @ApiProperty({required: false, example: 'Daily morning exercise routine', description: 'The description of the habit'})
  description?: string;

  @ApiProperty({example: 'good', description: 'The type of the habit, the options are good or bad'})
  type: string; 

  @ApiProperty()
  schedule_info: ScheduleDTO;
}
