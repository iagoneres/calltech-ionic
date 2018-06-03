import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Storage}    from "@ionic/storage";

@Injectable()
export class AuthenticationProvider {

    private baseUrl: string   = "http://app.calltech.test";
    protected token: string;
    private headers: HttpHeaders;

    constructor(public http: HttpClient,
                private storage: Storage) {
        this.headers = new HttpHeaders();
        this.headers.append('Accept', 'application/json');
    }

    public getAuthorization() {
        return this.storage.get('Authorization').then(
            token => {
                this.token = token;
                this.headers.append('Authorization', this.token)
            });;
    }

    async getHeaders(){
        return await this.getAuthorization();
    }

    async getAsyncAuthorization(){
        return await this.storage.get('Authorization');
    }

    public setAuthorization(token: string){
        let type_access: string = 'Bearer ';
        this.storage.set('Authorization', type_access.concat(token));
    }

    public authenticate(authParams): Observable<any> {
        return this.http.post(this.baseUrl + "/oauth/token", authParams);
    }

    public userAuthenticated(): Observable<any> {

        this.getHeaders();
        let headers = this.headers;

        console.log(headers.get('Authorization'));
        return this.http.get(this.baseUrl + "/api/user/authenticated", {
            headers: headers
        });
    }

    public revokeToken(): Observable<any>{
        return this.userAuthenticated();
        // let token: string = JSON.stringify(this.getAuthorization());
        // this.http.post(this.baseUrl +  "/api/user/logout", {
        //     headers: new HttpHeaders().set('Authorization', token),
        //     params: new HttpParams().set('user_id', '')
        // });
    }

}
