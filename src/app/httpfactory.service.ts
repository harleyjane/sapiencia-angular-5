import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpfactoryService {
  token: string
  constructor(private http: Http) { }


  retrievestudent() {
    return this.http.get('http://52.40.253.131:3000/users/students')
      .map((res: Response) => {
        return res.json();
      })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  retrieveteacher() {
    return this.http.get('http://52.40.253.131:3000/users/teachers')
      .map((res: Response) => {
        return res.json();
      })
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
