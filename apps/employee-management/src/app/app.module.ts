import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: '/em' },
      {
        path: 'em',
        loadChildren: () =>
          import('@em-web/features/employee-management').then(
            (m) => m.FeaturesEmployeeManagementModule
          ),
      },
    ]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
