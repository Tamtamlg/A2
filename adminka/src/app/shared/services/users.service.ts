import { Response } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user.model';

@Injectable()
export class UsersService {
    constructor (private http: HttpClient) {}

    getUserByEmail(email: string, password: string): Observable<User> {
        return this.http.get(`http://localhost:3000/users?email=${email}&password=${password}`)
            .map((user: User[]) => user[0] ? user[0] : undefined);
            // .map((user: User) => user)
    }
}
