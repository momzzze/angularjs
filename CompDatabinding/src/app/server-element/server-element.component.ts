import { DoCheck } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { Component, Input, OnInit, ViewEncapsulation, OnChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ServerElementComponent implements OnInit, OnChanges,DoCheck {
  @Input('srvElement') element: { type: string, name: string, content: string, newName: string };
  @Input() name: string;
  constructor() {
    console.log('constructor called!');

  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('constructor called! ngOnChanges');
    console.log(changes);

  }
  ngOnInit(): void {

    console.log('constructor called!ngOnInit');
  }
  ngDoCheck() {
    console.log('Do check called!');

  }
}
