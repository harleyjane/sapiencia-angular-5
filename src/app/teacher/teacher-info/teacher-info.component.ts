import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacher-info',
  templateUrl: './teacher-info.component.html',
  styleUrls: ['./teacher-info.component.css']
})
export class TeacherInfoComponent implements OnInit {
  teacherlist = [];
  teacher:any = {};
  @Output() newTeacherCreated = new EventEmitter();

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

  createTeacher(){
    this.teacherService.createTeacher(this.teacher).subscribe(newTeacher =>{
      this.newTeacherCreated.emit(newTeacher)
      console.log("this is the new teacher " + newTeacher);
    })
  }

}
