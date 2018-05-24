import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DoAthingComponent } from './do-athing/do-athing.component';
import { MakeAthingHappenService } from './make-athing-happen.service';
import { DeleteComponent } from './delete/delete.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DoAthingComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MakeAthingHappenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
