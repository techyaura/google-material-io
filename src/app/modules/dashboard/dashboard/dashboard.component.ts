import { Component, OnInit } from '@angular/core';

interface IUser {
  username: string;
  email: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  users: IUser[];

  constructor() { }

  ngOnInit(): void {
    this.users = [
      {
        username: 'techyaura',
        email: 'techyaura@gmail.com'
      }
    ];
  }

}