import { Injectable, Component } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent {

  teacherlist: any;
  teacherist: any;
  httpFactoryService: any;
  constructor(private http: Http) { }

  ngOnInit() {
    this.httpFactoryService.listTeacher().subscribe(res=>{
      this.teacherlist = res;
    })
  }
}