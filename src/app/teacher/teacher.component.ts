import { Component, OnInit } from '@angular/core';
import { HTTPFactoryService } from '../httpfactory.service'
@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
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

