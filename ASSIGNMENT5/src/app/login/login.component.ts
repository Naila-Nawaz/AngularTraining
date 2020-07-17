import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private activRoute: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: [
        null,
        Validators.compose([
          Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')
        ])
      ],
      password: [null, Validators.required]
    });
 
  }

  submit() {
    console.log(this.form);
    this.router.navigate(["/home"]);
  }
  ngOnInit(): void {}
}
