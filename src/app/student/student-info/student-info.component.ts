import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {
  studentlist = [];
  student:any = {};
  @Output() newStudentCreated = new EventEmitter();

  constructor(private studentService:StudentService ) { }

  ngOnInit() {
    this.studentService.listStudent().subscribe(res=>{
      this.studentlist = res;
    })
  }

  getStudent() {
    this.studentService.getStudent().subscribe(res=>{
      console.dir(res)
    })

}

  createStudent(){
    this.studentService.createStudent(this.student).subscribe(newStudent =>{
      this.newStudentCreated.emit(newStudent)
      console.log("this is the new student " + newStudent);
    })
  }

}


