import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateRessourceService } from '../create-ressource.service';
import { ressource } from '../model/ressource';

@Component({
  selector: 'app-create-ressource',
  templateUrl: './create-ressource.component.html',
  styleUrls: ['./create-ressource.component.scss']
})
export class CreateRessourceComponent implements OnInit {

  res : ressource = new ressource ();
  submitted = false;
  clicked = false;
  constructor(public router : Router ,private userService : CreateRessourceService) {}

  ngOnInit() {
   
  }
  save() { 
    console.log(this.res);
    this.userService.createUser(this.res)
    .subscribe(data =>{ 
      console.log(data);
      this.submitted=true;
      this.res = new ressource();},
       error =>{ console.log(error),this.submitted=false});
    // this.ressource = new ressource();
}
  onSubmit(invalid) {
    this.clicked=true;
    if(!invalid){
      this.save();
    }
    else{
      console.log("not valid");
      this.submitted = false;
    }
      
  }

}
