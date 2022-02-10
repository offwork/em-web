import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '@em-web/api-interfaces';
import { Observable } from 'rxjs';
import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'em-web-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  employees$!: Observable<Employee[]>

  constructor(private employeeService: EmployeesService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.employees$ = this.employeeService.getAllEmployees();
  }

  clickOnEdit(event: Employee) {
    if (event) {
      const { _id } = event;
      this._router.navigate(['../form'], { relativeTo: this._route, queryParams: { id: _id } });
    }
  }
}
