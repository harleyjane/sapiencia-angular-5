import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ReturnStatement } from '@angular/compiler';

@Injectable()
export class SubjectService {

  constructor(private http: Http) { }

  listSubject(){
    return this.http.get('http://52.40.253.131:3000/subject/getAllSubjects').map((res: 
    Response) => {
      return res.json();

    })
      .catch((error: any) => Observable.throw(error.json(), error || 'server error'));

  }

  createSubject(subject) {
    return this.http.post('http://52.40.253.131:3000/subject/addSubject',{'subject':subject}).map((res: Response) => {
      return res.json();

    })
      .catch((error: any) => Observable.throw(error.json(), error || 'server error'));

  }
  updateSubject(subject) {
    return this.http.post('http://52.40.253.131:3000/subject/updateSubject',{'subject':subject}).map((res: Response) => {
      return res.json();

    })
      .catch((error: any) => Observable.throw(error.json(), error || 'server error'));

  } 
  
} 
