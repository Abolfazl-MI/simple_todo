import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo } from 'src/schema/todo.schema';
import { CreateTodoDto } from './dto/create.todo.dto';
import { UpdateTodoDto } from './dto/update.todo.dto';

@Injectable()
export class TodoRepository {
  constructor(@InjectModel(Todo.name) private todoModel: Model<Todo>) {}

  async createTodo(createTodoDto: CreateTodoDto): Promise<Todo | undefined> {
    return this.todoModel.create({
      title: createTodoDto.title,
      description: createTodoDto.description,
    });
  }

  async findTodoById(id: string): Promise<Todo | undefined> {
    return this.todoModel.findById(id);
  }

  async searchTodo(query: string): Promise<Todo[] | undefined> {
    return this.todoModel.aggregate([
      {
        $search: {
          text: {
            query: query,
            path: ['title', 'description'],
          },
        },
      },
    ]);
  }
  async updateTodo(id: string, updateTodoDto: UpdateTodoDto) {
    return this.todoModel.findOneAndUpdate(
      { id },
      {
        $set: updateTodoDto,
      },
      { new: true },
    );
  }
  async deleteTodo(id: string) {
    return this.todoModel.findOneAndDelete({
      _id: id,
    });
  }
}
