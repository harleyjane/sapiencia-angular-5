import { Component, OnInit } from '@angular/core';
import { HttpfactoryService } from '../httpfactory.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

    constructor(private httpfactoryservice: HttpfactoryService) {
  }
  
    retrievestudent(){
    this.httpfactoryservice.retrievestudent().subscribe(res=>{
      console.dir(res)
    })
  }

  ngOnInit() {
  }


}


