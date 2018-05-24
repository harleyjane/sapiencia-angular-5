import { Component, OnInit } from '@angular/core';
import { MakeAthingHappenService } from '../make-athing-happen.service';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private makeAthingHappenService:MakeAthingHappenService ) { }

  ngOnInit() {
  }
delete(){
this.makeAthingHappenService.token = undefined;
}
}
