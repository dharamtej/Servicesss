import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enable',
  templateUrl: './enable.component.html',
  styleUrls: ['./enable.component.css']
})
export class EnableComponent implements OnInit {
 state=true;
 message='';
 new()
 {
    this.message="Clicked"
 }
  constructor() { 
    setTimeout(() => {
      this.state=true;
    }, 3000);
  }

  ngOnInit(): void {
  }

}
