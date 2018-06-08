import { Component, OnInit } from '@angular/core';
import { ConfirmationService, Message} from 'primeng/components/common/api';
import { BaseComponentClass } from '@app/shared/baseComponent.class';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  providers: [ConfirmationService]
})
export class ShellComponent extends BaseComponentClass implements OnInit {

  showConfirmation: any;

  constructor(private confirmationService: ConfirmationService) {
    super();
    this.showConfirmation = this.confirmation();
  }

  ngOnInit() {
    console.warn('shell component init');
    this.confirmation();
  }

  public confirmation() {
      this.confirmationService.confirm({
          message: ` Hey All, do you like PrimeNG? ${this.isDirty}`,
          header: 'Greeting',
          icon: 'fa fa-question-circle',
          accept: () => {
              console.warn('accept');
          },
          reject: () => {
              console.warn('reject');
          }
      });
  }


}
