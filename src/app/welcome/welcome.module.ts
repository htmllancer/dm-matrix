import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { WelcomeRoutingModule} from './welcome-routing.module';
import { InviteComponent } from './invite/invite.component';
import { ForgetComponent } from './forget/forget.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    NgbModule,
    WelcomeRoutingModule
  ],
  declarations: [
    LoginComponent,
    InviteComponent,
    ForgetComponent
  ]
})
export class WelcomeModule { }
