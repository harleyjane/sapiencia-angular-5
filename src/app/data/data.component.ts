import { Component, OnInit } from '@angular/core';
import { HttpFactoryService } from '../http-factory.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  students:any = [];
  teacher:any = [];

  constructor( private httpFactoryService:HttpFactoryService ) { }

  ngOnInit() {

 this.httpFactoryService.getStudent().subscribe(res=>{
      console.dir(res) ;
      this.students=res
    })
    
  }  

  }

