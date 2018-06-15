import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  routing } from './app.router';

//Here you import services, components and resolvers.

import { DisplayComponent } from './display/display.component';
import { AuthServiceService } from './auth-service.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DoAthingComponent } from './do-athing/do-athing.component';
import { MakeAthingHappenService } from './make-athing-happen.service';
import { DeleteComponent } from './delete/delete.component';
import { StudentComponent } from './student/student.component';
import { HttpModule } from '@angular/http';
import { HttpFactoryService } from './http-factory.service';
import { TeacherComponent } from './teacher/teacher.component';
import { DataComponent } from './data/data.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeaderBarComponent } from './header-bar/header-bar.component'
import { TeacherService } from './teacher/teacher.service';
import { SubjectComponent } from './subject/subject.component';
import { TeacherListComponent } from './teacher/teacher-list/teacher-list.component';
import { TeacherInfoComponent } from './teacher/teacher-info/teacher-info.component';
import { SubjectListComponent } from './subject/subject-list/subject-list.component';
import { SubjectInfoComponent } from './subject/subject-info/subject-info.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentInfoComponent } from './student/student-info/student-info.component';
@NgModule({
  //Here in declarations  you have to add all the components (the cli does that for you)
  declarations: [
    AppComponent,
    LoginComponent,
    DoAthingComponent,
    DeleteComponent,
    StudentComponent,
    TeacherComponent,
    DataComponent,
    DisplayComponent,
    HomeComponent,
    NavBarComponent,
    HeaderBarComponent,
    SubjectComponent,
    TeacherListComponent,
    TeacherInfoComponent,
    SubjectListComponent,
    SubjectInfoComponent,
    StudentListComponent,
    StudentInfoComponent,
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    HttpModule

    

  ],
  providers: [MakeAthingHappenService, HttpFactoryService,AuthServiceService, TeacherService],
  bootstrap: [AppComponent],
  
})
export class AppModule { TeacherComponent }
