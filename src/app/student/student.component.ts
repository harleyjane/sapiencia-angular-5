import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @ViewChild('studentList') studentListComponent;
  @ViewChild('studentInfo') studentInfoComponet;
  constructor( ) { }

  ngOnInit() {
  }
  sendStudentToChild(newStudent){
    this.studentListComponent.addStudentToList(newStudent);
  }

}