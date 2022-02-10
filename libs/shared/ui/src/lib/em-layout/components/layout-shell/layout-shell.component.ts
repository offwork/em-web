/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  EventEmitter,
  Output,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { LayoutContainerDirective } from '../../directives/layout-container.directive';
import { LayoutHeaderDirective } from '../../directives/layout-header.directive';
import { LayoutSidenavDirective } from '../../directives/layout-sidenav.directive';
import { LayoutSidenavComponent } from '../layout-sidenav/layout-sidenav.component';

export interface TemplateContext {
  toggleMenu: (value: boolean) => void;
  expanded: boolean;
}

@Component({
  selector: 'em-web-layout-shell',
  templateUrl: './layout-shell.component.html',
  styleUrls: ['./layout-shell.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutShellComponent implements AfterViewInit {
  @ContentChild(LayoutHeaderDirective)
  layoutHeaderDirective!: LayoutHeaderDirective;
  @ContentChild(LayoutSidenavDirective)
  layoutSidenavDirective!: LayoutSidenavDirective;
  @ContentChild(LayoutContainerDirective)
  layoutContainerDirective!: LayoutContainerDirective;

  @ViewChild(LayoutSidenavComponent) layoutSidenav!: LayoutSidenavComponent;
  @ViewChild('emptyTemplate', { static: true }) emptyTemplate: any;

  @Output() expanded = new EventEmitter<boolean>();

  expandedSinenav = false;

  get layoutHeaderTemplate(): TemplateRef<any> {
    return (
      (this.layoutHeaderDirective && this.layoutHeaderDirective.template) ||
      this.emptyTemplate
    );
  }

  get layoutSidenavTemplate(): TemplateRef<any> {
    return (
      (this.layoutSidenavDirective && this.layoutSidenavDirective.template) ||
      this.emptyTemplate
    );
  }

  get layoutContainerTemplate(): TemplateRef<any> {
    return (
      (this.layoutContainerDirective &&
        this.layoutContainerDirective.template) ||
      this.emptyTemplate
    );
  }

  templateContext: TemplateContext = {
    toggleMenu: () => ({}),
    expanded: false,
  };

  toggleMenu(value: boolean) {
    this.templateContext.expanded = value;
    this.expandedSinenav = value;
    this.expanded.emit(value);
    this.layoutSidenav.toggleMenu();
  }

  ngAfterViewInit() {
    this.templateContext.toggleMenu = this.toggleMenu.bind(this);
  }
}
