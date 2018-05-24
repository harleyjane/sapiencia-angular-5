import { Component, OnInit } from '@angular/core';
import { DisplayService } from '../display.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private displayService:DisplayService){}


  ngOnInit() {
  }

  setToken(){
    this.displayService.token = 'Be happy';
  }
}
