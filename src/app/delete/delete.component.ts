import { Component, OnInit } from '@angular/core';
import { MyNewServiceService } from '../my-new-service.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private mynewServiceService:MyNewServiceService ) { }

  ngOnInit() {
  }

  delete(){
    this.mynewServiceService.token = '';
  }
}
