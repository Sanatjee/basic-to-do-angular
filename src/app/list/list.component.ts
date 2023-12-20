import { Component, Input } from '@angular/core';

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
}
