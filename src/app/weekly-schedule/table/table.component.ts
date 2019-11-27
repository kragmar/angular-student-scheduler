import { Component, OnInit } from '@angular/core';
import { Lesson } from '../services/lesson';
import { WeeklyService } from '../services/weekly.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  lessons: Lesson[];
  columns: string[];

  constructor(private weeklyService: WeeklyService) { }

  ngOnInit() {
    this.getLessons();
    this.getColumns();
  }

  getLessons(): void {
    this.weeklyService.getLessons()
      .subscribe(lessons => this.lessons = lessons);
  }

  getColumns(): void {
    this.weeklyService.getColumns()
      .subscribe(columns => this.columns = columns);
  }

  setCol(lesson: Lesson): string {
    switch(lesson.id) {
      case 1:
        return "table__body__row__cell--col1";
      case 2:
        return "table__body__row__cell--col2";
      case 3:
        return "table__body__row__cell--col3";
      case 4:
        return "table__body__row__cell--col4";
      case 5:
        return "table__body__row__cell--col5";
      case 6:
        return "table__body__row__cell--col6";
      case 7:
        return "table__body__row__cell--col7";
      case 8:
        return "table__body__row__cell--col8";
      case 9:
        return "table__body__row__cell--col9";
      default:
        return "";
    }
  }

  setRow(lesson: Lesson): string {
    switch(lesson.lessonStart) {
      case '1':
        return "table__body__row__cell--row1";
      case '2':
        return "table__body__row__cell--row2";
      case '3':
        return "table__body__row__cell--row3";
      case '4':
        return "table__body__row__cell--row4";
      case '5':
        return "table__body__row__cell--row5";
      default:
        return "";
    }
  }

}