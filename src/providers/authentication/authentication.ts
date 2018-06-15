import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Storage}    from "@ionic/storage";

@Injectable()
export class AuthenticationProvider {

    private baseUrl: string   = "http://app.calltech.test";
    protected token: string;
    protected user;

    constructor(public http: HttpClient,
                private storage: Storage) {
    }

    public getAuthorization() {
        return this.storage.get('Authorization');
    }

    public setAuthorization(token: string){
        let type_access: string = 'Bearer ';
        this.storage.set('Authorization', type_access.concat(token));
    }

    public authenticate(authParams): Observable<any> {
        return this.http.post(this.baseUrl + "/oauth/token", authParams);
    }

    public userAuthenticated(token: string): Observable<any> {
        return this.http.get(this.baseUrl + "/api/user/authenticated", {
            headers: new HttpHeaders().set('Accept', 'application/json').set('Authorization', token),
        })
    }

    public revokeToken(token): Observable<any>{
        return this.http.post(this.baseUrl +  "/api/user/logout", {
            'user_id': this.user.id
        },{
            headers: new HttpHeaders().set('Accept', 'application/json').set('Authorization', token),
        });
    }

}
