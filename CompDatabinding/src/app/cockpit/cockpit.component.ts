import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string, newName: string }>();
  @Output() bluePrintCreated = new EventEmitter<{ serverName: string, serverContent: string, newName: string }>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', { static: true }) serverContentInput:ElementRef;
  newName = '';

  constructor() { }

  ngOnInit(): void {

  }
  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({ serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value, newName: this.newName });
  }

  onAddBlueprint(serverContent: HTMLInputElement) {
    this.bluePrintCreated.emit({ serverName: serverContent.value, serverContent: this.serverContentInput.nativeElement.value, newName: this.newName });
  }
}


