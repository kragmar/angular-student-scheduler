import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../services/student';
import { DbService } from '../services/db.service';
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[];
  selected: Student;

  update: Student;

  //constructor(private dbService: DbService) { }
  constructor(private studentsService: StudentsService) { }

  ngOnInit() {
    this.getStudents();
  }

  getStudents(): void {
    this.studentsService.getStudents()
      .subscribe(students => this.students = students);
  }

  save(updateStudent: Student): void {
    console.log(updateStudent.name);
    this.studentsService.updateStudent(updateStudent);
  }

}