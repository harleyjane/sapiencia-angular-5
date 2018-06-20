import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  @ViewChild('teacherList') teacherListComponent;
  @ViewChild('teacherInfo') teacherInfoComponet;
  constructor( ) { }

  ngOnInit() {
    
  }
  sendTeacherToChild(newTeacher){
    this.teacherListComponent.addTeacherToList(newTeacher);
  }

 

}
