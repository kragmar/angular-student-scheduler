import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../services/student';
import { DbService } from '../services/db.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[];
  @Input() selected: Student;

  @Input() update: Student;

  constructor(private dbService: DbService) { }

  ngOnInit() {
    this.getStudents();
  }

  getStudents(): void {
    this.dbService.getStudents()
      .subscribe(students => this.students = students);
  }

  save(): void {
    this.dbService.updateStudent(this.selected);
  }

}