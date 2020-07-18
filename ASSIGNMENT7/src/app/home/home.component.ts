import { Component, OnInit } from '@angular/core';
import { User } from '../models/Users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: User[];
  ChildUsers: User[];
  constructor(private router: Router) {
    this.users = [
      {
        id: 1,
        name: 'Naila',
        age: 1,
        isActive: false
      },
      {
        id: 2,
        name: 'Nawaz',
        age: 1,
        isActive: true
      },
      {
        id: 3,
        name: 'Faiza',
        age: 1,
        isActive: false
      },
      { id: 4, name: 'Samina', age: 1, isActive: true },
      {
        id: 5,
        name: 'Urooj',
        age: 1,
        isActive: false
      }
    ];

    this.ChildUsers = [];
    for (var user of this.users){
      if (user.isActive){
        this.ChildUsers.push(user);
      }
    }
  }

  viewDetails(user: User) {
    this.router.navigate(['/user', user]);
    console.log(user);
  }

  checkBoxClick(id: number, event: any) {
    console.log('check box');
    this.users[id - 1].isActive = event.target.checked;
    console.log(event.target.checked);
    this.ChildUsers = [];
    for (var user of this.users) {
      if (user.isActive){
        this.ChildUsers.push(user);
      }
    }
  }
  ngOnInit(): void {}
}
