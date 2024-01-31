import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create.todo.dto';
import { TodoRepository } from './todo.repository';
import { Todo } from 'src/schema/todo.schema';
import { UpdateTodoDto } from './dto/update.todo.dto';

@Injectable()
export class TodoService {
  constructor(private readonly todoRepository: TodoRepository) {}
  // create todo
  async createTodo(createTodoDto: CreateTodoDto): Promise<Todo | undefined> {
    return this.todoRepository.createTodo(createTodoDto);
  }
  // find single todo
  async findSingleTodo(id: string): Promise<Todo | undefined> {
    return this.todoRepository.findTodoById(id);
  }
  // search todo list  of tod
  async searchTodo(query: string): Promise<Todo[] | undefined> {
    return this.todoRepository.searchTodo(query);
  }
  // update todo
  async updateTodo(id: string, updateDto: UpdateTodoDto) {
    return this.todoRepository.updateTodo(id, updateDto);
  }
  // delete toto
  async deleteTodo(id: string) {
    return this.todoRepository.deleteTodo(id);
  }
}
