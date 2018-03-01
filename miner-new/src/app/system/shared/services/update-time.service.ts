import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UpdateTimeService {

  updTime: BehaviorSubject<any>;

  constructor() {
    this.updTime = new BehaviorSubject(30000);
  }

  updateTime(time) {
    this.updTime.next(time);
  }

}
