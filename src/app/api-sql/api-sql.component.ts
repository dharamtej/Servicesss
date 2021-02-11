import { Component, OnInit } from '@angular/core';
import { UsingApiSqlService } from '../using-api-sql.service';
import { ISQl } from '../isql';

@Component({
  selector: 'app-api-sql',
  templateUrl: './api-sql.component.html',
  styleUrls: ['./api-sql.component.css']
})
export class APISqlComponent implements OnInit {
  employess:ISQl[];
  hasError:boolean=true;
  constructor(private _service:UsingApiSqlService) { }

  ngOnInit(): void {
    this.getEmp();
  }
  Clik()
  {
    this.hasError=false;
  }
  getEmp()
  {
    return this._service.getDetailsFromAPi()
              .subscribe(data=> this.employess=data)
  }
}
