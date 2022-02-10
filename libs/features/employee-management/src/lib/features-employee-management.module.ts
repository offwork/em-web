import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedUiModule } from '@em-web/shared/ui';
import { FeaturesShellComponent } from './components/features-shell.component';


@NgModule({
  imports: [
    CommonModule,
    SharedUiModule,
    RouterModule.forChild([
      {
        path: '',
        component: FeaturesShellComponent,
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./employees/employees.module').then((m) => m.EmployeesModule),
          },
        ],
      },
    ]),
  ],
  declarations: [FeaturesShellComponent],
})
export class FeaturesEmployeeManagementModule {}
