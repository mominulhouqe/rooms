import { Component } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-photo-gallary',
  templateUrl: './photo-gallary.component.html',
  styleUrls: ['./photo-gallary.component.css']
})
export class PhotoGallaryComponent {

photos:any
  constructor( private photoData:UserDataService){

    photoData.photos().subscribe((data) =>{
      console.log(data);
      this.photos=data
    })

  }

}
