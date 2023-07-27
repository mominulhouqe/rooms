import { Component } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-postes-home',
  templateUrl: './postes-home.component.html',
  styleUrls: ['./postes-home.component.css']
})
export class PostesHomeComponent {

  users:any;

  constructor(private userData:UserDataService){
    userData.users().subscribe((data) =>{
      this.users=data
      
    })
  }
}
