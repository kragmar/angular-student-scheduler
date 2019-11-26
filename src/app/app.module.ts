import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { LessonsComponent } from './lessons/lessons.component';
import { LessonDetailComponent } from './lesson-detail/lesson-detail.component';
import { LessonService } from './lesson.service';
import { TableComponent } from './weekly-schedule/table/table.component';
import { TableRowComponent } from './weekly-schedule/table-row/table-row.component';
import { TableCellComponent } from './weekly-schedule/table-cell/table-cell.component';
import { WeeklyScheduleComponent } from './weekly-schedule/weekly-schedule.component';
import { WeeklyServiceService } from './weekly-schedule/weekly-service.service';
import { WeeklyService } from './weekly-schedule/services/weekly.service';

@NgModule({
  declarations: [
    AppComponent,
    LessonsComponent,
    LessonDetailComponent,
    TableComponent,
    TableRowComponent,
    TableCellComponent,
    WeeklyScheduleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [LessonService, WeeklyServiceService, WeeklyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
