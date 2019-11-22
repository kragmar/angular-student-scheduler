import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'admin $2y$12$f/iLPJblwLUQEOtJEoxo4uaD84rV7iNxXYhL46Ccn9Sz6VZMYh9cq'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  private lessonUrl = 'http://localhost:8080/lesson';

  constructor(
    private http: HttpClient
  ) { }

  getLessons (): Observable<Lesson[]> {
    return of(LESSONS);
  }
}
