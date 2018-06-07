import { Component, OnInit } from '@angular/core';

interface MenuItem {
    isActive: boolean;
    name: string;
    subItems: Array<MenuItem>;
    subItemsIsOpen: boolean;
    link: string;
    iconClass: string;
}

interface MainMenu {
    menuItems: Array<MenuItem>;
}

const fakeData = {
  menuItems: [
      {
        isActive: true,
        name: 'Dashboard',
        link: '/dashboard',
        iconClass: 'icon-uniE09B'
      },
      {
        isActive: false,
        name: 'Project Info',
        link: '/project',
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
export class MainMenuComponent implements OnInit {

  scope$: any;

  constructor() {
    this.scope$ = fakeData;
  }

  ngOnInit() {

  }

  toggleSubMenu(node: MenuItem) {
    node.subItemsIsOpen = !node.subItemsIsOpen;
  }

}
