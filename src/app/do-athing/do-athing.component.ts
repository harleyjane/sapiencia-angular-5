import { Component, OnInit } from '@angular/core';
import { MakeAthingHappenService } from '../make-athing-happen.service';

@Component({
  selector: 'app-do-athing',
  templateUrl: './do-athing.component.html',
  styleUrls: ['./do-athing.component.css']
})
export class DoAthingComponent implements OnInit {

  constructor(private makeAthingHappenService:MakeAthingHappenService ) { } 

  ngOnInit() {
   }

   getToken(){ 
    alert(this.makeAthingHappenService.token);
   }
}
