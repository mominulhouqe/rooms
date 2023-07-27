import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-home',
  templateUrl: './report-home.component.html',
  styleUrls: ['./report-home.component.css'],
})
export class ReportHomeComponent {
  allusers = [
    {
      id: '1',

      user: {
        name: 'John Doe',
        image: 'https://i.ibb.co/JRrfBS2/my-img22.jpg',
        Id: '243',
      },
      email: 'johndoe@example.com',
      warningLevel: ['fa fa-flag', 'fa fa-flag', 'fa fa-flag'],
      date: 'July 04, 2023',
    },
    {
      id: '2',
      user: {
        name: 'John Doe',
        image: 'https://i.ibb.co/JRrfBS2/my-img22.jpg',
        Id: '243',
      },
      email: 'janesmith@example.com',
      warningLevel: 'fa fa-flag',
      date: 'July 04, 2023',
    },
    {
      id: '3',
      user: {
        name: 'John Doe',
        image: 'https://i.ibb.co/JRrfBS2/my-img22.jpg',
        Id: '243',
      },
      email: 'michaeljohnson@example.com',
      warningLevel: ['fa fa-flag', 'fa fa-flag'],
      date: 'July 04, 2023',
    },
    {
      id: '4',

      user: {
        name: 'JEmily Brown',
        image: 'https://i.ibb.co/JRrfBS2/my-img22.jpg',
        Id: '243',
      },
      email: 'emilybrown@example.com',
      warningLevel: 'fa fa-flag',
      date: 'July 04, 2023',
    },
    {
      id: '5',
      user: {
        name: 'William Wilson',
        image: 'https://i.ibb.co/JRrfBS2/my-img22.jpg',
        Id: '243',
      },
      email: 'williamwilson@example.com',
      warningLevel: 'fa fa-flag',
      date: 'July 04, 2023',
    },
    {
      id: '6',
      user: {
        name: 'oliviadavise',
        image: 'https://i.ibb.co/JRrfBS2/my-img22.jpg',
        Id: '243',
      },
      email: 'oliviadavis@example.com',
      warningLevel: ['fa fa-flag', 'fa fa-flag'],
      date: 'July 04, 2023',
    },
  ];
  // Helper method to convert single warning level into an array
  getWarningLevelAsArray(warningLevel: string | string[]): string[] {
    return Array.isArray(warningLevel) ? warningLevel : [warningLevel];
  }

 
}
