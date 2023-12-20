import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Task } from '../shared/Task.model';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  @ViewChild('taskInput') taskInput: ElementRef;

  @Output() taskAdded = new EventEmitter<Task>();

  onAddTaskHandler() {
    const taskDescription = this.taskInput.nativeElement.value;
    const newTask = new Task(taskDescription, false);
    this.taskAdded.emit(newTask);
  }
}
