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

  today = new Date();
  dayIterator = this.today;
  currentMonth = this.today.getMonth();
  currentYear = this.today.getFullYear();
  days = ['Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek', 'Szombat', 'Vasárnap'];
  months = ['Jan', 'Feb', 'Már', 'Ápr', 'Máj', 'Jún', 'Júl', 'Aug', 'Szept', 'Okt', 'Nov', 'Dec'];

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

  calcDays(index: number): Date {
    let diff = (this.dayIterator.getDay() - 1) - index;
    this.dayIterator.setDate(this.dayIterator.getDate() - diff);
    return this.dayIterator;
  }

  getDays(): string[] {
    let days = new Array<string>();
    for(let i = 0; i < 5; i++) {
      let day = this.months[this.calcDays(i).getMonth()] + ' ' + this.calcDays(i).getDate() + ' ' + this.days[i];
      days.push(day);
    }
    return days;
  }

  getDates(): Date[] {
    let dates = new Array<Date>();
    for(let i = 0; i < 5; i++) {
      let dateString = this.calcDays(i).getFullYear() + '-' + (this.calcDays(i).getMonth()+1) + '-' + this.calcDays(i).getDate();
      let date = new Date(dateString);
      dates.push(date);
      console.log("getDates() output: " + date);
    }
    return dates;
  }

  setActiveDay(row: Date): string {
    let dateString = this.today.getFullYear() + '-' + (this.today.getMonth()+1) + '-' + this.today.getDate();
    let date = new Date(dateString);
    if(row === date) {
      return " table__body__row--today";
    }
    return "";
  }

  setCol(lesson: Lesson): string {
    switch(lesson.id) {
      case 1:
        return " table__body__row__cell--col1";
      case 2:
        return " table__body__row__cell--col2";
      case 3:
        return " table__body__row__cell--col3";
      case 4:
        return " table__body__row__cell--col4";
      case 5:
        return " table__body__row__cell--col5";
      case 6:
        return " table__body__row__cell--col6";
      case 7:
        return " table__body__row__cell--col7";
      case 8:
        return " table__body__row__cell--col8";
      case 9:
        return " table__body__row__cell--col9";
      default:
        return "";
    }
  }

  setRow(lesson: Lesson, date: Date): Lesson[] {
    let lessonDate = new Date(lesson.lessonDate);
    if(lessonDate.getTime() == date.getTime()) {

      return new Array<Lesson>(lesson);
    }
    return ;
  }

}