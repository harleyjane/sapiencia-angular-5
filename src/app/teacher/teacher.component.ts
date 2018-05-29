import { Component, OnInit } from '@angular/core';
import { HttpfactoryService } from '../httpfactory.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  constructor(private httpfactoryservice: HttpfactoryService) { 

  }
  retrieveteacher(){
  this.httpfactoryservice.retrieveteacher().subscribe(res=>{
    console.dir(res)
  })
}
  ngOnInit() {
  }

}

