import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";

@Injectable()
export class UserProvider {

  private baseUrl = "http://127.0.0.1:8000/api/user";

  constructor(public http: HttpClient) {
    console.log('Hello UserProvider Provider');
  }

  public createUser(params): Observable<any>{
      return this.http.post(this.baseUrl +  "/create", params,{
          headers: new HttpHeaders().set('Accept', 'application/json'),
      });
  }

}
