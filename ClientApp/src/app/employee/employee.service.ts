import { Injectable, Inject } from '@angular/core';
import { Employee } from '../_interfaces/employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient,
    @Inject('BASE_URL') private baseUrl: string) { }

  getEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.baseUrl + 'api/employee');
  }
}
