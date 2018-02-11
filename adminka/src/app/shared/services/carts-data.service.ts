import { Response } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChartsDataService {
    constructor (private http: HttpClient) {}


    getChartData(): Observable<any> {
        return this.http.get('assets/api/chartsData.json');
    }

}
