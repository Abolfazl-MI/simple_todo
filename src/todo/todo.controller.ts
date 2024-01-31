import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateTodoDto } from './dto/create.todo.dto';
import { TodoService } from './todo.service';
import { UpdateTodoDto } from './dto/update.todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Post('/create')
  createTodo(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.createTodo(createTodoDto);
  }
  @Get('/:id')
  getSingleTodo(@Param() id: string) {
    return this.todoService.findSingleTodo(id);
  }
  @Get('/search/:query')
  searchTodo(@Param() query: string) {
    return this.todoService.searchTodo(query);
  }
  @Post('/:id')
  updateSingleTodo(@Param() id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.updateTodo(id, updateTodoDto);
  }
  @Delete('/:id')
  deleteSingleTodo(@Param() id: string){
    return this.todoService.deleteTodo(id)
  }
}
