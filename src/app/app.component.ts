import { Component, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { ListComponent } from './list/list.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormComponent } from './form/form.component';
import { Task } from './shared/Task.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FontAwesomeModule,
    ListComponent,
    FormComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  faPen = faPen;

  tasks: Task[] = [
    new Task('This is first tas', true),
    new Task('This is second task', false),
  ];

  onTaskAdded(task: Task) {
    this.tasks.push(task);
  }

  removeTaskByIndex(index: number) {
    if (index > -1) {
      this.tasks.splice(index, 1);
    }
  }

  updateTaskByIndex(index: number) {
    this.tasks[index].status = !this.tasks[index].status;
  }
}
