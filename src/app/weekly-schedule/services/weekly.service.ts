import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs/Observable';

import { Lesson } from '../lesson';
import { LESSONS } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class WeeklyService {

  constructor() { }

  getLessons(): Observable<Lesson[]> {
    return of(LESSONS);
  }

}