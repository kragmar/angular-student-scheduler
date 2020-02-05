import { Injectable } from '@angular/core';
import { Lesson } from './lesson';
import { Student } from './student';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class LessonsService {

  private lessonsUrl = '/api/lessons';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  // get("/api/lessons")
  getLessons(): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(this.lessonsUrl)
                    .pipe(
                      catchError(this.handleError<Lesson[]>('getLessons', []))
                    );
  }

  // get("/api/lessons/student/:id")
  getLessonsByStudentId(student: Student): Observable<Lesson[]> {
    const url = this.lessonsUrl + '/student/' + student._id;
    return this.http.get<Lesson[]>(url)
                    .pipe(
                      catchError(this.handleError<Lesson[]>('getLessons', []))
                    );
  }

  // post("/api/lessons")
  createLesson(newLesson: Lesson): Observable<Lesson> {
    return this.http.post<Lesson>(this.lessonsUrl, newLesson, this.httpOptions)
                    .pipe(
                      catchError(this.handleError<Lesson>('createLesson'))
                    );
  }

  // post("/api/lessons/student/:id")
  createLessonsByStudentId(newLesson: Lesson[]): Observable<Lesson[]> {
    return this.http.post<Lesson[]>(this.lessonsUrl, newLesson, this.httpOptions)
                    .pipe(
                      catchError(this.handleError<Lesson>('createLesson'))
                    );
  }

  // delete("/api/lessons/:id")
  deleteLesson(delLesson: Lesson): Observable<Lesson> {
    const url = this.lessonsUrl + '/' + delLesson._id;
    return this.http.delete<Lesson>(url, this.httpOptions)
                    .pipe(
                      catchError(this.handleError<Lesson>('deleteLesson'))
                    );
  }

  // put("/api/students/:id")
  updateLesson(putLesson: Lesson): Observable<any> {
    const url = this.lessonsUrl + '/' + putLesson._id;
    return this.http.put(url, putLesson, this.httpOptions)
                    .pipe(
                      catchError(this.handleError<any>('updateLesson'))
                    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}