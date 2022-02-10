import { ContentChild, Directive, TemplateRef } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'em-web-layout-sidenav-tpl'
})
export class LayoutSidenavDirective {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @ContentChild(TemplateRef) template!: TemplateRef<any>;
}
