import { Component, OnInit } from '@angular/core';
import {ShellBaseUIClass} from '@app/core/shell/shell.baseUI.class';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})

export class ContentComponent extends ShellBaseUIClass {

  public toggleLeftMenu() {
    const _uiState = this.UIData.value;
    _uiState.leftMenuExpanded = !_uiState.leftMenuExpanded;
    this.UIData.next(_uiState);
  }

}
