import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../services/student';
import { DbService } from '../services/db.service';
import { StudentsService } from '../services/students.service';
import { SaveDialogComponent } from './save-dialog/save-dialog.component';

import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[];
  selected: any = {};
  newStudent: any = {};

  showVarSearch: boolean;
  showVarNew: boolean;
  showVarDelete: boolean;

  //constructor(private dbService: DbService) { }
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
                        .subscribe(() => this.showVarNew = false,
                                  () => this.newStudent = {});
  }

  save(): void {
    this.studentsService.updateStudent(this.selected)
                        .subscribe(() => this.showVarSearch = false,
                                  () => this.selected = {});
  }

  delete(): void {
    this.studentsService.deleteStudent(this.selected)
                        .subscribe(() => this.showVarDelete = false);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SaveDialogComponent, {panelClass: 'save-dialog-box'})
  }

  toggleSearch(): void {
    this.getStudents();
    this.showVarSearch = true;
    this.showVarNew = false;
  }

  toggleNew(): void {
    this.showVarNew = true;
    this.showVarSearch = false;
  }

  toggleDelete(): void {
    this.showVarDelete = true;
    this.showVarNew = false;
    this.showVarSearch = false;
  }

}