import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TeacherComponent } from './teacher/teacher.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';



// Route Configuration
export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'teacher' },
    { path: 'teacher', component: TeacherComponent },
    {path: 'login', component: LoginComponent },
    {path: 'student', component: StudentComponent },

    
 
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
