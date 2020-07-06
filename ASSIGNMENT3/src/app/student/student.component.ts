import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  name:string;
  age: string;
  department:string;
  gender:string;
  showList: boolean = false;

  students = [
    {
      name: 'Student1',
      department: 'Chemistry',
      age: '10',
      gender: 'm'
    },
    {
      name: 'Student2',
      department: 'Physics',
      age: '11',
      gender: 'm'
    },
    {
      name: 'Student3',
      department: 'Maths',
      age: '12',
      gender: 'f'
    },
    {
      name: 'Student4',
      department: 'English',
      age: '13',
      gender: 'f'
    },
    {
      name: 'Student5',
      department: 'Computer',
      age: '14',
      gender: 'm'
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  listItemClick(event:any , student:any){
    this.name = student.name;
    this.age = student.age;
    this.department = student.department;
  }
}
