import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ReturnStatement } from '@angular/compiler';


@Injectable()
export class StudentService {

  constructor(private http: Http){}
  
  getStudent() {
    return this.http.get('http://52.40.253.131:3000/student').map((res: Response) => {
      return res.json();

    })
      .catch((error: any) => Observable.throw(error.json(), error || 'server error'));

  }
  listStudent() {
    return this.http.get('http://52.40.253.131:3000/auth/getAllStudents').map((res: Response) => {
      return res.json();

    })
      .catch((error: any) => Observable.throw(error.json(), error || 'server error'));

}
createStudent(student) {
  return this.http.post('http://52.40.253.131:3000/auth/registerStudent',{user:student,password:student.passsword}).map((res: Response) => {
    return res.json();

  })
    .catch((error: any) => Observable.throw(error.json(), error || 'server error'));

}
} 


