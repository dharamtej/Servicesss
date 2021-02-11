import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISQl } from './isql';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsingApiSqlService {
  _url:string="http://localhost:55060/api/Forms";
  constructor(private http:HttpClient) { }
  getDetailsFromAPi():Observable<ISQl[]>
  {
    return this.http.get<ISQl[]>(this._url);
  }
}
