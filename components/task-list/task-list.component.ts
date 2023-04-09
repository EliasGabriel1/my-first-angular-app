import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  completeTask(task: Task) {
    task.completed = true;
    this.taskService.updateTask(task);
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task);
    this.tasks = this.taskService.getTasks();
  }

}
