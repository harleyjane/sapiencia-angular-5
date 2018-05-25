import { Component, OnInit } from '@angular/core';
import { HttpFactoryService } from '../http-factory.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  constructor( private httpFactoryService:HttpFactoryService) { }

  ngOnInit() {
  }

  getTeacher() {
    this.httpFactoryService.getTeacher().subscribe(res=>{
      console.dir(res)
    })

}

}
