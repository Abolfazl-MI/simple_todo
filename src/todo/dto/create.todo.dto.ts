import { IsNotEmpty, IsString } from 'class-validator';
import { TodoStatus } from 'src/schema/todo.schema';

export class CreateTodoDto {
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  @IsNotEmpty()
  description: string;
}
