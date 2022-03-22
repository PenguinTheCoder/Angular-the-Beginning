import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>
  // `,
    templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName= 'patkica';
  serverCreated = false;

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    } , 2000);
  }

  ngOnInit() {
    }


    onCreateServer() {
      this.serverCreated = true;
        this.serverCreationStatus = 'Server is created! Name is '  + this.serverName;
    }

    onUpdateServerName(event:any) {
        this.serverName = event.target.value;
    }
  

}
