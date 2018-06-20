import { Component, OnInit, Input } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  @Input('listTittle') listTittle;
  StudentList:Array<any>;
  constructor(private studentService:StudentService) { }

  ngOnInit() {
this.StudentList = []
  }
  addStudenToList(newStudent){
    this.StudentList.push(newStudent);
  }
}
