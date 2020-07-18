import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/Users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @Input() users: Array<User> = [];

  constructor() {
    // this.users =
  }

  ngOnInit(): void {
  }

}
