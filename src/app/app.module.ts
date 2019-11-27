import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './weekly-schedule/table/table.component';
import { WeeklyScheduleComponent } from './weekly-schedule/weekly-schedule.component';
import { WeeklyService } from './weekly-schedule/services/weekly.service';
import { DailyScheduleComponent } from './daily-schedule/daily-schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    WeeklyScheduleComponent,
    DailyScheduleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [WeeklyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
