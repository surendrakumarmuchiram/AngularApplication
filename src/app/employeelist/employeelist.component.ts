import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  employees:any[]=[];
  constructor() { 
     this.employees = [
      {
        code: 'emp101', name: 'Tom', gender: 'Male',
        annualSalary: 5500, dateOfBirth: '25/6/1988'
    },
    {
        code: 'emp102', name: 'Alex', gender: 'Male',
        annualSalary: 5700.95, dateOfBirth: '9/6/1982'
    },
    {
        code: 'emp103', name: 'Mike', gender: 'Male',
        annualSalary: 5900, dateOfBirth: '12/8/1979'
    },
    {
        code: 'emp104', name: 'Mary', gender: 'Female',
        annualSalary: 6500.826, dateOfBirth: '14/10/1980'
    }
    ]

  }

  getEmployees():void  {
    this.employees = [
      {
        code: 'emp101', name: 'Tom', gender: 'Male',
        annualSalary: 5500, dateOfBirth: '25/6/1988'
    },
    {
        code: 'emp102', name: 'Alex', gender: 'Male',
        annualSalary: 5700.95, dateOfBirth: '9/6/1982'
    },
    {
        code: 'emp103', name: 'Mike', gender: 'Male',
        annualSalary: 5900, dateOfBirth: '12/8/1979'
    },
    {
        code: 'emp104', name: 'Mary', gender: 'Female',
        annualSalary: 6500.826, dateOfBirth: '14/10/1980'
    },
    {
      code: 'emp105', name: 'Surendra', gender: 'Male',
      annualSalary: 600.826, dateOfBirth: '08/10/1992'
  }
    ]
  }

  trackNyEmployeeCode(index:number,employee:any):string
  {
    return employee.code;
  }


  ngOnInit(): void {
  }

}
