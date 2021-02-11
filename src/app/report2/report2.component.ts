import { Component, OnInit } from '@angular/core';
import { Employee } from '../_model/employee';
import { FirstService } from '../_Services/first.service';

@Component({
  selector: 'app-report2',
  templateUrl: './report2.component.html',
  styleUrls: ['./report2.component.css']
})
export class Report2Component implements OnInit {
 employeess:Employee[];
  constructor(public Main:FirstService) { }

  ngOnInit(): void {
    this.getemp();
  }
  getemp(){
    this.employeess=this.Main.getEmpDetails();
  }
}
