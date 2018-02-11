import { Response } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user.model';

@Injectable()
export class AuthDataService {
    constructor (private http: HttpClient) {}

    // gatAuthData(email: string, password: string): Observable<any> {
    //     return this.http.get(`http://localhost:3000/authentication?email=${email}&password=${password}`)
    //         .map((response) => response[0] ? response[0] : undefined);
    // }

    gatAuthData(email: string, password: string): Observable<any> {
        return this.http.get('assets/api/auth.json');
    }

}
