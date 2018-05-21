import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


//Here you import services, components and resolvers.
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DisplayComponent } from './display/display.component';
import { AuthServiceService } from './auth-service.service';


@NgModule({
  //Here in declarations  you have to add all the components (the cli does that for you)
  declarations: [
    AppComponent,
    LoginComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  //Here in providers you have to add all the srevices
  providers: [AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
