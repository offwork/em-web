import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutHeaderDirective } from './directives/layout-header.directive';
import { LayoutContainerDirective } from './directives/layout-container.directive';
import { LayoutSidenavDirective } from './directives/layout-sidenav.directive';
import { LayoutHeaderComponent } from './components/layout-header/layout-header.component';
import { LayoutContainerComponent } from './components/layout-container/layout-container.component';
import { LayoutSidenavComponent } from './components/layout-sidenav/layout-sidenav.component';
import { LayoutShellComponent } from './components/layout-shell/layout-shell.component';
import { DesignSystemModule } from '../design-system/design-system.module';



@NgModule({
  declarations: [
    LayoutHeaderDirective,
    LayoutContainerDirective,
    LayoutSidenavDirective,
    LayoutHeaderComponent,
    LayoutContainerComponent,
    LayoutSidenavComponent,
    LayoutShellComponent
  ],
  exports: [
    LayoutHeaderDirective,
    LayoutContainerDirective,
    LayoutSidenavDirective,
    LayoutHeaderComponent,
    LayoutContainerComponent,
    LayoutSidenavComponent,
    LayoutShellComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DesignSystemModule
  ],
})
export class EmLayoutModule { }
