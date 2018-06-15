import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { MakeAthingHappenService } from '../make-athing-happen.service';
=======
import { MyNewServiceService } from '../my-new-service.service';
>>>>>>> a5f0b86ba569cd39ee2151d2e0aafe90d6a7060a

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

<<<<<<< HEAD
  constructor(private makeAthingHappenService:MakeAthingHappenService ) { }
=======
  constructor(private mynewServiceService:MyNewServiceService ) { }
>>>>>>> a5f0b86ba569cd39ee2151d2e0aafe90d6a7060a

  ngOnInit() {
  }

<<<<<<< HEAD
delete(){
this.makeAthingHappenService.token = undefined;
}

=======
  delete(){
    this.mynewServiceService.token = '';
  }
>>>>>>> a5f0b86ba569cd39ee2151d2e0aafe90d6a7060a
}
