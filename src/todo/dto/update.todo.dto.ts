import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { TodoStatus } from 'src/schema/todo.schema';

export class UpdateTodoDto {
  @IsString()
  @IsOptional()
  title?: string;
  @IsString()
  @IsOptional()
  description?: string;
  @IsEnum(TodoStatus)
  @IsOptional()
  status?:TodoStatus
}
