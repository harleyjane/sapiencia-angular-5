import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  students:any = [];
  teacher:any = [];

  constructor( ) { }

  ngOnInit() {
/*
 this.httpFactoryService.getStudent().subscribe(res=>{
      console.dir(res) ;
      this.students=res
    })
    */
  }  

  }

