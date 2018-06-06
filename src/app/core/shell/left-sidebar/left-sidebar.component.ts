import { Component, OnInit} from '@angular/core';
import {UIShareService} from '@app/core/shell/shell.ui-service';
import {ShellBaseUIClass} from '@app/core/shell/shell.baseUI.class';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent extends ShellBaseUIClass {

  public toggleView() {
    const _uiState = this.UIData.value;
    _uiState.leftMenuExpanded = !_uiState.leftMenuExpanded;
    this.UIData.next(_uiState);
  }

}
