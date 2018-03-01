import { Response } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DashboardService {
  constructor(private http: HttpClient) { }

  getTablesData(): Observable<any> {
    // return this.http.get('http://miner-dashboard-sl.altsolution.net/assets/api/tablesData-random.php');
    return this.http.get('assets/api/tablesData.json');
  }

  groupActionRequest(obj): Observable<any> {
    return this.http.post(`http://miner-dashboard-sl.altsolution.net/v1/api.php`, obj);
  }
}