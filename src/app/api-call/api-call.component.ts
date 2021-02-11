import { Component, OnInit } from '@angular/core';
import { FirstService } from '../_Services/first.service';
import { IWeather } from '../iweather';

@Component({
  selector: 'app-api-call',
  templateUrl: './api-call.component.html',
  styleUrls: ['./api-call.component.css']
})
export class ApiCallComponent implements OnInit {
 Weather:IWeather[];
  constructor(public _Service:FirstService) { }

  ngOnInit(): void {
    this.getEmpdetails();
            
  }
  getEmpdetails()
  {
    return this._Service.getDetailsfromApi()
                .subscribe(data => this.Weather =data);
  }

}
