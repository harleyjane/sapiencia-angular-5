import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DoAthingComponent,
    DeleteComponent,
    StudentComponent,
    TeacherComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    

  ],
  providers: [MakeAthingHappenService, HttpFactoryService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
