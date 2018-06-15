import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { AuthServiceService} from '../auth-service.service'
=======
import { MyNewServiceService } from '../my-new-service.service';

>>>>>>> a5f0b86ba569cd39ee2151d2e0aafe90d6a7060a
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
<<<<<<< HEAD
  name:string;
  constructor(private authServiceService:AuthServiceService) { }
=======

  constructor(private mynewServiceService:MyNewServiceService) { }
>>>>>>> a5f0b86ba569cd39ee2151d2e0aafe90d6a7060a

  ngOnInit() {
  }

<<<<<<< HEAD
  setToken() {
    this.authServiceService.setToken('TKN^&sdfg@#$%^');
    alert('Token setted')
=======
  show(){
    alert(this.mynewServiceService.token);
>>>>>>> a5f0b86ba569cd39ee2151d2e0aafe90d6a7060a
  }
}
