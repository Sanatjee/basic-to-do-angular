import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../shared/Task.model';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './single.component.html',
  styleUrl: './single.component.css',
})
export class SingleComponent {
  faTrash = faTrash;

  @Input() task: Task;
  @Input() index: number;

  @Output() taskDeleted = new EventEmitter<number>();
  @Output() taskCompleted = new EventEmitter<number>();

  actionHandler(index: number, type: string) {
    if (type === 'delete') {
      this.taskDeleted.emit(index);
    }
    if (type === 'complete') {
      this.taskCompleted.emit(index);
    }
  }
}
