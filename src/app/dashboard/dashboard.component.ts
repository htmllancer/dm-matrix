import { Component, OnInit } from '@angular/core';
import { BaseComponentClass} from '@app/shared/baseComponent.class';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends BaseComponentClass  {

  public toggleDirty() {
    this.isDirty = !this.isDirty;
  }

}
