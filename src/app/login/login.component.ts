import { Component, OnInit } from '@angular/core';
import { MyNewServiceService } from '../my-new-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private mynewServiceService:MyNewServiceService) { }

  ngOnInit() {
  }

  show(){
    alert(this.mynewServiceService.token);
  }
}
