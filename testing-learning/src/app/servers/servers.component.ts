import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-servers',
  // selector:`.app-servers`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  username: string = '';
  serverCreated = false;
  servers = ['Test Server', 'Test Server 2'];
  clickStatus = false;

  incrementingNumber: number = 0;
  incrementingArr: number[] = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000);
  }

  ngOnInit(): void {
  }
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created ' + this.serverName;
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  onClickHandler() {
    this.username = '';
  }
  isClicked() {
    this.clickStatus = !this.clickStatus
  }
  incrementLog() {
    this.incrementingNumber++;
    this.incrementingArr.push(this.incrementingNumber);
  }
}
