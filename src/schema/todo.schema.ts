import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum TodoStatus {
  completed = 'completed',
  pending = 'pending',
  canceled = 'canceled',
}

@Schema()
export class Todo {
  @Prop({ required: true })
  title: string;
  @Prop({ required: true })
  description: string;
  @Prop({ type: String, enum: TodoStatus, default: TodoStatus.pending })
  status: TodoStatus;
}

export const todoSchema = SchemaFactory.createForClass(Todo);
