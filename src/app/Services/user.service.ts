import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Iuser } from '../Models/iuser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  base:string=`${environment.apiUrl}/Users`;
  httpheader:{};
  constructor(private httpclient: HttpClient) {
    this.httpheader={
      options:new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
   }
   addUser(newUser:Iuser):Observable<Iuser>{
    return this.httpclient.post<Iuser>(this.base,newUser,this.httpheader)

  }
}
