import { Component, OnInit } from '@angular/core';
import { Lesson } from '../lesson';
import { LessonService } from '../lesson.service';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {

  lessons: Lesson[];

  selectedLesson: Lesson;
  onSelect(lesson: Lesson): void {
    this.selectedLesson = lesson;
  }

  getLessons(): void {
    this.lessonService.getLessons()
      .subscribe(lessons => this.lessons = lessons);
  }

  constructor(private lessonService: LessonService) { }

  ngOnInit() {
    this.getLessons();
  }

}