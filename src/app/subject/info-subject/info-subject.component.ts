import { Component, OnInit , Output ,EventEmitter } from '@angular/core';
import { SubjectService } from '../subject.service';
@Component({
  selector: 'app-info-subject',
  templateUrl: './info-subject.component.html',
  styleUrls: ['./info-subject.component.css']
})
export class InfoSubjectComponent implements OnInit {
  subjectlist = [];
  subject:any = {};
  @Output() newSubjectCreated = new EventEmitter();

  constructor(private subjectService:SubjectService ) { }

  ngOnInit() {
    this.subjectService.listSubject().subscribe(res=>{
      this.subjectlist = res;
    })
  }

  getSubject() {
    this.subjectService.listSubject().subscribe(res=>{
      console.dir(res)
    })

}

  createSubject(){
    this.subjectService.createSubject(this.subject).subscribe(newSubject =>{
      this.newSubjectCreated.emit(newSubject)
      console.log("this is the new subject " + newSubject);
    })
  }

}

  