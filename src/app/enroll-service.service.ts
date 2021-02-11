import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EnrollServiceService {
  _url:string;
  constructor(private http:HttpClient) { }
  Enroll(user:User):Observable<User>
  {
    this._url="http://localhost:55060/api/Forms";
    
    
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.post<any>(this._url,user,httpOptions);
          
  }
 
}

