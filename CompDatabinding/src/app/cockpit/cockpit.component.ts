import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string, newName: string }>();
  @Output() bluePrintCreated = new EventEmitter<{ serverName: string, serverContent: string, newName: string }>();
  newServerName = '';
  newServerContent = '';
  newName = '';

  constructor() { }

  ngOnInit(): void {

  }
  onAddServer(nameInput:HTMLInputElement) {
    console.log(nameInput.value);

    this.serverCreated.emit({ serverName: nameInput.value, serverContent: this.newServerContent, newName: this.newName });
  }

  onAddBlueprint(serverContent:HTMLInputElement) {
    this.bluePrintCreated.emit({ serverName: serverContent.value, serverContent: this.newServerContent, newName: this.newName });
  }


}


