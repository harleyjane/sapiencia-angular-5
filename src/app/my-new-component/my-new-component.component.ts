import { Component, OnInit } from '@angular/core';
import { MyNewServiceService } from '../my-new-service.service'

@Component({
  selector: 'app-my-new-component',
  templateUrl: './my-new-component.component.html',
  styleUrls: ['./my-new-component.component.css']
})
export class MyNewComponentComponent implements OnInit {

  constructor( private mynewServiceService:MyNewServiceService ) { }

  ngOnInit() {
  }

set() {
  this.mynewServiceService.token='Just gonna send it';
}
}
