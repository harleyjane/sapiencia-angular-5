<<<<<<< HEAD
import { Injectable, Component } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

=======
import { Component, OnInit } from '@angular/core';
import { HTTPFactoryService } from '../httpfactory.service'
>>>>>>> a5f0b86ba569cd39ee2151d2e0aafe90d6a7060a
@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
<<<<<<< HEAD
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
=======
export class TeacherComponent implements OnInit {

  constructor(private httpFactoryService: HTTPFactoryService) { }

  ngOnInit() {
  }
  getTeacher() {
    this.httpFactoryService.getTeacher().subscribe(res => {
      console.dir(res)
    })
  }
}

>>>>>>> a5f0b86ba569cd39ee2151d2e0aafe90d6a7060a
