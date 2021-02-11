import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-byclick',
  templateUrl: './byclick.component.html',
  styleUrls: ['./byclick.component.css']
})
export class ByclickComponent implements OnInit {
 message="";
 dop="";
 buttonstate:boolean;
  constructor() { }

  ngOnInit(): void {
  }
  ClickEvent(event:Event)
  {
    
  setTimeout(() => {
    this.dop=this.message
  }, 2000);
  }
  Update(event:Event)
  {
    this.message=(event.target as HTMLInputElement).value;
    if(this.message=="")
    {
      this.buttonstate=true;
      this.dop="";
    }
    else
    {
      this.buttonstate=false;
    }
  }
}
