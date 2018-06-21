import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";

@Injectable()
export class TicketsProvider {

  private baseUrl: string   = "http://127.0.0.1:8000/api/issue";



  constructor(public http: HttpClient) {

  }

  public createTicket(params, token): Observable<any>{
      return this.http.post(this.baseUrl, params,{
          headers: new HttpHeaders().set('Accept', 'application/json').set('Authorization', token),
      });
  }

  public listTickets(token): Observable<any> {
      return this.http.get(this.baseUrl, {
          headers: new HttpHeaders().set('Accept', 'application/json').set('Authorization', token),
      });
  }

}
