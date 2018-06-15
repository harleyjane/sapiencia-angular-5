import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpFactoryService } from '../http-factory.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TeacherService {

  http: any;
  Http: any;
  teacherlist: any;
  constructor(private httpFactoryService: HttpFactoryService) { }


  getStudent() {
    return this.http.get('http://52.40.253.131:3000/users/students').map((res: Response) => {
      return res.json();

    })
      .catch((error: any) => Observable.throw(error.json(), error || 'server error'));

  }

  getTeacher() {
    return this.http.get('http://52.40.253.131:3000/users/teachers').map((res: Response) => {
      return res.json();

    })
      .catch((error: any) => Observable.throw(error.json(), error || 'server error'));

  }
  listTeacher() {
    return this.Http.get('http://52.40.253.131:3000/auth/getAllTeachers').map((res: Response) => {
      return res.json();

    })
      .catch((error: any) => Observable.throw(error.json(), error || 'server error'));
  }

  createTeacher(teacher) {
    this.httpFactoryService.createTeacher(teacher).subscribe(Response => {
      teacher.id = Response.id
      this.teacherlist.push(teacher);
      console.dir(this.teacherlist);
    })
    .catch((error: any) => Observable.throw(error.json(), error || 'server error'));
}
}
