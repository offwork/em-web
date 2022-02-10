import { NgModule } from '@angular/core';
import { DesignSystemModule } from './design-system/design-system.module';
import { EmLayoutModule } from './em-layout/em-layout.module';

@NgModule({
  exports: [DesignSystemModule, EmLayoutModule],
})
export class SharedUiModule {}
