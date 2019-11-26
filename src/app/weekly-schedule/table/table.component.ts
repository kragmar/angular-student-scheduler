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

}