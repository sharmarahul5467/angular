import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  isServerCreated = 'there is no server added ';


  constructor() {
setTimeout(() => { this.allowNewServer = true} , 2000)
  }

  ngOnInit() {
  }
  OnCreateServer() {
    return this.isServerCreated =  ' You have created server sucessfully';
  }

}
