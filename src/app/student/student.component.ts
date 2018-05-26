import { Component, OnInit } from '@angular/core';
import { HTTPFactoryService } from '../httpfactory.service'

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private httpFactoryService: HTTPFactoryService) { }

  ngOnInit() {
  }

  getStudent() {
    this.httpFactoryService.getStudent().subscribe(res => {
      console.dir(res)
    })
  }
}
