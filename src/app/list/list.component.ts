import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Task } from '../shared/Task.model';
import { SingleComponent } from '../single/single.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [SingleComponent, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input() tasks: Task[];

  @Output() changeTasksOnDelete = new EventEmitter<number>();
  @Output() updatedTasksOnDelete = new EventEmitter<number>();

  taskDeleteHandler(taskIndex: number) {
    this.changeTasksOnDelete.emit(taskIndex);
  }

  taskCompleteHandler(taskIndex: number) {
    this.updatedTasksOnDelete.emit(taskIndex);
  }
}
