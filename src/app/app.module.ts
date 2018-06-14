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
import { TeacherService } from './teacher/teacher.service';
import { TeacherComponent } from './teacher/teacher.component';
import { DataComponent } from './data/data.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { TeacherInfoComponent } from './teacher/teacher-info/teacher-info.component';
import { ListTeacherComponent } from './teacher/list-teacher/list-teacher.component';
import { SubjectComponent } from './subject/subject.component'
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
    TeacherInfoComponent,
    ListTeacherComponent,
    SubjectComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    HttpModule,
    

  ],
  providers: [MakeAthingHappenService, TeacherService,AuthServiceService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
