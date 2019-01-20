import { Component, OnInit } from '@angular/core';
import { Employee } from '../_interfaces/employee';
import { EmployeeService } from './employee.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: Employee[];

  displayedColumns: string[] = ['FirstName', 'LastName', 'Address', 'Phone'];


  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe(res => {
      this.employees = res;
    });
  }

}
