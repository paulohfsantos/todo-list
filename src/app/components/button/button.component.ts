import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  //passing props to button component
  @Input() text: string|undefined;
  @Input() color: string|undefined
  @Output() btnClick = new EventEmitter()

  constructor() {}

  ngOnInit(): void {}

  // on click method to fire a custom event
  onClick(): void {
    this.btnClick.emit()
  }

}
