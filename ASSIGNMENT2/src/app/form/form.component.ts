import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  emailPlaceHolder:string;
  passwordPlaceHolder:string;
  email:string;
  password:string;
  isChecked:boolean;

  constructor() {
    this.emailPlaceHolder = "Please enter email";
    this.passwordPlaceHolder = "Please enter password";
    this.email = "test.naila@gmail.com";
  }

  ngOnInit(): void {
  }

  submitForm(){
    console.log (`Email = ${this.email} & Password = ${this.password} & checkbox is ${this.isChecked ? "checked" : "not checked"}`);
  }
}
