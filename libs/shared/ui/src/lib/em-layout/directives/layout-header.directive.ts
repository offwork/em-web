import { ContentChild, Directive, TemplateRef } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'em-web-layout-header-tpl'
})
export class LayoutHeaderDirective {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @ContentChild(TemplateRef) template!: TemplateRef<any>;
}
