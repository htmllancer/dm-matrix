import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { DashboardComponent } from '@app/dashboard/dashboard.component';
import { CanDeactivateGuard } from '@app/shared/guards/canDeactivate.guard';


const routes: Routes = [
    Route.withShell([
        {
            path: 'dashboard',
            component: DashboardComponent,
            data: { title: extract('Dashboard') },
            canDeactivate: [CanDeactivateGuard]
        }
    ])
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class DashboardRoutingModule { }
