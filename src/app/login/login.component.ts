import { Component, OnInit } from '@angular/core';
import { MakeAthingHappenService } from '../make-athing-happen.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private makeAthingHappenService:MakeAthingHappenService) { }

  ngOnInit() {
  }

  setToken(){
this.makeAthingHappenService.token =  "jeffrey is A cool guy";
  }
}
