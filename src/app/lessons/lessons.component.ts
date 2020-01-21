import { Component, OnInit } from '@angular/core';
import { Lesson } from '../services/lesson';
import { LessonsService } from '../services/lessons.service';
import { SaveDialogComponent } from '../save-dialog/save-dialog.component';

import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {

  lessons: Lesson[];

  constructor(private lessonsService: LessonsService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getLessons();
  }

  getLessons(): void {
    this.lessonsService.getLessons()
                       .subscribe(lessons => this.lessons = lessons);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SaveDialogComponent, {panelClass: 'save-dialog-box'});
  }

}