import { Component, Input, ViewEncapsulation } from '@angular/core';
import { toggle, ToggleSidenav } from '../../animations/sidenav.animation';

@Component({
  selector: 'em-web-layout-sidenav',
  templateUrl: './layout-sidenav.component.html',
  styleUrls: ['./layout-sidenav.component.scss'],
  animations: [toggle],
  encapsulation: ViewEncapsulation.None,
})
export class LayoutSidenavComponent {
  _expanded!: boolean;
  @Input() set expanded(value: boolean) {
    this._expanded = value;
    this.toggleMenu();
  }
  get expanded() {
    return this._expanded;
  }

  toggleSidenav!: ToggleSidenav;

  toggleMenu() {
    this.toggleSidenav = this.expanded
      ? { value: 'expand', params: { width: 360 } }
      : { value: 'narrow', params: { width: 64 } };
  }
}
