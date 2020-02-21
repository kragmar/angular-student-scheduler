import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../services/student';
import { Lesson } from '../services/lesson';
import { StudentsService } from '../services/students.service';
import { StudentsMockService } from '../services/students-mock.service';
import { LessonsService } from '../services/lessons.service';
import { LessonsMockService } from '../services/lessons-mock.service';
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

  lessons: any = [];
  newLesson: any = {};
  lessonTimes: string[] = ["12:50", "13:40", "14:30", "15:20", "16:10", "17:00", "17:50", "18:40", "19:30"];
  lessonTypes: string[] = ["Tanóra", "Gyakorló"];
  lessonDays: any = {"1": "Hétfő", "2": "Kedd", "3": "Szerda", "4": "Csütörtök", "5": "Péntek"};

  showVarSearch: boolean;
  showVarNew: boolean;
  showVarDelete: boolean;

  showVarLessons: boolean;
  showVarNewLesson: boolean;

  constructor(private studentsService: StudentsService, private lessonsService: LessonsService, private dialog: MatDialog) { }
  //constructor(private studentsService: StudentsMockService, private lessonsService: LessonsMockService, private dialog: MatDialog) { }

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

  addMany(newLesson: Lesson): void {
    this.lessonsService.createLessonsByStudentId(this.createLessons(newLesson))
                       .subscribe(() => this.showVarNewLesson = false);
  }

  save(): void {
    this.studentsService.updateStudent(this.searchStudent)
                        .subscribe(() => this.showVarSearch = false);
  }

  delete(): void {
    this.studentsService.deleteStudent(this.searchStudent)
                        .subscribe(() => this.showVarDelete = false);
  }

  createLessons(lessonParam: Lesson): Lesson[] {
    let lessonsArr = [];

    for(let i = 0; i < 3; i++) {
      let lesson = {} as Lesson;
      lesson._id = lessonParam._id;
      lesson.lessonDate = lessonParam.lessonDate;
      lesson.lessonStart = lessonParam.lessonStart;
      lesson.lessonType = lessonParam.lessonType;
      lesson.student = this.searchStudent;

      lesson.lessonDate = new Date(lesson.lessonDate);
      lesson.lessonDate.setDate(lesson.lessonDate.getDate() + (i * 7));

      lessonsArr.push(lesson);
    }

    return lessonsArr;
  }

  selectDays(): string[] {
    let days = [];
    let dates = [];

    for(let lesson of this.lessons) {
      let date = new Date(lesson.lessonDate);
      dates.push(date.getDay());
    }
    dates.sort();

    for(let date of dates) {
      if(!days.includes(this.lessonDays[date])) {
        days.push(this.lessonDays[date]);
      }
    }

    return days;
  }

  selectLessons(day: string): Lesson[] {
    let lessons: any = [];

    for(let lesson of this.lessons) {
      let date = new Date(lesson.lessonDate);
      let dayString = this.lessonDays[date.getDay()];
      if(day === dayString) {
        lessons.push(lesson);
      }
    }

    return lessons;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SaveDialogComponent, {panelClass: 'save-dialog-box'});
  }

  toggleSearch(): void {
    this.getStudents();
    this.showVarSearch = true;
    this.showVarNew = false;
    this.showVarDelete = false;
    this.showVarNewLesson = false;
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
    this.showVarNewLesson = false;
  }

  toggleNewLessons(): void {
    this.showVarNewLesson = true;
    this.showVarLessons = false;
  }

}