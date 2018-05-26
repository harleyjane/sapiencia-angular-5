import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { MyNewServiceService } from './my-new-service.service';
import { DeleteComponent } from './delete/delete.component';
import { StudentComponent } from './student/student.component';
import { HttpModule } from '@angular/http';
import { HTTPFactoryService } from './httpfactory.service';
import { TeacherComponent } from './teacher/teacher.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MyNewComponentComponent,
    DeleteComponent,
    StudentComponent,
    TeacherComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
    
  ],
  providers: [MyNewServiceService, HTTPFactoryService ],
  bootstrap: [AppComponent]
})
export class AppModule { }