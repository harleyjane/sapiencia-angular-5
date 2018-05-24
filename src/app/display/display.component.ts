import { Component, OnInit } from '@angular/core';
import { DisplayService } from '../display.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private displayService:DisplayService) { }

  ngOnInit() {
  }
  getToken(){
    alert(this.displayService.token) ;
  }
}
