import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '@em-web/api-interfaces';
import { Observable } from 'rxjs';

@Injectable()
export class EmployeesService {

  constructor(private httpClient: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>('/api/employees');
  }

  getSelectedEmployee(id: string): Observable<Employee> {
    return this.httpClient.get<Employee>(`/api/employees/${id}`);
  }

  updateSelectedEmployee(id: string, employee: Employee): Observable<Employee> {
    return this.httpClient.put<Employee>(`/api/employees/${id}`, employee);
  }

  createNewEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(`/api/employees`, employee);
  }
}
