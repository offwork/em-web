import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Employee } from '@em-web/api-interfaces';
import { Observable, of as observableOf } from 'rxjs';
import { EmployeesService } from './employees.service';

@Injectable()
export class EmployeesResolverService implements Resolve<Employee> {
  constructor(private employeeService: EmployeesService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    state: RouterStateSnapshot
  ): Employee | Observable<Employee> | Promise<Employee> {
    const { queryParams } = route;
    if (Object.keys(queryParams).length === 0) {
      return observableOf({} as Employee);
    }
    return this.employeeService.getSelectedEmployee(queryParams['id']);
  }
}
