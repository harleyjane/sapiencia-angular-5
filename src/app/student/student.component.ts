import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { HttpFactoryService } from '../http-factory.service';
=======
import { HTTPFactoryService } from '../httpfactory.service'
>>>>>>> a5f0b86ba569cd39ee2151d2e0aafe90d6a7060a

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

<<<<<<< HEAD
  constructor(private httpFactoryService:HttpFactoryService ) { }

  ngOnInit() {
  }
  getStudent() {
    this.httpFactoryService.getStudent().subscribe(res=>{
      console.dir(res)
    })

  }


}
=======
  constructor(private httpFactoryService: HTTPFactoryService) { }

  ngOnInit() {
  }

  getStudent() {
    this.httpFactoryService.getStudent().subscribe(res => {
      console.dir(res)
    })
  }
}
>>>>>>> a5f0b86ba569cd39ee2151d2e0aafe90d6a7060a
