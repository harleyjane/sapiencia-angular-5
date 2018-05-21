import { Component, OnInit } from '@angular/core';
import { AuthServiceService} from '../auth-service.service'


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private authServiceService:AuthServiceService) { }

  ngOnInit() {
  }
  show(){
   var myToken= this.authServiceService.getToken();
   alert(myToken);
  }

}
