import { Component, OnInit, Input } from '@angular/core';
//import { Student } from '../../services/student';
import { Lesson } from "../../services/lesson";
import { LessonsService } from '../../services/lessons.service';

@Component({
  selector: 'app-daily-accordion',
  templateUrl: './daily-accordion.component.html',
  styleUrls: ['./daily-accordion.component.css']
})
export class DailyAccordionComponent implements OnInit {

  lessons: Lesson[];
  columns: string[] = ["12:50", "13:40", "14:30", "15:20", "16:10", "17:00", "17:50", "18:40", "19:30"];

  today = new Date();

  constructor(private lessonsService: LessonsService) { }

  ngOnInit() {
    this.getLessons();
  }

  getLessons(): void {
    this.lessonsService.getLessons()
      .subscribe(lessons => this.lessons = lessons);
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
