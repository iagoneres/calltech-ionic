import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";

@Injectable()
export class UserProvider {

  private urlUser = "http://app.calltech.test/api/user";

  constructor(public http: HttpClient) {
    console.log('Hello UserProvider Provider');
  }

  public findAll():Observable<any> {
    return this.http.get(this.urlUser);
  }

}
