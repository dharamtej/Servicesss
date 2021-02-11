import { Component } from '@angular/core';
import { Departmnt } from './departmnt';
import { Employee } from './_model/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project';
dept=new Departmnt(151,"sravan","kuyrnool",false);
emp=new Employee("sravan",7777,"Kurnool",777777777,"India");
}
