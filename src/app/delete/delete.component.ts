import { Component, OnInit } from '@angular/core';
import { DisplayService } from '../display.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private displayService:DisplayService) { }

  ngOnInit() {
  }
delete(){
  this.displayService.token = undefined;
}


}
