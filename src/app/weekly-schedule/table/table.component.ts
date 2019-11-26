import { Component, OnInit } from '@angular/core';
import { Lesson } from '../lesson';
import { WeeklyService } from '../services/weekly.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  lessons: Lesson[];

  constructor(private weeklyService: WeeklyService) { }

  ngOnInit() {
  }

}