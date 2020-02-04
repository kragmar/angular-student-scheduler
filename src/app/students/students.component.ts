import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../services/student';
import { StudentsService } from '../services/students.service';
import { SaveDialogComponent } from '../save-dialog/save-dialog.component';

import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[];
  searchLesson: Student;
  newStudent: any = {};

  showVarSearch: boolean;
  showVarNew: boolean;
  showVarDelete: boolean;
  showVarLesson: boolean;

  constructor(private studentsService: StudentsService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getStudents();
  }

  getStudents(): void {
    this.studentsService.getStudents()
                        .subscribe(students => this.students = students);
  }

  add(): void {
    this.studentsService.createStudent(this.newStudent)
                        .subscribe(() => this.showVarNew = false);
  }

  save(): void {
    this.studentsService.updateStudent(this.searchLesson)
                        .subscribe(() => this.showVarSearch = false);
  }

  delete(): void {
    this.studentsService.deleteStudent(this.searchLesson)
                        .subscribe(() => this.showVarDelete = false);
  }
 
  openDialog(): void {
    const dialogRef = this.dialog.open(SaveDialogComponent, {panelClass: 'save-dialog-box'});
  }

  toggleSearch(): void {
    this.getStudents();
    this.showVarSearch = true;
    this.showVarNew = false;
    this.showVarDelete = false;
  }

  toggleNew(): void {
    this.newStudent = {};
    this.showVarNew = true;
    this.showVarSearch = false;
    this.showVarDelete = false;
  }

  toggleDelete(): void {
    this.getStudents();
    this.showVarDelete = true;
    this.showVarNew = false;
    this.showVarSearch = false;
  }

  toggleLessonSettings(): void {
    this.showVarLesson = true;
  }

}