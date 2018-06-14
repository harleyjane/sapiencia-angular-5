import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacher-info',
  templateUrl: './teacher-info.component.html',
  styleUrls: ['./teacher-info.component.css']
})
export class TeacherInfoComponent implements OnInit {
  teacherlist = [];
    teacher:any = {}

  constructor(private teacherService:TeacherService ) { }

  ngOnInit() {
    this.teacherService.listTeacher().subscribe(res=>{
      this.teacherlist = res;
    })
  }

  getTeacher() {
    this.teacherService.getTeacher().subscribe(res=>{
      console.dir(res)
    })

}

  createTeacher(teacher){
    this.teacherService.createTeacher(teacher).subscribe(Response =>{
      teacher.id = Response.id
      this.teacherlist.push(teacher);
      console.dir( this.teacherlist);
    })
  }

}
