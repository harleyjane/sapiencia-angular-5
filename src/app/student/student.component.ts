import { Component, OnInit } from '@angular/core';
import { HttpFactoryService } from '../http-factory.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private httpFactoryService:HttpFactoryService ) { }

  ngOnInit() {
  }
  getStudent() {
    this.httpFactoryService.getStudent().subscribe(res=>{
      console.dir(res)
    })

  }


}