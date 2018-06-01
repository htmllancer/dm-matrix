import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { PortalComponent } from './portal.component';

const routes: Routes = [
  Route.withShell([
    { path: 'portal', component: PortalComponent, data: { title: extract('Portal') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PortalRoutingModule { }
