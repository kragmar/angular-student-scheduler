import { Component, OnInit, Input } from '@angular/core';
import { DbService } from '../../services/db.service';
import { Lesson } from "../../services/lesson";
import { Student } from 'src/app/services/student';
import { LessonPost } from 'src/app/services/lesson-post';

@Component({
  selector: 'app-daily-accordion',
  templateUrl: './daily-accordion.component.html',
  styleUrls: ['./daily-accordion.component.css']
})
export class DailyAccordionComponent implements OnInit {

  lessons: Lesson[];
  students: Student[];
  columns: string[];

  today = new Date();
  
  @Input() lessonDate: string;
  @Input() lessonStart: string;
  @Input() lessonType: string;
  @Input() studentId: number;

  lessonPost: LessonPost[];

  constructor(private dbService: DbService) { }

  ngOnInit() {
    this.getLessons();
    this.getStudents();
    this.getColumns();
  }

  getLessons(): void {
    this.dbService.getLessons()
      .subscribe(lessons => this.lessons = lessons);
  }

  getStudents(): void {
    this.dbService.getStudents()
      .subscribe(students => this.students = students);
  }

  getColumns(): void {
    this.dbService.getColumns()
      .subscribe(columns => this.columns = columns);
  }

  getTodaysLessons(lesson: Lesson): Lesson[] {
    let lessonDate = new Date(lesson.lessonDate);
    let todayString = this.today.getFullYear() + '-' + (this.today.getMonth()+1) + '-' + this.today.getDate();
    let today = new Date(todayString);

    if(lessonDate.getTime() == today.getTime()) {
      return new Array<Lesson>(lesson);
    }

    return;
  }

  getRows(lesson: Lesson, column: string): Lesson[] {
    if(lesson.lessonStart == column) {
      return new Array<Lesson>(lesson);
    }
    
    return;
  }

}
