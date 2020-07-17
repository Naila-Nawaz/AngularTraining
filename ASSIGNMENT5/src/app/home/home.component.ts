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
  constructor(private router: Router) {
    this.users = [
      {
        name: 'Naila',
        age: 1,
        isActive: false
      },
      {
        name: 'Nawaz',
        age: 1,
        isActive: false
      }
    ];
  }
  viewDetails(user: User) {

    this.router.navigate(['/user', user]);
    console.log(user);
  }

  ngOnInit(): void {}
}
