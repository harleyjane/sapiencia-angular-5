import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { MyNewServiceService } from './my-new-service.service';
import { DeleteComponent } from './delete/delete.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MyNewComponentComponent,
    DeleteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MyNewServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }