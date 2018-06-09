import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { LoginComponent } from './login/login.component';
import {InviteComponent} from '@app/welcome/invite/invite.component';
import {ForgetComponent} from '@app/welcome/forget/forget.component';


const routes: Routes = [
  Route.withEntryShell([
      { path: 'login', component: LoginComponent, data: { title: extract('Login') } },
      { path: 'invite/:invite', component: InviteComponent, data: { title: extract('Invite') } },
      { path: 'invite', component: InviteComponent, data: { title: extract('Invite') } },
      { path: 'forget', component: ForgetComponent, data: { title: extract('Forget') } },
    ]
  )
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class WelcomeRoutingModule { }
