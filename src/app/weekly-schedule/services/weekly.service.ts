import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Lesson } from './lesson';
import { LESSONS } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class WeeklyService {

  constructor() { }

  getLessons(): Observable<Lesson[]> {
    return of(LESSONS);
  }

  getColumns(): Observable<string[]> {
    return of(["12:50", "13:40", "14:30", "15:20", "16:10", "17:00", "17:50", "18:40", "19:30"]);
  }

}