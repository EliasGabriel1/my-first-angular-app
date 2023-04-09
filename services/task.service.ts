import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[] = [
    { id: 1, name: 'Task 1', description: 'Description of task 1', dueDate: '', completed: false },
    { id: 2, name: 'Task 2', description: 'Description of task 2', dueDate: '', completed: true },
    { id: 3, name: 'Task 3', description: 'Description of task 3', dueDate: '', completed: false }
  ];  

  getTasks() {
    return this.tasks;
  }

  addTask(task: Task) {
    this.tasks.push(task);
  }

  updateTask(task: Task) {
    const index = this.tasks.indexOf(task);
    this.tasks[index] = task;
  }

  deleteTask(task: Task) {
    const index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
  }

}
