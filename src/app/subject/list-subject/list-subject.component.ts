
import { Component, OnInit, Input } from '@angular/core';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-list-subject',
  templateUrl: './list-subject.component.html',
  styleUrls: ['./list-subject.component.css']
})
export class ListSubjectComponent implements OnInit {
  @Input('listTittle') listTittle;
  subjectList:Array<any>;
  ListSubject: any[];
  constructor(private subjectService:
    SubjectService) { }

  ngOnInit() {
this.subjectList = []
  }
  addSubjectToList(newSubject){
    this.subjectList.push(newSubject);
  }
}