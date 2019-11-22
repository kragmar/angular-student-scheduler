import { Component, OnInit } from '@angular/core';
import { Lesson } from '../lesson';
import { LESSONS } from '../mock-lessons';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {

  lessons = LESSONS;

  selectedLesson: Lesson;
  onSelect(lesson: Lesson): void {
    this.selectedLesson = lesson;
  }

  constructor() { }

  ngOnInit() {
  }

}