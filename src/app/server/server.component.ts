import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverid=10;
  serverstatus:string;
  

  constructor() { }
  getserver():string
  {
   return this.serverstatus=Math.random()>0.5? "online":"offline";
  }
  getcolor():string
  {
    if(this.serverstatus=='online')
    return 'Yellow'
    else
    return 'cyan'
  }

  ngOnInit(): void {
  }

}
