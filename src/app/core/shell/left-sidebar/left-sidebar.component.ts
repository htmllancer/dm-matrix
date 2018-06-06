import { Component, OnInit} from '@angular/core';
import {UIShareService} from '@app/core/shell/shell.ui-service';
import {ShellBaseUIClass} from '@app/core/shell/shell.baseUI.class';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent extends ShellBaseUIClass {

  constructor(private uiService: UIShareService){
    super(uiService);
  }

  public toggleView() {
    this.UIData$.next(
        Object.assign(this.UIScope, {leftMenuExpanded: !this.UIScope.leftMenuExpanded})
    );
  }

}
