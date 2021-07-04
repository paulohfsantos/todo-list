import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../../Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task|undefined
  @Output() onRemoveTask: EventEmitter<Task> = new EventEmitter()
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter()
  faTimes = faTimes

  constructor() {}

  ngOnInit(): void {
    console.log(this.task?.text);
  }

  closeTask(task: any) {
    this.onRemoveTask.emit(task)
  }

  onToggle(task: any) {
    this.onToggleReminder.emit(task)
  }

}
