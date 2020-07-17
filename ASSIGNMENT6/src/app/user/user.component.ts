import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { User } from '../models/Users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
   user: User;

  constructor(private activeRoute: ActivatedRoute) {
    this.activeRoute.paramMap.subscribe((resp: any) => {
      this.user = resp.params;
    });
  }

  ngOnInit(): void {}
}
