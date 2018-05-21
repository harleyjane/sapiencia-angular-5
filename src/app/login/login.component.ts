import { Component, OnInit } from '@angular/core';
import { AuthServiceService} from '../auth-service.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name:string;
  constructor(private authServiceService:AuthServiceService) { }

  ngOnInit() {
  }

  setToken() {
    this.authServiceService.setToken('TKN^&sdfg@#$%^');
    alert('Token setted')
  }
}
