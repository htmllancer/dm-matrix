import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MenuItem} from 'primeng/api';

import { AuthenticationService } from '../../authentication/authentication.service';
import { I18nService } from '../../i18n.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuHidden = true;
  userItems: MenuItem[];

  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private i18nService: I18nService) {
  }

  ngOnInit() {
    this.userItems = [
        {label: 'Edit'},
        {label: 'Logout', command: () => {this.logout()}}
    ];

  }

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  setLanguage(language: string) {
    this.i18nService.language = language;
  }

  logout() {
    this.authenticationService.logout()
      .subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
  }

  get currentLanguage(): string {
    return this.i18nService.language;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }

  get username(): string | null {
    const credentials = this.authenticationService.credentials;
    return credentials ? credentials.username : null;
  }

}
