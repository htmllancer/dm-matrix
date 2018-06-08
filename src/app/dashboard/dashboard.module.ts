import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from '@app/dashboard/dashboard-routing.module';


@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    DashboardRoutingModule,
    TranslateModule,
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
