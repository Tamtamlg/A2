import { Response } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user.model';

@Injectable()
export class DataTableService {
    constructor (private http: HttpClient) {}

    getTablesData(): Observable<any> {
        return this.http.get('assets/api/tablesData.json');
    }
}
