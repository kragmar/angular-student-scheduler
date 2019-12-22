import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Lesson } from './lesson';
import { Student } from './student';
import { LessonPost } from './lesson-post';
import { Teacher } from './teacher';
/* import { LESSONS } from './mock-data'; */

@Injectable({
  providedIn: 'root'
})
export class DbService {

  private lessonUrl = 'http://localhost:8080/lesson';
  private studentUrl = 'http://localhost:8080/student';
  private teacherUrl = 'http://localhost:8080/teacher';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor( private http: HttpClient ) { }

  getLessons(): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(this.lessonUrl);
  }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentUrl);
  }

  getTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.teacherUrl);
  }

  getColumns(): Observable<string[]> {
    return of(["12:50", "13:40", "14:30", "15:20", "16:10", "17:00", "17:50", "18:40", "19:30"]);
  }

  addLesson(lesson: Lesson): Observable<Lesson> {
    return this.http.post<Lesson>(this.lessonUrl, lesson, this.httpOptions);
  }

  updateStudent (student: Student): Observable<any> {
    return this.http.put(this.studentUrl, student, this.httpOptions);
  }

}