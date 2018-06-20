import { Component, OnInit, Input } from '@angular/core';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-list-teacher',
  templateUrl: './list-teacher.component.html',
  styleUrls: ['./list-teacher.component.css']
})
export class ListTeacherComponent implements OnInit {
  @Input('listTittle') listTitle;
  teacherList:Array<any>;
  constructor(private teacherService:TeacherService) { }

  ngOnInit() {
    this.teacherService.listTeacher().subscribe(teachersResponse=>{
      this.teacherList = teachersResponse;
    })
  }
  addTeacherToList(newTeacher){
    this.teacherList.push(newTeacher);
  }
}
