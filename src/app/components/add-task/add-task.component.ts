import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//import { Task } from '../../Task'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  // props
  text: string|undefined;
  day: string|undefined;
  reminder: boolean = false;

  //events
  @Output() onAddTask = new EventEmitter()

  constructor() {}

  ngOnInit(): void {}

  onSubmitTask():void {
    if (!this.text) {
      alert('please, add a task')
      return
    }

    const newTaskObj = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTaskObj)

    this.text = ''
    this.day = ''
    this.reminder = false
  }

}
