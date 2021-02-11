import { Component, OnInit } from '@angular/core';
import { Employee } from '../_model/employee';

@Component({
  selector: 'app-employee1',
  templateUrl: './employee1.component.html',
  styleUrls: ['./employee1.component.css']
})
export class Employee1Component implements OnInit {
  public Departments=[
    {"roll":252,'name':'spsk','adress':'knl'},
    {"roll":252,'name':'spsk','adress':'knl'},
    {"roll":252,'name':'spsk','adress':'knl'},
    {"roll":252,'name':'spsk','adress':'knl'}
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
