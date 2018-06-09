import { Component, OnInit } from '@angular/core';
import { BaseComponentClass} from '@app/shared/baseComponent.class';

interface EntityItem {
    name: string;
    type: string;
}

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent extends BaseComponentClass implements OnInit {

    entitiesList: EntityItem[];

    ngOnInit() {

      this.entitiesList = [
        {
          name: '1111',
          type: 'string',
        },
        {
          name: '222',
          type: 'string',
        },
        {
          name: '3333',
          type: 'string'
        }
      ];

    }


}
