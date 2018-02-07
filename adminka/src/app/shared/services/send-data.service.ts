import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SendDataService {

    constructor(private http: HttpClient) { }

    sendData(data: string): Observable<any> {
        return this.http.post(`http://localhost:3000/`, data);
    }
}
