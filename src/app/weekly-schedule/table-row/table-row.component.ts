import { Component, OnInit, Input } from '@angular/core';
import { Lesson } from '../services/lesson';

@Component({
  selector: '[app-table-row]',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css']
})
export class TableRowComponent implements OnInit {

  @Input() lesson: Lesson;
  @Input() columns: string[];

  constructor() { }

  ngOnInit() {
  }

}