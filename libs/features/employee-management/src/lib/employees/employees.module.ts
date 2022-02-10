import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedUiModule } from '@em-web/shared/ui';
import { ContainerComponent } from './container/container.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { EmployeesResolverService } from './services/employees-resolver.service';
import { EmployeesService } from './services/employees.service';
import { OfficesService } from './services/offices.service';
import { TagsService } from './services/tags.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  { 
    path: '', 
    component: ContainerComponent,
    children: [
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'form',
        component: FormComponent,
        resolve: {
          employee: EmployeesResolverService
        }
      }
    ]
  }
];

@NgModule({
  declarations: [
    ContainerComponent,
    ListComponent,
    FormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedUiModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    EmployeesService,
    EmployeesResolverService,
    OfficesService,
    TagsService,
  ]
})
export class EmployeesModule { }
