import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  @ViewChild('subjectList') subjectListComponent;
  @ViewChild('subjectInfo') subjectInfoComponet;
  constructor( ) { }

  ngOnInit() {
    
  }
  sendSubjectToChild(newSubject){
    this.subjectListComponent.addSubjectToList(newSubject);
  }

 

}

