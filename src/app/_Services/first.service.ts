import { Injectable } from '@angular/core';
import { Employee } from '../_model/employee';
import { HttpClient } from '@angular/common/http';
import { IWeather } from '../iweather';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirstService {
  employees:Employee[];
  public _url:string="http://localhost:58773/weatherforecast";
  constructor(private http:HttpClient){}
  getEmpDetails():Employee[]
  {
    this.employees=[
      {"Empno":155,"EmpName":'sravan','Adress':'knl','Mobile':999999,'location':'ss'},
      {"Empno":155,"EmpName":'sravan','Adress':'knl','Mobile':999999,'location':'ss'},
      {"Empno":155,"EmpName":'sravan','Adress':'knl','Mobile':999999,'location':'ss'}
    ]
    return this.employees
  }
  getDetailsfromApi():Observable<IWeather[]>
  {
    return this.http.get<IWeather[]>(this._url);
  }
}
