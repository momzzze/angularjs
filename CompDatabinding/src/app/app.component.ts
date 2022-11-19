import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{ type: 'server', name: 'Testserver', content: 'Just a test!', newName: 'test' }];
  onServerAdded(serverData: { serverName: string, serverContent: string, newName: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
      newName: serverData.newName
    });
  }

  onBluePrintAdded(bluePrintData: { serverName: string, serverContent: string, newName: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.serverName,
      content: bluePrintData.serverContent,
      newName: bluePrintData.newName
    });
  }

}
