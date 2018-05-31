import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpFactoryService {

  constructor(private http: Http) { }


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

}

