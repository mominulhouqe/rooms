import { Component } from '@angular/core';

@Component({
  selector: 'app-right-nav-allrooms',
  templateUrl: './right-nav-allrooms.component.html',
  styleUrls: ['./right-nav-allrooms.component.css']
})
export class RightNavAllroomsComponent {

  reports=[
    {
      userId: '123',
      name: 'Benny Changur',
      time: '4',
      description:'This video is danger.Please remove this.',
      photo: 'http://admin.gypsyworld.de:8096/assets/user2.a4192dd6.png',
    },
    {
      userId: '54123',
      name: 'Jon Due',
      time: '4',
      description:'This video is danger.Please remove this.It is violeted videos',
      photo: 'http://admin.gypsyworld.de:8096/assets/user2.a4192dd6.png',
    },
  ]
  liveRooms=[
    {
      name:'Music fest 2023',
      reports:'34',
      views:'564',
      photo:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
    },
    {
      name:'Tu meri.. ',
      reports:'34',
      views:'564',
      photo:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
    },
    {
      name:'Rooks',
      reports:'74',
      views:'56564',
      photo:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
    },
  ]


}
