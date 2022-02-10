import { ContentChild, Directive, TemplateRef } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'em-web-layout-container-tpl',
})
export class LayoutContainerDirective {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @ContentChild(TemplateRef) template!: TemplateRef<any>;
}
