import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../services/http.service';
import { Login } from '../models/Login';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  login: Login;

  showLogin: boolean;
  showRegisteration: boolean;

  constructor(
    private fb: FormBuilder,
    private activRoute: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {
    this.showLogin = true;
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
    //email: eve.holt@reqres.in
    //password:cityslicka
    this.login = new Login();
    this.login.email = this.form.controls.email.value;
    this.login.password = this.form.controls.password.value;

    const body = { email: this.login.email, password: this.login.password };
    this.http.post<string>('https://reqres.in/api/login', body).subscribe(
      resp => {
        this.router.navigate(['/home']);
      },
      error => {
        alert('wrons user name or password');
      }
    );
  }

  switchToRegister() {
    // console.log('switch');
    this.showLogin = false;
    this.showRegisteration = true;
  }

  switchToLogin() {
    this.showRegisteration = false;
    this.showLogin = true;
  }

  register() {
    //email: eve.holt@reqres.in
    //password:pistol
    this.login = new Login();
    this.login.email = this.form.controls.email.value;
    this.login.password = this.form.controls.password.value;

    const body = { email: this.login.email, password: this.login.password };
    this.http.post<string>('https://reqres.in/api/register', body).subscribe(
      resp => {
        alert('registeration successful. Now you can login');
        this.switchToLogin();
      },
      error => {
        alert('wrong user name or password');
      }
    );
  }
  ngOnInit(): void {}
}
