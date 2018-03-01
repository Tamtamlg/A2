import { Response } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthDataService {
  constructor(private http: HttpClient) { }

  getAuthData(email: string, password: string): Observable<any> {
    return this.http.get('assets/api/auth.json');
  }

  forgotPassword(data: string): Observable<any> {
    return this.http.post('assets/api/', data);
  }

  resetPassword(data: string): Observable<any> {
    return this.http.post('assets/api/', data);
  }
}
