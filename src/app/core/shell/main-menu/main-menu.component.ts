import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationEnd, Router,  Event } from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';


interface MenuItem {
    isActive: boolean;
    name: string;
    subItems?: MenuItem[];
    subItemsIsOpen?: boolean;
    link: string;
    iconClass?: string;
}


const fakeData = {
  menuItems: [
      {
        isActive: false,
        name: 'Dashboard',
        link: '/dashboard',
        iconClass: 'icon-uniE09B'
      },
      {
        isActive: false,
        name: 'Project Info',
        link: '/portal',
        iconClass: 'icon-uniE005',
        subItemsIsOpen: true,
        subItems: [
            {
                isActive: false,
                name: 'Managment',
                link: '/managment'
            },
            {
                isActive: false,
                name: 'Clinical Sites',
                link: '/clinicalSites'
            },
            {
                isActive: false,
                name: 'Regualtory',
                link: '/regulatory'
            }
        ]
      },
      {
        isActive: false,
        name: 'Managment',
        link: '/managment',
        subItemsIsOpen: false,
        iconClass: 'icon-uniE07D',
        subItems: [
            {
                isActive: false,
                name: 'Managment',
                link: '/managment'
            },
            {
                isActive: false,
                name: 'Clinical Sites',
                link: '/clinicalSites'
            },
            {
                isActive: false,
                name: 'Regualtory',
                link: '/regulatory'
            }
        ]
      },
      {
        isActive: false,
        name: 'Clinical Sites',
        link: '/clinicalSites',
        iconClass: 'icon-uniE072',
        subItemsIsOpen: false,
        subItems: [
            {
                isActive: false,
                name: 'Managment',
                link: '/managment'
            },
            {
                isActive: false,
                name: 'Clinical Sites',
                link: '/clinicalSites'
            },
            {
                isActive: false,
                name: 'Regualtory',
                link: '/regulatory'
            }
        ]
      },
      {
        isActive: false,
        name: 'Regualtory',
        link: '/regulatory',
        iconClass: 'icon-uniE093',
        subItemsIsOpen: false,
        subItems: [
            {
                isActive: false,
                name: 'Managment',
                link: '/managment'
            },
            {
                isActive: false,
                name: 'Clinical Sites',
                link: '/clinicalSites'
            },
            {
                isActive: false,
                name: 'Regualtory',
                link: '/regulatory'
            }
        ]
      },
      {
        isActive: false,
        name: 'Organizations',
        link: '/organizations',
        iconClass: 'icon-uniE09C',
        subItemsIsOpen: false,
        subItems: [
            {
                isActive: false,
                name: 'Managment',
                link: '/managment'
            },
            {
                isActive: false,
                name: 'Clinical Sites',
                link: '/clinicalSites'
            },
            {
                isActive: false,
                name: 'Regualtory',
                link: '/regulatory'
            }
        ]
      },
      {
        isActive: false,
        name: 'Analytics',
        link: '/analytics',
        iconClass: 'icon-uniE089',
      }
  ]
};

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit, OnDestroy {

    scope$: Array<MenuItem>;
    routerSubject: any;

    constructor(private router: Router) {
        this.scope$ = fakeData.menuItems;
    }

    ngOnInit() {
        this.toggleActive(this.router.url);
        this.routerSubject = this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationEnd) {
                this.toggleActive(event.urlAfterRedirects);
            }
        });
    }

    ngOnDestroy() {
        this.routerSubject.unsubscribe();
    }

    toggleSubMenu(node: MenuItem) {
        node.subItemsIsOpen = !node.subItemsIsOpen;
    }

    toggleActive(url: string) {
        const _prev = this.scope$.find(item => item.isActive);
        const _current = this.scope$.find(item => item.link === url);
        if (_prev) {
            _prev.isActive = false;
        }

        if (_current) {
            _current.isActive = true;
        }
    }
}