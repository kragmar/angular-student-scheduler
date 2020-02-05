import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../services/student';
import { Lesson } from '../services/lesson';
import { StudentsService } from '../services/students.service';
import { LessonsService } from '../services/lessons.service';
import { SaveDialogComponent } from '../save-dialog/save-dialog.component';

import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[];
  searchStudent: Student;
  newStudent: any = {};

  lessons: Lesson[];
  newLesson: any = {};
  lessonTimes: string[] = ["12:50", "13:40", "14:30", "15:20", "16:10", "17:00", "17:50", "18:40", "19:30"];
  lessonTypes: string[] = ["Tanóra", "Gyakorló"];

  showVarSearch: boolean;
  showVarNew: boolean;
  showVarDelete: boolean;

  showVarLessons: boolean;
  showVarNewLesson: boolean;

  constructor(private studentsService: StudentsService, private lessonsService: LessonsService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getStudents();
  }

  getStudents(): void {
    this.studentsService.getStudents()
                        .subscribe(students => this.students = students);
  }
  
  getLessonsByStudentId(): void {
    this.lessonsService.getLessonsByStudentId(this.searchStudent)
                       .subscribe(lessons => this.lessons = lessons);
  }

  add(): void {
    this.studentsService.createStudent(this.newStudent)
                        .subscribe(() => this.showVarNew = false);
  }

  addMany(): void {
    this.lessonsService.createLessonsByStudentId(this.createLessons())
                       .subscribe(() => console.log("NOICE"));
  }

  save(): void {
    this.studentsService.updateStudent(this.searchStudent)
                        .subscribe(() => this.showVarSearch = false);
  }

  delete(): void {
    this.studentsService.deleteStudent(this.searchStudent)
                        .subscribe(() => this.showVarDelete = false);
  }

  createLessons(): Lesson[] {
    this.newLesson.lessonDate = new Date(this.newLesson.lessonDate);
    let newLessons: Lesson[];
    newLessons.push(this.newLesson);

    for(let i = 0; i < 3; i++) {
      this.newLesson.lessonDate.setDate(this.newLesson.lessonDate.getDate() + 7);
      newLessons.push(this.newLesson);
    }

    return newLessons;
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

  toggleLessonView(): void {
    this.getLessonsByStudentId();
    this.showVarLessons = true;
  }

  toggleLessonSettings(): void {
    this.getLessonsByStudentId();
    this.showVarLessons = true;
  }

  toggleNewLessons(): void {
    this.showVarNewLesson = true;
    this.showVarLessons = false;
  }

}