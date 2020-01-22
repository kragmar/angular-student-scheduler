import { Component, OnInit } from '@angular/core';
import { Lesson } from '../services/lesson';
import { LessonsService } from '../services/lessons.service';
import { Student } from '../services/student';
import { StudentsService } from '../services/students.service';
import { SaveDialogComponent } from '../save-dialog/save-dialog.component';

import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {

  lessons: Lesson[];
  newLesson: any = {};
  delLesson: Lesson;
  lessonTimes: string[] = ["12:50", "13:40", "14:30", "15:20", "16:10", "17:00", "17:50", "18:40", "19:30"];
  lessonTypes: string[] = ["Tanóra", "Gyakorló"];

  students: Student[];

  showVarNew: boolean;
  showVarDelete: boolean;

  constructor(private lessonsService: LessonsService, private studentsService: StudentsService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getLessons();
    this.getStudents();
  }

  getLessons(): void {
    this.lessonsService.getLessons()
                       .subscribe(lessons => this.lessons = lessons);
  }

  getStudents(): void {
    this.studentsService.getStudents()
                        .subscribe(students => this.students = students);
  }

  add(): void {
    this.lessonsService.createLesson(this.newLesson)
                       .subscribe(() => this.showVarNew = false);
  }

  delete(): void {
    this.lessonsService.deleteLesson(this.delLesson)
                       .subscribe(() => this.showVarDelete = false);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SaveDialogComponent, {panelClass: 'save-dialog-box'});
  }

  toggleNew(): void {
    this.showVarNew = true;
    this.showVarDelete = false;
  }

  toggleDelete(): void {
    this.getLessons();
    this.showVarNew = false;
    this.showVarDelete = true;
  }

}