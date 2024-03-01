import { TaskStatus } from '../task.entity';
import { IsIn, IsOptional, IsString } from 'class-validator';

export class CreateTaskDTO {
  @IsString()
  title: string;
  @IsString()
  description: string;
}

export class UpdateTaskDTO {
  @IsString()
  @IsOptional()
  title?: string;
  @IsString()
  @IsOptional()
  description?: string;
  @IsString()
  @IsOptional()
  @IsIn([TaskStatus.DONE, TaskStatus.IN_PROGRESS, TaskStatus.PENDING])
  status?: TaskStatus;
}
