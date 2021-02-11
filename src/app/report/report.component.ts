import { Component, OnInit } from '@angular/core';
import { Employee } from '../_model/employee';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  employees:Employee[];
  constructor() { }

  ngOnInit(): void {
    this.getAllEmployee();
  }
  getAllEmployee()
  {
    this.employees=[
      {"Empno":1001,"EmpName":"sravan","Adress":"HYd","Mobile":15221,"location":"bvss"},
      {"Empno":1001,"EmpName":"sravan","Adress":"HYd","Mobile":15221,"location":"bvss"},
      {"Empno":1001,"EmpName":"sravan","Adress":"HYd","Mobile":15221,"location":"bvss"}
    ]
  }

}
