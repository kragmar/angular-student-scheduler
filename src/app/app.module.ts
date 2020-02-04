import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { 
  MatDatepickerModule,
  MatInputModule,
  MatNativeDateModule,
  MatExpansionModule,
  MatSelectModule,
  MatFormFieldModule,
  MatIconModule,
  MatDialogModule,
  MatButtonModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './weekly-schedule/table/table.component';
import { WeeklyScheduleComponent } from './weekly-schedule/weekly-schedule.component';
import { DbService } from './services/db.service';
import { DailyScheduleComponent } from './daily-schedule/daily-schedule.component';
import { DailyAccordionComponent } from './daily-schedule/daily-accordion/daily-accordion.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DailyInfoComponent } from './daily-info/daily-info.component';
import { StudentsComponent } from './students/students.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsService } from './services/students.service';
import { SaveDialogComponent } from './save-dialog/save-dialog.component';
import { LessonsComponent } from './lessons/lessons.component';
import { LessonsService } from './services/lessons.service';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    WeeklyScheduleComponent,
    DailyScheduleComponent,
    DailyAccordionComponent,
    NavbarComponent,
    DailyInfoComponent,
    StudentsComponent,
    DashboardComponent,
    SaveDialogComponent,
    LessonsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents: [
    SaveDialogComponent
  ],
  providers: [DbService, MatDatepickerModule, StudentsService, LessonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
