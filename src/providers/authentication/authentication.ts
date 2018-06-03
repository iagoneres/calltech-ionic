import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthenticationProvider {

    private urlAuth   = "http://app.calltech.test/oauth/token";

    constructor(public http: HttpClient) {
        console.log('Hello AuthenticationProvider Provider');
    }

    public authenticate(authParams): Observable<any> {
        return this.http.post(this.urlAuth, authParams);
    }

}
