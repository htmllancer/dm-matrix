import { Component, OnInit } from '@angular/core';
import {ShellBaseUIClass} from '@app/core/shell/shell.baseUI.class';
import {UIShareService} from '@app/core/shell/shell.ui-service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})

export class ContentComponent extends ShellBaseUIClass implements OnInit {

   isLoading: boolean;

  constructor( uiDataService: UIShareService) {
    super(uiDataService);
    this.isLoading = true;
  }

  public toggleLeftMenu() {
    this.UIData$.next(
        Object.assign(this.UIScope, {leftMenuExpanded: !this.UIScope.leftMenuExpanded})
    );
  }

}
