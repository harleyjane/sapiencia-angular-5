import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DisplayComponent } from './display/display.component';
import {DisplayService } from './display.service';
import { DeleteComponent } from './delete/delete.component';
import { StudentComponent } from './student/student.component';
import { HttpModule } from '@angular/http';
import { HttpfactoryService  } from './httpfactory.service';
import { TeacherComponent } from './teacher/teacher.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DisplayComponent,
    DeleteComponent,
    StudentComponent,
    TeacherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DisplayService,HttpfactoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
