import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface ICustomEvent {
  test: number;
}


@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {
  @Input() user!: {
    firstName: string,
    lastName: string
  }
  @Input() showLastName!: boolean;
  @Input() staticString!: string;
  @Output() customEvent = new EventEmitter<ICustomEvent>();

  constructor() { }

  selectClickHandler() {
    this.customEvent.emit({ test: 123 })
  }
}
