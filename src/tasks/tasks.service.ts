import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { v4 } from 'uuid';
import { UpdateTaskDTO } from './dto/task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: '1',
      title: 'First task',
      description: 'some task',
      status: TaskStatus.PENDING,
    },
  ];

  getAllTasks() {
    return this.tasks;
  }

  CreateTask(title: string, description: string) {
    const task = {
      id: v4(),
      title,
      description,
      status: TaskStatus.PENDING,
    };
    this.tasks.push(task);

    return task;
  }
  DeleteTask(id: string): { msg: string } {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    return { msg: 'task deleted' };
  }

  getTaskById(id: string) {
    return this.tasks.find((task) => task.id === id);
  }

  UpdateTask(id: string, updatedFields: UpdateTaskDTO): Task {
    const taskToUpdate = this.getTaskById(id);
    const taskUpdated = Object.assign(taskToUpdate, updatedFields);
    this.tasks.map((task) => (task.id === id ? taskUpdated : task));
    return taskUpdated;
  }
}
