import { Injectable } from '@angular/core';
import { Student } from './student';
import { Http, Response } from '@angular/http';

@Injectable()
export class StudentsService {

  private studentsUrl = '/api/students';

  constructor(private http: Http) { }

  // get("/api/students")
  getStudents(): Promise<void | Student[]> {
    return this.http.get(this.studentsUrl)
                    .toPromise()
                    .then(response => response.json() as Student[])
                    .catch(this.handleError);
  }

  // post("/api/students")
  createStudent(newStudent: Student): Promise<void | Student> {
    return this.http.post(this.studentsUrl)
                    .toPromise()
                    .then(response => response.json() as Student)
                    .catch(this.handleError);
  }

  // delete("/api/students/:id")
  deleteStudent(delStudentId: String): Promise<void | String> {
    return this.http.delete(this.studentsUrl + '/' + delStudentId)
                    .toPromise()
                    .then(response => response.json() as String)
                    .catch(this.handleError);
  }

  // put("/api/students/:id")
  updateStudent(putStudent: Student): Promise<void | Student> {
    var putUrl = this.studentsUrl + '/' + putStudent._id;
    return this.http.put(putUrl, putStudent)
                    .toPromise()
                    .then(response => response.json() as Student)
                    .catch(this.handleError);
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }

}