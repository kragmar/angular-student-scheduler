import { Injectable } from '@angular/core';
import { Student } from './student';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class StudentsService {

  private studentsUrl = '/api/students';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  // get("/api/students")
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentsUrl)
                    .pipe(
                      catchError(this.handleError<Student[]>('getStudents', []))
                    );
  }

  // post("/api/students")
  createStudent(newStudent: Student): Observable<Student> {
    return this.http.post<Student>(this.studentsUrl, newStudent, this.httpOptions)
                    .pipe(
                      catchError(this.handleError<Student>('createStudent'))
                    );
  }

  // delete("/api/students/:id")
  deleteStudent(delStudentId: String): Observable<Student> {
    const url = this.studentsUrl + '/' + delStudentId;
    return this.http.delete<Student>(url, this.httpOptions)
                    .pipe(
                      catchError(this.handleError<Student>('deleteStudent'))
                    );
  }

  // put("/api/students/:id")
  updateStudent(putStudent: Student): Observable<Student> {
    return this.http.put(this.studentsUrl, putStudent, this.httpOptions)
                    .pipe(
                      catchError(this.handleError<any>('updateStudent'))
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