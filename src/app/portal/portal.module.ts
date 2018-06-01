import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PortalRoutingModule } from './portal-routing.module';
import { PortalComponent } from './portal.component';
import { FormGridComponent } from './components/form-grid/form-grid.component';

@NgModule({
  imports: [
    CommonModule,
    PortalRoutingModule,
    FormsModule
  ],
  declarations: [
    PortalComponent,
    FormGridComponent
  ]
})
export class PortalModule { }
