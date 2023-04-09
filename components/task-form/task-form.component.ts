import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {

  task: Task = { id: 0, description: '', dueDate: '', name: '', completed: false };

  constructor(private taskService: TaskService) { }

  addTask() {
    this.taskService.addTask(this.task);
    this.task = { name: '', completed: false };
  }

}
