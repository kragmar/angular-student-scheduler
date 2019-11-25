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

@NgModule({
  declarations: [
    AppComponent,
    LessonsComponent,
    LessonDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [LessonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
