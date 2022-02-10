/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'em-web-features-shell',
  templateUrl: './features-shell.component.html',
  styleUrls: ['./features-shell.component.scss']
})
export class FeaturesShellComponent implements OnInit {
  title = 'Employee Management';
  navs: any[] = [];
  hideSidenav = false;
  expandedSidenav = false;
  hideMenu = true;
  toggled!: boolean;
  enableRedirect = true;
  color = 'primary';
  logo!: string;
  redirectUrl: string | any[] = ['/'];
  tooltip = 'Employee Management Application';
  profilePhoto!: string;
  userInfo$: any;

  constructor(private _router: Router, private _route: ActivatedRoute) {}

  ngOnInit() {
    this.profilePhoto = './assets/images/Personal-loan.png';
  }

  setState(state: boolean) {
    this.expandedSidenav = state;
    this.toggled = !this.toggled;
  }

  changeLanguage(lang: string) {
    const locale = lang === 'tr' ? 'tr-TR' : 'en-US';
    console.log(locale);
  }

  clickNavigate(path: string) {
    this._router.navigate([path], { relativeTo: this._route })
  }
}
