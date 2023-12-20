import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Task } from '../shared/Task.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  error = { hasError: false, message: '' };

  @ViewChild('taskInput') taskInput: ElementRef;

  @Output() taskAdded = new EventEmitter<Task>();

  onAddTaskHandler() {
    const taskDescription = this.taskInput.nativeElement.value;

    // validation
    if (taskDescription.length === 0) {
      this.error.hasError = true;
      this.error.message = 'Description is required';
      return;
    }
    const newTask = new Task(taskDescription, false);
    this.taskAdded.emit(newTask);
  }
}
