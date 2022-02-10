import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '@em-web/api-interfaces';
import { Observable, Subject, takeUntil } from 'rxjs';
import { EmployeesService } from '../services/employees.service';
import { OfficesService } from '../services/offices.service';
import { TagsService } from '../services/tags.service';

@Component({
  selector: 'em-web-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnDestroy, OnInit {
  offices$!: Observable<string[]>;
  tags$!: Observable<string[]>;
  photo!: string;
  employee!: Employee;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  employeeFormGroup: FormGroup = this._fb.group({
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    tags: [undefined, Validators.required],
    office: ['', Validators.required],
    phone: ['', Validators.required],
    birth_date: ['', Validators.required],
  });

  _endSubscription$ = new Subject<boolean>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private _fb: FormBuilder,
    private employeeService: EmployeesService,
    private officesService: OfficesService,
    private tagsService: TagsService
  ) {
    this.offices$ = this.officesService.getAllOffices();
    this.tags$ = this.tagsService.getAllTags();
  }

  onSubmit() {
    if (this.employeeFormGroup.status === 'VALID') {      
      if (Object.prototype.hasOwnProperty.call(this.employee, '_id')) {
        const id = String(this.employee['_id']);
        const value = { ...this.employee, ...this.employeeFormGroup.value };
        delete value['_id'];

        this.employeeService
          .updateSelectedEmployee(id, value)
          .pipe(takeUntil(this._endSubscription$))
          .subscribe(console.log);
      } else {
        const value = {
          ...{
            photo: 'http://placeimg.com/640/480/people',
            thumb: 'http://placeimg.com/160/120/people'
          }, 
          ...this.employeeFormGroup.value
        };
        this.employeeService
          .createNewEmployee(value)
          .pipe(takeUntil(this._endSubscription$))
          .subscribe(console.log);
      }
    }
  }

  ngOnInit() {
    this.activatedRoute.data
      .pipe(takeUntil(this._endSubscription$))
      .subscribe((data) => {
        const { employee } = data;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.employee = employee;
        this.photo = employee['photo'];
        Object.keys(this.employeeFormGroup.controls).forEach((prop) => {
          if (Object.prototype.hasOwnProperty.call(employee, prop)) {
            this.employeeFormGroup.get(prop)?.setValue(employee[prop]);
          }
        });
      });
  }

  ngOnDestroy() {
    this.employeeFormGroup.reset();
    this._endSubscription$.next(true);
    this._endSubscription$.complete();
  }
}
