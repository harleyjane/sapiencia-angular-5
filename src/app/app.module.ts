import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    

  ],
  providers: [MakeAthingHappenService, HttpFactoryService,AuthServiceService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
