import { Component, OnInit, Input } from '@angular/core';
import { Lesson } from '../services/lesson';

@Component({
  selector: '[app-table-row]',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css']
})
export class TableRowComponent implements OnInit {

  @Input() lessons: Lesson[];
  @Input() columns: string[];

  constructor() { }

  ngOnInit() {
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