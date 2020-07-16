import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Student } from '../models/Student';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  form: FormGroup;
  students: Student[];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: [null, Validators.required],
      age: [
        null,
        Validators.compose([Validators.required, Validators.min(10)])
      ],
      isActive: []
    });

    this.students = [];
  }

  ngOnInit(): void {}

  submit() {
    console.log(this.form);

    this.students.push(this.form.value);
    console.table(this.students);
  }
}
