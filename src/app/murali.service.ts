import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Departments } from './departments';

@Injectable({
  providedIn: 'root'
})
export class MuraliService {
  url:string="http://localhost:55060/api/muralis";
  constructor(private http:HttpClient) { }
 Postdetails(dept:Departments)
  {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.post<any>(this.url,dept,httpOptions);
  }
}
