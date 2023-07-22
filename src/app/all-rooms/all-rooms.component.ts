import { Component } from '@angular/core';

@Component({
  selector: 'app-all-rooms',
  templateUrl: './all-rooms.component.html',
  styleUrls: ['./all-rooms.component.css'],
})
export class AllRoomsComponent {
  gifts = [
    {
      id: '1',
      status: 'Recevied',
      name: 'Messages',
      value: '60',
      giftImgUrl:'https://i.ibb.co/xM8dQ4v/my-img4.webp',
      user: {
        userId: '123',
        name: 'Benny Changur',
        photo: 'http://admin.gypsyworld.de:8096/assets/user2.a4192dd6.png',
      },
    },
    {
      id: '2',
      status: 'Recevied',
      name: 'Starangers',
      value: '160',
      giftImgUrl:'https://i.ibb.co/xM8dQ4v/my-img4.webp',
      user: {
        userId: '12345',
        name: 'Nitish Changur',
        photo: 'http://admin.gypsyworld.de:8096/assets/user2.a4192dd6.png',
      },
    },
    {
      id: '3',
      status: 'pending',
      name: 'Messages',
      value: '230',
      giftImgUrl:'https://i.ibb.co/xM8dQ4v/my-img4.webp',
      user: {
        userId: '123345',
        name: 'Benny Due',
        photo: 'http://admin.gypsyworld.de:8096/assets/user2.a4192dd6.png',
      },
    },

  ];
}
