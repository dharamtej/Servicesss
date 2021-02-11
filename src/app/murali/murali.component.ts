import { Component, OnInit } from '@angular/core';
import { Departments } from '../departments';
import { MuraliService } from '../murali.service';

@Component({
  selector: 'app-murali',
  templateUrl: './murali.component.html',
  styleUrls: ['./murali.component.css']
})
export class MuraliComponent implements OnInit {

  constructor(private _service:MuraliService) { }
  dept=new Departments("Murali143",'C');
  ngOnInit(): void {
  }
  Submit()
  {
    this._service.Postdetails(this.dept)
                  .subscribe(data=> console.log("sucess",data));            
  }
}
